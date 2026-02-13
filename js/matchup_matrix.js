/**
 * Matchup Matrix - Interactive Heatmap
 * キャラ相性ヒートマップ（ヒートマップ）
 */

(function () {
  'use strict';

  // DOM Elements
  // DOM Elements
  const matrixTable = document.getElementById('matrix-table');
  const matrixWrapper = document.getElementById('matrix-wrapper');
  const tooltip = document.getElementById('tooltip');
  const winrateFilter = document.getElementById('winrate-filter');
  const zoomSlider = document.getElementById('zoom-slider');
  const zoomValue = document.getElementById('zoom-value');
  const resetBtn = document.getElementById('reset-btn');
  const filterBtn = document.getElementById('filter-btn');
  const modal = document.getElementById('detail-modal');
  const filterModal = document.getElementById('filter-modal');
  const fighterListContainer = document.getElementById('fighter-list');
  const selectAllBtn = document.getElementById('select-all-btn');
  const deselectAllBtn = document.getElementById('deselect-all-btn');
  const applyFilterBtn = document.getElementById('apply-filter-btn');

  // Get fighter list from MATCHUP_DATA
  const fighters = Object.keys(MATCHUP_DATA);

  // State
  let currentZoom = 100;
  let selectedFighters = [...fighters]; // Default: all selected
  let activeFighters = [...fighters]; // Initialize with all fighters

  // Elements for fighter selection
  const closeFilterModalBtn = filterModal.querySelector('.filter-modal-close');

  /**
   * Get color class based on win rate
   */
  function getWinRateClass(winRate) {
    if (winRate < 35) return 'wr-very-low';
    if (winRate < 40) return 'wr-low';
    if (winRate < 45) return 'wr-below-avg';
    if (winRate < 55) return 'wr-even';
    if (winRate < 60) return 'wr-above-avg';
    if (winRate < 65) return 'wr-high';
    return 'wr-very-high';
  }

  /**
   * Get fighter image path
   */
  function getFighterImage(fighterName) {
    return FIGHTER_IMAGES[fighterName] || './img/fighter2/87.おまかせ.jpg';
  }

  /**
   * Get fighter stats page URL
   */
  function getFighterPage(fighterName) {
    return FIGHTER_PAGES ? FIGHTER_PAGES[fighterName] : null;
  }

  /**
   * Build the matrix table
   */
  function buildMatrix() {
    // Clear existing content
    matrixTable.innerHTML = '';

    // Create header row
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    // Corner cell
    const cornerCell = document.createElement('th');
    cornerCell.className = 'corner-cell';
    cornerCell.textContent = '↓vs→';
    headerRow.appendChild(cornerCell);

    // Fighter header cells - Use activeFighters
    activeFighters.forEach((fighter) => {
      const th = document.createElement('th');
      th.dataset.fighter = fighter;
      const img = document.createElement('img');
      img.src = getFighterImage(fighter);
      img.alt = fighter;
      img.title = fighter;
      img.loading = 'lazy';
      const pageUrl = getFighterPage(fighter);
      if (pageUrl) {
        const link = document.createElement('a');
        link.href = pageUrl;
        link.style.display = 'inline-block';
        link.appendChild(img);
        th.appendChild(link);
      } else {
        th.appendChild(img);
      }
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    matrixTable.appendChild(thead);

    // Create body
    const tbody = document.createElement('tbody');

    activeFighters.forEach((fighter1) => {
      const row = document.createElement('tr');

      // Row header
      const rowHeader = document.createElement('th');
      rowHeader.dataset.fighter = fighter1;
      const img = document.createElement('img');
      img.src = getFighterImage(fighter1);
      img.alt = fighter1;
      img.title = fighter1;
      img.loading = 'lazy';
      const pageUrl = getFighterPage(fighter1);
      if (pageUrl) {
        const link = document.createElement('a');
        link.href = pageUrl;
        link.style.display = 'inline-block';
        link.appendChild(img);
        rowHeader.appendChild(link);
      } else {
        rowHeader.appendChild(img);
      }
      row.appendChild(rowHeader);

      // Data cells - Use activeFighters
      activeFighters.forEach((fighter2) => {
        const cell = document.createElement('td');
        cell.dataset.fighter1 = fighter1;
        cell.dataset.fighter2 = fighter2;

        const matchupData = MATCHUP_DATA[fighter1]?.[fighter2];

        if (fighter1 === fighter2) {
          // Diagonal cell
          cell.className = 'diagonal';
          cell.textContent = '—';
        } else if (matchupData) {
          const winRate = matchupData.win_rate;
          cell.textContent = winRate.toFixed(1);
          cell.className = getWinRateClass(winRate);
          cell.dataset.winrate = winRate;
          cell.dataset.battles = matchupData.battles;
        } else {
          cell.textContent = '—';
          cell.className = 'diagonal';
          cell.className += ' text-hidden'; // Ensure text is handled by zoom logic
        }

        row.appendChild(cell);
      });

      tbody.appendChild(row);
    });

    matrixTable.appendChild(tbody);

    // Initial zoom logic application to hide/show text
    handleZoom();

    // Add event listeners
    addCellListeners();
  }

  /**
   * Add event listeners to cells
   */
  function addCellListeners() {
    const cells = matrixTable.querySelectorAll('tbody td:not(.diagonal)');

    cells.forEach((cell) => {
      // Hover events
      cell.addEventListener('mouseenter', handleCellHover);
      cell.addEventListener('mousemove', updateTooltipPosition);
      cell.addEventListener('mouseleave', handleCellLeave);

      // Click event
      cell.addEventListener('click', handleCellClick);
    });
  }

  /**
   * Handle cell hover
   */
  function handleCellHover(e) {
    const cell = e.target;
    const fighter1 = cell.dataset.fighter1;
    const fighter2 = cell.dataset.fighter2;
    const winRate = cell.dataset.winrate;
    const battles = cell.dataset.battles;

    if (!winRate) return;

    // Show tooltip
    tooltip.innerHTML = `
      <div class="fighter-names">${fighter1} vs ${fighter2}</div>
      <div class="winrate">${fighter1}の勝率: ${parseFloat(winRate).toFixed(2)}%</div>
      <div class="battles">対戦数: ${parseInt(battles).toLocaleString()}回</div>
    `;
    tooltip.classList.add('visible');

    // Highlight row and column
    highlightRowAndColumn(fighter1, fighter2);
  }

  /**
   * Update tooltip position
   */
  function updateTooltipPosition(e) {
    const x = e.clientX + 15;
    const y = e.clientY + 15;

    // Keep tooltip within viewport
    const tooltipRect = tooltip.getBoundingClientRect();
    const maxX = window.innerWidth - tooltipRect.width - 10;
    const maxY = window.innerHeight - tooltipRect.height - 10;

    tooltip.style.left = Math.min(x, maxX) + 'px';
    tooltip.style.top = Math.min(y, maxY) + 'px';
  }

  /**
   * Handle cell leave
   */
  function handleCellLeave() {
    tooltip.classList.remove('visible');
    clearHighlights();
  }

  /**
   * Highlight row and column
   */
  function highlightRowAndColumn(fighter1, fighter2) {
    clearHighlights();

    const cells = matrixTable.querySelectorAll('tbody td');
    cells.forEach((cell) => {
      if (cell.dataset.fighter1 === fighter1) {
        cell.classList.add('highlight-row');
      }
      if (cell.dataset.fighter2 === fighter2) {
        cell.classList.add('highlight-col');
      }
    });
  }

  /**
   * Clear all highlights
   */
  function clearHighlights() {
    const highlighted = matrixTable.querySelectorAll(
      '.highlight-row, .highlight-col'
    );
    highlighted.forEach((cell) => {
      cell.classList.remove('highlight-row', 'highlight-col');
    });
  }

  /**
   * Handle cell click - show modal
   */
  function handleCellClick(e) {
    const cell = e.target;
    const fighter1 = cell.dataset.fighter1;
    const fighter2 = cell.dataset.fighter2;
    const winRate = parseFloat(cell.dataset.winrate);
    const battles = parseInt(cell.dataset.battles);

    if (isNaN(winRate)) return;

    // Populate modal
    document.getElementById('modal-title').textContent =
      `${fighter1} vs ${fighter2}`;
    document.getElementById('modal-fighter1-img').src =
      getFighterImage(fighter1);
    document.getElementById('modal-fighter2-img').src =
      getFighterImage(fighter2);

    // Fighter 1 name with link
    const name1El = document.getElementById('modal-fighter1-name');
    const page1 = getFighterPage(fighter1);
    if (page1) {
      name1El.innerHTML = `<a href="${page1}" style="color: inherit; text-decoration: underline;">${fighter1}</a>`;
    } else {
      name1El.textContent = fighter1;
    }

    // Fighter 2 name with link
    const name2El = document.getElementById('modal-fighter2-name');
    const page2 = getFighterPage(fighter2);
    if (page2) {
      name2El.innerHTML = `<a href="${page2}" style="color: inherit; text-decoration: underline;">${fighter2}</a>`;
    } else {
      name2El.textContent = fighter2;
    }

    // Fighter image links
    const img1 = document.getElementById('modal-fighter1-img');
    const img2 = document.getElementById('modal-fighter2-img');
    if (page1) {
      img1.style.cursor = 'pointer';
      img1.onclick = () => {
        window.location.href = page1;
      };
    }
    if (page2) {
      img2.style.cursor = 'pointer';
      img2.onclick = () => {
        window.location.href = page2;
      };
    }

    document.getElementById('modal-winrate').textContent =
      winRate.toFixed(2) + '%';
    document.getElementById('modal-battles').textContent =
      battles.toLocaleString() + '回';
    document.getElementById('modal-winrate-bar').style.width = winRate + '%';

    // Show modal
    modal.style.display = 'flex';
  }

  /**
   * Close modal
   */
  function closeModal() {
    modal.style.display = 'none';
  }

  /**
   * Handle win rate filter
   */
  function handleFilter() {
    const filter = winrateFilter.value;
    const cells = matrixTable.querySelectorAll('tbody td:not(.diagonal)');

    cells.forEach((cell) => {
      const winRate = parseFloat(cell.dataset.winrate);

      if (isNaN(winRate)) {
        cell.classList.add('filtered-out');
        return;
      }

      let show = true;
      switch (filter) {
        case 'disadvantage':
          show = winRate < 45;
          break;
        case 'advantage':
          show = winRate >= 55;
          break;
        case 'even':
          show = winRate >= 45 && winRate < 55;
          break;
        default:
          show = true;
      }

      cell.classList.toggle('filtered-out', !show);
    });
  }

  /**
   * Handle zoom change
   */
  function handleZoom() {
    currentZoom = parseInt(zoomSlider.value);
    zoomValue.textContent = currentZoom + '%';

    // Instead of transform scale, adjust the font size and cell padding/size
    // Base font size approx 12px at 100%
    const newFontSize = Math.max(5, 12 * (currentZoom / 100));
    // Allow going down to 4px minimum if zoom is low enough
    const newCellSize = Math.max(4, 40 * (currentZoom / 100));

    matrixTable.style.fontSize = `${newFontSize}px`;

    // Hide text if zoom is below 60%
    if (currentZoom < 60) {
      matrixTable.classList.add('zoom-text-hidden');
      const cells = matrixTable.querySelectorAll('td');
      cells.forEach((cell) => cell.classList.add('text-hidden'));
    } else {
      matrixTable.classList.remove('zoom-text-hidden');
      const cells = matrixTable.querySelectorAll('td');
      cells.forEach((cell) => cell.classList.remove('text-hidden'));
    }

    // Update CSS variables if possible, or iterate cells (less efficient)
    // Here we will set styles on the table that CSS can use, or update classes
    // Let's modify the css to use variables or just inline style for now for simplicity on the table
    const style = document.createElement('style');
    style.id = 'zoom-style';
    style.innerHTML = `
      .matrix-table th, .matrix-table td {
        width: ${newCellSize}px !important;
        min-width: ${newCellSize}px !important;
        max-width: ${newCellSize}px !important;
        height: ${newCellSize}px !important;
        min-height: ${newCellSize}px !important;
        max-height: ${newCellSize}px !important;
        padding: ${0}px !important; /* Remove padding */
        box-sizing: border-box !important;
      }
      .matrix-table th img {
        width: ${Math.max(4, 32 * (currentZoom / 100))}px !important;
        height: ${Math.max(4, 32 * (currentZoom / 100))}px !important;
        object-fit: cover !important;
      }
    `;

    const existingStyle = document.getElementById('zoom-style');
    if (existingStyle) {
      existingStyle.replaceWith(style);
    } else {
      document.head.appendChild(style);
    }

    // Remove transform
    matrixTable.style.transform = '';
    matrixTable.style.transformOrigin = '';
  }

  /**
   * Reset all filters and zoom
   */
  function handleReset() {
    winrateFilter.value = 'all';
    zoomSlider.value = 100;
    currentZoom = 100;
    zoomValue.textContent = '100%';

    // Reset selection to all
    activeFighters = [...fighters];

    matrixTable.style.transform = '';
    clearHighlights();

    // Rebuild matrix with all fighters
    buildMatrix();

    const cells = matrixTable.querySelectorAll('tbody td');
    cells.forEach((cell) => {
      cell.classList.remove('filtered-out');
    });
  }

  /**
   * Initialize modal events
   */
  function initModalEvents() {
    // Detail Modal
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Filter Modal
    const filterOverlay = filterModal.querySelector('.modal-overlay');

    closeFilterModalBtn.addEventListener('click', closeFilterModal);
    filterOverlay.addEventListener('click', closeFilterModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (modal.style.display === 'flex') closeModal();
        if (filterModal.style.display === 'flex') closeFilterModal();
      }
    });
  }

  // --- Fighter Selection Modal Logic ---

  function openFilterModal() {
    populateFighterCheckboxes();
    filterModal.style.display = 'flex';
  }

  function closeFilterModal() {
    filterModal.style.display = 'none';
  }

  function populateFighterCheckboxes() {
    fighterListContainer.innerHTML = '';

    fighters.forEach((fighter) => {
      const isChecked = selectedFighters.includes(fighter);

      const item = document.createElement('div');
      item.className = 'checkbox-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `fighter-${fighter}`;
      checkbox.value = fighter;
      checkbox.checked = isChecked;

      const label = document.createElement('label');
      label.htmlFor = `fighter-${fighter}`;
      label.className = 'fighter-label';
      label.textContent = fighter;

      // Allow clicking the wrapper to toggle
      item.addEventListener('click', (e) => {
        if (e.target !== checkbox && e.target !== label) {
          checkbox.checked = !checkbox.checked;
        }
      });

      item.appendChild(checkbox);
      item.appendChild(label);
      fighterListContainer.appendChild(item);
    });
  }

  function handleSelectAll() {
    const checkboxes = fighterListContainer.querySelectorAll(
      'input[type="checkbox"]'
    );
    checkboxes.forEach((cb) => (cb.checked = true));
  }

  function handleDeselectAll() {
    const checkboxes = fighterListContainer.querySelectorAll(
      'input[type="checkbox"]'
    );
    checkboxes.forEach((cb) => (cb.checked = false));
  }

  function applyFilter() {
    const checkboxes = fighterListContainer.querySelectorAll(
      'input[type="checkbox"]'
    );
    const newSelection = [];

    checkboxes.forEach((cb) => {
      if (cb.checked) {
        newSelection.push(cb.value);
      }
    });

    if (newSelection.length === 0) {
      alert('少なくとも1体のファイターを選択してください。');
      return;
    }

    // Sort selected based on original fighters order
    selectedFighters = fighters.filter((f) => newSelection.includes(f));
    activeFighters = [...selectedFighters];

    buildMatrix();
    closeFilterModal();
  }

  /**
   * Initialize
   */
  function init() {
    console.log(
      'Matchup Matrix: Initializing with',
      fighters.length,
      'fighters'
    );

    buildMatrix();
    initModalEvents();

    // Event listeners for controls
    winrateFilter.addEventListener('change', handleFilter);
    zoomSlider.addEventListener('input', handleZoom);
    resetBtn.addEventListener('click', handleReset);

    // Event listeners for fighter selection
    filterBtn.addEventListener('click', openFilterModal);
    selectAllBtn.addEventListener('click', handleSelectAll);
    deselectAllBtn.addEventListener('click', handleDeselectAll);
    applyFilterBtn.addEventListener('click', applyFilter);

    console.log('Matchup Matrix: Ready!');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
