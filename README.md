# プロフィール帳メーカー

JAWS PLAYERS向けのプロフィール帳をブラウザだけで作る静的サイトです。フォームの内容を `assets/profile-sheet.png` に合成し、元画像と同じ解像度のPNGとして保存できます。

## 主な機能

- 入力内容のリアルタイムCanvasプレビュー
- 日本語の自動改行、禁則処理、文字サイズ・行間の自動調整
- PNG/JPEG/WebPのアイコン画像挿入（拡大・位置調整・斜め枠クリップ）
- STR / INT / VIT / DEX / AGIのレーダーグラフ
- 元画像解像度でのPNG保存と、長押し保存用画像の表示
- 任意でのlocalStorage一時保存（アップロード画像は保存しません）
- スマートフォン用の入力・プレビュー切り替えと、320px幅対応
- `?debug=1` による座標確認

## ファイル構成

- `index.html`: ページ構造
- `style.css`: レスポンシブ表示と操作UI
- `script.js`: フォーム生成、Canvas描画、保存、端末内保存
- `config.js`: 入力欄、文字数、描画座標、グラフ、画像枠の設定
- `assets/profile-sheet.png`: 背景画像
- `.nojekyll`: GitHub PagesでJekyll処理を無効化

## ローカルでの確認方法

`index.html` を直接開くこともできます。ブラウザのローカルファイル制限を避けるには、このディレクトリで次を実行してください。

```sh
python -m http.server 8000
```

その後、ブラウザで `http://localhost:8000/` を開きます。

## GitHub Pagesで公開する方法

1. GitHubへリポジトリを作成
2. ファイルをmainブランチへ配置
3. Settingsを開く
4. Pagesを開く
5. Deploy from a branchを選択
6. mainブランチとrootを選択
7. 表示されたURLへアクセス

参照はすべて相対パスなので、プロジェクトページでもそのまま動作します。

## 背景・描画位置の調整

背景画像は `assets/profile-sheet.png` に置きます。Canvasの内部サイズは画像の実寸から自動設定されます。

入力欄は `config.js` の `fields` で調整します。`x`, `y`, `width`, `height` は画像全体を1とした比率です。`fontSize`, `minFontSize`, `lineHeight`, `align`, `verticalAlign`, `padding` も項目ごとに変更できます。文字数制限は各項目の `maxLength` を変更してください。

URL末尾へ `?debug=1`（例: `http://localhost:8000/?debug=1`）を付けると、文字枠、id、アイコン枠、グラフ範囲がCanvas上に表示されます。Canvasをクリックすると実座標と比率を確認・コピーできます。デバッグ線は保存画像には入りません。

能力値グラフは `config.js` の `radar.centerX`, `centerY`, `radius` で調整します。アイコン画像の切り抜き範囲は `portrait.points` の4点（左上、右上、右下、左下）を比率で変更します。

## 個人情報の扱い

外部API、解析サービス、CDNを使わず、入力、画像読込、合成、PNG生成はすべて利用者のブラウザ内で行います。「この端末に入力内容を一時保存する」がオンの場合だけ文字入力と能力値をlocalStorageへ保存します。画像ファイルはlocalStorageへ保存しません。

## 既知の制限

- 端末・ブラウザによって日本語フォントの字形や改行位置が少し変わります。
- iOSなど自動ダウンロードが制限される環境では、ページ下部に出る完成画像を長押しして保存してください。
- 非常に縦横比の大きい画像は中央coverで切り取られます。調整スライダーで位置を合わせてください。
- 背景デザインを変更した場合は、各描画比率の再調整が必要です。
