$('.ncRight>dd').mousemove(function () {
    $(this).children().addClass("on")
})

$('.ncRight>dd').mouseleave(function () {
    $(this).children().removeClass("on")
})
$('.wcUl1 > li').mouseover(function(){
    $(".wcSpan").stop().animate({
        left: $(this).addClass("sp").index()*48+18,
    })
})
$('.wcUl1 > li').mouseleave(function(){
    $(".wcSpan").stop().animate({
        left:18
    })
    $(this).removeClass("sp")
})