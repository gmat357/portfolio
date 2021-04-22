$(window).ready(function(){
  var graph_bar = $('.graph_bar');
  
  var agent = navigator.userAgent.toLowerCase();
  
  if(navigator.appName == "Netscape" && navigator.userAgent.search("Trident") != -1 || (agent.indexOf("msie") != -1)){
    graph_bar.each(function(){
      var graphChild = $(this).children(".graph_bg").children("h3");
      var color = graphChild.attr("value"); 
      $(this).css("backgroundColor",color);
    });
  }

  graph_bar.each(function(index){
    var graphChild = $(this).children(".graph_bg").children("h3");
    var persent = Number(graphChild.text().replace("%",""));
    var color = graphChild.attr("value");
    draw(persent,graph_bar.eq(index),color);
    $(this).on("mouseenter",function(){
      draw(persent,graph_bar.eq(index),color);
    });
  });

  function draw(max, classname, colorname){
     var i=1;
      var func1 = setInterval(function(){
        if(i<max){
            color1(i,classname,colorname);
            i++;
        } else{
          clearInterval(func1);
        }
      },10);
  }
  function color1(i, classname,colorname){
     $(classname).css({
          "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
     });
  }
});



