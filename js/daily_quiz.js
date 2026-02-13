document.addEventListener('DOMContentLoaded', function () {
  const quizContainer = document.getElementById('daily-quiz-container');
  if (!quizContainer) return;

  // Quiz Data
  const quizData = [
    {
        "question": "ガノンドロフの魔人拳、アーマーが付くのは？",
        "options": [
            "地上・空中ともに付く",
            "地上のみ付く",
            "空中のみ付く",
            "付かない"
        ],
        "answer": 1
    },
    {
        "question": "カービィがコピー能力を捨てるアピールは？",
        "options": [
            "上アピール",
            "横アピール",
            "下アピール",
            "ジャンプボタン長押し"
        ],
        "answer": 0
    },
    {
        "question": "スネークの手榴弾（NB）が爆発するまでの時間は？",
        "options": [
            "2秒",
            "2.5秒",
            "3秒",
            "4秒"
        ],
        "answer": 1
    },
    {
        "question": "Mr.ゲーム&ウォッチの「ジャッジ」、9が出た時の効果は？",
        "options": [
            "凍結",
            "埋まり",
            "強力なふっとばし",
            "回復"
        ],
        "answer": 2
    },
    {
        "question": "ソニックの移動速度は全ファイター中何位？",
        "options": [
            "1位",
            "2位",
            "3位",
            "5位"
        ],
        "answer": 0
    },
    {
        "question": "上Bダメージが一番高い",
        "options": [
            "ホムラ",
            "セフィロス",
            "ガオガエン",
            "ルイージ"
        ],
        "answer": 3
    },
    {
        "question": "プリンで無敵がある必殺技はどか",
        "options": [
            "NB",
            "上B",
            "下B",
            "横B"
        ],
        "answer": 2
    },
    {
        "question": "リトルマックの空中技で唯一300%で撃墜出来ないのはどれでしょう？",
        "options": [
            "空上",
            "空前",
            "空下",
            "空後"
        ],
        "answer": 2
    },
    {
        "question": "カービィが食べると回復するアイテムは次のうちどれ？",
        "options": [
            "ボム兵",
            "ダックハントの缶",
            "ダークサムスNB",
            "デデデ横B"
        ],
        "answer": 2
    },
    {
        "question": "カズヤの空下の技名は？",
        "options": [
            "雷神拳",
            "空斬脚",
            "鬼蹴り",
            "破砕蹴"
        ],
        "answer": 3
    },
    {
        "question": "しゃがみ歩きがあるキャラは誰？",
        "options": [
            "ドンキー",
            "リドリー",
            "カービィ",
            "ソラ"
        ],
        "answer": 3
    },
    {
        "question": "キンクルのメテオでない技はどれか",
        "options": [
            "空後",
            "下スマッシュ",
            "空下",
            "上スマッシュ"
        ],
        "answer": 1
    },
    {
        "question": "次のステージのうち、0%から即死するギミックがあるステージはどれ?",
        "options": [
            "ゲーマー",
            "ワイリー基地",
            "洞窟大作戦",
            "とある星"
        ],
        "answer": 3
    },
    {
        "question": "回避上がりの飛距離が一番短いファイタはどのファイタ？",
        "options": [
            "フシギソウ",
            "ゼニガメ",
            "ガノンドロフ",
            "リザードン"
        ],
        "answer": 1
    },
    {
        "question": "この中で一番空Nのダメージが高いファイターは？",
        "options": [
            "ネス",
            "ドンキーコング",
            "ピーチ/デイジー",
            "カズヤ"
        ],
        "answer": 2
    },
    {
        "question": "この中で一番全体Fが短い空前は?",
        "options": [
            "マルス",
            "スティーブ",
            "プリン",
            "シーク"
        ],
        "answer": 1
    },
    {
        "question": "この中で一番全体Fが短い空後は？",
        "options": [
            "インクリング",
            "ガノンドロフ",
            "ベヨネッタ",
            "マルス"
        ],
        "answer": 2
    },
    {
        "question": "一番発生の上スマの発生が遅いファイターは？",
        "options": [
            "パルテナ",
            "Mr.ゲーム&ウォッチ",
            "ガノンドロフ",
            "プリン"
        ],
        "answer": 1
    },
    {
        "question": "通常空中回避の発生が3Fのファイタはどのファイタか？",
        "options": [
            "カービィ",
            "リトルマック",
            "プリン",
            "ゲッコウガ"
        ],
        "answer": 0
    },
    {
        "question": "崖放し反転NBキャンセルができるファイターはどのファイターか？",
        "options": [
            "サムス",
            "パックマン",
            "リトルマック",
            "剣術mii"
        ],
        "answer": 1
    },
    {
        "question": "この中でメテオがない技は？",
        "options": [
            "キャノンジャンプキック",
            "ロケット下突き",
            "瞬発百裂キック",
            "ボトムシュート"
        ],
        "answer": 3
    },
    {
        "question": "飛び道具があるファイターはどのファイターか（反射される技）",
        "options": [
            "メタナイト",
            "カービィ",
            "アイク",
            "ガノンドロフ"
        ],
        "answer": 1
    },
    {
        "question": "身長が1番低いファイターはどれか",
        "options": [
            "スネーク",
            "プリン",
            "ピカチュウ",
            "カービィ"
        ],
        "answer": 3
    },
    {
        "question": "1F暴れが無いキャラ",
        "options": [
            "ゼロスーツサムス",
            "ルイージ",
            "プリン",
            "ヨッシー"
        ],
        "answer": 0
    },
    {
        "question": "カービィでMiiファイター(格闘、剣術、射撃)をコピーしたとき、カービィが使えないNBはどれか?",
        "options": [
            "ガンナーチャージ",
            "鉄球投げ",
            "トルネードショット",
            "ラピッドショット"
        ],
        "answer": 3
    },
    {
        "question": "反射倍率が一番大きいのはどのファイターか？",
        "options": [
            "ピット、ブラックピットの横必殺",
            "ドクターマリオの横必殺",
            "マリオの横必殺",
            "ミューツーの横必殺"
        ],
        "answer": 1
    },
    {
        "question": "アピールで攻撃できるファイターはどのファイターか？",
        "options": [
            "ゲッコウガ",
            "ガノンドロフ",
            "ロイ",
            "アイク"
        ],
        "answer": 0
    },
    {
        "question": "壁ジャンプができないファイタはどのファイタか？",
        "options": [
            "トゥーンリンク",
            "ドクターマリオ",
            "しずえ",
            "射撃mii"
        ],
        "answer": 2
    },
    {
        "question": "横Bにスーパーアーマーがついていないのはどのファイターか？",
        "options": [
            "カズヤ",
            "カービィ",
            "ドンキーコング",
            "ガノンドロフ"
        ],
        "answer": 0
    },
    {
        "question": "壁ジャンプができるのはどのファイターか？",
        "options": [
            "キンクル",
            "クラウド",
            "カービィ",
            "Mii(格闘）"
        ],
        "answer": 1
    },
    {
        "question": "この中で空前メテオが\"出来ない\"キャラは？",
        "options": [
            "Wii Fit トレーナー",
            "スティーブ",
            "クラウド",
            "ドクターマリオ"
        ],
        "answer": 3
    },
    {
        "question": "この中でしゃがみ歩き出来ないキャラは？",
        "options": [
            "マリオ",
            "ワリオ",
            "ルイージ",
            "クッパ"
        ],
        "answer": 0
    },
    {
        "question": "一番重いファイターは？",
        "options": [
            "バンジョー＆カズーイ",
            "シュルク",
            "ケン",
            "ミュウツー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "一番軽いファイターは？",
        "options": [
            "シーク",
            "ベヨネッタ",
            "ケン",
            "ガオガエン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "一番軽いファイターは？",
        "options": [
            "カービィ",
            "ネス",
            "リドリー",
            "ヨッシー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "シールドサイズの数値が一番大きいファイターは？",
        "options": [
            "アイスクライマー",
            "しずえ",
            "シーク",
            "フシギソウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "シールドサイズの数値が一番大きいファイターは？",
        "options": [
            "ルフレ",
            "ゼロスーツサムス",
            "キャプテン・ファルコン",
            "サムス/ダークサムス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "シールドサイズの数値が一番小さいファイターは？",
        "options": [
            "むらびと",
            "キングクルール",
            "カムイ",
            "ベヨネッタ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "歩行加速量の数値が一番小さいファイターは？",
        "options": [
            "ピーチ/デイジー",
            "パックンフラワー",
            "ロボット",
            "リドリー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "歩行加速量の数値が一番大きいファイターは？",
        "options": [
            "メタナイト",
            "キングクルール",
            "リザードン",
            "リンク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "歩行加速量の数値が一番大きいファイターは？",
        "options": [
            "インクリング",
            "Wii Fit トレーナー",
            "セフィロス",
            "ガオガエン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "最大歩行速度が一番遅いファイターは？",
        "options": [
            "しずえ",
            "バンジョー＆カズーイ",
            "ルイージ",
            "ピーチ/デイジー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "最大歩行速度が一番遅いファイターは？",
        "options": [
            "ドクターマリオ",
            "クラウド",
            "リドリー",
            "剣術Mii"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "最大歩行速度が一番速いファイターは？",
        "options": [
            "ピクミン＆オリマー",
            "ルイージ",
            "フォックス",
            "ゼルダ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "ダッシュ初速度が一番速いファイターは？",
        "options": [
            "ドンキーコング",
            "こどもリンク",
            "ヒカリ",
            "ガノンドルフ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "ダッシュ初速度が一番遅いファイターは？",
        "options": [
            "クロム",
            "カムイ",
            "リザードン",
            "射撃Mii"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "ダッシュ初速度が一番遅いファイターは？",
        "options": [
            "カムイ",
            "クッパ",
            "パックマン",
            "シーク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "ダッシュ加速量の数値が一番小さいファイターは？",
        "options": [
            "シュルク",
            "カズヤ",
            "スネーク",
            "リザードン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "ダッシュ加速量の数値が一番小さいファイターは？",
        "options": [
            "ガノンドルフ",
            "フォックス",
            "ソラ",
            "カズヤ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "ダッシュ加速量の数値が一番大きいファイターは？",
        "options": [
            "パックンフラワー",
            "キャプテン・ファルコン",
            "ピクミン＆オリマー",
            "シュルク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "最大ダッシュ速度が一番速いファイターは？",
        "options": [
            "バンジョー＆カズーイ",
            "アイク",
            "カムイ",
            "ウルフ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "最大ダッシュ速度が一番速いファイターは？",
        "options": [
            "カズヤ",
            "ゼルダ",
            "クッパ",
            "インクリング"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "最大ダッシュ速度が一番速いファイターは？",
        "options": [
            "ピチュー",
            "シュルク",
            "マリオ",
            "ソニック"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "地上抵抗の数値が一番大きいファイターは？",
        "options": [
            "むらびと",
            "ガオガエン",
            "テリー",
            "クロム"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "地上抵抗の数値が一番小さいファイターは？",
        "options": [
            "セフィロス",
            "ゲッコウガ",
            "射撃Mii",
            "ベレトス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "地上抵抗の数値が一番小さいファイターは？",
        "options": [
            "フシギソウ",
            "ダックハント",
            "ワリオ",
            "ディディーコング"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "空中加速の数値が一番大きいファイターは？",
        "options": [
            "セフィロス",
            "ミュウツー",
            "ロゼッタ＆チコ",
            "ベレトス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "空中加速の数値が一番小さいファイターは？",
        "options": [
            "リザードン",
            "キャプテン・ファルコン",
            "マリオ",
            "サムス/ダークサムス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "空中加速の数値が一番小さいファイターは？",
        "options": [
            "勇者",
            "ゲッコウガ",
            "テリー",
            "ピット/ブラックピット"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "最大空中速度が一番速いファイターは？",
        "options": [
            "リュウ",
            "メタナイト",
            "こどもリンク",
            "リトルマック"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "最大空中速度が一番遅いファイターは？",
        "options": [
            "アイスクライマー",
            "キングクルール",
            "パルテナ",
            "剣術Mii"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "最大空中速度が一番速いファイターは？",
        "options": [
            "フシギソウ",
            "ソラ",
            "リトルマック",
            "リュカ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "空中抵抗の数値が一番大きいファイターは？",
        "options": [
            "ピット/ブラックピット",
            "ピーチ/デイジー",
            "Mr.ゲーム&ウォッチ",
            "ゼルダ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "空中抵抗の数値が一番大きいファイターは？",
        "options": [
            "ミェンミェン",
            "ロゼッタ＆チコ",
            "ゼロスーツサムス",
            "クッパJr."
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "空中抵抗の数値が一番大きいファイターは？",
        "options": [
            "ゲッコウガ",
            "テリー",
            "クロム",
            "ジョーカー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "最大落下速度が一番速いファイターは？",
        "options": [
            "ガノンドルフ",
            "ゼロスーツサムス",
            "ガオガエン",
            "ロボット"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "最大落下速度が一番速いファイターは？",
        "options": [
            "ピーチ/デイジー",
            "リザードン",
            "サムス/ダークサムス",
            "ゼルダ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "最大落下速度が一番遅いファイターは？",
        "options": [
            "シーク",
            "デデデ",
            "クッパJr.",
            "リトルマック"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "急降下速度が一番遅いファイターは？",
        "options": [
            "パックンフラワー",
            "ウルフ",
            "マリオ",
            "ダックハント"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "急降下速度が一番速いファイターは？",
        "options": [
            "リドリー",
            "シモン/リヒター",
            "セフィロス",
            "ロゼッタ＆チコ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "急降下速度が一番速いファイターは？",
        "options": [
            "ピチュー",
            "ミェンミェン",
            "むらびと",
            "ジョーカー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "重力の数値が一番大きいファイターは？",
        "options": [
            "バンジョー＆カズーイ",
            "格闘Mii",
            "ホムラ",
            "リザードン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "重力の数値が一番大きいファイターは？",
        "options": [
            "ゲッコウガ",
            "メタナイト",
            "インクリング",
            "ホムラ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "重力の数値が一番小さいファイターは？",
        "options": [
            "フシギソウ",
            "プリン",
            "テリー",
            "ピカチュウ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "大ジャンプ高さの数値が一番小さいファイターは？",
        "options": [
            "ミュウツー",
            "ロボット",
            "ホムラ",
            "ソラ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "大ジャンプ高さの数値が一番大きいファイターは？",
        "options": [
            "カービィ",
            "デデデ",
            "ガノンドルフ",
            "アイク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "大ジャンプ高さの数値が一番大きいファイターは？",
        "options": [
            "パルテナ",
            "ルカリオ",
            "パックンフラワー",
            "ルイージ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "小ジャンプ高さの数値が一番大きいファイターは？",
        "options": [
            "パルテナ",
            "ロイ",
            "リンク",
            "むらびと"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "小ジャンプ高さの数値が一番小さいファイターは？",
        "options": [
            "キャプテン・ファルコン",
            "デデデ",
            "ピチュー",
            "パックンフラワー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "小ジャンプ高さの数値が一番小さいファイターは？",
        "options": [
            "マルス",
            "ソニック",
            "ケン",
            "格闘Mii"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "空中ジャンプ高さの数値が一番大きいファイターは？",
        "options": [
            "ジョーカー",
            "クッパJr.",
            "ロゼッタ＆チコ",
            "剣術Mii"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "空中ジャンプ高さの数値が一番小さいファイターは？",
        "options": [
            "リドリー",
            "剣術Mii",
            "ピカチュウ",
            "リンク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "空中ジャンプ高さの数値が一番小さいファイターは？",
        "options": [
            "ドクターマリオ",
            "ドンキーコング",
            "ゲッコウガ",
            "プリン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "その場掴み長さの数値が一番大きいファイターは？",
        "options": [
            "シモン/リヒター",
            "リンク",
            "リドリー",
            "クッパ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "その場掴み長さの数値が一番大きいファイターは？",
        "options": [
            "ルキナ",
            "ガオガエン",
            "射撃Mii",
            "メタナイト"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "その場掴み長さの数値が一番大きいファイターは？",
        "options": [
            "ネス",
            "ゲッコウガ",
            "剣術Mii",
            "ジョーカー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "その場掴み発生の数値が一番大きいファイターは？",
        "options": [
            "勇者",
            "ルイージ",
            "こどもリンク",
            "マルス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "その場掴み発生の数値が一番大きいファイターは？",
        "options": [
            "ピカチュウ",
            "ロイ",
            "ピチュー",
            "シモン/リヒター"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "その場掴み発生の数値が一番小さいファイターは？",
        "options": [
            "ベレトス",
            "ジョーカー",
            "シーク",
            "ピクミン＆オリマー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "崖掴まり姿勢の数値が一番小さいファイターは？",
        "options": [
            "アイク",
            "アイスクライマー",
            "ピーチ/デイジー",
            "ソラ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "崖掴まり姿勢の数値が一番大きいファイターは？",
        "options": [
            "クッパ",
            "ピーチ/デイジー",
            "リトルマック",
            "ルイージ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "崖掴まり姿勢の数値が一番小さいファイターは？",
        "options": [
            "テリー",
            "こどもリンク",
            "トゥーンリンク",
            "ロボット"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "回避上がり距離の数値が一番小さいファイターは？",
        "options": [
            "剣術Mii",
            "ミュウツー",
            "ソニック",
            "ゼニガメ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "回避上がり距離の数値が一番大きいファイターは？",
        "options": [
            "キングクルール",
            "ベレトス",
            "ゼルダ",
            "カズヤ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "回避上がり距離の数値が一番大きいファイターは？",
        "options": [
            "アイスクライマー",
            "勇者",
            "ロイ",
            "ミュウツー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "攻撃上がり距離の数値が一番大きいファイターは？",
        "options": [
            "ディディーコング",
            "ネス",
            "ゼロスーツサムス",
            "ピカチュウ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "攻撃上がり距離の数値が一番大きいファイターは？",
        "options": [
            "ソニック",
            "ルキナ",
            "フォックス",
            "ベレトス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "攻撃上がり距離の数値が一番大きいファイターは？",
        "options": [
            "ケン",
            "ドンキーコング",
            "パックンフラワー",
            "シモン/リヒター"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "ダッシュ攻撃発生Fが一番短い(速い)ファイターは？",
        "options": [
            "ホムラ",
            "スネーク",
            "ロイ",
            "アイク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#ダッシュ攻撃発生F"
    },
    {
        "question": "ダッシュ攻撃発生Fが一番短い(速い)ファイターは？",
        "options": [
            "ロボット",
            "ホムラ",
            "カズヤ",
            "バンジョー＆カズーイ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#ダッシュ攻撃発生F"
    },
    {
        "question": "ダッシュ攻撃発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "リザードン",
            "Wii Fit トレーナー",
            "プリン",
            "ベヨネッタ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#ダッシュ攻撃発生F"
    },
    {
        "question": "ダッシュ攻撃全体Fが一番短い(速い)ファイターは？",
        "options": [
            "マリオ",
            "ソニック",
            "ロゼッタ＆チコ",
            "トゥーンリンク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#ダッシュ攻撃全体F"
    },
    {
        "question": "ダッシュ攻撃全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "ドクターマリオ",
            "ディディーコング",
            "クロム",
            "デデデ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#ダッシュ攻撃全体F"
    },
    {
        "question": "ダッシュ攻撃全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "ロゼッタ＆チコ",
            "シーク",
            "ダックハント",
            "ガノンドルフ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#ダッシュ攻撃全体F"
    },
    {
        "question": "上強発生Fが一番短い(速い)ファイターは？",
        "options": [
            "ベヨネッタ",
            "ソラ",
            "しずえ",
            "リザードン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "上強発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "クッパJr.",
            "ファルコ",
            "ホムラ",
            "格闘Mii"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "上強発生Fが一番短い(速い)ファイターは？",
        "options": [
            "リュカ",
            "プリン",
            "シモン/リヒター",
            "パックマン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "上強全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "ルカリオ",
            "ゼロスーツサムス",
            "ソニック",
            "デデデ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "上強全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "ロゼッタ＆チコ",
            "ケン",
            "ワリオ",
            "ロボット"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "上強全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "パックンフラワー",
            "ルカリオ",
            "ケン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "横強発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "スティーブ",
            "ダックハント",
            "ミュウツー",
            "ネス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "横強発生Fが一番短い(速い)ファイターは？",
        "options": [
            "シュルク",
            "メタナイト",
            "フシギソウ",
            "ゼロスーツサムス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "横強発生Fが一番短い(速い)ファイターは？",
        "options": [
            "ピカチュウ",
            "ミェンミェン",
            "シモン/リヒター",
            "ピクミン＆オリマー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "横強全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "クロム",
            "勇者",
            "ピクミン＆オリマー",
            "キャプテン・ファルコン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "横強全体Fが一番短い(速い)ファイターは？",
        "options": [
            "ガノンドルフ",
            "Mr.ゲーム&ウォッチ",
            "ソニック",
            "リドリー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "横強全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "ファルコ",
            "勇者",
            "格闘Mii",
            "マルス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "下強発生Fが一番短い(速い)ファイターは？",
        "options": [
            "ロイ",
            "射撃Mii",
            "ルカリオ",
            "リンク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "下強発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "クラウド",
            "シーク",
            "ロイ",
            "リンク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "下強発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "クッパ",
            "剣術Mii",
            "ホムラ",
            "ルキナ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "下強全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "ディディーコング",
            "フシギソウ",
            "ドンキーコング",
            "デデデ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "下強全体Fが一番短い(速い)ファイターは？",
        "options": [
            "こどもリンク",
            "テリー",
            "ルフレ",
            "ファルコ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "下強全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "ベレトス",
            "リドリー",
            "ダックハント",
            "バンジョー＆カズーイ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "上スマ発生Fが一番短い(速い)ファイターは？",
        "options": [
            "ロゼッタ＆チコ",
            "セフィロス",
            "クラウド",
            "むらびと"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "上スマ発生Fが一番短い(速い)ファイターは？",
        "options": [
            "メタナイト",
            "ゼロスーツサムス",
            "ロックマン",
            "Wii Fit トレーナー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "上スマ発生Fが一番短い(速い)ファイターは？",
        "options": [
            "マルス",
            "ケン",
            "リドリー",
            "ウルフ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "上スマ全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "ダックハント",
            "マリオ",
            "剣術Mii",
            "ミェンミェン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "上スマ全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "フシギソウ",
            "ディディーコング",
            "マリオ",
            "射撃Mii"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "上スマ全体Fが一番短い(速い)ファイターは？",
        "options": [
            "パックンフラワー",
            "ガノンドルフ",
            "ゼロスーツサムス",
            "ピーチ/デイジー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "横スマ発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "ジョーカー",
            "リドリー",
            "クッパ",
            "パックマン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "横スマ発生Fが一番短い(速い)ファイターは？",
        "options": [
            "ロボット",
            "ロゼッタ＆チコ",
            "ピカチュウ",
            "シーク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "横スマ発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "ルイージ",
            "リドリー",
            "シュルク",
            "シーク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "横スマ全体Fが一番短い(速い)ファイターは？",
        "options": [
            "マルス",
            "ピチュー",
            "シュルク",
            "ゲッコウガ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "横スマ全体Fが一番短い(速い)ファイターは？",
        "options": [
            "ディディーコング",
            "Wii Fit トレーナー",
            "ケン",
            "テリー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "横スマ全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "剣術Mii",
            "リザードン",
            "リュカ",
            "ガノンドルフ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "下スマ発生Fが一番短い(速い)ファイターは？",
        "options": [
            "ロックマン",
            "ロボット",
            "Wii Fit トレーナー",
            "パルテナ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "下スマ発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "クッパ",
            "ゲッコウガ",
            "ソラ",
            "ホムラ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "下スマ発生Fが一番短い(速い)ファイターは？",
        "options": [
            "射撃Mii",
            "ピーチ/デイジー",
            "Wii Fit トレーナー",
            "ルキナ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "下スマ全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "フォックス",
            "ロイ",
            "カズヤ",
            "ゼニガメ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "下スマ全体Fが一番短い(速い)ファイターは？",
        "options": [
            "ドンキーコング",
            "テリー",
            "リンク",
            "ロイ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "下スマ全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "パックマン",
            "ジョーカー",
            "ドンキーコング",
            "剣術Mii"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "空N発生Fが一番短い(速い)ファイターは？",
        "options": [
            "ゲッコウガ",
            "ミュウツー",
            "ウルフ",
            "メタナイト"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "空N発生Fが一番短い(速い)ファイターは？",
        "options": [
            "リュカ",
            "デデデ",
            "リザードン",
            "パルテナ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "空N発生Fが一番短い(速い)ファイターは？",
        "options": [
            "こどもリンク",
            "バンジョー＆カズーイ",
            "ピカチュウ",
            "Wii Fit トレーナー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "空N全体Fが一番短い(速い)ファイターは？",
        "options": [
            "ガオガエン",
            "ピット/ブラックピット",
            "ファルコ",
            "ロックマン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "空N全体Fが一番短い(速い)ファイターは？",
        "options": [
            "むらびと",
            "ゼルダ",
            "ミュウツー",
            "ウルフ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "空N全体Fが一番短い(速い)ファイターは？",
        "options": [
            "ピチュー",
            "メタナイト",
            "ピーチ/デイジー",
            "バンジョー＆カズーイ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "空N着地隙の数値が一番小さいファイターは？",
        "options": [
            "リドリー",
            "フシギソウ",
            "リュウ",
            "ロイ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "空N着地隙の数値が一番大きいファイターは？",
        "options": [
            "ゼニガメ",
            "ホムラ",
            "ルカリオ",
            "マルス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "空N着地隙の数値が一番大きいファイターは？",
        "options": [
            "アイスクライマー",
            "サムス/ダークサムス",
            "剣術Mii",
            "トゥーンリンク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "空前発生Fが一番短い(速い)ファイターは？",
        "options": [
            "勇者",
            "格闘Mii",
            "ソニック",
            "ゲッコウガ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "空前発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "クッパJr.",
            "メタナイト",
            "クロム",
            "ルカリオ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "空前発生Fが一番短い(速い)ファイターは？",
        "options": [
            "ロゼッタ＆チコ",
            "ダックハント",
            "バンジョー＆カズーイ",
            "スティーブ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "空前全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "ウルフ",
            "パルテナ",
            "ミェンミェン",
            "こどもリンク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "空前全体Fが一番短い(速い)ファイターは？",
        "options": [
            "アイスクライマー",
            "ダックハント",
            "ガノンドルフ",
            "アイク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "空前全体Fが一番短い(速い)ファイターは？",
        "options": [
            "ドクターマリオ",
            "Wii Fit トレーナー",
            "シーク",
            "ピット/ブラックピット"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "空前着地隙の数値が一番大きいファイターは？",
        "options": [
            "ガオガエン",
            "ヒカリ",
            "ソニック",
            "ロイ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "空前着地隙の数値が一番大きいファイターは？",
        "options": [
            "カズヤ",
            "ルイージ",
            "リュカ",
            "ジョーカー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "空前着地隙の数値が一番小さいファイターは？",
        "options": [
            "Wii Fit トレーナー",
            "ピクミン＆オリマー",
            "リトルマック",
            "ロゼッタ＆チコ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "空後発生Fが一番短い(速い)ファイターは？",
        "options": [
            "射撃Mii",
            "ソニック",
            "クッパ",
            "ピーチ/デイジー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "空後発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "ゼルダ",
            "フシギソウ",
            "パックンフラワー",
            "ヨッシー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "空後発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "ゼニガメ",
            "フシギソウ",
            "マリオ",
            "フォックス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "空後全体Fが一番短い(速い)ファイターは？",
        "options": [
            "マルス",
            "ピーチ/デイジー",
            "ドクターマリオ",
            "トゥーンリンク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "空後全体Fが一番短い(速い)ファイターは？",
        "options": [
            "ファルコ",
            "ルイージ",
            "しずえ",
            "バンジョー＆カズーイ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "空後全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "ヒカリ",
            "ヨッシー",
            "ウルフ",
            "カムイ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "空後着地隙の数値が一番小さいファイターは？",
        "options": [
            "ピクミン＆オリマー",
            "ガオガエン",
            "ソニック",
            "ルカリオ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "空後着地隙の数値が一番小さいファイターは？",
        "options": [
            "ガノンドルフ",
            "ドクターマリオ",
            "シュルク",
            "ピーチ/デイジー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "空後着地隙の数値が一番大きいファイターは？",
        "options": [
            "マルス",
            "ヒカリ",
            "ソラ",
            "むらびと"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "空上発生Fが一番短い(速い)ファイターは？",
        "options": [
            "ソニック",
            "クラウド",
            "ネス",
            "射撃Mii"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "空上発生Fが一番短い(速い)ファイターは？",
        "options": [
            "パックンフラワー",
            "格闘Mii",
            "ヒカリ",
            "クラウド"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "空上発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "スティーブ",
            "ケン",
            "リドリー",
            "スネーク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "空上全体Fが一番短い(速い)ファイターは？",
        "options": [
            "ジョーカー",
            "剣術Mii",
            "ピーチ/デイジー",
            "カービィ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "空上全体Fが一番短い(速い)ファイターは？",
        "options": [
            "パックマン",
            "ロイ",
            "リトルマック",
            "ルイージ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "空上全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "カズヤ",
            "ピクミン＆オリマー",
            "シモン/リヒター",
            "リトルマック"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "空上着地隙の数値が一番大きいファイターは？",
        "options": [
            "ベレトス",
            "キャプテン・ファルコン",
            "ベヨネッタ",
            "こどもリンク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "空上着地隙の数値が一番小さいファイターは？",
        "options": [
            "Wii Fit トレーナー",
            "キングクルール",
            "ミェンミェン",
            "スネーク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "空上着地隙の数値が一番小さいファイターは？",
        "options": [
            "ロックマン",
            "ベレトス",
            "マルス",
            "しずえ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "空下発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "リザードン",
            "ダックハント",
            "ミェンミェン",
            "ドンキーコング"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "空下発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "こどもリンク",
            "シモン/リヒター",
            "ネス",
            "ロイ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "空下発生Fが一番長い(遅い)ファイターは？",
        "options": [
            "リュカ",
            "マリオ",
            "シーク",
            "ガノンドルフ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "空下全体Fが一番長い(遅い)ファイターは？",
        "options": [
            "ソニック",
            "ネス",
            "リザードン",
            "剣術Mii"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "空下全体Fが一番短い(速い)ファイターは？",
        "options": [
            "ドクターマリオ",
            "リザードン",
            "パックンフラワー",
            "アイスクライマー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "空下全体Fが一番短い(速い)ファイターは？",
        "options": [
            "むらびと",
            "リドリー",
            "剣術Mii",
            "ゼルダ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "空下着地隙の数値が一番小さいファイターは？",
        "options": [
            "ルキナ",
            "ゼロスーツサムス",
            "ガノンドルフ",
            "フシギソウ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "空下着地隙の数値が一番大きいファイターは？",
        "options": [
            "トゥーンリンク",
            "ゼルダ",
            "ドクターマリオ",
            "ロゼッタ＆チコ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "空下着地隙の数値が一番大きいファイターは？",
        "options": [
            "パックマン",
            "ガノンドルフ",
            "リドリー",
            "リュウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "次の4人のうち、下スマ全体Fが一番大きいのは？",
        "options": [
            "ソニック",
            "メタナイト",
            "むらびと",
            "シュルク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "下スマ全体Fが2番目に小さいファイターは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "ゼルダ",
            "メタナイト",
            "ルイージ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "次の4人のうち、歩行加速量が一番小さいのは？",
        "options": [
            "リュウ",
            "アイク",
            "カズヤ",
            "テリー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "次の4人のうち、空中加速が一番小さいのは？",
        "options": [
            "リンク",
            "インクリング",
            "カムイ",
            "格闘Mii"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、最大落下速度が一番小さいのは？",
        "options": [
            "ガノンドルフ",
            "シモン/リヒター",
            "むらびと",
            "ミェンミェン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "次の4人のうち、空下着地隙が一番大きいのは？",
        "options": [
            "ワリオ",
            "リザードン",
            "キャプテン・ファルコン",
            "ネス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "最大ダッシュ速度が2番目に小さいファイターは？",
        "options": [
            "ルフレ",
            "ガオガエン",
            "プリン",
            "ガノンドルフ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "次の4人のうち、空前着地隙が一番大きいのは？",
        "options": [
            "ドクターマリオ",
            "格闘Mii",
            "ベヨネッタ",
            "マリオ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、横スマ発生Fが一番小さいのは？",
        "options": [
            "ロイ",
            "プリン",
            "リトルマック",
            "サムス/ダークサムス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "次の4人のうち、ダッシュ初速度が一番小さいのは？",
        "options": [
            "ピチュー",
            "カズヤ",
            "フシギソウ",
            "アイスクライマー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "シールドサイズが3番目に小さいファイターは？",
        "options": [
            "ネス",
            "リュカ",
            "ピカチュウ",
            "ピチュー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "下スマ発生Fが2番目に小さいファイターは？",
        "options": [
            "メタナイト",
            "リュウ",
            "ドクターマリオ",
            "ケン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "次の4人のうち、空上着地隙が一番大きいのは？",
        "options": [
            "ルキナ",
            "剣術Mii",
            "リュウ",
            "リトルマック"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "次の4人のうち、シールドサイズが一番大きいのは？",
        "options": [
            "リトルマック",
            "ホムラ",
            "サムス/ダークサムス",
            "剣術Mii"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "次の4人のうち、重力が一番大きいのは？",
        "options": [
            "Wii Fit トレーナー",
            "ルイージ",
            "ゼルダ",
            "ベレトス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "次の4人のうち、最大ダッシュ速度が一番小さいのは？",
        "options": [
            "ベヨネッタ",
            "ゼロスーツサムス",
            "むらびと",
            "ガノンドルフ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "次の4人のうち、横強発生Fが一番大きいのは？",
        "options": [
            "リュカ",
            "デデデ",
            "ロイ",
            "サムス/ダークサムス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "次の4人のうち、下強発生Fが一番大きいのは？",
        "options": [
            "ピカチュウ",
            "アイク",
            "ヨッシー",
            "ゼルダ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、空下全体Fが一番小さいのは？",
        "options": [
            "アイスクライマー",
            "勇者",
            "ファルコ",
            "バンジョー＆カズーイ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "空中ジャンプ高さが3番目に大きいファイターは？",
        "options": [
            "ファルコ",
            "ゲッコウガ",
            "ヨッシー",
            "カズヤ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、横スマ全体Fが一番小さいのは？",
        "options": [
            "パルテナ",
            "ホムラ",
            "アイスクライマー",
            "ピカチュウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "次の4人のうち、その場掴み発生が一番小さいのは？",
        "options": [
            "ベレトス",
            "デデデ",
            "シーク",
            "リュカ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "次の4人のうち、大ジャンプ高さが一番大きいのは？",
        "options": [
            "シモン/リヒター",
            "ルイージ",
            "ゼロスーツサムス",
            "ゲッコウガ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、空前全体Fが一番小さいのは？",
        "options": [
            "バンジョー＆カズーイ",
            "むらびと",
            "ヒカリ",
            "デデデ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、空N発生Fが一番大きいのは？",
        "options": [
            "フシギソウ",
            "ドクターマリオ",
            "Mr.ゲーム&ウォッチ",
            "ピーチ/デイジー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "急降下速度が3番目に小さいファイターは？",
        "options": [
            "カービィ",
            "ロゼッタ＆チコ",
            "ピーチ/デイジー",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "次の4人のうち、下スマ発生Fが一番大きいのは？",
        "options": [
            "パックマン",
            "ピーチ/デイジー",
            "シーク",
            "カムイ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "次の4人のうち、DA 発生Fが一番大きいのは？",
        "options": [
            "ピチュー",
            "パックマン",
            "ドンキーコング",
            "アイク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "崖掴まり姿勢が3番目に大きいファイターは？",
        "options": [
            "フシギソウ",
            "クッパJr.",
            "ダックハント",
            "ピチュー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、空中加速が一番大きいのは？",
        "options": [
            "ピクミン＆オリマー",
            "リザードン",
            "ベヨネッタ",
            "デデデ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、空前着地隙が一番大きいのは？",
        "options": [
            "キャプテン・ファルコン",
            "キングクルール",
            "テリー",
            "ゲッコウガ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "最大歩行速度が2番目に大きいファイターは？",
        "options": [
            "ゲッコウガ",
            "フォックス",
            "マルス",
            "ルキナ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "次の4人のうち、攻撃上がり距離が一番小さいのは？",
        "options": [
            "クッパJr.",
            "サムス/ダークサムス",
            "シモン/リヒター",
            "ロゼッタ＆チコ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、下スマ発生Fが一番大きいのは？",
        "options": [
            "ネス",
            "ミュウツー",
            "ルフレ",
            "ルキナ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "次の4人のうち、上強全体Fが一番小さいのは？",
        "options": [
            "ルキナ",
            "ワリオ",
            "ルフレ",
            "ディディーコング"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、横スマ発生Fが一番大きいのは？",
        "options": [
            "ロイ",
            "ファルコ",
            "クラウド",
            "格闘Mii"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "次の4人のうち、横強発生Fが一番小さいのは？",
        "options": [
            "セフィロス",
            "カービィ",
            "アイク",
            "シーク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "空前全体Fが2番目に小さいファイターは？",
        "options": [
            "ルイージ",
            "パックマン",
            "ルカリオ",
            "ロイ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "その場掴み長さが2番目に小さいファイターは？",
        "options": [
            "フォックス",
            "アイスクライマー",
            "リンク",
            "勇者"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、上強全体Fが一番小さいのは？",
        "options": [
            "クラウド",
            "マリオ",
            "ベレトス",
            "ドンキーコング"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、空上着地隙が一番小さいのは？",
        "options": [
            "トゥーンリンク",
            "ベレトス",
            "格闘Mii",
            "こどもリンク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "次の4人のうち、急降下速度が一番小さいのは？",
        "options": [
            "トゥーンリンク",
            "ゼニガメ",
            "マルス",
            "テリー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "次の4人のうち、上強全体Fが一番小さいのは？",
        "options": [
            "ネス",
            "ピット/ブラックピット",
            "ロゼッタ＆チコ",
            "セフィロス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、横スマ全体Fが一番小さいのは？",
        "options": [
            "ルイージ",
            "ゼルダ",
            "ピクミン＆オリマー",
            "キングクルール"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "次の4人のうち、上スマ発生Fが一番大きいのは？",
        "options": [
            "ピーチ/デイジー",
            "クラウド",
            "ピチュー",
            "ロックマン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "次の4人のうち、大ジャンプ高さが一番大きいのは？",
        "options": [
            "リンク",
            "リザードン",
            "パルテナ",
            "ミェンミェン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "空上全体Fが3番目に小さいファイターは？",
        "options": [
            "ルイージ",
            "ピカチュウ",
            "クッパJr.",
            "ピチュー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、空上着地隙が一番小さいのは？",
        "options": [
            "クラウド",
            "ワリオ",
            "バンジョー＆カズーイ",
            "ロボット"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "空下着地隙が2番目に大きいファイターは？",
        "options": [
            "ゲッコウガ",
            "カズヤ",
            "クッパ",
            "リドリー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "次の4人のうち、横スマ発生Fが一番大きいのは？",
        "options": [
            "ロックマン",
            "トゥーンリンク",
            "ベヨネッタ",
            "キングクルール"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "空上着地隙が3番目に大きいファイターは？",
        "options": [
            "ピクミン＆オリマー",
            "クッパ",
            "ロックマン",
            "サムス/ダークサムス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "重力が3番目に大きいファイターは？",
        "options": [
            "格闘Mii",
            "ヒカリ",
            "ゲッコウガ",
            "シーク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "空N発生Fが3番目に大きいファイターは？",
        "options": [
            "ジョーカー",
            "ホムラ",
            "ゲッコウガ",
            "シュルク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "上強全体Fが2番目に大きいファイターは？",
        "options": [
            "パルテナ",
            "ソラ",
            "ロックマン",
            "ガノンドルフ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、地上抵抗が一番大きいのは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "クッパJr.",
            "リンク",
            "アイク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "下スマ発生Fが3番目に小さいファイターは？",
        "options": [
            "ゼルダ",
            "ドクターマリオ",
            "ケン",
            "リュウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "次の4人のうち、下強全体Fが一番小さいのは？",
        "options": [
            "ヒカリ",
            "カービィ",
            "ピット/ブラックピット",
            "シュルク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "次の4人のうち、重さが一番小さいのは？",
        "options": [
            "ヨッシー",
            "パックマン",
            "ロボット",
            "ヒカリ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、その場掴み発生が一番小さいのは？",
        "options": [
            "ベヨネッタ",
            "カズヤ",
            "格闘Mii",
            "マルス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "次の4人のうち、空下全体Fが一番大きいのは？",
        "options": [
            "メタナイト",
            "パックンフラワー",
            "セフィロス",
            "ジョーカー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "大ジャンプ高さが2番目に小さいファイターは？",
        "options": [
            "スネーク",
            "プリン",
            "スティーブ",
            "カズヤ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、最大ダッシュ速度が一番小さいのは？",
        "options": [
            "セフィロス",
            "ネス",
            "シモン/リヒター",
            "シュルク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "次の4人のうち、その場掴み長さが一番大きいのは？",
        "options": [
            "カズヤ",
            "ファルコ",
            "ソラ",
            "アイスクライマー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、その場掴み長さが一番小さいのは？",
        "options": [
            "リュカ",
            "リドリー",
            "インクリング",
            "ピチュー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、重さが一番小さいのは？",
        "options": [
            "射撃Mii",
            "シモン/リヒター",
            "キングクルール",
            "ピカチュウ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、空N全体Fが一番大きいのは？",
        "options": [
            "セフィロス",
            "ケン",
            "格闘Mii",
            "シモン/リヒター"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "次の4人のうち、最大ダッシュ速度が一番小さいのは？",
        "options": [
            "ケン",
            "射撃Mii",
            "ウルフ",
            "カムイ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "次の4人のうち、空後発生Fが一番小さいのは？",
        "options": [
            "ドンキーコング",
            "ジョーカー",
            "ルキナ",
            "ディディーコング"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "次の4人のうち、空後着地隙が一番大きいのは？",
        "options": [
            "ルフレ",
            "ガオガエン",
            "バンジョー＆カズーイ",
            "ゼルダ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "次の4人のうち、下強発生Fが一番小さいのは？",
        "options": [
            "リュカ",
            "ルカリオ",
            "リドリー",
            "トゥーンリンク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、地上抵抗が一番小さいのは？",
        "options": [
            "カムイ",
            "ガノンドルフ",
            "パックマン",
            "ゼニガメ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "次の4人のうち、空中加速が一番小さいのは？",
        "options": [
            "クロム",
            "カズヤ",
            "バンジョー＆カズーイ",
            "ウルフ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "空後着地隙が3番目に大きいファイターは？",
        "options": [
            "ロックマン",
            "スネーク",
            "リザードン",
            "ピチュー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "次の4人のうち、最大落下速度が一番大きいのは？",
        "options": [
            "ガオガエン",
            "ルカリオ",
            "ソラ",
            "フォックス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "最大ダッシュ速度が3番目に小さいファイターは？",
        "options": [
            "ガノンドルフ",
            "射撃Mii",
            "ルフレ",
            "プリン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "次の4人のうち、最大歩行速度が一番大きいのは？",
        "options": [
            "パックンフラワー",
            "メタナイト",
            "リトルマック",
            "ピカチュウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "次の4人のうち、回避上がり距離が一番大きいのは？",
        "options": [
            "マリオ",
            "カービィ",
            "バンジョー＆カズーイ",
            "ガノンドルフ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "次の4人のうち、DA 発生Fが一番小さいのは？",
        "options": [
            "ピチュー",
            "パックマン",
            "ドンキーコング",
            "アイク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "空前全体Fが3番目に大きいファイターは？",
        "options": [
            "スネーク",
            "ベヨネッタ",
            "マリオ",
            "サムス/ダークサムス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、上スマ発生Fが一番大きいのは？",
        "options": [
            "ルキナ",
            "メタナイト",
            "勇者",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "次の4人のうち、空下着地隙が一番大きいのは？",
        "options": [
            "ルイージ",
            "ロゼッタ＆チコ",
            "パルテナ",
            "キャプテン・ファルコン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "次の4人のうち、横スマ発生Fが一番小さいのは？",
        "options": [
            "ロックマン",
            "トゥーンリンク",
            "ベヨネッタ",
            "キングクルール"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "下スマ全体Fが2番目に大きいファイターは？",
        "options": [
            "シュルク",
            "ベレトス",
            "ロックマン",
            "クッパ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "次の4人のうち、空後発生Fが一番大きいのは？",
        "options": [
            "カービィ",
            "しずえ",
            "ゼニガメ",
            "フォックス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "次の4人のうち、空上発生Fが一番小さいのは？",
        "options": [
            "ゲッコウガ",
            "ネス",
            "ミュウツー",
            "デデデ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "次の4人のうち、ダッシュ初速度が一番大きいのは？",
        "options": [
            "ピーチ/デイジー",
            "プリン",
            "ソラ",
            "メタナイト"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "次の4人のうち、空上発生Fが一番大きいのは？",
        "options": [
            "ジョーカー",
            "アイスクライマー",
            "クラウド",
            "ミュウツー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "歩行加速量が3番目に大きいファイターは？",
        "options": [
            "サムス/ダークサムス",
            "リュウ",
            "スティーブ",
            "ミュウツー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "空後全体Fが3番目に大きいファイターは？",
        "options": [
            "キングクルール",
            "ヨッシー",
            "ピチュー",
            "アイク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "次の4人のうち、重力が一番小さいのは？",
        "options": [
            "フォックス",
            "ルカリオ",
            "プリン",
            "むらびと"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "空前着地隙が2番目に小さいファイターは？",
        "options": [
            "こどもリンク",
            "シーク",
            "ミェンミェン",
            "ゼニガメ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、上強発生Fが一番小さいのは？",
        "options": [
            "カムイ",
            "アイク",
            "キングクルール",
            "カービィ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "次の4人のうち、上強全体Fが一番大きいのは？",
        "options": [
            "剣術Mii",
            "クッパ",
            "ホムラ",
            "ピチュー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "空前発生Fが3番目に小さいファイターは？",
        "options": [
            "ゼニガメ",
            "ソニック",
            "ワリオ",
            "パックマン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "上強全体Fが3番目に小さいファイターは？",
        "options": [
            "カービィ",
            "ケン",
            "ゼニガメ",
            "スティーブ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、空上全体Fが一番大きいのは？",
        "options": [
            "シーク",
            "カムイ",
            "ミュウツー",
            "クッパJr."
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、最大ダッシュ速度が一番大きいのは？",
        "options": [
            "セフィロス",
            "ネス",
            "シモン/リヒター",
            "シュルク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "上スマ全体Fが2番目に大きいファイターは？",
        "options": [
            "スティーブ",
            "リュカ",
            "キングクルール",
            "リンク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "次の4人のうち、DA 全体Fが一番大きいのは？",
        "options": [
            "ドンキーコング",
            "カズヤ",
            "ドクターマリオ",
            "勇者"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "次の4人のうち、空中抵抗が一番小さいのは？",
        "options": [
            "ピーチ/デイジー",
            "ヒカリ",
            "ミェンミェン",
            "ネス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "次の4人のうち、最大落下速度が一番大きいのは？",
        "options": [
            "プリン",
            "ロイ",
            "ファルコ",
            "カムイ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "次の4人のうち、空N発生Fが一番小さいのは？",
        "options": [
            "フシギソウ",
            "ドクターマリオ",
            "Mr.ゲーム&ウォッチ",
            "ピーチ/デイジー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "次の4人のうち、回避上がり距離が一番小さいのは？",
        "options": [
            "シュルク",
            "ゼルダ",
            "リドリー",
            "アイク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "次の4人のうち、空後着地隙が一番小さいのは？",
        "options": [
            "ソニック",
            "むらびと",
            "ネス",
            "シュルク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "次の4人のうち、ダッシュ加速量が一番小さいのは？",
        "options": [
            "リュカ",
            "ディディーコング",
            "アイク",
            "ファルコ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "下強全体Fが2番目に大きいファイターは？",
        "options": [
            "サムス/ダークサムス",
            "ロックマン",
            "クッパ",
            "スティーブ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "次の4人のうち、小ジャンプ高さが一番大きいのは？",
        "options": [
            "カズヤ",
            "パックンフラワー",
            "カービィ",
            "カムイ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "上スマ発生Fが2番目に大きいファイターは？",
        "options": [
            "セフィロス",
            "アイク",
            "リュカ",
            "フシギソウ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "次の4人のうち、下強発生Fが一番大きいのは？",
        "options": [
            "リュカ",
            "ルカリオ",
            "リドリー",
            "トゥーンリンク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、上強発生Fが一番大きいのは？",
        "options": [
            "インクリング",
            "スティーブ",
            "射撃Mii",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "次の4人のうち、ダッシュ初速度が一番大きいのは？",
        "options": [
            "射撃Mii",
            "マリオ",
            "セフィロス",
            "ゼニガメ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "回避上がり距離が2番目に大きいファイターは？",
        "options": [
            "Wii Fit トレーナー",
            "ピーチ/デイジー",
            "ルカリオ",
            "ガノンドルフ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "下強発生Fが3番目に小さいファイターは？",
        "options": [
            "ケン",
            "リュカ",
            "ロボット",
            "ネス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、重さが一番小さいのは？",
        "options": [
            "ピチュー",
            "アイスクライマー",
            "ロイ",
            "キングクルール"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、空上発生Fが一番大きいのは？",
        "options": [
            "ピーチ/デイジー",
            "ガオガエン",
            "ベヨネッタ",
            "射撃Mii"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "次の4人のうち、空上全体Fが一番大きいのは？",
        "options": [
            "ガノンドルフ",
            "カムイ",
            "こどもリンク",
            "クロム"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、DA 発生Fが一番大きいのは？",
        "options": [
            "リドリー",
            "ウルフ",
            "射撃Mii",
            "カービィ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "空下着地隙が3番目に小さいファイターは？",
        "options": [
            "ヒカリ",
            "しずえ",
            "メタナイト",
            "インクリング"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "空下発生Fが3番目に大きいファイターは？",
        "options": [
            "射撃Mii",
            "デデデ",
            "ベレトス",
            "スティーブ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "次の4人のうち、その場掴み長さが一番大きいのは？",
        "options": [
            "リュカ",
            "リドリー",
            "インクリング",
            "ピチュー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、空後着地隙が一番大きいのは？",
        "options": [
            "ソニック",
            "むらびと",
            "ネス",
            "シュルク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "その場掴み発生が2番目に大きいファイターは？",
        "options": [
            "ゼロスーツサムス",
            "ミェンミェン",
            "ヨッシー",
            "サムス/ダークサムス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "次の4人のうち、空下発生Fが一番小さいのは？",
        "options": [
            "格闘Mii",
            "クラウド",
            "ソニック",
            "ピチュー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "次の4人のうち、最大空中速度が一番大きいのは？",
        "options": [
            "パックンフラワー",
            "ルキナ",
            "ソラ",
            "バンジョー＆カズーイ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "次の4人のうち、空前全体Fが一番小さいのは？",
        "options": [
            "ゼロスーツサムス",
            "リドリー",
            "ヒカリ",
            "ピカチュウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、空前発生Fが一番小さいのは？",
        "options": [
            "格闘Mii",
            "リドリー",
            "ファルコ",
            "インクリング"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "次の4人のうち、空後全体Fが一番小さいのは？",
        "options": [
            "Wii Fit トレーナー",
            "クッパJr.",
            "ガノンドルフ",
            "ベヨネッタ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "次の4人のうち、ダッシュ初速度が一番大きいのは？",
        "options": [
            "トゥーンリンク",
            "セフィロス",
            "リュカ",
            "ダックハント"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "次の4人のうち、最大歩行速度が一番大きいのは？",
        "options": [
            "ソラ",
            "カービィ",
            "リトルマック",
            "Wii Fit トレーナー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "次の4人のうち、重さが一番小さいのは？",
        "options": [
            "ピチュー",
            "リュカ",
            "マリオ",
            "ゲッコウガ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "空N全体Fが3番目に小さいファイターは？",
        "options": [
            "ケン",
            "インクリング",
            "スティーブ",
            "カズヤ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "次の4人のうち、横スマ全体Fが一番大きいのは？",
        "options": [
            "シモン/リヒター",
            "リンク",
            "ルイージ",
            "ソラ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "下強全体Fが2番目に小さいファイターは？",
        "options": [
            "ケン",
            "ネス",
            "ルイージ",
            "リュウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "次の4人のうち、空後全体Fが一番小さいのは？",
        "options": [
            "リドリー",
            "ガオガエン",
            "ドクターマリオ",
            "シュルク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "次の4人のうち、下スマ全体Fが一番小さいのは？",
        "options": [
            "カービィ",
            "ネス",
            "勇者",
            "スネーク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "次の4人のうち、空後発生Fが一番大きいのは？",
        "options": [
            "アイク",
            "ルキナ",
            "クラウド",
            "クロム"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "下スマ全体Fが3番目に小さいファイターは？",
        "options": [
            "ピクミン＆オリマー",
            "ルイージ",
            "Mr.ゲーム&ウォッチ",
            "ゼルダ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "最大落下速度が2番目に大きいファイターは？",
        "options": [
            "パックンフラワー",
            "リトルマック",
            "フォックス",
            "デデデ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "空中ジャンプ高さが2番目に小さいファイターは？",
        "options": [
            "スティーブ",
            "バンジョー＆カズーイ",
            "メタナイト",
            "カービィ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、横強発生Fが一番大きいのは？",
        "options": [
            "スティーブ",
            "ネス",
            "ピーチ/デイジー",
            "勇者"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "横強全体Fが2番目に大きいファイターは？",
        "options": [
            "ソラ",
            "パルテナ",
            "ミェンミェン",
            "ロックマン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "次の4人のうち、空前着地隙が一番大きいのは？",
        "options": [
            "ガノンドルフ",
            "ヒカリ",
            "シーク",
            "クラウド"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、空N着地隙が一番小さいのは？",
        "options": [
            "格闘Mii",
            "テリー",
            "サムス/ダークサムス",
            "シモン/リヒター"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "次の4人のうち、上スマ全体Fが一番大きいのは？",
        "options": [
            "ガオガエン",
            "ロイ",
            "トゥーンリンク",
            "ルカリオ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "小ジャンプ高さが2番目に小さいファイターは？",
        "options": [
            "プリン",
            "セフィロス",
            "スティーブ",
            "ロックマン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、横強全体Fが一番大きいのは？",
        "options": [
            "クッパ",
            "ロボット",
            "むらびと",
            "ルカリオ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "次の4人のうち、空後発生Fが一番小さいのは？",
        "options": [
            "アイク",
            "ルキナ",
            "クラウド",
            "クロム"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "空中加速が2番目に小さいファイターは？",
        "options": [
            "ガノンドルフ",
            "スネーク",
            "シモン/リヒター",
            "リトルマック"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "空上着地隙が2番目に小さいファイターは？",
        "options": [
            "ゼニガメ",
            "テリー",
            "インクリング",
            "ゼロスーツサムス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "次の4人のうち、ダッシュ加速量が一番大きいのは？",
        "options": [
            "シモン/リヒター",
            "リドリー",
            "リュカ",
            "キャプテン・ファルコン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "次の4人のうち、歩行加速量が一番大きいのは？",
        "options": [
            "マリオ",
            "サムス/ダークサムス",
            "シュルク",
            "ピカチュウ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "次の4人のうち、空後全体Fが一番大きいのは？",
        "options": [
            "ベヨネッタ",
            "パックンフラワー",
            "シュルク",
            "ルカリオ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "次の4人のうち、空下着地隙が一番小さいのは？",
        "options": [
            "フシギソウ",
            "ゼロスーツサムス",
            "ロゼッタ＆チコ",
            "ゼルダ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "次の4人のうち、空中抵抗が一番小さいのは？",
        "options": [
            "クッパJr.",
            "キングクルール",
            "トゥーンリンク",
            "むらびと"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "次の4人のうち、空中抵抗が一番大きいのは？",
        "options": [
            "フォックス",
            "スネーク",
            "インクリング",
            "セフィロス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "次の4人のうち、空N全体Fが一番大きいのは？",
        "options": [
            "ホムラ",
            "リンク",
            "マリオ",
            "ヨッシー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "次の4人のうち、空下発生Fが一番大きいのは？",
        "options": [
            "カズヤ",
            "格闘Mii",
            "テリー",
            "シモン/リヒター"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "次の4人のうち、空前全体Fが一番大きいのは？",
        "options": [
            "バンジョー＆カズーイ",
            "むらびと",
            "ヒカリ",
            "デデデ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、空下全体Fが一番小さいのは？",
        "options": [
            "スネーク",
            "シーク",
            "ロボット",
            "ウルフ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "次の4人のうち、空N全体Fが一番大きいのは？",
        "options": [
            "ガオガエン",
            "ピカチュウ",
            "ガノンドルフ",
            "ピーチ/デイジー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "次の4人のうち、下強全体Fが一番小さいのは？",
        "options": [
            "ルイージ",
            "デデデ",
            "ドンキーコング",
            "ベレトス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "次の4人のうち、空上全体Fが一番小さいのは？",
        "options": [
            "ガノンドルフ",
            "カムイ",
            "こどもリンク",
            "クロム"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、シールドサイズが一番小さいのは？",
        "options": [
            "スティーブ",
            "クッパ",
            "ダックハント",
            "ロゼッタ＆チコ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "次の4人のうち、ダッシュ初速度が一番小さいのは？",
        "options": [
            "トゥーンリンク",
            "セフィロス",
            "リュカ",
            "ダックハント"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "次の4人のうち、空N着地隙が一番小さいのは？",
        "options": [
            "マリオ",
            "パックマン",
            "ピット/ブラックピット",
            "ピチュー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "次の4人のうち、空N着地隙が一番大きいのは？",
        "options": [
            "格闘Mii",
            "テリー",
            "サムス/ダークサムス",
            "シモン/リヒター"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "次の4人のうち、空中ジャンプ高さが一番小さいのは？",
        "options": [
            "クラウド",
            "ゲッコウガ",
            "ケン",
            "ロックマン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "下強全体Fが3番目に小さいファイターは？",
        "options": [
            "ケン",
            "リュウ",
            "ルイージ",
            "ロボット"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "次の4人のうち、重力が一番小さいのは？",
        "options": [
            "フォックス",
            "Wii Fit トレーナー",
            "リドリー",
            "ソラ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "次の4人のうち、空N全体Fが一番小さいのは？",
        "options": [
            "ガオガエン",
            "ピカチュウ",
            "ガノンドルフ",
            "ピーチ/デイジー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "ダッシュ初速度が2番目に大きいファイターは？",
        "options": [
            "ゼロスーツサムス",
            "ヒカリ",
            "リトルマック",
            "ソニック"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "次の4人のうち、空N着地隙が一番小さいのは？",
        "options": [
            "こどもリンク",
            "フォックス",
            "リドリー",
            "ゼロスーツサムス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "空後全体Fが2番目に小さいファイターは？",
        "options": [
            "ディディーコング",
            "ジョーカー",
            "リンク",
            "こどもリンク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "シールドサイズが3番目に大きいファイターは？",
        "options": [
            "クッパ",
            "デデデ",
            "リザードン",
            "ドンキーコング"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "次の4人のうち、DA 全体Fが一番小さいのは？",
        "options": [
            "クラウド",
            "パックンフラワー",
            "シモン/リヒター",
            "ピチュー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "空下着地隙が3番目に大きいファイターは？",
        "options": [
            "リドリー",
            "クッパ",
            "ゲッコウガ",
            "ベヨネッタ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "重力が3番目に小さいファイターは？",
        "options": [
            "カービィ",
            "ロゼッタ＆チコ",
            "スティーブ",
            "ソラ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "次の4人のうち、空前発生Fが一番大きいのは？",
        "options": [
            "シーク",
            "ドクターマリオ",
            "勇者",
            "リドリー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "次の4人のうち、空下全体Fが一番大きいのは？",
        "options": [
            "カムイ",
            "リザードン",
            "ケン",
            "ベヨネッタ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "次の4人のうち、空中ジャンプ高さが一番小さいのは？",
        "options": [
            "パルテナ",
            "ヨッシー",
            "ミュウツー",
            "カズヤ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、上スマ全体Fが一番小さいのは？",
        "options": [
            "ゼルダ",
            "ファルコ",
            "ヒカリ",
            "剣術Mii"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "空N着地隙が3番目に大きいファイターは？",
        "options": [
            "クッパ",
            "フシギソウ",
            "バンジョー＆カズーイ",
            "パックンフラワー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "次の4人のうち、最大歩行速度が一番小さいのは？",
        "options": [
            "ヨッシー",
            "ピチュー",
            "トゥーンリンク",
            "ベレトス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "次の4人のうち、横スマ全体Fが一番大きいのは？",
        "options": [
            "ルイージ",
            "ゼルダ",
            "ピクミン＆オリマー",
            "キングクルール"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "シールドサイズが2番目に小さいファイターは？",
        "options": [
            "ネス",
            "リュカ",
            "ピチュー",
            "ヨッシー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "下スマ発生Fが3番目に大きいファイターは？",
        "options": [
            "セフィロス",
            "キングクルール",
            "ミュウツー",
            "リュカ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "上スマ発生Fが2番目に小さいファイターは？",
        "options": [
            "ピット/ブラックピット",
            "リザードン",
            "キングクルール",
            "ディディーコング"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "次の4人のうち、空N発生Fが一番小さいのは？",
        "options": [
            "クッパJr.",
            "ケン",
            "こどもリンク",
            "パルテナ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "次の4人のうち、最大落下速度が一番大きいのは？",
        "options": [
            "剣術Mii",
            "ワリオ",
            "ベヨネッタ",
            "リドリー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "崖掴まり姿勢が2番目に大きいファイターは？",
        "options": [
            "クッパJr.",
            "ピクミン＆オリマー",
            "ピチュー",
            "フシギソウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、歩行加速量が一番小さいのは？",
        "options": [
            "メタナイト",
            "Mr.ゲーム&ウォッチ",
            "パルテナ",
            "リンク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "次の4人のうち、上強発生Fが一番小さいのは？",
        "options": [
            "インクリング",
            "スティーブ",
            "射撃Mii",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "次の4人のうち、上スマ全体Fが一番小さいのは？",
        "options": [
            "しずえ",
            "フォックス",
            "勇者",
            "リュカ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "次の4人のうち、上スマ発生Fが一番小さいのは？",
        "options": [
            "ピーチ/デイジー",
            "クラウド",
            "ピチュー",
            "ロックマン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "空後着地隙が2番目に小さいファイターは？",
        "options": [
            "リンク",
            "マリオ",
            "こどもリンク",
            "ミェンミェン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "DA 全体Fが3番目に大きいファイターは？",
        "options": [
            "ロックマン",
            "クッパ",
            "キングクルール",
            "リンク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "次の4人のうち、回避上がり距離が一番大きいのは？",
        "options": [
            "シュルク",
            "ゼルダ",
            "リドリー",
            "アイク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "空前着地隙が3番目に小さいファイターは？",
        "options": [
            "リュカ",
            "シーク",
            "ゼニガメ",
            "こどもリンク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、上強発生Fが一番大きいのは？",
        "options": [
            "デデデ",
            "スティーブ",
            "ゲッコウガ",
            "リュカ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "シールドサイズが2番目に大きいファイターは？",
        "options": [
            "ドンキーコング",
            "キングクルール",
            "デデデ",
            "クッパ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "次の4人のうち、空上着地隙が一番大きいのは？",
        "options": [
            "クラウド",
            "ワリオ",
            "バンジョー＆カズーイ",
            "ロボット"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "次の4人のうち、重さが一番大きいのは？",
        "options": [
            "ピチュー",
            "アイスクライマー",
            "ロイ",
            "キングクルール"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、空下発生Fが一番大きいのは？",
        "options": [
            "ゼルダ",
            "トゥーンリンク",
            "むらびと",
            "ベヨネッタ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "空N着地隙が2番目に大きいファイターは？",
        "options": [
            "スネーク",
            "クッパ",
            "バンジョー＆カズーイ",
            "フシギソウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "空上発生Fが3番目に大きいファイターは？",
        "options": [
            "シモン/リヒター",
            "ゼルダ",
            "シュルク",
            "セフィロス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "次の4人のうち、下強全体Fが一番大きいのは？",
        "options": [
            "ファルコ",
            "バンジョー＆カズーイ",
            "ケン",
            "リザードン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "空N発生Fが2番目に大きいファイターは？",
        "options": [
            "ロボット",
            "ジョーカー",
            "ゲッコウガ",
            "シュルク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "次の4人のうち、空N全体Fが一番小さいのは？",
        "options": [
            "ホムラ",
            "リンク",
            "マリオ",
            "ヨッシー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "DA 発生Fが2番目に小さいファイターは？",
        "options": [
            "フォックス",
            "ルイージ",
            "フシギソウ",
            "プリン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "次の4人のうち、急降下速度が一番大きいのは？",
        "options": [
            "ロイ",
            "ネス",
            "シモン/リヒター",
            "ワリオ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "次の4人のうち、空上全体Fが一番大きいのは？",
        "options": [
            "ワリオ",
            "むらびと",
            "テリー",
            "アイク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、横強全体Fが一番小さいのは？",
        "options": [
            "ロイ",
            "ドンキーコング",
            "リュウ",
            "ケン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "次の4人のうち、重力が一番小さいのは？",
        "options": [
            "ジョーカー",
            "シーク",
            "フシギソウ",
            "ソラ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "次の4人のうち、最大落下速度が一番大きいのは？",
        "options": [
            "ガノンドルフ",
            "シモン/リヒター",
            "むらびと",
            "ミェンミェン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "次の4人のうち、その場掴み長さが一番小さいのは？",
        "options": [
            "ロックマン",
            "クッパJr.",
            "ミュウツー",
            "フォックス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、空上着地隙が一番小さいのは？",
        "options": [
            "テリー",
            "ウルフ",
            "フシギソウ",
            "ロイ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "次の4人のうち、最大歩行速度が一番大きいのは？",
        "options": [
            "ドクターマリオ",
            "むらびと",
            "ネス",
            "ゲッコウガ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "次の4人のうち、ダッシュ加速量が一番大きいのは？",
        "options": [
            "リュカ",
            "ディディーコング",
            "アイク",
            "ファルコ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "次の4人のうち、その場掴み発生が一番小さいのは？",
        "options": [
            "カズヤ",
            "シーク",
            "ゲッコウガ",
            "ヨッシー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "回避上がり距離が3番目に小さいファイターは？",
        "options": [
            "こどもリンク",
            "しずえ",
            "アイスクライマー",
            "むらびと"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "次の4人のうち、最大歩行速度が一番小さいのは？",
        "options": [
            "ルイージ",
            "ロボット",
            "むらびと",
            "プリン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "次の4人のうち、上スマ全体Fが一番小さいのは？",
        "options": [
            "マルス",
            "ディディーコング",
            "カズヤ",
            "シーク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "重さが3番目に大きいファイターは？",
        "options": [
            "キングクルール",
            "デデデ",
            "ドンキーコング",
            "ガノンドルフ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、下スマ発生Fが一番大きいのは？",
        "options": [
            "ガオガエン",
            "ソラ",
            "ケン",
            "ソニック"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "ダッシュ加速量が2番目に小さいファイターは？",
        "options": [
            "カムイ",
            "アイク",
            "シュルク",
            "ルフレ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "下強発生Fが3番目に大きいファイターは？",
        "options": [
            "バンジョー＆カズーイ",
            "ベレトス",
            "スティーブ",
            "キングクルール"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "空下着地隙が2番目に小さいファイターは？",
        "options": [
            "インクリング",
            "しずえ",
            "メタナイト",
            "ピーチ/デイジー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "次の4人のうち、空中抵抗が一番小さいのは？",
        "options": [
            "フォックス",
            "スネーク",
            "インクリング",
            "セフィロス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "次の4人のうち、シールドサイズが一番大きいのは？",
        "options": [
            "射撃Mii",
            "ルカリオ",
            "剣術Mii",
            "ゼルダ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "次の4人のうち、空前発生Fが一番小さいのは？",
        "options": [
            "ロボット",
            "クッパJr.",
            "ヨッシー",
            "リュカ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "次の4人のうち、空N着地隙が一番大きいのは？",
        "options": [
            "こどもリンク",
            "フォックス",
            "リドリー",
            "ゼロスーツサムス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "次の4人のうち、横スマ発生Fが一番小さいのは？",
        "options": [
            "ロイ",
            "ファルコ",
            "クラウド",
            "格闘Mii"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "次の4人のうち、その場掴み発生が一番大きいのは？",
        "options": [
            "カズヤ",
            "シーク",
            "ゲッコウガ",
            "ヨッシー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "空中抵抗が2番目に大きいファイターは？",
        "options": [
            "ロックマン",
            "ミュウツー",
            "ワリオ",
            "プリン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "歩行加速量が3番目に小さいファイターは？",
        "options": [
            "パックンフラワー",
            "キングクルール",
            "バンジョー＆カズーイ",
            "セフィロス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "次の4人のうち、上強発生Fが一番大きいのは？",
        "options": [
            "アイク",
            "キングクルール",
            "ゼルダ",
            "ピチュー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "次の4人のうち、下スマ全体Fが一番小さいのは？",
        "options": [
            "ソニック",
            "メタナイト",
            "むらびと",
            "シュルク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "上強発生Fが3番目に小さいファイターは？",
        "options": [
            "ケン",
            "ゼロスーツサムス",
            "フォックス",
            "リュカ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "横強発生Fが3番目に小さいファイターは？",
        "options": [
            "スネーク",
            "ゼニガメ",
            "リトルマック",
            "カービィ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "次の4人のうち、重さが一番大きいのは？",
        "options": [
            "ピチュー",
            "リュカ",
            "マリオ",
            "ゲッコウガ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、崖掴まり姿勢が一番大きいのは？",
        "options": [
            "クッパ",
            "しずえ",
            "ルイージ",
            "ヒカリ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、重力が一番大きいのは？",
        "options": [
            "フォックス",
            "ルカリオ",
            "プリン",
            "むらびと"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "次の4人のうち、空N着地隙が一番大きいのは？",
        "options": [
            "ピカチュウ",
            "ファルコ",
            "キャプテン・ファルコン",
            "フォックス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "次の4人のうち、大ジャンプ高さが一番小さいのは？",
        "options": [
            "パックンフラワー",
            "スネーク",
            "カービィ",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、空後全体Fが一番大きいのは？",
        "options": [
            "ホムラ",
            "パックンフラワー",
            "ロックマン",
            "スティーブ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "急降下速度が2番目に大きいファイターは？",
        "options": [
            "フォックス",
            "デデデ",
            "リトルマック",
            "ジョーカー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "空上全体Fが2番目に大きいファイターは？",
        "options": [
            "リンク",
            "キングクルール",
            "トゥーンリンク",
            "こどもリンク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、最大歩行速度が一番小さいのは？",
        "options": [
            "ドクターマリオ",
            "むらびと",
            "ネス",
            "ゲッコウガ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "次の4人のうち、上スマ全体Fが一番大きいのは？",
        "options": [
            "ゼルダ",
            "ファルコ",
            "ヒカリ",
            "剣術Mii"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "次の4人のうち、回避上がり距離が一番大きいのは？",
        "options": [
            "リザードン",
            "カズヤ",
            "ファルコ",
            "ソラ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "上強全体Fが3番目に大きいファイターは？",
        "options": [
            "パルテナ",
            "ソラ",
            "アイスクライマー",
            "ロックマン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、DA 発生Fが一番小さいのは？",
        "options": [
            "ネス",
            "ピーチ/デイジー",
            "ガオガエン",
            "ソニック"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "次の4人のうち、DA 発生Fが一番大きいのは？",
        "options": [
            "Wii Fit トレーナー",
            "ゲッコウガ",
            "サムス/ダークサムス",
            "ケン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "次の4人のうち、空前着地隙が一番小さいのは？",
        "options": [
            "リンク",
            "ガノンドルフ",
            "マルス",
            "バンジョー＆カズーイ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、回避上がり距離が一番小さいのは？",
        "options": [
            "パックマン",
            "サムス/ダークサムス",
            "カズヤ",
            "ジョーカー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "地上抵抗が2番目に小さいファイターは？",
        "options": [
            "リドリー",
            "サムス/ダークサムス",
            "バンジョー＆カズーイ",
            "アイスクライマー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "空前発生Fが2番目に小さいファイターは？",
        "options": [
            "ワリオ",
            "パックマン",
            "ゼニガメ",
            "シーク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "次の4人のうち、空後発生Fが一番大きいのは？",
        "options": [
            "ドンキーコング",
            "ジョーカー",
            "ルキナ",
            "ディディーコング"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "次の4人のうち、重力が一番小さいのは？",
        "options": [
            "Wii Fit トレーナー",
            "ルイージ",
            "ゼルダ",
            "ベレトス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "次の4人のうち、横強発生Fが一番大きいのは？",
        "options": [
            "ゼニガメ",
            "ダックハント",
            "ワリオ",
            "ピーチ/デイジー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "最大歩行速度が3番目に小さいファイターは？",
        "options": [
            "パックンフラワー",
            "プリン",
            "カズヤ",
            "リュウ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "ダッシュ加速量が3番目に大きいファイターは？",
        "options": [
            "リトルマック",
            "ソニック",
            "ディディーコング",
            "ピチュー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "次の4人のうち、DA 全体Fが一番大きいのは？",
        "options": [
            "ネス",
            "ガノンドルフ",
            "デデデ",
            "ピット/ブラックピット"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "次の4人のうち、下スマ全体Fが一番大きいのは？",
        "options": [
            "むらびと",
            "パックンフラワー",
            "ルカリオ",
            "リザードン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "地上抵抗が3番目に小さいファイターは？",
        "options": [
            "サムス/ダークサムス",
            "アイスクライマー",
            "ホムラ",
            "バンジョー＆カズーイ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "次の4人のうち、下スマ全体Fが一番大きいのは？",
        "options": [
            "むらびと",
            "ルフレ",
            "こどもリンク",
            "ガオガエン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "次の4人のうち、空N発生Fが一番小さいのは？",
        "options": [
            "ディディーコング",
            "ドンキーコング",
            "クラウド",
            "ミュウツー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "次の4人のうち、崖掴まり姿勢が一番小さいのは？",
        "options": [
            "スネーク",
            "格闘Mii",
            "剣術Mii",
            "ガオガエン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、空後発生Fが一番小さいのは？",
        "options": [
            "ヒカリ",
            "ワリオ",
            "ホムラ",
            "ソニック"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "次の4人のうち、横強全体Fが一番小さいのは？",
        "options": [
            "シーク",
            "リュウ",
            "ファルコ",
            "キングクルール"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "次の4人のうち、急降下速度が一番小さいのは？",
        "options": [
            "カズヤ",
            "ベヨネッタ",
            "ディディーコング",
            "アイク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "空前着地隙が2番目に大きいファイターは？",
        "options": [
            "スネーク",
            "リザードン",
            "キャプテン・ファルコン",
            "フォックス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、横スマ発生Fが一番大きいのは？",
        "options": [
            "カズヤ",
            "むらびと",
            "ドンキーコング",
            "ルフレ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "次の4人のうち、下スマ発生Fが一番小さいのは？",
        "options": [
            "パックマン",
            "ピーチ/デイジー",
            "シーク",
            "カムイ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "崖掴まり姿勢が2番目に小さいファイターは？",
        "options": [
            "ガノンドルフ",
            "ソラ",
            "セフィロス",
            "ソニック"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "空前発生Fが3番目に大きいファイターは？",
        "options": [
            "ドンキーコング",
            "クラウド",
            "リンク",
            "アイスクライマー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "空後全体Fが3番目に小さいファイターは？",
        "options": [
            "リンク",
            "ジョーカー",
            "ディディーコング",
            "ドンキーコング"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "次の4人のうち、上強発生Fが一番大きいのは？",
        "options": [
            "サムス/ダークサムス",
            "むらびと",
            "ワリオ",
            "ピクミン＆オリマー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "次の4人のうち、空前発生Fが一番大きいのは？",
        "options": [
            "ホムラ",
            "ケン",
            "マリオ",
            "インクリング"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "次の4人のうち、DA 全体Fが一番小さいのは？",
        "options": [
            "ホムラ",
            "ピカチュウ",
            "ベレトス",
            "こどもリンク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "次の4人のうち、空後全体Fが一番小さいのは？",
        "options": [
            "ホムラ",
            "ゲッコウガ",
            "クロム",
            "ピーチ/デイジー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "空下全体Fが3番目に小さいファイターは？",
        "options": [
            "リトルマック",
            "ルイージ",
            "ルカリオ",
            "テリー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "次の4人のうち、空下発生Fが一番小さいのは？",
        "options": [
            "ゼルダ",
            "トゥーンリンク",
            "むらびと",
            "ベヨネッタ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "最大落下速度が3番目に大きいファイターは？",
        "options": [
            "格闘Mii",
            "リトルマック",
            "デデデ",
            "パックンフラワー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "空上着地隙が3番目に小さいファイターは？",
        "options": [
            "ゼニガメ",
            "マリオ",
            "テリー",
            "インクリング"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "ダッシュ加速量が2番目に大きいファイターは？",
        "options": [
            "ルカリオ",
            "ソニック",
            "リトルマック",
            "ディディーコング"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "次の4人のうち、空中加速が一番小さいのは？",
        "options": [
            "ガノンドルフ",
            "フォックス",
            "こどもリンク",
            "Wii Fit トレーナー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、上スマ全体Fが一番大きいのは？",
        "options": [
            "しずえ",
            "フォックス",
            "勇者",
            "リュカ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "横強全体Fが3番目に小さいファイターは？",
        "options": [
            "フォックス",
            "カービィ",
            "ゼニガメ",
            "リュウ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "次の4人のうち、空後着地隙が一番小さいのは？",
        "options": [
            "格闘Mii",
            "勇者",
            "ホムラ",
            "ルイージ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "空下全体Fが2番目に小さいファイターは？",
        "options": [
            "メタナイト",
            "ルカリオ",
            "ルイージ",
            "リトルマック"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "次の4人のうち、歩行加速量が一番小さいのは？",
        "options": [
            "ガノンドルフ",
            "ピーチ/デイジー",
            "ディディーコング",
            "ガオガエン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "次の4人のうち、最大落下速度が一番小さいのは？",
        "options": [
            "剣術Mii",
            "ワリオ",
            "ベヨネッタ",
            "リドリー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "次の4人のうち、攻撃上がり距離が一番大きいのは？",
        "options": [
            "サムス/ダークサムス",
            "リュカ",
            "スネーク",
            "ウルフ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、小ジャンプ高さが一番小さいのは？",
        "options": [
            "ヨッシー",
            "ゼルダ",
            "ドクターマリオ",
            "カムイ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、空N発生Fが一番大きいのは？",
        "options": [
            "ピクミン＆オリマー",
            "ゲッコウガ",
            "ルカリオ",
            "勇者"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "次の4人のうち、空下発生Fが一番小さいのは？",
        "options": [
            "ルキナ",
            "ピカチュウ",
            "ソニック",
            "ロゼッタ＆チコ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "次の4人のうち、下強発生Fが一番小さいのは？",
        "options": [
            "ロゼッタ＆チコ",
            "ゼニガメ",
            "サムス/ダークサムス",
            "ソラ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、横強全体Fが一番小さいのは？",
        "options": [
            "クッパ",
            "ロボット",
            "むらびと",
            "ルカリオ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "急降下速度が3番目に大きいファイターは？",
        "options": [
            "デデデ",
            "格闘Mii",
            "ジョーカー",
            "リトルマック"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "重さが2番目に大きいファイターは？",
        "options": [
            "クッパ",
            "ドンキーコング",
            "キングクルール",
            "デデデ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、横スマ全体Fが一番小さいのは？",
        "options": [
            "シモン/リヒター",
            "リンク",
            "ルイージ",
            "ソラ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "次の4人のうち、下スマ発生Fが一番小さいのは？",
        "options": [
            "ネス",
            "ミュウツー",
            "ルフレ",
            "ルキナ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "次の4人のうち、空中加速が一番小さいのは？",
        "options": [
            "シーク",
            "こどもリンク",
            "ゼルダ",
            "ルカリオ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、空上全体Fが一番小さいのは？",
        "options": [
            "ワリオ",
            "むらびと",
            "テリー",
            "アイク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、ダッシュ初速度が一番小さいのは？",
        "options": [
            "ピーチ/デイジー",
            "プリン",
            "ソラ",
            "メタナイト"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "その場掴み発生が3番目に大きいファイターは？",
        "options": [
            "ゼロスーツサムス",
            "サムス/ダークサムス",
            "ヨッシー",
            "ルイージ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "横スマ全体Fが2番目に大きいファイターは？",
        "options": [
            "デデデ",
            "射撃Mii",
            "アイク",
            "スネーク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "その場掴み長さが3番目に大きいファイターは？",
        "options": [
            "スティーブ",
            "ミェンミェン",
            "ゼロスーツサムス",
            "ルイージ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、小ジャンプ高さが一番小さいのは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "シーク",
            "ゲッコウガ",
            "セフィロス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、その場掴み長さが一番小さいのは？",
        "options": [
            "ドクターマリオ",
            "ソニック",
            "ベヨネッタ",
            "インクリング"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、最大落下速度が一番小さいのは？",
        "options": [
            "ガオガエン",
            "ルカリオ",
            "ソラ",
            "フォックス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "空N全体Fが2番目に小さいファイターは？",
        "options": [
            "ケン",
            "カズヤ",
            "スティーブ",
            "リトルマック"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "次の4人のうち、横強全体Fが一番大きいのは？",
        "options": [
            "メタナイト",
            "ベレトス",
            "ゼロスーツサムス",
            "ケン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "上スマ全体Fが2番目に小さいファイターは？",
        "options": [
            "ドクターマリオ",
            "Mr.ゲーム&ウォッチ",
            "マリオ",
            "ルイージ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "次の4人のうち、その場掴み発生が一番大きいのは？",
        "options": [
            "ベレトス",
            "デデデ",
            "シーク",
            "リュカ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "次の4人のうち、空後着地隙が一番小さいのは？",
        "options": [
            "ベレトス",
            "ジョーカー",
            "テリー",
            "ピカチュウ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "次の4人のうち、その場掴み長さが一番小さいのは？",
        "options": [
            "カズヤ",
            "ファルコ",
            "ソラ",
            "アイスクライマー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、最大歩行速度が一番大きいのは？",
        "options": [
            "ルイージ",
            "ロボット",
            "むらびと",
            "プリン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "次の4人のうち、空前発生Fが一番小さいのは？",
        "options": [
            "ロゼッタ＆チコ",
            "フシギソウ",
            "スティーブ",
            "ルイージ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "次の4人のうち、空上着地隙が一番大きいのは？",
        "options": [
            "トゥーンリンク",
            "ファルコ",
            "フォックス",
            "ピーチ/デイジー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "次の4人のうち、空後発生Fが一番大きいのは？",
        "options": [
            "ロボット",
            "アイスクライマー",
            "ピーチ/デイジー",
            "ルキナ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "次の4人のうち、横スマ全体Fが一番大きいのは？",
        "options": [
            "ワリオ",
            "ピチュー",
            "アイク",
            "ミュウツー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "空下全体Fが2番目に大きいファイターは？",
        "options": [
            "リンク",
            "トゥーンリンク",
            "クッパ",
            "こどもリンク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "次の4人のうち、下スマ発生Fが一番大きいのは？",
        "options": [
            "デデデ",
            "射撃Mii",
            "スティーブ",
            "剣術Mii"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "次の4人のうち、横強発生Fが一番大きいのは？",
        "options": [
            "セフィロス",
            "カービィ",
            "アイク",
            "シーク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "その場掴み長さが2番目に大きいファイターは？",
        "options": [
            "ゼロスーツサムス",
            "ミェンミェン",
            "スティーブ",
            "サムス/ダークサムス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、空後全体Fが一番大きいのは？",
        "options": [
            "ホムラ",
            "ゲッコウガ",
            "クロム",
            "ピーチ/デイジー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "次の4人のうち、横スマ全体Fが一番小さいのは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "プリン",
            "ウルフ",
            "カズヤ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "次の4人のうち、空中加速が一番大きいのは？",
        "options": [
            "ガノンドルフ",
            "フォックス",
            "こどもリンク",
            "Wii Fit トレーナー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、最大空中速度が一番大きいのは？",
        "options": [
            "プリン",
            "リュウ",
            "テリー",
            "ベレトス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "DA 全体Fが3番目に小さいファイターは？",
        "options": [
            "ゲッコウガ",
            "スティーブ",
            "ロボット",
            "フォックス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "次の4人のうち、上スマ発生Fが一番大きいのは？",
        "options": [
            "パルテナ",
            "ベヨネッタ",
            "リュカ",
            "ピット/ブラックピット"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "空前全体Fが3番目に小さいファイターは？",
        "options": [
            "ロイ",
            "パックマン",
            "クロム",
            "ルカリオ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、空後着地隙が一番小さいのは？",
        "options": [
            "ルフレ",
            "ガオガエン",
            "バンジョー＆カズーイ",
            "ゼルダ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "回避上がり距離が2番目に小さいファイターは？",
        "options": [
            "ゼニガメ",
            "むらびと",
            "アイスクライマー",
            "こどもリンク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "次の4人のうち、空前全体Fが一番小さいのは？",
        "options": [
            "ピット/ブラックピット",
            "テリー",
            "リンク",
            "ケン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、DA 全体Fが一番小さいのは？",
        "options": [
            "プリン",
            "ヒカリ",
            "テリー",
            "パルテナ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "空上発生Fが2番目に小さいファイターは？",
        "options": [
            "マリオ",
            "ディディーコング",
            "カズヤ",
            "シーク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "次の4人のうち、シールドサイズが一番小さいのは？",
        "options": [
            "射撃Mii",
            "ルカリオ",
            "剣術Mii",
            "ゼルダ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "大ジャンプ高さが2番目に大きいファイターは？",
        "options": [
            "ルイージ",
            "ゼロスーツサムス",
            "ファルコ",
            "ゲッコウガ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、急降下速度が一番小さいのは？",
        "options": [
            "フシギソウ",
            "ピーチ/デイジー",
            "ケン",
            "トゥーンリンク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "次の4人のうち、空前全体Fが一番大きいのは？",
        "options": [
            "ガオガエン",
            "ヨッシー",
            "ウルフ",
            "セフィロス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、空中ジャンプ高さが一番大きいのは？",
        "options": [
            "クラウド",
            "ゲッコウガ",
            "ケン",
            "ロックマン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、空前全体Fが一番大きいのは？",
        "options": [
            "ホムラ",
            "シーク",
            "ベヨネッタ",
            "リトルマック"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "空上着地隙が2番目に大きいファイターは？",
        "options": [
            "セフィロス",
            "ピクミン＆オリマー",
            "サムス/ダークサムス",
            "ロックマン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "空下発生Fが3番目に小さいファイターは？",
        "options": [
            "フォックス",
            "ルカリオ",
            "マリオ",
            "メタナイト"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "次の4人のうち、空下発生Fが一番小さいのは？",
        "options": [
            "カズヤ",
            "格闘Mii",
            "テリー",
            "シモン/リヒター"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "横スマ全体Fが3番目に小さいファイターは？",
        "options": [
            "ピクミン＆オリマー",
            "Mr.ゲーム&ウォッチ",
            "ウルフ",
            "メタナイト"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "回避上がり距離が3番目に大きいファイターは？",
        "options": [
            "リトルマック",
            "Wii Fit トレーナー",
            "ピーチ/デイジー",
            "ガノンドルフ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "次の4人のうち、空上全体Fが一番大きいのは？",
        "options": [
            "ベヨネッタ",
            "テリー",
            "クロム",
            "ミュウツー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、その場掴み長さが一番大きいのは？",
        "options": [
            "ゼニガメ",
            "マリオ",
            "マルス",
            "ロゼッタ＆チコ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、大ジャンプ高さが一番大きいのは？",
        "options": [
            "ルフレ",
            "ルイージ",
            "スネーク",
            "ヨッシー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、シールドサイズが一番小さいのは？",
        "options": [
            "リトルマック",
            "ホムラ",
            "サムス/ダークサムス",
            "剣術Mii"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "次の4人のうち、空前発生Fが一番大きいのは？",
        "options": [
            "ロゼッタ＆チコ",
            "フシギソウ",
            "スティーブ",
            "ルイージ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "重力が2番目に小さいファイターは？",
        "options": [
            "プリン",
            "ソラ",
            "ロゼッタ＆チコ",
            "カービィ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "次の4人のうち、地上抵抗が一番小さいのは？",
        "options": [
            "ガオガエン",
            "サムス/ダークサムス",
            "ルイージ",
            "むらびと"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "次の4人のうち、最大空中速度が一番小さいのは？",
        "options": [
            "パックンフラワー",
            "ルキナ",
            "ソラ",
            "バンジョー＆カズーイ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "次の4人のうち、DA 全体Fが一番大きいのは？",
        "options": [
            "ホムラ",
            "ピカチュウ",
            "ベレトス",
            "こどもリンク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "次の4人のうち、空中ジャンプ高さが一番大きいのは？",
        "options": [
            "パルテナ",
            "ヨッシー",
            "ミュウツー",
            "カズヤ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、空中抵抗が一番大きいのは？",
        "options": [
            "クッパJr.",
            "キングクルール",
            "トゥーンリンク",
            "むらびと"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "次の4人のうち、空下着地隙が一番小さいのは？",
        "options": [
            "ルイージ",
            "ロゼッタ＆チコ",
            "パルテナ",
            "キャプテン・ファルコン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "次の4人のうち、横スマ全体Fが一番大きいのは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "プリン",
            "ウルフ",
            "カズヤ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "次の4人のうち、歩行加速量が一番大きいのは？",
        "options": [
            "メタナイト",
            "Mr.ゲーム&ウォッチ",
            "パルテナ",
            "リンク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "次の4人のうち、空N全体Fが一番小さいのは？",
        "options": [
            "ソニック",
            "パックマン",
            "ゼルダ",
            "アイク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "次の4人のうち、空前着地隙が一番小さいのは？",
        "options": [
            "ドクターマリオ",
            "格闘Mii",
            "ベヨネッタ",
            "マリオ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、最大落下速度が一番小さいのは？",
        "options": [
            "ウルフ",
            "ゼニガメ",
            "マリオ",
            "ロイ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "上スマ発生Fが3番目に大きいファイターは？",
        "options": [
            "キャプテン・ファルコン",
            "アイク",
            "セフィロス",
            "フシギソウ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "次の4人のうち、最大空中速度が一番小さいのは？",
        "options": [
            "勇者",
            "リンク",
            "しずえ",
            "ソニック"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "横スマ全体Fが3番目に大きいファイターは？",
        "options": [
            "射撃Mii",
            "クッパ",
            "デデデ",
            "スネーク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "DA 発生Fが2番目に大きいファイターは？",
        "options": [
            "デデデ",
            "勇者",
            "ホムラ",
            "リンク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "空上全体Fが2番目に小さいファイターは？",
        "options": [
            "ピカチュウ",
            "クッパJr.",
            "スティーブ",
            "ピチュー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、空下着地隙が一番小さいのは？",
        "options": [
            "ワリオ",
            "リザードン",
            "キャプテン・ファルコン",
            "ネス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "次の4人のうち、横強全体Fが一番大きいのは？",
        "options": [
            "ロイ",
            "ドンキーコング",
            "リュウ",
            "ケン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "攻撃上がり距離が2番目に小さいファイターは？",
        "options": [
            "ゼニガメ",
            "ルイージ",
            "スネーク",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、上強全体Fが一番大きいのは？",
        "options": [
            "ネス",
            "ピット/ブラックピット",
            "ロゼッタ＆チコ",
            "セフィロス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、回避上がり距離が一番小さいのは？",
        "options": [
            "リザードン",
            "カズヤ",
            "ファルコ",
            "ソラ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "次の4人のうち、上強発生Fが一番大きいのは？",
        "options": [
            "カムイ",
            "アイク",
            "キングクルール",
            "カービィ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "空後発生Fが2番目に大きいファイターは？",
        "options": [
            "シュルク",
            "ロボット",
            "勇者",
            "キングクルール"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "次の4人のうち、横強発生Fが一番小さいのは？",
        "options": [
            "ゼニガメ",
            "ダックハント",
            "ワリオ",
            "ピーチ/デイジー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "次の4人のうち、横強発生Fが一番小さいのは？",
        "options": [
            "リュカ",
            "デデデ",
            "ロイ",
            "サムス/ダークサムス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "次の4人のうち、空中抵抗が一番大きいのは？",
        "options": [
            "ソニック",
            "ミェンミェン",
            "ロボット",
            "マルス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "上スマ全体Fが3番目に小さいファイターは？",
        "options": [
            "ドクターマリオ",
            "マリオ",
            "ルイージ",
            "ピクミン＆オリマー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "次の4人のうち、上スマ発生Fが一番大きいのは？",
        "options": [
            "むらびと",
            "ジョーカー",
            "クッパ",
            "カービィ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "次の4人のうち、上強発生Fが一番小さいのは？",
        "options": [
            "アイク",
            "キングクルール",
            "ゼルダ",
            "ピチュー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "次の4人のうち、攻撃上がり距離が一番小さいのは？",
        "options": [
            "ベレトス",
            "キングクルール",
            "カズヤ",
            "ゼニガメ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、下スマ発生Fが一番小さいのは？",
        "options": [
            "ガオガエン",
            "ソラ",
            "ケン",
            "ソニック"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "次の4人のうち、小ジャンプ高さが一番大きいのは？",
        "options": [
            "ヨッシー",
            "ゼルダ",
            "ドクターマリオ",
            "カムイ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、空上全体Fが一番小さいのは？",
        "options": [
            "シーク",
            "カムイ",
            "ミュウツー",
            "クッパJr."
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "上強発生Fが2番目に小さいファイターは？",
        "options": [
            "ケン",
            "ゼロスーツサムス",
            "フォックス",
            "リュウ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "次の4人のうち、空中加速が一番小さいのは？",
        "options": [
            "ピクミン＆オリマー",
            "リザードン",
            "ベヨネッタ",
            "デデデ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、最大歩行速度が一番大きいのは？",
        "options": [
            "ヨッシー",
            "ピチュー",
            "トゥーンリンク",
            "ベレトス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "次の4人のうち、大ジャンプ高さが一番小さいのは？",
        "options": [
            "ルフレ",
            "ルイージ",
            "スネーク",
            "ヨッシー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、空N発生Fが一番小さいのは？",
        "options": [
            "ピクミン＆オリマー",
            "ゲッコウガ",
            "ルカリオ",
            "勇者"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "横強発生Fが3番目に大きいファイターは？",
        "options": [
            "ピクミン＆オリマー",
            "ミェンミェン",
            "パルテナ",
            "セフィロス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "次の4人のうち、空後全体Fが一番小さいのは？",
        "options": [
            "ベヨネッタ",
            "パックンフラワー",
            "シュルク",
            "ルカリオ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "次の4人のうち、横強全体Fが一番大きいのは？",
        "options": [
            "シーク",
            "リュウ",
            "ファルコ",
            "キングクルール"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "次の4人のうち、その場掴み発生が一番小さいのは？",
        "options": [
            "ロゼッタ＆チコ",
            "ロックマン",
            "ソニック",
            "カービィ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "次の4人のうち、地上抵抗が一番大きいのは？",
        "options": [
            "ガオガエン",
            "サムス/ダークサムス",
            "ルイージ",
            "むらびと"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "次の4人のうち、最大ダッシュ速度が一番大きいのは？",
        "options": [
            "ケン",
            "射撃Mii",
            "ウルフ",
            "カムイ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "次の4人のうち、ダッシュ加速量が一番小さいのは？",
        "options": [
            "シーク",
            "ルカリオ",
            "ヨッシー",
            "ガオガエン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "上スマ全体Fが3番目に大きいファイターは？",
        "options": [
            "キングクルール",
            "アイク",
            "スティーブ",
            "リンク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "次の4人のうち、下強全体Fが一番小さいのは？",
        "options": [
            "ゼニガメ",
            "キャプテン・ファルコン",
            "ジョーカー",
            "ベレトス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "次の4人のうち、その場掴み長さが一番大きいのは？",
        "options": [
            "ロックマン",
            "クッパJr.",
            "ミュウツー",
            "フォックス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、歩行加速量が一番大きいのは？",
        "options": [
            "ソニック",
            "ヨッシー",
            "ルキナ",
            "ケン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "次の4人のうち、最大ダッシュ速度が一番大きいのは？",
        "options": [
            "クラウド",
            "ケン",
            "ルフレ",
            "ワリオ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "次の4人のうち、横強発生Fが一番小さいのは？",
        "options": [
            "ルフレ",
            "クッパ",
            "ホムラ",
            "ヨッシー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "次の4人のうち、空中抵抗が一番小さいのは？",
        "options": [
            "ソニック",
            "ミェンミェン",
            "ロボット",
            "マルス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "次の4人のうち、最大歩行速度が一番小さいのは？",
        "options": [
            "ソラ",
            "カービィ",
            "リトルマック",
            "Wii Fit トレーナー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "次の4人のうち、重さが一番大きいのは？",
        "options": [
            "射撃Mii",
            "シモン/リヒター",
            "キングクルール",
            "ピカチュウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、大ジャンプ高さが一番小さいのは？",
        "options": [
            "クロム",
            "ゼルダ",
            "ゼロスーツサムス",
            "クッパJr."
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、歩行加速量が一番大きいのは？",
        "options": [
            "リュウ",
            "アイク",
            "カズヤ",
            "テリー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "次の4人のうち、地上抵抗が一番大きいのは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "キングクルール",
            "ミュウツー",
            "ルキナ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "次の4人のうち、横強発生Fが一番小さいのは？",
        "options": [
            "スティーブ",
            "ネス",
            "ピーチ/デイジー",
            "勇者"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "次の4人のうち、シールドサイズが一番大きいのは？",
        "options": [
            "スティーブ",
            "クッパ",
            "ダックハント",
            "ロゼッタ＆チコ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "次の4人のうち、空上発生Fが一番小さいのは？",
        "options": [
            "ジョーカー",
            "アイスクライマー",
            "クラウド",
            "ミュウツー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "その場掴み長さが3番目に小さいファイターは？",
        "options": [
            "リンク",
            "ディディーコング",
            "フォックス",
            "勇者"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、空前全体Fが一番大きいのは？",
        "options": [
            "ピット/ブラックピット",
            "テリー",
            "リンク",
            "ケン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、上スマ全体Fが一番小さいのは？",
        "options": [
            "ガオガエン",
            "ロイ",
            "トゥーンリンク",
            "ルカリオ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "空前着地隙が3番目に大きいファイターは？",
        "options": [
            "キャプテン・ファルコン",
            "フォックス",
            "デデデ",
            "リザードン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、ダッシュ初速度が一番小さいのは？",
        "options": [
            "シーク",
            "リドリー",
            "リュカ",
            "シモン/リヒター"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "空N全体Fが3番目に大きいファイターは？",
        "options": [
            "アイク",
            "スネーク",
            "シュルク",
            "ソラ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "次の4人のうち、下スマ発生Fが一番小さいのは？",
        "options": [
            "マリオ",
            "シモン/リヒター",
            "ヨッシー",
            "射撃Mii"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "次の4人のうち、上強全体Fが一番大きいのは？",
        "options": [
            "ソラ",
            "ドクターマリオ",
            "マルス",
            "リザードン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "ダッシュ初速度が3番目に小さいファイターは？",
        "options": [
            "射撃Mii",
            "カズヤ",
            "ピクミン＆オリマー",
            "ドクターマリオ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "急降下速度が2番目に小さいファイターは？",
        "options": [
            "ロゼッタ＆チコ",
            "プリン",
            "カービィ",
            "ピーチ/デイジー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "次の4人のうち、下強発生Fが一番小さいのは？",
        "options": [
            "ピカチュウ",
            "アイク",
            "ヨッシー",
            "ゼルダ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、シールドサイズが一番小さいのは？",
        "options": [
            "ロボット",
            "ネス",
            "カムイ",
            "ピクミン＆オリマー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "次の4人のうち、DA 発生Fが一番大きいのは？",
        "options": [
            "ネス",
            "ピーチ/デイジー",
            "ガオガエン",
            "ソニック"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "次の4人のうち、小ジャンプ高さが一番小さいのは？",
        "options": [
            "カズヤ",
            "パックンフラワー",
            "カービィ",
            "カムイ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、小ジャンプ高さが一番小さいのは？",
        "options": [
            "ルキナ",
            "クラウド",
            "サムス/ダークサムス",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、下スマ発生Fが一番小さいのは？",
        "options": [
            "デデデ",
            "射撃Mii",
            "スティーブ",
            "剣術Mii"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "下強発生Fが2番目に小さいファイターは？",
        "options": [
            "ケン",
            "ロボット",
            "リュウ",
            "リュカ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、攻撃上がり距離が一番小さいのは？",
        "options": [
            "サムス/ダークサムス",
            "リュカ",
            "スネーク",
            "ウルフ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、空前着地隙が一番大きいのは？",
        "options": [
            "クッパJr.",
            "ソニック",
            "ゼルダ",
            "ディディーコング"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "攻撃上がり距離が2番目に大きいファイターは？",
        "options": [
            "ミュウツー",
            "リンク",
            "クッパ",
            "ドンキーコング"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、DA 全体Fが一番小さいのは？",
        "options": [
            "ドンキーコング",
            "カズヤ",
            "ドクターマリオ",
            "勇者"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "次の4人のうち、横強全体Fが一番小さいのは？",
        "options": [
            "マリオ",
            "ピチュー",
            "カービィ",
            "テリー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "次の4人のうち、小ジャンプ高さが一番大きいのは？",
        "options": [
            "ルキナ",
            "クラウド",
            "サムス/ダークサムス",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、小ジャンプ高さが一番小さいのは？",
        "options": [
            "ガオガエン",
            "ロイ",
            "ネス",
            "メタナイト"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、空下発生Fが一番小さいのは？",
        "options": [
            "キングクルール",
            "勇者",
            "フォックス",
            "リュカ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "攻撃上がり距離が3番目に大きいファイターは？",
        "options": [
            "ドンキーコング",
            "ガノンドルフ",
            "ミュウツー",
            "リンク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、崖掴まり姿勢が一番大きいのは？",
        "options": [
            "ゼロスーツサムス",
            "むらびと",
            "クラウド",
            "デデデ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、空後全体Fが一番大きいのは？",
        "options": [
            "Wii Fit トレーナー",
            "クッパJr.",
            "ガノンドルフ",
            "ベヨネッタ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "次の4人のうち、地上抵抗が一番小さいのは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "クッパJr.",
            "リンク",
            "アイク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "空中ジャンプ高さが3番目に小さいファイターは？",
        "options": [
            "ピット/ブラックピット",
            "メタナイト",
            "スティーブ",
            "カービィ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、最大歩行速度が一番小さいのは？",
        "options": [
            "パックンフラワー",
            "メタナイト",
            "リトルマック",
            "ピカチュウ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "空N発生Fが2番目に小さいファイターは？",
        "options": [
            "パックマン",
            "むらびと",
            "リトルマック",
            "ファルコ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "下強全体Fが3番目に大きいファイターは？",
        "options": [
            "サムス/ダークサムス",
            "クッパ",
            "シモン/リヒター",
            "ロックマン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "次の4人のうち、空中抵抗が一番大きいのは？",
        "options": [
            "パックマン",
            "Wii Fit トレーナー",
            "ピチュー",
            "クッパ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "次の4人のうち、小ジャンプ高さが一番大きいのは？",
        "options": [
            "ガオガエン",
            "ロイ",
            "ネス",
            "メタナイト"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "小ジャンプ高さが2番目に大きいファイターは？",
        "options": [
            "ゲッコウガ",
            "ベヨネッタ",
            "ルイージ",
            "ゼロスーツサムス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "空中加速が2番目に大きいファイターは？",
        "options": [
            "プリン",
            "パルテナ",
            "ピーチ/デイジー",
            "ワリオ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、重力が一番大きいのは？",
        "options": [
            "フォックス",
            "Wii Fit トレーナー",
            "リドリー",
            "ソラ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "地上抵抗が2番目に大きいファイターは？",
        "options": [
            "ピカチュウ",
            "ピット/ブラックピット",
            "ジョーカー",
            "ソニック"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "次の4人のうち、崖掴まり姿勢が一番小さいのは？",
        "options": [
            "ピクミン＆オリマー",
            "ルイージ",
            "テリー",
            "アイスクライマー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、下強発生Fが一番小さいのは？",
        "options": [
            "シーク",
            "ドンキーコング",
            "パックンフラワー",
            "ピット/ブラックピット"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、その場掴み発生が一番大きいのは？",
        "options": [
            "デデデ",
            "ゼルダ",
            "ウルフ",
            "クラウド"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "空後発生Fが3番目に小さいファイターは？",
        "options": [
            "ピカチュウ",
            "ロックマン",
            "ゼニガメ",
            "Wii Fit トレーナー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "次の4人のうち、空中抵抗が一番大きいのは？",
        "options": [
            "ピーチ/デイジー",
            "ヒカリ",
            "ミェンミェン",
            "ネス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "次の4人のうち、空上全体Fが一番小さいのは？",
        "options": [
            "ミェンミェン",
            "デデデ",
            "ピクミン＆オリマー",
            "クッパJr."
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、空中ジャンプ高さが一番小さいのは？",
        "options": [
            "クロム",
            "ゼロスーツサムス",
            "ピット/ブラックピット",
            "リュウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、重さが一番大きいのは？",
        "options": [
            "射撃Mii",
            "シュルク",
            "ディディーコング",
            "リュカ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、地上抵抗が一番大きいのは？",
        "options": [
            "バンジョー＆カズーイ",
            "ゲッコウガ",
            "マリオ",
            "ヨッシー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "最大歩行速度が3番目に大きいファイターは？",
        "options": [
            "ルキナ",
            "ゲッコウガ",
            "ゼロスーツサムス",
            "フォックス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "次の4人のうち、横強発生Fが一番大きいのは？",
        "options": [
            "ルフレ",
            "クッパ",
            "ホムラ",
            "ヨッシー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "次の4人のうち、空N着地隙が一番大きいのは？",
        "options": [
            "アイク",
            "ロゼッタ＆チコ",
            "プリン",
            "テリー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "次の4人のうち、空中ジャンプ高さが一番小さいのは？",
        "options": [
            "しずえ",
            "ピチュー",
            "Mr.ゲーム&ウォッチ",
            "ケン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、空前着地隙が一番小さいのは？",
        "options": [
            "クッパJr.",
            "ソニック",
            "ゼルダ",
            "ディディーコング"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、重力が一番大きいのは？",
        "options": [
            "ルイージ",
            "シュルク",
            "しずえ",
            "格闘Mii"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "次の4人のうち、空N着地隙が一番小さいのは？",
        "options": [
            "アイク",
            "ロゼッタ＆チコ",
            "プリン",
            "テリー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "空上発生Fが3番目に小さいファイターは？",
        "options": [
            "ディディーコング",
            "カズヤ",
            "シーク",
            "ドクターマリオ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "空後着地隙が3番目に小さいファイターは？",
        "options": [
            "リンク",
            "インクリング",
            "マリオ",
            "こどもリンク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "最大ダッシュ速度が2番目に大きいファイターは？",
        "options": [
            "ソニック",
            "シーク",
            "キャプテン・ファルコン",
            "リトルマック"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "次の4人のうち、空後着地隙が一番大きいのは？",
        "options": [
            "格闘Mii",
            "勇者",
            "ホムラ",
            "ルイージ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "空前発生Fが2番目に大きいファイターは？",
        "options": [
            "ドンキーコング",
            "アイスクライマー",
            "スネーク",
            "クラウド"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "次の4人のうち、崖掴まり姿勢が一番小さいのは？",
        "options": [
            "ゼロスーツサムス",
            "むらびと",
            "クラウド",
            "デデデ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、横スマ発生Fが一番大きいのは？",
        "options": [
            "ロイ",
            "プリン",
            "リトルマック",
            "サムス/ダークサムス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "次の4人のうち、崖掴まり姿勢が一番大きいのは？",
        "options": [
            "ゼルダ",
            "勇者",
            "ピチュー",
            "格闘Mii"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、空中ジャンプ高さが一番大きいのは？",
        "options": [
            "インクリング",
            "シュルク",
            "リザードン",
            "プリン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、DA 全体Fが一番大きいのは？",
        "options": [
            "クラウド",
            "パックンフラワー",
            "シモン/リヒター",
            "ピチュー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "ダッシュ初速度が3番目に大きいファイターは？",
        "options": [
            "ゼロスーツサムス",
            "リトルマック",
            "リザードン",
            "ソニック"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "空上全体Fが3番目に大きいファイターは？",
        "options": [
            "リンク",
            "トゥーンリンク",
            "こどもリンク",
            "射撃Mii"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、空下全体Fが一番大きいのは？",
        "options": [
            "アイスクライマー",
            "勇者",
            "ファルコ",
            "バンジョー＆カズーイ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "次の4人のうち、空N全体Fが一番大きいのは？",
        "options": [
            "ソニック",
            "パックマン",
            "ゼルダ",
            "アイク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "次の4人のうち、最大空中速度が一番小さいのは？",
        "options": [
            "プリン",
            "リュウ",
            "テリー",
            "ベレトス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "次の4人のうち、下強発生Fが一番大きいのは？",
        "options": [
            "ソラ",
            "リンク",
            "プリン",
            "射撃Mii"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、空N着地隙が一番小さいのは？",
        "options": [
            "ピカチュウ",
            "ファルコ",
            "キャプテン・ファルコン",
            "フォックス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "次の4人のうち、空中加速が一番大きいのは？",
        "options": [
            "シーク",
            "こどもリンク",
            "ゼルダ",
            "ルカリオ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、重さが一番大きいのは？",
        "options": [
            "ヨッシー",
            "パックマン",
            "ロボット",
            "ヒカリ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、空N発生Fが一番大きいのは？",
        "options": [
            "ダックハント",
            "ドクターマリオ",
            "剣術Mii",
            "クラウド"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "次の4人のうち、下強発生Fが一番小さいのは？",
        "options": [
            "ソラ",
            "リンク",
            "プリン",
            "射撃Mii"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "歩行加速量が2番目に小さいファイターは？",
        "options": [
            "セフィロス",
            "クッパ",
            "キングクルール",
            "バンジョー＆カズーイ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "大ジャンプ高さが3番目に小さいファイターは？",
        "options": [
            "プリン",
            "カズヤ",
            "スネーク",
            "カービィ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "上強発生Fが2番目に大きいファイターは？",
        "options": [
            "ガノンドルフ",
            "キャプテン・ファルコン",
            "アイク",
            "サムス/ダークサムス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "次の4人のうち、崖掴まり姿勢が一番大きいのは？",
        "options": [
            "スネーク",
            "格闘Mii",
            "剣術Mii",
            "ガオガエン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "空N発生Fが3番目に小さいファイターは？",
        "options": [
            "むらびと",
            "ファルコ",
            "パックマン",
            "ルイージ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "次の4人のうち、空上発生Fが一番大きいのは？",
        "options": [
            "ゲッコウガ",
            "ネス",
            "ミュウツー",
            "デデデ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "次の4人のうち、その場掴み発生が一番大きいのは？",
        "options": [
            "ロゼッタ＆チコ",
            "ロックマン",
            "ソニック",
            "カービィ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "空N着地隙が2番目に小さいファイターは？",
        "options": [
            "スティーブ",
            "ケン",
            "ロックマン",
            "リュウ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "DA 発生Fが3番目に小さいファイターは？",
        "options": [
            "ルイージ",
            "フシギソウ",
            "プリン",
            "シーク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "次の4人のうち、最大空中速度が一番小さいのは？",
        "options": [
            "Wii Fit トレーナー",
            "ドンキーコング",
            "ファルコ",
            "スネーク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "次の4人のうち、空上全体Fが一番大きいのは？",
        "options": [
            "ミェンミェン",
            "デデデ",
            "ピクミン＆オリマー",
            "クッパJr."
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "次の4人のうち、重力が一番小さいのは？",
        "options": [
            "ルイージ",
            "シュルク",
            "しずえ",
            "格闘Mii"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "次の4人のうち、空前全体Fが一番小さいのは？",
        "options": [
            "ガオガエン",
            "ヨッシー",
            "ウルフ",
            "セフィロス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、崖掴まり姿勢が一番大きいのは？",
        "options": [
            "ピクミン＆オリマー",
            "ルイージ",
            "テリー",
            "アイスクライマー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、空上着地隙が一番大きいのは？",
        "options": [
            "トゥーンリンク",
            "ベレトス",
            "格闘Mii",
            "こどもリンク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "次の4人のうち、空下着地隙が一番大きいのは？",
        "options": [
            "スネーク",
            "むらびと",
            "勇者",
            "カズヤ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "横強全体Fが3番目に大きいファイターは？",
        "options": [
            "デデデ",
            "ミェンミェン",
            "パルテナ",
            "ロックマン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "横スマ発生Fが3番目に小さいファイターは？",
        "options": [
            "ルキナ",
            "アイスクライマー",
            "マルス",
            "ピット/ブラックピット"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "次の4人のうち、空前発生Fが一番大きいのは？",
        "options": [
            "格闘Mii",
            "リドリー",
            "ファルコ",
            "インクリング"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "次の4人のうち、攻撃上がり距離が一番小さいのは？",
        "options": [
            "勇者",
            "ガノンドルフ",
            "パックマン",
            "ルイージ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "下スマ発生Fが2番目に大きいファイターは？",
        "options": [
            "リドリー",
            "キングクルール",
            "ミュウツー",
            "セフィロス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "空中抵抗が3番目に小さいファイターは？",
        "options": [
            "ルキナ",
            "マルス",
            "ウルフ",
            "剣術Mii"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "次の4人のうち、ダッシュ加速量が一番大きいのは？",
        "options": [
            "シーク",
            "ルカリオ",
            "ヨッシー",
            "ガオガエン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "次の4人のうち、大ジャンプ高さが一番小さいのは？",
        "options": [
            "シモン/リヒター",
            "ルイージ",
            "ゼロスーツサムス",
            "ゲッコウガ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、上スマ発生Fが一番小さいのは？",
        "options": [
            "ルキナ",
            "メタナイト",
            "勇者",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "空N全体Fが2番目に大きいファイターは？",
        "options": [
            "ロックマン",
            "アイク",
            "ソラ",
            "スネーク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "次の4人のうち、空N発生Fが一番小さいのは？",
        "options": [
            "ダックハント",
            "ドクターマリオ",
            "剣術Mii",
            "クラウド"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "次の4人のうち、上強全体Fが一番大きいのは？",
        "options": [
            "クラウド",
            "マリオ",
            "ベレトス",
            "ドンキーコング"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、空下発生Fが一番大きいのは？",
        "options": [
            "ルキナ",
            "ピカチュウ",
            "ソニック",
            "ロゼッタ＆チコ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "次の4人のうち、空中加速が一番大きいのは？",
        "options": [
            "リンク",
            "インクリング",
            "カムイ",
            "格闘Mii"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、最大落下速度が一番大きいのは？",
        "options": [
            "ウルフ",
            "ゼニガメ",
            "マリオ",
            "ロイ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "次の4人のうち、空中ジャンプ高さが一番大きいのは？",
        "options": [
            "クロム",
            "ゼロスーツサムス",
            "ピット/ブラックピット",
            "リュウ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、上スマ発生Fが一番小さいのは？",
        "options": [
            "ホムラ",
            "セフィロス",
            "リュカ",
            "ルキナ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "次の4人のうち、空後発生Fが一番大きいのは？",
        "options": [
            "ヒカリ",
            "ワリオ",
            "ホムラ",
            "ソニック"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "最大空中速度が2番目に大きいファイターは？",
        "options": [
            "プリン",
            "ロイ",
            "ミュウツー",
            "ヨッシー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "次の4人のうち、上スマ発生Fが一番小さいのは？",
        "options": [
            "パルテナ",
            "ベヨネッタ",
            "リュカ",
            "ピット/ブラックピット"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "次の4人のうち、ダッシュ加速量が一番小さいのは？",
        "options": [
            "ファルコ",
            "ベレトス",
            "リドリー",
            "キングクルール"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "次の4人のうち、空前発生Fが一番小さいのは？",
        "options": [
            "ホムラ",
            "ケン",
            "マリオ",
            "インクリング"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "次の4人のうち、ダッシュ加速量が一番大きいのは？",
        "options": [
            "ソニック",
            "トゥーンリンク",
            "ファルコ",
            "リンク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "重さが2番目に小さいファイターは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "プリン",
            "ゼニガメ",
            "ピチュー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "空後発生Fが3番目に大きいファイターは？",
        "options": [
            "キングクルール",
            "勇者",
            "デデデ",
            "シュルク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "次の4人のうち、下強全体Fが一番大きいのは？",
        "options": [
            "ルイージ",
            "デデデ",
            "ドンキーコング",
            "ベレトス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "次の4人のうち、空前着地隙が一番大きいのは？",
        "options": [
            "リンク",
            "ガノンドルフ",
            "マルス",
            "バンジョー＆カズーイ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、横スマ発生Fが一番大きいのは？",
        "options": [
            "シモン/リヒター",
            "トゥーンリンク",
            "クッパJr.",
            "ガオガエン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "次の4人のうち、空N全体Fが一番小さいのは？",
        "options": [
            "セフィロス",
            "ケン",
            "格闘Mii",
            "シモン/リヒター"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "DA 全体Fが2番目に小さいファイターは？",
        "options": [
            "トゥーンリンク",
            "ロボット",
            "フォックス",
            "ゲッコウガ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "次の4人のうち、急降下速度が一番大きいのは？",
        "options": [
            "カズヤ",
            "ベヨネッタ",
            "ディディーコング",
            "アイク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "次の4人のうち、空中ジャンプ高さが一番大きいのは？",
        "options": [
            "しずえ",
            "ピチュー",
            "Mr.ゲーム&ウォッチ",
            "ケン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、その場掴み発生が一番大きいのは？",
        "options": [
            "ベヨネッタ",
            "カズヤ",
            "格闘Mii",
            "マルス"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "次の4人のうち、下強発生Fが一番大きいのは？",
        "options": [
            "ロゼッタ＆チコ",
            "ゼニガメ",
            "サムス/ダークサムス",
            "ソラ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、上強発生Fが一番小さいのは？",
        "options": [
            "サムス/ダークサムス",
            "むらびと",
            "ワリオ",
            "ピクミン＆オリマー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "次の4人のうち、空後着地隙が一番大きいのは？",
        "options": [
            "リトルマック",
            "メタナイト",
            "ゲッコウガ",
            "ドクターマリオ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "その場掴み発生が2番目に小さいファイターは？",
        "options": [
            "マリオ",
            "カービィ",
            "リンク",
            "フォックス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "次の4人のうち、下強全体Fが一番大きいのは？",
        "options": [
            "ゼニガメ",
            "ピクミン＆オリマー",
            "ピカチュウ",
            "トゥーンリンク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "次の4人のうち、空後発生Fが一番小さいのは？",
        "options": [
            "カービィ",
            "しずえ",
            "ゼニガメ",
            "フォックス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "次の4人のうち、ダッシュ初速度が一番小さいのは？",
        "options": [
            "射撃Mii",
            "マリオ",
            "セフィロス",
            "ゼニガメ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "次の4人のうち、DA 発生Fが一番小さいのは？",
        "options": [
            "ソラ",
            "リュウ",
            "ワリオ",
            "ソニック"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "空上発生Fが2番目に大きいファイターは？",
        "options": [
            "射撃Mii",
            "セフィロス",
            "シモン/リヒター",
            "シュルク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "次の4人のうち、下スマ全体Fが一番大きいのは？",
        "options": [
            "ケン",
            "ルキナ",
            "ディディーコング",
            "キングクルール"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "空後発生Fが2番目に小さいファイターは？",
        "options": [
            "ピカチュウ",
            "ゼニガメ",
            "ロックマン",
            "シーク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "攻撃上がり距離が3番目に小さいファイターは？",
        "options": [
            "ルイージ",
            "スネーク",
            "リュカ",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、空中抵抗が一番小さいのは？",
        "options": [
            "パックマン",
            "Wii Fit トレーナー",
            "ピチュー",
            "クッパ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "上強発生Fが3番目に大きいファイターは？",
        "options": [
            "シュルク",
            "キャプテン・ファルコン",
            "アイク",
            "サムス/ダークサムス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "次の4人のうち、その場掴み発生が一番小さいのは？",
        "options": [
            "デデデ",
            "ゼルダ",
            "ウルフ",
            "クラウド"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "空N着地隙が3番目に小さいファイターは？",
        "options": [
            "リュウ",
            "ケン",
            "インクリング",
            "スティーブ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "次の4人のうち、下スマ全体Fが一番小さいのは？",
        "options": [
            "むらびと",
            "ルフレ",
            "こどもリンク",
            "ガオガエン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "次の4人のうち、ダッシュ加速量が一番大きいのは？",
        "options": [
            "ファルコ",
            "ベレトス",
            "リドリー",
            "キングクルール"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "次の4人のうち、上強発生Fが一番小さいのは？",
        "options": [
            "デデデ",
            "スティーブ",
            "ゲッコウガ",
            "リュカ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上強発生F"
    },
    {
        "question": "次の4人のうち、DA 発生Fが一番大きいのは？",
        "options": [
            "ソラ",
            "リュウ",
            "ワリオ",
            "ソニック"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "次の4人のうち、重力が一番大きいのは？",
        "options": [
            "ジョーカー",
            "シーク",
            "フシギソウ",
            "ソラ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "次の4人のうち、最大ダッシュ速度が一番小さいのは？",
        "options": [
            "ベレトス",
            "ミェンミェン",
            "格闘Mii",
            "ミュウツー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "次の4人のうち、空後発生Fが一番小さいのは？",
        "options": [
            "ロボット",
            "アイスクライマー",
            "ピーチ/デイジー",
            "ルキナ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後発生F"
    },
    {
        "question": "次の4人のうち、上スマ全体Fが一番大きいのは？",
        "options": [
            "マルス",
            "ディディーコング",
            "カズヤ",
            "シーク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "空後全体Fが2番目に大きいファイターは？",
        "options": [
            "ピチュー",
            "キングクルール",
            "パックンフラワー",
            "ヨッシー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "最大落下速度が2番目に小さいファイターは？",
        "options": [
            "カービィ",
            "ロゼッタ＆チコ",
            "プリン",
            "ピーチ/デイジー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "次の4人のうち、空下発生Fが一番大きいのは？",
        "options": [
            "格闘Mii",
            "クラウド",
            "ソニック",
            "ピチュー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "次の4人のうち、下スマ発生Fが一番大きいのは？",
        "options": [
            "マリオ",
            "シモン/リヒター",
            "ヨッシー",
            "射撃Mii"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ発生F"
    },
    {
        "question": "次の4人のうち、地上抵抗が一番小さいのは？",
        "options": [
            "バンジョー＆カズーイ",
            "ゲッコウガ",
            "マリオ",
            "ヨッシー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "次の4人のうち、最大空中速度が一番小さいのは？",
        "options": [
            "ミェンミェン",
            "デデデ",
            "ルイージ",
            "トゥーンリンク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "次の4人のうち、最大空中速度が一番大きいのは？",
        "options": [
            "ミェンミェン",
            "デデデ",
            "ルイージ",
            "トゥーンリンク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "次の4人のうち、大ジャンプ高さが一番小さいのは？",
        "options": [
            "リンク",
            "リザードン",
            "パルテナ",
            "ミェンミェン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、上強全体Fが一番小さいのは？",
        "options": [
            "剣術Mii",
            "クッパ",
            "ホムラ",
            "ピチュー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、空N発生Fが一番大きいのは？",
        "options": [
            "ディディーコング",
            "ドンキーコング",
            "クラウド",
            "ミュウツー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "次の4人のうち、空N全体Fが一番小さいのは？",
        "options": [
            "テリー",
            "スティーブ",
            "アイク",
            "フシギソウ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "次の4人のうち、歩行加速量が一番小さいのは？",
        "options": [
            "ソニック",
            "ヨッシー",
            "ルキナ",
            "ケン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "崖掴まり姿勢が3番目に小さいファイターは？",
        "options": [
            "セフィロス",
            "ガノンドルフ",
            "ゲッコウガ",
            "ソラ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、急降下速度が一番小さいのは？",
        "options": [
            "ロイ",
            "ネス",
            "シモン/リヒター",
            "ワリオ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "次の4人のうち、崖掴まり姿勢が一番小さいのは？",
        "options": [
            "クッパ",
            "しずえ",
            "ルイージ",
            "ヒカリ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、空N着地隙が一番大きいのは？",
        "options": [
            "マリオ",
            "パックマン",
            "ピット/ブラックピット",
            "ピチュー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N着地隙"
    },
    {
        "question": "次の4人のうち、ダッシュ初速度が一番大きいのは？",
        "options": [
            "ピチュー",
            "カズヤ",
            "フシギソウ",
            "アイスクライマー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "次の4人のうち、DA 全体Fが一番小さいのは？",
        "options": [
            "ネス",
            "ガノンドルフ",
            "デデデ",
            "ピット/ブラックピット"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "次の4人のうち、下スマ全体Fが一番小さいのは？",
        "options": [
            "ケン",
            "ルキナ",
            "ディディーコング",
            "キングクルール"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "その場掴み発生が3番目に小さいファイターは？",
        "options": [
            "フォックス",
            "リンク",
            "カービィ",
            "ネス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#その場掴み発生"
    },
    {
        "question": "横スマ発生Fが3番目に大きいファイターは？",
        "options": [
            "カズヤ",
            "デデデ",
            "アイク",
            "ガノンドルフ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "ダッシュ加速量が3番目に小さいファイターは？",
        "options": [
            "ルフレ",
            "カムイ",
            "シュルク",
            "ソラ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "次の4人のうち、ダッシュ加速量が一番小さいのは？",
        "options": [
            "シモン/リヒター",
            "リドリー",
            "リュカ",
            "キャプテン・ファルコン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "次の4人のうち、回避上がり距離が一番小さいのは？",
        "options": [
            "Wii Fit トレーナー",
            "サムス/ダークサムス",
            "ピット/ブラックピット",
            "アイク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "次の4人のうち、空N全体Fが一番大きいのは？",
        "options": [
            "テリー",
            "スティーブ",
            "アイク",
            "フシギソウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空N全体F"
    },
    {
        "question": "最大空中速度が2番目に小さいファイターは？",
        "options": [
            "ルイージ",
            "ガノンドルフ",
            "デデデ",
            "アイスクライマー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "次の4人のうち、空下発生Fが一番大きいのは？",
        "options": [
            "キングクルール",
            "勇者",
            "フォックス",
            "リュカ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "次の4人のうち、その場掴み長さが一番小さいのは？",
        "options": [
            "ゼニガメ",
            "マリオ",
            "マルス",
            "ロゼッタ＆チコ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "下スマ全体Fが3番目に大きいファイターは？",
        "options": [
            "ベレトス",
            "クッパ",
            "ロックマン",
            "アイク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "次の4人のうち、下強発生Fが一番大きいのは？",
        "options": [
            "シーク",
            "ドンキーコング",
            "パックンフラワー",
            "ピット/ブラックピット"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、空上発生Fが一番小さいのは？",
        "options": [
            "ピーチ/デイジー",
            "ガオガエン",
            "ベヨネッタ",
            "射撃Mii"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "次の4人のうち、急降下速度が一番大きいのは？",
        "options": [
            "リュカ",
            "サムス/ダークサムス",
            "インクリング",
            "キャプテン・ファルコン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "空下全体Fが3番目に大きいファイターは？",
        "options": [
            "リンク",
            "ロボット",
            "トゥーンリンク",
            "クッパ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "空中加速が3番目に小さいファイターは？",
        "options": [
            "カズヤ",
            "シモン/リヒター",
            "リトルマック",
            "ガノンドルフ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、その場掴み長さが一番大きいのは？",
        "options": [
            "ドクターマリオ",
            "ソニック",
            "ベヨネッタ",
            "インクリング"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#その場掴み長さ"
    },
    {
        "question": "次の4人のうち、空下着地隙が一番小さいのは？",
        "options": [
            "アイスクライマー",
            "ベヨネッタ",
            "アイク",
            "ミェンミェン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "地上抵抗が3番目に大きいファイターは？",
        "options": [
            "ピカチュウ",
            "ジョーカー",
            "Wii Fit トレーナー",
            "ピット/ブラックピット"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "最大空中速度が3番目に大きいファイターは？",
        "options": [
            "ミュウツー",
            "プリン",
            "ロイ",
            "クロム"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "DA 発生Fが3番目に大きいファイターは？",
        "options": [
            "勇者",
            "ホムラ",
            "リンク",
            "アイク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "次の4人のうち、空中ジャンプ高さが一番小さいのは？",
        "options": [
            "インクリング",
            "シュルク",
            "リザードン",
            "プリン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "下強発生Fが2番目に大きいファイターは？",
        "options": [
            "パルテナ",
            "バンジョー＆カズーイ",
            "キングクルール",
            "ベレトス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下強発生F"
    },
    {
        "question": "次の4人のうち、重さが一番小さいのは？",
        "options": [
            "射撃Mii",
            "シュルク",
            "ディディーコング",
            "リュカ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、攻撃上がり距離が一番大きいのは？",
        "options": [
            "クッパJr.",
            "サムス/ダークサムス",
            "シモン/リヒター",
            "ロゼッタ＆チコ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、空前着地隙が一番小さいのは？",
        "options": [
            "キャプテン・ファルコン",
            "キングクルール",
            "テリー",
            "ゲッコウガ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、空下全体Fが一番小さいのは？",
        "options": [
            "剣術Mii",
            "マリオ",
            "パルテナ",
            "リトルマック"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "次の4人のうち、横スマ全体Fが一番小さいのは？",
        "options": [
            "ワリオ",
            "ピチュー",
            "アイク",
            "ミュウツー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "空中加速が3番目に大きいファイターは？",
        "options": [
            "ロゼッタ＆チコ",
            "ピーチ/デイジー",
            "パルテナ",
            "ワリオ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、下強全体Fが一番大きいのは？",
        "options": [
            "ゼニガメ",
            "キャプテン・ファルコン",
            "ジョーカー",
            "ベレトス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "次の4人のうち、下強全体Fが一番小さいのは？",
        "options": [
            "ゼニガメ",
            "ピクミン＆オリマー",
            "ピカチュウ",
            "トゥーンリンク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "次の4人のうち、空上発生Fが一番小さいのは？",
        "options": [
            "キャプテン・ファルコン",
            "ゼニガメ",
            "アイク",
            "マルス"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "次の4人のうち、地上抵抗が一番大きいのは？",
        "options": [
            "カムイ",
            "ガノンドルフ",
            "パックマン",
            "ゼニガメ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "小ジャンプ高さが3番目に小さいファイターは？",
        "options": [
            "スティーブ",
            "プリン",
            "ロックマン",
            "カズヤ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、下強全体Fが一番小さいのは？",
        "options": [
            "ファルコ",
            "バンジョー＆カズーイ",
            "ケン",
            "リザードン"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "最大歩行速度が2番目に小さいファイターは？",
        "options": [
            "ガオガエン",
            "リュウ",
            "プリン",
            "カズヤ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大歩行速度"
    },
    {
        "question": "歩行加速量が2番目に大きいファイターは？",
        "options": [
            "リュウ",
            "ミュウツー",
            "ケン",
            "スティーブ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "次の4人のうち、空後着地隙が一番大きいのは？",
        "options": [
            "ベレトス",
            "ジョーカー",
            "テリー",
            "ピカチュウ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "次の4人のうち、回避上がり距離が一番大きいのは？",
        "options": [
            "Wii Fit トレーナー",
            "サムス/ダークサムス",
            "ピット/ブラックピット",
            "アイク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "次の4人のうち、空上全体Fが一番小さいのは？",
        "options": [
            "ベヨネッタ",
            "テリー",
            "クロム",
            "ミュウツー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上全体F"
    },
    {
        "question": "空中抵抗が3番目に大きいファイターは？",
        "options": [
            "プリン",
            "ミュウツー",
            "ゲッコウガ",
            "ワリオ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "次の4人のうち、最大空中速度が一番大きいのは？",
        "options": [
            "Wii Fit トレーナー",
            "ドンキーコング",
            "ファルコ",
            "スネーク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "次の4人のうち、攻撃上がり距離が一番大きいのは？",
        "options": [
            "ベレトス",
            "キングクルール",
            "カズヤ",
            "ゼニガメ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、大ジャンプ高さが一番大きいのは？",
        "options": [
            "クロム",
            "ゼルダ",
            "ゼロスーツサムス",
            "クッパJr."
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、横スマ全体Fが一番大きいのは？",
        "options": [
            "パルテナ",
            "ホムラ",
            "アイスクライマー",
            "ピカチュウ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "次の4人のうち、攻撃上がり距離が一番小さいのは？",
        "options": [
            "ルイージ",
            "クッパJr.",
            "ドクターマリオ",
            "パルテナ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "大ジャンプ高さが3番目に大きいファイターは？",
        "options": [
            "ゼロスーツサムス",
            "ルイージ",
            "ディディーコング",
            "ゲッコウガ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、下スマ全体Fが一番小さいのは？",
        "options": [
            "むらびと",
            "パックンフラワー",
            "ルカリオ",
            "リザードン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "次の4人のうち、横スマ発生Fが一番小さいのは？",
        "options": [
            "シモン/リヒター",
            "トゥーンリンク",
            "クッパJr.",
            "ガオガエン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "次の4人のうち、空後全体Fが一番小さいのは？",
        "options": [
            "ホムラ",
            "パックンフラワー",
            "ロックマン",
            "スティーブ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "横スマ発生Fが2番目に大きいファイターは？",
        "options": [
            "アイク",
            "スネーク",
            "ガノンドルフ",
            "デデデ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "重さが3番目に小さいファイターは？",
        "options": [
            "ゼニガメ",
            "プリン",
            "フォックス",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#重さ"
    },
    {
        "question": "次の4人のうち、空上発生Fが一番大きいのは？",
        "options": [
            "キャプテン・ファルコン",
            "ゼニガメ",
            "アイク",
            "マルス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "空中抵抗が2番目に小さいファイターは？",
        "options": [
            "マルス",
            "剣術Mii",
            "ルカリオ",
            "ウルフ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中抵抗"
    },
    {
        "question": "次の4人のうち、上スマ全体Fが一番小さいのは？",
        "options": [
            "アイク",
            "ルキナ",
            "射撃Mii",
            "ヨッシー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "次の4人のうち、空前全体Fが一番小さいのは？",
        "options": [
            "ホムラ",
            "シーク",
            "ベヨネッタ",
            "リトルマック"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、急降下速度が一番小さいのは？",
        "options": [
            "リュカ",
            "サムス/ダークサムス",
            "インクリング",
            "キャプテン・ファルコン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "横スマ発生Fが2番目に小さいファイターは？",
        "options": [
            "マルス",
            "サムス/ダークサムス",
            "ピット/ブラックピット",
            "ルキナ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "次の4人のうち、空下全体Fが一番大きいのは？",
        "options": [
            "剣術Mii",
            "マリオ",
            "パルテナ",
            "リトルマック"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "DA 全体Fが2番目に大きいファイターは？",
        "options": [
            "デデデ",
            "キングクルール",
            "ロックマン",
            "リンク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "空後着地隙が2番目に大きいファイターは？",
        "options": [
            "リザードン",
            "スネーク",
            "ロックマン",
            "クッパ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "横スマ全体Fが2番目に小さいファイターは？",
        "options": [
            "メタナイト",
            "ウルフ",
            "ルイージ",
            "ピクミン＆オリマー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#横スマ全体F"
    },
    {
        "question": "次の4人のうち、空後着地隙が一番小さいのは？",
        "options": [
            "リトルマック",
            "メタナイト",
            "ゲッコウガ",
            "ドクターマリオ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空後着地隙"
    },
    {
        "question": "横強全体Fが2番目に小さいファイターは？",
        "options": [
            "ゼニガメ",
            "カービィ",
            "フォックス",
            "スティーブ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "次の4人のうち、ダッシュ加速量が一番小さいのは？",
        "options": [
            "ソニック",
            "トゥーンリンク",
            "ファルコ",
            "リンク"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#ダッシュ加速量"
    },
    {
        "question": "次の4人のうち、上スマ発生Fが一番大きいのは？",
        "options": [
            "ホムラ",
            "セフィロス",
            "リュカ",
            "ルキナ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "次の4人のうち、空上着地隙が一番小さいのは？",
        "options": [
            "ルキナ",
            "剣術Mii",
            "リュウ",
            "リトルマック"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "次の4人のうち、空下全体Fが一番大きいのは？",
        "options": [
            "スネーク",
            "シーク",
            "ロボット",
            "ウルフ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "次の4人のうち、回避上がり距離が一番大きいのは？",
        "options": [
            "パックマン",
            "サムス/ダークサムス",
            "カズヤ",
            "ジョーカー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "次の4人のうち、最大ダッシュ速度が一番大きいのは？",
        "options": [
            "ベヨネッタ",
            "ゼロスーツサムス",
            "むらびと",
            "ガノンドルフ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "空下発生Fが2番目に大きいファイターは？",
        "options": [
            "スティーブ",
            "ロックマン",
            "デデデ",
            "ベレトス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "次の4人のうち、DA 全体Fが一番大きいのは？",
        "options": [
            "プリン",
            "ヒカリ",
            "テリー",
            "パルテナ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#DA 全体F"
    },
    {
        "question": "最大落下速度が3番目に小さいファイターは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "ロゼッタ＆チコ",
            "カービィ",
            "ピーチ/デイジー"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "次の4人のうち、空前発生Fが一番大きいのは？",
        "options": [
            "ロボット",
            "クッパJr.",
            "ヨッシー",
            "リュカ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "次の4人のうち、シールドサイズが一番大きいのは？",
        "options": [
            "ベレトス",
            "ダックハント",
            "ゼニガメ",
            "シュルク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "空下発生Fが2番目に小さいファイターは？",
        "options": [
            "メタナイト",
            "ルカリオ",
            "スネーク",
            "マリオ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空下発生F"
    },
    {
        "question": "次の4人のうち、横強全体Fが一番小さいのは？",
        "options": [
            "メタナイト",
            "ベレトス",
            "ゼロスーツサムス",
            "ケン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "次の4人のうち、ダッシュ初速度が一番大きいのは？",
        "options": [
            "シーク",
            "リドリー",
            "リュカ",
            "シモン/リヒター"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "次の4人のうち、回避上がり距離が一番小さいのは？",
        "options": [
            "マリオ",
            "カービィ",
            "バンジョー＆カズーイ",
            "ガノンドルフ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#回避上がり距離"
    },
    {
        "question": "空前全体Fが2番目に大きいファイターは？",
        "options": [
            "ソラ",
            "ベヨネッタ",
            "スネーク",
            "サムス/ダークサムス"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、最大ダッシュ速度が一番小さいのは？",
        "options": [
            "クラウド",
            "ケン",
            "ルフレ",
            "ワリオ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "横強発生Fが2番目に小さいファイターは？",
        "options": [
            "スネーク",
            "ゼニガメ",
            "リトルマック",
            "スティーブ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "次の4人のうち、空下着地隙が一番小さいのは？",
        "options": [
            "スネーク",
            "むらびと",
            "勇者",
            "カズヤ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "ダッシュ初速度が2番目に小さいファイターは？",
        "options": [
            "スティーブ",
            "カズヤ",
            "ピクミン＆オリマー",
            "ドクターマリオ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#ダッシュ初速度"
    },
    {
        "question": "重力が2番目に大きいファイターは？",
        "options": [
            "シーク",
            "フォックス",
            "格闘Mii",
            "ゲッコウガ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#重力"
    },
    {
        "question": "次の4人のうち、急降下速度が一番大きいのは？",
        "options": [
            "トゥーンリンク",
            "ゼニガメ",
            "マルス",
            "テリー"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "次の4人のうち、攻撃上がり距離が一番大きいのは？",
        "options": [
            "勇者",
            "ガノンドルフ",
            "パックマン",
            "ルイージ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、シールドサイズが一番小さいのは？",
        "options": [
            "ベレトス",
            "ダックハント",
            "ゼニガメ",
            "シュルク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "次の4人のうち、空後全体Fが一番大きいのは？",
        "options": [
            "リドリー",
            "ガオガエン",
            "ドクターマリオ",
            "シュルク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空後全体F"
    },
    {
        "question": "次の4人のうち、空前発生Fが一番小さいのは？",
        "options": [
            "シーク",
            "ドクターマリオ",
            "勇者",
            "リドリー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前発生F"
    },
    {
        "question": "次の4人のうち、空上着地隙が一番大きいのは？",
        "options": [
            "テリー",
            "ウルフ",
            "フシギソウ",
            "ロイ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "次の4人のうち、上強全体Fが一番小さいのは？",
        "options": [
            "ソラ",
            "ドクターマリオ",
            "マルス",
            "リザードン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、攻撃上がり距離が一番大きいのは？",
        "options": [
            "ルイージ",
            "クッパJr.",
            "ドクターマリオ",
            "パルテナ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#攻撃上がり距離"
    },
    {
        "question": "次の4人のうち、歩行加速量が一番大きいのは？",
        "options": [
            "ガノンドルフ",
            "ピーチ/デイジー",
            "ディディーコング",
            "ガオガエン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "次の4人のうち、最大ダッシュ速度が一番大きいのは？",
        "options": [
            "ベレトス",
            "ミェンミェン",
            "格闘Mii",
            "ミュウツー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "次の4人のうち、崖掴まり姿勢が一番小さいのは？",
        "options": [
            "ゼルダ",
            "勇者",
            "ピチュー",
            "格闘Mii"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#崖掴まり姿勢"
    },
    {
        "question": "次の4人のうち、空下全体Fが一番小さいのは？",
        "options": [
            "カムイ",
            "リザードン",
            "ケン",
            "ベヨネッタ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "次の4人のうち、空下着地隙が一番大きいのは？",
        "options": [
            "フシギソウ",
            "ゼロスーツサムス",
            "ロゼッタ＆チコ",
            "ゼルダ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "次の4人のうち、空下全体Fが一番小さいのは？",
        "options": [
            "メタナイト",
            "パックンフラワー",
            "セフィロス",
            "ジョーカー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空下全体F"
    },
    {
        "question": "最大空中速度が3番目に小さいファイターは？",
        "options": [
            "ルイージ",
            "カービィ",
            "ガノンドルフ",
            "アイスクライマー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "次の4人のうち、上スマ発生Fが一番小さいのは？",
        "options": [
            "むらびと",
            "ジョーカー",
            "クッパ",
            "カービィ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "次の4人のうち、DA 発生Fが一番小さいのは？",
        "options": [
            "リドリー",
            "ウルフ",
            "射撃Mii",
            "カービィ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "次の4人のうち、下強全体Fが一番大きいのは？",
        "options": [
            "ヒカリ",
            "カービィ",
            "ピット/ブラックピット",
            "シュルク"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#下強全体F"
    },
    {
        "question": "小ジャンプ高さが3番目に大きいファイターは？",
        "options": [
            "ルイージ",
            "ディディーコング",
            "ベヨネッタ",
            "ゼロスーツサムス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、上強全体Fが一番大きいのは？",
        "options": [
            "ルキナ",
            "ワリオ",
            "ルフレ",
            "ディディーコング"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、シールドサイズが一番大きいのは？",
        "options": [
            "ロボット",
            "ネス",
            "カムイ",
            "ピクミン＆オリマー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#シールドサイズ"
    },
    {
        "question": "次の4人のうち、空上発生Fが一番大きいのは？",
        "options": [
            "格闘Mii",
            "ルカリオ",
            "アイク",
            "むらびと"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "上スマ発生Fが3番目に小さいファイターは？",
        "options": [
            "ファルコ",
            "ピット/ブラックピット",
            "キングクルール",
            "リザードン"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#上スマ発生F"
    },
    {
        "question": "次の4人のうち、横スマ発生Fが一番小さいのは？",
        "options": [
            "カズヤ",
            "むらびと",
            "ドンキーコング",
            "ルフレ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横スマ発生F"
    },
    {
        "question": "次の4人のうち、空中加速が一番大きいのは？",
        "options": [
            "クロム",
            "カズヤ",
            "バンジョー＆カズーイ",
            "ウルフ"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中加速"
    },
    {
        "question": "次の4人のうち、DA 発生Fが一番小さいのは？",
        "options": [
            "Wii Fit トレーナー",
            "ゲッコウガ",
            "サムス/ダークサムス",
            "ケン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#DA 発生F"
    },
    {
        "question": "次の4人のうち、空前着地隙が一番小さいのは？",
        "options": [
            "ガノンドルフ",
            "ヒカリ",
            "シーク",
            "クラウド"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter3.html#空前着地隙"
    },
    {
        "question": "次の4人のうち、空N発生Fが一番大きいのは？",
        "options": [
            "クッパJr.",
            "ケン",
            "こどもリンク",
            "パルテナ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空N発生F"
    },
    {
        "question": "次の4人のうち、空上着地隙が一番小さいのは？",
        "options": [
            "トゥーンリンク",
            "ファルコ",
            "フォックス",
            "ピーチ/デイジー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上着地隙"
    },
    {
        "question": "次の4人のうち、空前全体Fが一番大きいのは？",
        "options": [
            "ゼロスーツサムス",
            "リドリー",
            "ヒカリ",
            "ピカチュウ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter3.html#空前全体F"
    },
    {
        "question": "次の4人のうち、大ジャンプ高さが一番大きいのは？",
        "options": [
            "パックンフラワー",
            "スネーク",
            "カービィ",
            "Mr.ゲーム&ウォッチ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#大ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、上スマ全体Fが一番大きいのは？",
        "options": [
            "アイク",
            "ルキナ",
            "射撃Mii",
            "ヨッシー"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#上スマ全体F"
    },
    {
        "question": "次の4人のうち、空下着地隙が一番大きいのは？",
        "options": [
            "アイスクライマー",
            "ベヨネッタ",
            "アイク",
            "ミェンミェン"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter3.html#空下着地隙"
    },
    {
        "question": "次の4人のうち、急降下速度が一番大きいのは？",
        "options": [
            "フシギソウ",
            "ピーチ/デイジー",
            "ケン",
            "トゥーンリンク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#急降下速度"
    },
    {
        "question": "次の4人のうち、横強全体Fが一番大きいのは？",
        "options": [
            "マリオ",
            "ピチュー",
            "カービィ",
            "テリー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter2.html#横強全体F"
    },
    {
        "question": "次の4人のうち、地上抵抗が一番小さいのは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "キングクルール",
            "ミュウツー",
            "ルキナ"
        ],
        "answer": 1,
        "refLink": "./parameter/parameter1.html#地上抵抗"
    },
    {
        "question": "上強全体Fが2番目に小さいファイターは？",
        "options": [
            "ゼニガメ",
            "リュウ",
            "ケン",
            "スティーブ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#上強全体F"
    },
    {
        "question": "次の4人のうち、歩行加速量が一番小さいのは？",
        "options": [
            "マリオ",
            "サムス/ダークサムス",
            "シュルク",
            "ピカチュウ"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#歩行加速量"
    },
    {
        "question": "次の4人のうち、最大空中速度が一番大きいのは？",
        "options": [
            "勇者",
            "リンク",
            "しずえ",
            "ソニック"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#最大空中速度"
    },
    {
        "question": "次の4人のうち、空上発生Fが一番小さいのは？",
        "options": [
            "格闘Mii",
            "ルカリオ",
            "アイク",
            "むらびと"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter3.html#空上発生F"
    },
    {
        "question": "空中ジャンプ高さが2番目に大きいファイターは？",
        "options": [
            "ミュウツー",
            "カズヤ",
            "ファルコ",
            "ヨッシー"
        ],
        "answer": 3,
        "refLink": "./parameter/parameter1.html#空中ジャンプ高さ"
    },
    {
        "question": "次の4人のうち、最大落下速度が一番小さいのは？",
        "options": [
            "プリン",
            "ロイ",
            "ファルコ",
            "カムイ"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大落下速度"
    },
    {
        "question": "最大ダッシュ速度が3番目に大きいファイターは？",
        "options": [
            "リトルマック",
            "ヒカリ",
            "シーク",
            "キャプテン・ファルコン"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter1.html#最大ダッシュ速度"
    },
    {
        "question": "横強発生Fが2番目に大きいファイターは？",
        "options": [
            "ピクミン＆オリマー",
            "ミェンミェン",
            "セフィロス",
            "リンク"
        ],
        "answer": 0,
        "refLink": "./parameter/parameter2.html#横強発生F"
    },
    {
        "question": "次の4人のうち、下スマ全体Fが一番大きいのは？",
        "options": [
            "カービィ",
            "ネス",
            "勇者",
            "スネーク"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter2.html#下スマ全体F"
    },
    {
        "question": "次の4人のうち、小ジャンプ高さが一番大きいのは？",
        "options": [
            "Mr.ゲーム&ウォッチ",
            "シーク",
            "ゲッコウガ",
            "セフィロス"
        ],
        "answer": 2,
        "refLink": "./parameter/parameter1.html#小ジャンプ高さ"
    }
];

  // Seeded random based on date
  function getDailyQuestionIndex() {
    const today = new Date();
    const seed =
      today.getFullYear() * 10000 +
      (today.getMonth() + 1) * 100 +
      today.getDate();
    return seed % quizData.length;
  }

  const questionIndex = getDailyQuestionIndex();
  const currentQuiz = quizData[questionIndex];

  // Check LocalStorage
  const todayStr = new Date().toDateString();
  const lastPlayed = localStorage.getItem('smashAna_lastPlayed');
  let streak = parseInt(localStorage.getItem('smashAna_streak') || '0');
  let totalCorrect = parseInt(localStorage.getItem('smashAna_totalCorrect') || '0');

  // UI Elements
  quizContainer.innerHTML = `
        <div class="daily-quiz-box" style="background: #fff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin: 20px auto; max-width: 600px; text-align: center;">
            <h3 style="color: #e60012; margin-bottom: 15px;">今日のスマブラクイズ</h3>
            <div id="quiz-content">
                <p class="quiz-question" style="font-weight: bold; font-size: 1.1em; margin-bottom: 20px; color: #000000;">${currentQuiz.question}</p>
                <div class="quiz-options" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    ${currentQuiz.options
                      .map(
                        (opt, i) => `
                        <button class="quiz-option-btn" data-index="${i}" style="padding: 10px; background: #f0f0f0; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; transition: background 0.2s;">
                            ${opt}
                        </button>
                    `
                      )
                      .join('')}
                </div>
            </div>
            <div id="quiz-result" style="display: none; margin-top: 20px;">
                <p class="result-msg" style="font-size: 1.2em; font-weight: bold; margin-bottom: 20px;"></p>
                <div class="quiz-stats" style="display: flex; justify-content: center; gap: 20px; color: #666; font-size: 0.9em; margin-top: 5px;">
                    <p class="streak-msg"></p>
                    <p class="total-msg"></p>
                </div>
            </div>
        </div>
    `;

  // Handle clicks
  const optionBtns = quizContainer.querySelectorAll('.quiz-option-btn');
  const resultDiv = document.getElementById('quiz-result');
  const resultMsg = resultDiv.querySelector('.result-msg');
  const streakMsg = resultDiv.querySelector('.streak-msg');
  const totalMsg = resultDiv.querySelector('.total-msg');
  const quizContent = document.getElementById('quiz-content');

  // If already played today
  if (lastPlayed === todayStr) {
    const storedResult = localStorage.getItem('smashAna_lastResult');
    // If no stored result (legacy), default to true (correct-like behavior?) or just pass undefined?
    // Let's pass storedResult === 'correct'. If null, it's false.
    // But if null, we might want to default to "Answered" message.
    // showResult will handle this.
    showResult(storedResult === 'correct', true); 
  } else {
    optionBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const selectedIndex = parseInt(this.dataset.index);
        checkAnswer(selectedIndex);
      });
    });
  }

  function checkAnswer(selectedIndex) {
    const isCorrect = selectedIndex === currentQuiz.answer;

    // Update Stats
    localStorage.setItem('smashAna_lastPlayed', todayStr);

    if (isCorrect) {
      // Check if streak continues (last played was yesterday)
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();

      // Actually, simplest logic: if lastPlayed was NOT yesterday (and not today), reset streak?
      // But we just updated lastPlayed to today.
      // Let's rely on retrieving the OLD lastPlayed before overwriting.
      // Wait, I overwrote it already above? No, I put it in `checkAnswer`.
      // But I need to know the PREVIOUS lastPlayed to calculate streak.

      // Let's redo:
      // logic is tricky without persistent storage before update.
      // But assuming user plays daily.

      // Correct logic:
      // If lastPlayed was yesterday -> streak++
      // If lastPlayed was today -> do nothing (already handled)
      // If lastPlayed was before yesterday -> streak = 1

      // Since I haven't stored 'today' yet in this block:
      const prevLastPlayed = lastPlayed;

      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);

      if (prevLastPlayed === yesterdayDate.toDateString()) {
        streak++;
      } else if (prevLastPlayed !== todayStr) {
        streak = 1; // Reset or start new
      }

      localStorage.setItem('smashAna_streak', streak);
      totalCorrect++;
      localStorage.setItem('smashAna_totalCorrect', totalCorrect);
    } else {
      streak = 0;
      localStorage.setItem('smashAna_streak', 0);
    }
    localStorage.setItem('smashAna_lastPlayed', todayStr);
    localStorage.setItem('smashAna_lastResult', isCorrect ? 'correct' : 'incorrect');

    showResult(isCorrect, false);
  }

  function showResult(isCorrect, isAlreadyPlayed) {
    quizContent.style.display = 'none';
    resultDiv.style.display = 'block';

    let msg = '';
    let color = '';

    if (isCorrect) {
      msg = '正解！ナイススマッシュ！';
      color = '#2ecc71';
    } else {
      msg = `残念... 正解は「${currentQuiz.options[currentQuiz.answer]}」でした。`;
      color = '#e74c3c';
    }

    if (isAlreadyPlayed) {
       // If isCorrect is literally false but maybe it was just undefined (legacy)? 
       // We can't distinguish easily if passed as boolean.
       // Visual indication that it's a past record.
       msg = "【回答済み】 " + msg;
    }

    resultMsg.innerHTML = msg;
    resultMsg.style.color = color;

    if (currentQuiz.refLink) {
         resultMsg.innerHTML += `<br><br><a href="${currentQuiz.refLink}" target="_blank" style="font-size: 0.9em; margin-right: 10px; margin-top: 20px; color: #007bff;">詳細はこちら</a>`;
    }

    // Always show review button so user can check question immediately after answering
    resultMsg.innerHTML += `<button id="review-quiz-btn" style="padding: 10px; cursor:pointer; background-color: #6c757d; color: white; border: none; border-radius: 5px; margin-top: 10px;">問題を確認する</button>`;
    
    // Use timeout to ensure element exists
    setTimeout(() => {
        const reviewBtn = document.getElementById('review-quiz-btn');
        if(reviewBtn) {
            reviewBtn.onclick = function() {
                quizContent.style.display = 'block';
                resultDiv.style.display = 'none';
                highlightAnswer();
            };
        }
    }, 0);

    streakMsg.textContent = `連続正解数: ${streak}問`;
    totalMsg.textContent = `累計正解数: ${totalCorrect}問`;
  }

  function highlightAnswer() {
      optionBtns.forEach((btn, i) => {
          btn.disabled = false;
          btn.style.cursor = 'pointer';
          if (i === currentQuiz.answer) {
              btn.style.background = '#2ecc71';
              btn.style.color = '#fff';
              btn.style.fontWeight = 'bold';
          } else {
              btn.style.opacity = '0.6';
          }
          btn.onclick = function() {
              quizContent.style.display = 'none';
              resultDiv.style.display = 'block';
          };
      });
  }
});
