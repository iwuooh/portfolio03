$(function(){
  /* section offset top으로 class 추가 */
  var wHeight = $(window).height();// 100vh와 같음
  $(window).scroll(function(){
    var thisScrollTop = $(this).scrollTop();
    $(".common_sect").each(function(){
      // console.log(this)
      var thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop + 400 && thisScrollTop <= thisOffset.top + wHeight ){
        $(this).addClass("active")
      }
    });
  });
});
