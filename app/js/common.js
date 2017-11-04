
window.onload = function (){
    var phone, 
    lang, 
    sort ,
    popularity, 
    nav_hamburger, 
    sub_nav_btn, 
    sub_nav_close_btn;
    
    sub_nav_close_btn = document.getElementsByClassName("main_content_filter_close_btn")[0]
    nav_hamburger =  document.getElementsByClassName("nav_hamburger")[0]
    sort = document.getElementsByClassName("main_content_sort_show_items_count")[0];
    lang = document.getElementsByClassName("lang")[0];
    phone = document.getElementsByClassName("phone")[0];
    popularity = document.getElementsByClassName("main_content_sort_show_popularity")[0];
    sub_nav_btn= document.getElementsByClassName("main_content_subnav_mobile_btn")[0];

    phone.addEventListener("click",showObject);
    lang.addEventListener("click",showObject);
    sort.addEventListener("click",showObject);
    popularity.addEventListener("click",showObject);
    nav_hamburger.addEventListener("click" ,showHamburger);
    sub_nav_btn.addEventListener("click" ,showHideSubNav);
    sub_nav_close_btn.addEventListener("click" ,showHideSubNav);
}

function showObject(e){
    if (e.target.className  =="phone" ||  e.target.className  == "phone_arrow_img"){
    var hiddenPhone;
    hiddenPhone = document.getElementsByClassName("phone_dropdown")[0];
    hiddenPhone.classList.toggle("show_dropdown");
    } else if (e.target.className  =="lang"|| e.target.className  =="lang_arrow_img"){
        var hiddenLang;
        hiddenLang = document.getElementsByClassName("lang_dropdown")[0];
        hiddenLang.classList.toggle("show_dropdown");
    } else if (e.target.className  =="main_content_sort_show_items_count_inner"){
        var hiddenCount;
        hiddenCount = document.getElementsByClassName("main_content_sort_show_items_dropdown")[0];
        hiddenCount.classList.toggle("show_dropdown");
    }
    else if (e.target.className  =="main_content_sort_show_popularity_inner"){
        var hiddenPop;
        hiddenPop = document.getElementsByClassName("main_content_sort_show_popularity_dropdown")[0];
        hiddenPop.classList.toggle("show_dropdown");
    } 
}

 function showHamburger(e){
   var hiddenHamb;
   hiddenHamb = document.getElementsByClassName("main_nav_ul_wrapper")[0];
   if (hiddenHamb.classList.contains("show_hamburger")){
    hiddenHamb.classList.remove("show_hamburger");
    hiddenHamb.style.opacity=null
    hiddenHamb.style.width = null;
    setTimeout(function(){
      hiddenHamb.style.height = null;
      hiddenHamb.style.height = null;
     },300)
   } else {
    hiddenHamb = document.getElementsByClassName("main_nav_ul_wrapper")[0];
    hiddenHamb.classList.add("show_hamburger");
    hiddenHamb.style.opacity= "1" ;
    hiddenHamb.style.width = "200px";
    setTimeout(function(){
     hiddenHamb.style.minHeight = "240px"
     hiddenHamb.style.height = "auto"
    },300)
   }
 }

 function showHideSubNav(e){
  var hiddenSubNAv;
  hiddenSubNAv = document.getElementsByClassName("mobile_subnav")[0];
  if (hiddenSubNAv.classList.contains("show_subNav")){
    hiddenSubNAv.classList.remove("show_subNav");
    hiddenSubNAv.style.opacity=null
    hiddenSubNAv.style.height = 0
    e.preventDefault();

  } else {
    hiddenSubNAv = document.getElementsByClassName("mobile_subnav")[0];
    hiddenSubNAv.classList.add("show_subNav");
    hiddenSubNAv.style.opacity= "1" ;
    hiddenSubNAv.style.height = "880px";
  }
}

// RANGE SLIDER
(function() {
    
      var parent = document.querySelector(".range-slider");
      if(!parent) return;
    
      var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");
    
      rangeS.forEach(function(el) {
        el.oninput = function() {
          var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);
    
          if (slide1 > slide2) {
                    [slide1, slide2] = [slide2, slide1];
            // var tmp = slide2;
            // slide2 = slide1;
            // slide1 = tmp;
          }
    
          numberS[0].value = slide1;
          numberS[1].value = slide2;
        }
      });
    
      numberS.forEach(function(el) {
        el.oninput = function() {
                var number1 = parseFloat(numberS[0].value),
                        number2 = parseFloat(numberS[1].value);
                
          if (number1 > number2) {
            var tmp = number1;
            numberS[0].value = number2;
            numberS[1].value = tmp;
          }
    
          rangeS[0].value = number1;
          rangeS[1].value = number2;
    
        }
      });
    
    })();

         // SCROOLL UP
    $(document).ready(function(){
      $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
      });
      });
      

    