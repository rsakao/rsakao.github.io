# AI Product Builder Portfolio

公開・運用している個人開発の成果物を主役にした、GitHub Pages向けの1ページポートフォリオです。現在は仕事や相談の募集を目的とせず、制作物、プロフィール、制作の考え方、noteの記録という順序にしています。ビルドツールや外部ライブラリを使わないため、軽量で壊れにくく、将来別のポートフォリオ基盤へ内容を移しやすい構成です。

デザインは[デジタル庁デザインシステム](https://design.digital.go.jp/dads/)の可読性、情報階層、配色、操作領域、アクセシビリティの考え方を参考に、個人ポートフォリオ向けに調整しています。デジタル庁の公式サイトまたは公式コンポーネント実装ではありません。

## 内容を更新する場所

原則として [`site.config.js`](./site.config.js) だけを編集します。

1. `projects` に公開したプロダクトを追加する
2. `bio` と `stack` を現在の経験に合わせて更新する
3. `achievements` に制作の考え方を追加する
4. `socialLinks` にnote、Zenn、LinkedInなどの公開URLを追加する

プロダクトは `value`（利用者への価値）、`problem`（解決した課題）、`solution`（解決方法）、`aiUsage`（特徴的なAI活用）、`outcomes`（公開・利用の到達点）、`tech`（主要技術）、`links`（公開先）を1か所で管理します。文章はProblem / Solutionを各1〜2文、AI活用は1〜2個、技術と成果は短いタグにすると読みやすく保てます。

プロダクトには複数のリンクを設定できます。`links` の項目を増やし、プロダクトページ、App Store、GitHubなどを並べてください。URLが空のリンクとSNSは画面に表示されません。

未確定の社内表彰、開発中の試作品、公開成果として見せたいか判断できていないものは掲載しません。正式名称、公開状態、掲載意図を確認できてから追加する方針です。

## ローカルで確認する

追加インストールは不要です。このフォルダで次を実行します。

```bash
python3 -m http.server 8000
```

ブラウザで [http://localhost:8000](http://localhost:8000) を開きます。終了するときはターミナルで `Ctrl+C` を押します。

## GitHub Pagesで公開する

1. GitHubに新しいリポジトリを作成します。
2. このフォルダの内容を `main` ブランチへpushします。
3. GitHubのリポジトリで **Settings → Pages** を開きます。
4. **Build and deployment → Source** を **GitHub Actions** にします。
5. **Actions** タブの `Deploy portfolio to GitHub Pages` が完了するのを待ちます。
6. 完了画面に表示されるURLを開きます。

以降は `main` ブランチへpushするたびに自動で再公開されます。

## 独自ドメインを使う

1. [`CNAME.example`](./CNAME.example) を `CNAME` に改名します。
2. 中身を `portfolio.example.com` のような実際のドメイン1行だけにします。説明コメントは削除してください。
3. ドメイン管理サービスで、GitHub Pages向けのDNSレコードを設定します。
4. GitHubの **Settings → Pages → Custom domain** に同じドメインを入力します。
5. DNS確認後、**Enforce HTTPS** を有効にします。

DNS設定値はユーザーサイト（`account.github.io`）とプロジェクトサイト（`account.github.io/repository`）で異なるため、公開時点の[GitHub公式ドキュメント](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)に従ってください。

将来EngineVerseなどへ移す場合は、独自ドメインのDNSの向き先を新サービスへ変更すれば、SNSや名刺に載せたURLを維持できます。

## ファイル構成

```text
.
├── .github/workflows/deploy-pages.yml  # GitHub Pages自動デプロイ
├── assets/                             # faviconとOG画像
├── app-ads.txt                         # AdMobの販売者情報（削除しない）
├── CNAME.example                       # 独自ドメイン設定の見本
├── index.html                          # 1ページの構造
├── script.js                           # 設定の表示と軽いアニメーション
├── site.config.js                      # 原則ここだけ編集
└── styles.css                          # デザインとレスポンシブ対応
```

## 公開前チェック

- 各プロダクトの公開状態とリンク先が正しい
- App Storeリンクは公開確認後に追加した
- 社内情報や未公開プロジェクトを含めていない
- スマートフォンとPCで表示を確認した
- note、App Store、Chromeウェブストアなどの公開リンクが実際に開くことを確認した
- 公開してよい情報だけが含まれている
- 独自ドメインを使う場合はHTTPSが有効になっている

## カスタマイズ

色は `styles.css` 冒頭の `:root` にまとめています。主要な配色は `--primary`、`--text`、`--surface-subtle`、`--border` を変更するだけで調整できます。
