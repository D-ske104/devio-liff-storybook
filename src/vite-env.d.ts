/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * LIFFアプリのID
   * @see https://developers.line.biz/ja/docs/liff/registering-liff-apps/#registering-liff-app
   */
  readonly VITE_LIFF_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
