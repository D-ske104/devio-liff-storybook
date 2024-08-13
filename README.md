# LIFF + Storybook

以下の記事で紹介しているサンプルプロジェクトです

[LIFF MockでStorybookにLIFFアプリコンポーネントを作成する | DevelopersIO](https://dev.classmethod.jp/articles/liff-mock-with-storybook/)

## 環境変数

`VITE_LIFF_ID` には LIFFアプリのIDを設定します。
[LINE Developers コンソール](https://developers.line.biz/console/)より、対象チャネルの **LIFF** タブで確認できます。

内部チャネルと環境変数ファイルの対応関係は以下の通りです。

|内部チャネル|環境変数ファイル名|
|---|---|
|開発用|.env.development|
|審査用|.env.production|
|本番用|.env.staging|
