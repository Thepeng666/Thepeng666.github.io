document.onkeydown = function (e) {
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return btf.snackbarShow("你真坏，不能打开控制台喔!"), event.keyCode = 0, event.returnValue = !1, !1
};

// 个性化Title
var OriginTitle = document.title
var titleTime
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    $('[rel="icon"]').attr('href', '/img/favicon.ico')
    document.title = '欧巴，快回到Thepengの博客'
    clearTimeout(titleTime)
  } else {
    $('[rel="icon"]').attr('href', '/img/favicon.ico')
    document.title = '欢迎回来~~' + OriginTitle
    titleTime = setTimeout(function () {
      document.title = OriginTitle
    }, 2000)
  }
})