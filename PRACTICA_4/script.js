//|=====================/SERCH-BAR|=====================|
$(document).ready(function(){
    var submitIcon = $('.searchbar-icon');
    var inputBox = $('.searchbar-input');
    var searchbar = $('.searchbar');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchbar.addClass('searchbar-open');
            $('.floatBar').css('width','325px');
            inputBox.focus();
            isOpen = true;
        } else {
            searchbar.removeClass('searchbar-open');
            $('.floatBar').css('width','50px');
            inputBox.focusout();
            isOpen = false;
        }
    });  
     submitIcon.mouseup(function(){
            return false;
        });
    searchbar.mouseup(function(){
            return false;
        });
    $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbar-icon').css('display','block');
                submitIcon.click();
            }
        });
});
    function buttonUp(){
        var inputVal = $('.searchbar-input').val();
        inputVal = $.trim(inputVal).length;
        if( inputVal !== 0){
            $('.searchbar-icon').css('display','none');
        } else {
            $('.searchbar-input').val('');
            $('.searchbar-icon').css('display','block');
        }
    }
//|=====================/CAROUSEL|=====================|
$('.carousel').carousel({
    interval: 0
  })
//|=====================/NAVBAR-COLAPSE|=====================|
/*$(window).resize(function(){
var colapse = $('.navbar');
    if($(window).width() < 1300){
        colapse.removeClass('navbar-expand-xl');
    }else{
        colapse.addClass('navbar-expand-xl');
    }
  });*/