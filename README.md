# lctech-Frontend-Repo

### 套件想法

假設我們要開發一個桌面版的 APP，我們會需要至少以下的套件。

- 首先以[electron-vite](https://evite.netlify.app/) 為底起一個
  有 electron + vite + vue3 + typeScript + eslint + prettier 的基本專案。
- 為了減省時間，避免重複造輪，UI 採用[element-plus](https://element-plus.org/zh-CN/)
  再搭配自動載入，減少打包後的檔案大小。
- 現在不寫 OOM 或 BEM CSS 了，用[tailwindcss](https://tailwindcss.com/docs/guides/vite)
  可以省去命名與巢狀的痛苦。
- 需要切換頁面就交給老面孔[vue-router](https://router.vuejs.org/)
- electron 本身的 devtools 沒有 vue plugin，所以需要
  [electron-devtools-installer](https://github.com/MarshallOfSound/electron-devtools-installer) 幫我們安裝 vue plugin (但這個取決於開發者電腦上安裝的 plugin)。
- 需要[axios](https://github.com/axios/axios) 讓我們更好的使用 XMLHttpRequest。
- 當 APP 用戶多起來時，就需要多國語系[vue-i18n](https://vue-i18n.intlify.dev/) ，
  但麻煩的是 vite 搭 vue-18n 直接用會有問題，需要掛一個 plugin 才能解決[@intlify/unplugin-vue-i18n](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) 。

### 開發與設定

- prettier 做了縮排、空格等程式碼樣式的處理
- typeScript + eslint 檢查是否有語法錯誤
  在專案中也有`npm run lint`直接使用

這專案中這三者皆已被使用。三管齊下不僅可監管程式碼的品質，也確保程式碼符合規範。

### 資料夾結構

| 資料夾   | 功能                       |
| -------- | -------------------------- |
| views    | router 顯示用的頁面        |
| layout   | route 需要的 layout        |
| router   | router                     |
| utils    | 工具類或轉換類的函式       |
| const    | 需被定義且不會被變更的變數 |
| types    | 需被定義的型別             |
| stores   | 管理被組件共用的狀態       |
| services | API 相關的函式             |
| i18n     | 多國語系以及語言包等       |

### 使用說明

```sh
node: v16.13.1
npm install
npm run dev
```

這專案是能正常`run`的。

| 功能         | 快捷鍵          |
| ------------ | --------------- |
| 開啟 devtool | command+shift+I |
| 關閉 app     | command+Q       |
