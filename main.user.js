// ==UserScript==
// @name         redirect en-us MS Docs
// @namespace    none
// @version      0.2
// @description  try to take over the world!
// @author       shnarita
// @match        https://docs.microsoft.com/*
// @match        https://learn.microsoft.com/*
// @grant        none
// @updateURL    https://github.com/shnrr/redirect-en-us-msdocs/raw/master/main.user.js
// @downloadURL  https://github.com/shnrr/redirect-en-us-msdocs/raw/master/main.user.js
// @supportURL   https://github.com/shnrr/redirect-en-us-msdocs/
// ==/UserScript==

(function () {
  // https://docs.microsoft.com/en-us/hoge
  // $1 = docs.microsoft.com, $2=hoge
  const msDocsUrlReg = /https:\/\/(.+?)\/\w{2}-\w{2}\/(.*)/i;
  const docsUrlPattern = /https:\/\/([^\/]+)\/(\w{2}-\w{2})\/(.+)/i;

  document.addEventListener('keydown', async function (e) {
    const currentUrl = location.href; // 現在のページのURLを取得

    if (e.key === 'ArrowRight') { // 右カーソルキーで en-us に切り替え
      if (currentUrl.match(msDocsUrlReg) && !currentUrl.includes('/en-us/')) {
        const nextPage = currentUrl.replace(msDocsUrlReg, "https://$1/en-us/$2");
        console.log({ nextPage });
        location.href = nextPage;
      }
    }

    if (e.key === 'ArrowLeft') { // 左カーソルキーで ja-jp に切り替え
      if (currentUrl.match(msDocsUrlReg) && !currentUrl.includes('/ja-jp/')) {
        const nextPage = currentUrl.replace(msDocsUrlReg, "https://$1/ja-jp/$2");
        console.log({ nextPage });
        location.href = nextPage;
      }
    }
  });
})();