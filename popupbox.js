$(document).ready(function(){
$(".popDiv").css({"display":"none",
"width":"100%",
"height":"auto",
"max-height":$(window).height()-85+"px",
"overflow-y": "auto"});
});
$(document).ready(function(){
  $(document).click(function(e){
  
  var markerButton=$(e.target).attr("marker");
  var curClass=$(e.target).attr("class");
  var popupDivId='#'+$(e.target).attr("popupid");
  if(markerButton=="popUpControl2")
  {
  $(popupDivId).parent().parent().css("display","block");
    $(popupDivId).css("display","block");
  }
	else if(markerButton=="popUpControl")
    {
    $(e.target).attr("marker","popUpControl2");
    $(popupDivId).addClass("container");
    $(popupDivId).wrap("<div class='popup-shed'></div>");
    $(".popup-shed").css({"display":"none",
    "position": "fixed",
     "transition": "opacity 0.15s linear",
      "top": 0,
      "right": 0,
    "bottom": 0,
    "left": 0,
     "z-index": 1040,
    "background-color":"rgba(0,0,0,0.8)"});
    $(popupDivId).wrap("<div class='boxpopup'></div>");
    $(".boxpopup").css({"height":"auto",
"width":"80%",
"background-color":"white",
"margin-top": "20px",
    "margin-left": "10%",
"border-radius":"4px",
"radius-corner":"4px",
"opacity": 1});
    $(popupDivId).parent()
    .prepend("<button class='closeButton1'>x</button>");
    $(".closeButton1").css({  "width": "20px",
    "height": "25px",
    "padding-left": "6px",
    "float": "right",
    "margin-bottom":0,
    "background-color":"white",
    "border": "1px solid transparent",
    "font-weight": 600,
    "font-size":"16px"});
    $(popupDivId).parent().find(".closeButton1").
    wrap("<div style='width:100%;height:20px;'></div>");
    $(popupDivId).append("<hr class='hrStyle'>");
    $(".hrStyle").css({"margin-top":"5px",
				"margin-bottom":"5px"});
    $(popupDivId).after("<div class='closeButton2 btn btn-danger'>close</div>");
    $(".closeButton2").css({"width": "100%",
   });
    
    
    $(popupDivId).parent().parent().css("display","block");
    $(popupDivId).css("display","block");
    }
    else if(curClass=="popup-shed"||curClass=="closeButton1"||curClass=="closeButton2 btn btn-danger")
     $(".popup-shed").css("display","none");
     
    
});
});
