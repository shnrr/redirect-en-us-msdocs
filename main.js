(function () {

  document.onkeydown = function (e) {
    if (e.keyCode == 39) {
      // 右カーソル キーをクリックで en-us に切り替え
      const currentUrl = location.href; // 現在のページのURLを取得
      const msDocsUrlReg = new RegExp('https://docs.microsoft.com/\\w{2}-\\w{2}/(.*)', 'ig');
      if (currentUrl.match(msDocsUrlReg)) {
        const nextPage = currentUrl.replace(msDocsUrlReg, "https://docs.microsoft.com/en-us/$1"); // マッチさせた文字列以外を置換
        console.log({"nextPage" : nextPage});
        location.href = nextPage;
      }
    }
    if (e.keyCode == 37) {
      // 左カーソル キーをクリックで ja-jp に切り替え
      const currentUrl = location.href; // 現在のページのURLを取得
      const msDocsUrlReg = new RegExp('https://docs.microsoft.com/\\w{2}-\\w{2}/(.*)', 'ig');
      if (currentUrl.match(msDocsUrlReg)) {
        const nextPage = currentUrl.replace(msDocsUrlReg, "https://docs.microsoft.com/ja-jp/$1"); // マッチさせた文字列以外を置換
        console.log({"nextPage" : nextPage});
        location.href = nextPage;
      }
    }
  };

})();