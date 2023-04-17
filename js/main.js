$(document).ready(function(){
  $(".header .menu").click(function(){
    $(this).children("i").toggleClass("fa-times");
    $(".header nav").toggleClass("active");
  })
  $(window).on("scroll load",function(){
    $(".header .menu i").removeClass("fa-times");
    $(".header nav").removeClass("active");
  })
  
  $('.count').each(function(){
    let countNum=0;
    let countTo= $(this).attr('data-count');
    $(this).animate(
      {countNum : countTo},
      {/*option*/
        duration:3000,
        step:function(){
          $(this).text(Math.floor(this.countNum));
        },
        complete:function(){
          $(this).text(this.countNum + "+")
        }
      }
    );
  })
  
  $(".project .box-container").magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{enabled:true}
  })
})