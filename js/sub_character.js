document.addEventListener('DOMContentLoaded', function() {
    const mainCharSelect = document.getElementById('main-char-select');
    const resultsArea = document.getElementById('results-area');
    const weakMatchupsList = document.getElementById('weak-matchups-list');
    const recommendedSubsList = document.getElementById('recommended-subs-list');
    const noWeaknessMsg = document.getElementById('no-weakness-msg');
    const noRecommendationMsg = document.getElementById('no-recommendation-msg');
    const selectedCharDisplay = document.getElementById('selected-char-display');
    const coverageModal = document.getElementById('coverage-modal');
    const modalTitle = document.getElementById('modal-title');
    const coverageList = document.getElementById('coverage-list');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    let matchupData = {};
    let currentCoverageData = {}; // Store coverage details for each sub
    let currentRecommendedSubs = []; // Store current recommendations for sorting
    let currentMainChar = '';

    // Character name toURL mapping for chara pages
    const CHAR_TO_URL = {
        "マリオ": "./chara/01.mario.html",
        "ドンキーコング": "./chara/02.donkey_kong.html",
        "リンク": "./chara/03.link.html",
        "サムス_ダークサムス": "./chara/04.samus_dark_samus.html",
        "ヨッシー": "./chara/06.yoshi.html",
        "カービィ": "./chara/07.kirby.html",
        "フォックス": "./chara/08.fox.html",
        "ピカチュウ": "./chara/09.pikachu.html",
        "ルイージ": "./chara/10.luigi.html",
        "ネス": "./chara/11.ness.html",
        "キャプテン・ファルコン": "./chara/12.captain_falcon.html",
        "プリン": "./chara/13.jigglypuff.html",
        "ピーチ_デイジー": "./chara/14.peach_daisy.html",
        "クッパ": "./chara/16.bowser.html",
        "アイスクライマー": "./chara/17.ice_climber.html",
        "シーク": "./chara/18.sheik.html",
        "ゼルダ": "./chara/19.zelda.html",
        "ドクターマリオ": "./chara/20.dr_mario.html",
        "ピチュー": "./chara/21.pichu.html",
        "ファルコ": "./chara/22.falco.html",
        "マルス": "./chara/23.marth.html",
        "ルキナ": "./chara/24.lucina.html",
        "こどもリンク": "./chara/25.young_link.html",
        "ガノンドロフ": "./chara/26.ganondorf.html",
        "ミュウツー": "./chara/27.mewtwo.html",
        "ロイ": "./chara/28.roy.html",
        "クロム": "./chara/29.chrom.html",
        "Mr.ゲーム&ウォッチ": "./chara/30.mr_game_and_watch.html",
        "メタナイト": "./chara/31.metaknight.html",
        "ピット_ブラックピット": "./chara/32.pit_dark_pit.html",
        "ゼロスーツサムス": "./chara/34.zero_suit_samus.html",
        "ワリオ": "./chara/35.wario.html",
        "スネーク": "./chara/36.snake.html",
        "アイク": "./chara/37.ike.html",
        "ポケモントレーナー": "./chara/38.pokemon_trainer.html",
        "ディディーコング": "./chara/39.diddy_kong.html",
        "リュカ": "./chara/40.lucas.html",
        "ソニック": "./chara/41.sonic.html",
        "デデデ": "./chara/42.king_dedede.html",
        "ピクミン＆オリマー": "./chara/43.olimar.html",
        "ルカリオ": "./chara/44.lucario.html",
        "ロボット": "./chara/45.rob.html",
        "トゥーンリンク": "./chara/46.toon_link.html",
        "ウルフ": "./chara/47.wolf.html",
        "むらびと": "./chara/48.villager.html",
        "ロックマン": "./chara/49.megaman.html",
        "Wii Fit トレーナー": "./chara/50.wii_fit_trainer.html",
        "ロゼッタ＆チコ": "./chara/51.rosalina_luma.html",
        "リトルマック": "./chara/52.little_mac.html",
        "ゲッコウガ": "./chara/53.greninja.html",
        "格闘Mii": "./chara/54.mii_brawler.html",
        "剣術Mii": "./chara/55.mii_swordfighter.html",
        "射撃Mii": "./chara/56.mii_gunner.html",
        "パルテナ": "./chara/57.palutena.html",
        "パックマン": "./chara/58.pacman.html",
        "ルフレ": "./chara/59.robin.html",
        "シュルク": "./chara/60.shulk.html",
        "クッパJr.": "./chara/61.bowser_jr.html",
        "ダックハント": "./chara/62.duck_hunt.html",
        "リュウ": "./chara/63.ryu.html",
        "ケン": "./chara/64.ken.html",
        "クラウド": "./chara/65.cloud.html",
        "カムイ": "./chara/66.corrin.html",
        "ベヨネッタ": "./chara/67.bayonetta.html",
        "インクリング": "./chara/68.inkling.html",
        "リドリー": "./chara/69.ridley.html",
        "シモン_リヒター": "./chara/70.simon_richter.html",
        "キングクルール": "./chara/72.king_k_rool.html",
        "しずえ": "./chara/73.isabelle.html",
        "ガオガエン": "./chara/74.incineroar.html",
        "パックンフラワー": "./chara/75.piranha_plant.html",
        "ジョーカー": "./chara/76.joker.html",
        "勇者": "./chara/77.hero.html",
        "バンジョー＆カズーイ": "./chara/78.banjo_and_kazooie.html",
        "テリー": "./chara/79.terry.html",
        "ベレトス": "./chara/80.byleth.html",
        "ミェンミェン": "./chara/81.minmin.html",
        "スティーブ": "./chara/82.steve.html",
        "セフィロス": "./chara/83.sephiroth.html",
        "ホムヒカ": "./chara/84.homura.html",
        "カズヤ": "./chara/85.kazuya.html",
        "ソラ": "./chara/86.sora.html"
    }

    // Load data
    if (typeof MATCHUP_DATA !== 'undefined') {
        matchupData = MATCHUP_DATA;
        populateCharSelect();
        checkURLParameters();
    } else {
        console.error('MATCHUP_DATA not found. Make sure matchup_data.js is loaded.');
    }

    // Check URL parameters for auto-selection
    function checkURLParameters() {
        const params = new URLSearchParams(window.location.search);
        const charParam = params.get('char');
        if (charParam && matchupData[charParam]) {
            mainCharSelect.value = charParam;
            mainCharSelect.dispatchEvent(new Event('change'));
        }
    }

    function populateCharSelect() {
        let chars = [];
        // Use keys from FIGHTER_IMAGES for correct order (ID sorted)
        if (typeof FIGHTER_IMAGES !== 'undefined') {
             // Filter to only include chars that exist in matchupData
             chars = Object.keys(FIGHTER_IMAGES).filter(char => matchupData[char]);
             
             // Also add any chars in matchupData that might be missing from FIGHTER_IMAGES (just in case)
             const extraChars = Object.keys(matchupData).filter(char => !FIGHTER_IMAGES[char]);
             chars = chars.concat(extraChars.sort());
        } else {
             // Fallback if FIGHTER_IMAGES is not loaded
             chars = Object.keys(matchupData).sort();
        }

        chars.forEach(char => {
            const option = document.createElement('option');
            option.value = char;
            option.textContent = char;
            mainCharSelect.appendChild(option);
        });
    }

    mainCharSelect.addEventListener('change', function() {
        const selectedMain = this.value;
        currentMainChar = selectedMain;

        // Update Image
        if (selectedMain) {
            const imgPath = getImagePath(selectedMain);
            selectedCharDisplay.innerHTML = `
                <div class="char-card selected-card">
                    <img src="${imgPath}" alt="${selectedMain}" onerror="this.src='./img/common/no_image.png'">
                    <div class="name">${selectedMain}</div>
                </div>
            `;
            selectedCharDisplay.classList.add('active');
        } else {
            selectedCharDisplay.classList.remove('active');
        }

        if (!selectedMain) {
            resultsArea.style.display = 'none';
            return;
        }

        analyzeMatchups(selectedMain);
    });

    function getImagePath(charName) {
        if (typeof FIGHTER_IMAGES !== 'undefined' && FIGHTER_IMAGES[charName]) {
            return FIGHTER_IMAGES[charName];
        }
        // Fallback
        return './img/common/no_image.png';
    }

    function getCharURL(charName) {
        return CHAR_TO_URL[charName] || '#';
    }



    function createCharCard(charName, statLabel, statValue, isGood) {
        const card = document.createElement('div');
        card.className = 'char-card';
        
        const imgPath = getImagePath(charName);
        
        card.innerHTML = `
            <img src="${imgPath}" alt="${charName}" onerror="this.src='./img/common/no_image.png'">
            <div class="name">${charName}</div>
            <div class="stat">${statLabel}</div>
            <div class="stat-value" style="color: ${isGood ? '#2ecc71' : '#e74c3c'} !important">${statValue}</div>
        `;
        return card;
    }

    function analyzeMatchups(mainChar) {
        resultsArea.style.display = 'flex';
        weakMatchupsList.innerHTML = '';
        recommendedSubsList.innerHTML = '';
        noWeaknessMsg.style.display = 'none';
        noRecommendationMsg.style.display = 'none';
        
        // Clear any existing show-more button in the result section
        const existingBtn = resultsArea.querySelector('.show-more-btn');
        if (existingBtn) {
            existingBtn.remove();
        }

        currentCoverageData = {}; // Reset coverage data

        // 1. Identify Weak Matchups (Win Rate < 45%)
        const opponents = matchupData[mainChar];
        const weakOpponents = [];

        for (const [opponent, stats] of Object.entries(opponents)) {
            if (stats.win_rate < 45.0) {
                weakOpponents.push({
                    name: opponent,
                    win_rate: stats.win_rate
                });
            }
        }

        // Sort by lowest win rate
        weakOpponents.sort((a, b) => a.win_rate - b.win_rate);

        if (weakOpponents.length === 0) {
            noWeaknessMsg.style.display = 'block';
        } else {
            // Display weak matchups as cards with links
            // Display weak matchups as cards with links
            weakOpponents.forEach((opp, index) => {
                const card = createCharCard(opp.name, '勝率', `${opp.win_rate.toFixed(2)}%`, false);
                card.style.cursor = 'pointer';
                
                // If index >= 10, hide initially
                if (index >= 10) {
                    card.style.display = 'none';
                    card.classList.add('extra-weak-opp');
                }

                // Add detail link (still keep it for direct navigation if needed, or maybe just remove it if the card click is the main action. 
                // The user asked to click the icon/card. Let's make the whole card clickable for the modal, and dragging the link might be hard.
                // Actually the previous code had a link to the chara page. Let's keep the link but make the card background click open the modal, except when the link is clicked.
                
                const detailLink = document.createElement('a');
                detailLink.href = getCharURL(opp.name);
                detailLink.className = 'char-detail-link';
                detailLink.textContent = '詳細';
                detailLink.style.cssText = 'font-size: 0.7em; color: #3498db; margin-top: 5px; display: block;';
                
                card.addEventListener('click', (e) => {
                    // If not clicking the link, show the modal
                    if (!e.target.classList.contains('char-detail-link')) {
                        showWeaknessDetail(opp.name);
                    }
                });

                card.appendChild(detailLink);
                weakMatchupsList.appendChild(card);
            });

            // Add Show More button if needed
            if (weakOpponents.length > 10) {
                const showMoreBtn = document.createElement('button');
                showMoreBtn.textContent = 'さらに表示';
                showMoreBtn.className = 'show-more-btn';
                showMoreBtn.style.cssText = `
                    display: block;
                    margin: 10px auto; /* Reduced from 20px */
                    padding: 5px 15px; /* Smaller padding */
                    background-color: #3498db;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 12px; /* Smaller font */
                `;
                
                let isExpanded = false;
                showMoreBtn.addEventListener('click', function() {
                    const hiddenCards = document.querySelectorAll('.extra-weak-opp');
                    if (!isExpanded) {
                        // Expand
                        hiddenCards.forEach(card => card.style.display = ''); // Reset display to make visible
                        this.textContent = '閉じる';
                        isExpanded = true;
                    } else {
                        // Collapse
                        hiddenCards.forEach(card => card.style.display = 'none');
                        this.textContent = 'さらに表示';
                        isExpanded = false;
                        
                        // Scroll back to button position or top of list if needed? 
                        // For now just collapse is fine.
                    }
                });

                weakMatchupsList.parentNode.appendChild(showMoreBtn); // Append after the list (result-section)
            }
        }

        // 2. Find Best Subs
        if (weakOpponents.length === 0) return;

        const subScores = {};
        const allChars = Object.keys(matchupData);
        
        allChars.forEach(subChar => {
            if (subChar === mainChar) return; // Don't recommend self

            let score = 0;
            let coveredCount = 0;
            let totalWinRateDiff = 0;

            weakOpponents.forEach(weakOpp => {
                const subVsWeak = matchupData[subChar][weakOpp.name];
                
                if (subVsWeak && subVsWeak.win_rate >= 55.0) {
                    score += 10; // Base points for covering a weakness
                    score += (subVsWeak.win_rate - 50); // Bonus for higher win rate
                    coveredCount++;
                    totalWinRateDiff += subVsWeak.win_rate;
                }
            });

            if (coveredCount > 0) {
                subScores[subChar] = {
                    name: subChar,
                    score: score,
                    coveredCount: coveredCount,
                    avgWinRate: totalWinRateDiff / coveredCount
                };
            }
        });

        // Convert to array and sort
        const recommendedSubs = Object.values(subScores).sort((a, b) => {
            // Priority 1: Coverage Count (Desc)
            if (b.coveredCount !== a.coveredCount) {
                return b.coveredCount - a.coveredCount;
            }
            // Priority 2: Score/Quality (Desc)
            return b.score - a.score;
        });

        // Store and display recommendations
        currentRecommendedSubs = recommendedSubs;
        
        // Store coverage details for all subs
        recommendedSubs.forEach(sub => {
            const coverageDetails = [];
            weakOpponents.forEach(weakOpp => {
                const subVsWeak = matchupData[sub.name][weakOpp.name];
                if (subVsWeak && subVsWeak.win_rate >= 55.0) {
                    coverageDetails.push({
                        name: weakOpp.name,
                        win_rate: subVsWeak.win_rate
                    });
                }
            });
            
            // Sort by win rate descending
            coverageDetails.sort((a, b) => b.win_rate - a.win_rate);
            currentCoverageData[sub.name] = coverageDetails;
        });

        // Display top 10 recommendations
        if (recommendedSubs.length === 0) {
            noRecommendationMsg.style.display = 'block';
        } else {
            recommendedSubs.slice(0, 5).forEach(sub => {
                const card = createCharCard(sub.name, 'カバー数', `${sub.coveredCount}/${weakOpponents.length}`, true);
                card.style.cursor = 'pointer';
                
                // Add detail link
                const detailLink = document.createElement('a');
                detailLink.href = getCharURL(sub.name);
                detailLink.className = 'char-detail-link';
                detailLink.textContent = '詳細';
                detailLink.style.cssText = 'font-size: 0.7em; color: #3498db; margin-top: 5px; display: block;';
                
                // Card click shows modal, link click goes to chara page
                card.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('char-detail-link')) {
                        showCoverageModal(sub.name);
                    }
                });
                
                card.appendChild(detailLink);
                recommendedSubsList.appendChild(card);
            });
        }
        // Update Share Button
        const shareBtn = document.getElementById('share-btn');
        if (shareBtn) {
            let tweetText = `【スマアナ サブ補完チェッカー】\nメイン: ${mainChar}\n`;
            
            if (weakOpponents.length === 0) {
                tweetText += `苦手な相手はいません！最強です！\n`;
            } else {
                tweetText += `苦手: ${weakOpponents.slice(0, 3).map(o => o.name).join(', ')}${weakOpponents.length > 3 ? '...' : ''}\n`;
            }

            if (recommendedSubs.length > 0) {
                tweetText += `おすすめサブ: ${recommendedSubs.slice(0, 3).map(s => s.name).join(', ')}\n`;
            } else {
                tweetText += `おすすめサブは見つかりませんでした...\n`;
            }

            tweetText += `#スマアナ #スマブラSP\n`;
            tweetText += `https://pheasantzelda.github.io/sub_character.html`;

            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
            shareBtn.href = twitterUrl;
        }
    }

    // Modal functions
    function showCoverageModal(subCharName) {
        const coverageDetails = currentCoverageData[subCharName];
        if (!coverageDetails || coverageDetails.length === 0) return;

        modalTitle.textContent = `${subCharName} がカバーする相手`;
        coverageList.innerHTML = '';

        coverageDetails.forEach(coverage => {
            const card = createCharCard(
                coverage.name,
                `${subCharName} の勝率`,
                `${coverage.win_rate.toFixed(2)}%`,
                true
            );

             // Add detail link
             const detailLink = document.createElement('a');
             detailLink.href = getCharURL(coverage.name);
             detailLink.className = 'char-detail-link';
             detailLink.textContent = '詳細';
             detailLink.style.cssText = 'font-size: 0.7em; color: #3498db; margin-top: 5px; display: block;';
             
             card.appendChild(detailLink);
            coverageList.appendChild(card);
        });

        coverageModal.style.display = 'flex';
    }

    function showWeaknessDetail(charName) {
        // Find opponents that this char supports/beats (Win Rate > 55% or highest)
        // We need to look at matchupData[charName]
        if (!matchupData[charName]) return;

        const opponents = matchupData[charName];
        const strongMatchups = [];

        for (const [opp, stats] of Object.entries(opponents)) {
            // "Strong" means high win rate for this char
            if (stats.win_rate >= 55.0) {
                strongMatchups.push({
                    name: opp,
                    win_rate: stats.win_rate
                });
            }
        }

        // Sort by win rate descending
        strongMatchups.sort((a, b) => b.win_rate - a.win_rate);

        modalTitle.textContent = `${charName} の得意な相手 (有利)`;
        coverageList.innerHTML = '';

        if (strongMatchups.length === 0) {
             const msg = document.createElement('p');
             msg.textContent = '特筆して有利な相手はいません (データの偏りの可能性があります)';
             coverageList.appendChild(msg);
        } else {
            strongMatchups.forEach(m => {
                const card = createCharCard(
                    m.name,
                    `${charName} の勝率`,
                    `${m.win_rate.toFixed(2)}%`,
                    true
                );

                // Add detail link
                const detailLink = document.createElement('a');
                detailLink.href = getCharURL(m.name);
                detailLink.className = 'char-detail-link';
                detailLink.textContent = '詳細';
                detailLink.style.cssText = 'font-size: 0.7em; color: #3498db; margin-top: 5px; display: block;';

                card.appendChild(detailLink);
                coverageList.appendChild(card);
            });
        }
        
        coverageModal.style.display = 'flex';
    }

    function closeCoverageModal() {
        coverageModal.style.display = 'none';
    }

    // Modal event listeners
    if (modalClose) {
        modalClose.addEventListener('click', closeCoverageModal);
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeCoverageModal);
    }
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && coverageModal.style.display === 'flex') {
            closeCoverageModal();
        }
    });
});
