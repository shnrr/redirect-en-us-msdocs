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
  //https://docs.microsoft.com/en-us/hoge
  //$1 = docs.microsoft.com, $2=hoge
  const msDocsUrlReg = new RegExp('https://(.+?)/\\w{2}-\\w{2}/(.*)', 'ig');
  document.onkeydown = function (e) {
    if (e.keyCode == 39) {
      // 右カーソル キーをクリックで en-us に切り替え
      const currentUrl = location.href; // 現在のページのURLを取得
      if (currentUrl.match(msDocsUrlReg)) {
        const nextPage = currentUrl.replace(msDocsUrlReg, "https://$1/en-us/$2"); // マッチさせた文字列以外を置換
        console.log({"nextPage" : nextPage});
        location.href = nextPage;
      }
    }
    if (e.keyCode == 37) {
      // 左カーソル キーをクリックで ja-jp に切り替え
      const currentUrl = location.href; // 現在のページのURLを取得
      if (currentUrl.match(msDocsUrlReg)) {
        const nextPage = currentUrl.replace(msDocsUrlReg, "https://$1/ja-jp/$2"); // マッチさせた文字列以外を置換
        console.log({"nextPage" : nextPage});
        location.href = nextPage;
      }
    }
  };
  
})();
