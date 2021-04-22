$(window).ready(function(){
    var contentBtn = $(".content_list > ul > li");
    var contentBox = $(".content_box");
    var reClickUrl = "";
    var isDoubleClick = false;
    contentBtn.each(function(index){
        $(this).on("click",function(){
            console.log(isDoubleClick);
            var attrUrl = $(this).children("a").attr("href");

            if(reClickUrl == attrUrl && !isDoubleClick){
                contentBtn.removeClass("content_click");
                contentBox.empty();
                isDoubleClick = true;
                return;    
            }
            reClickUrl = attrUrl;
            var template = "<iframe src="+attrUrl+"></iframe>";
            contentBox.empty();
            contentBox.append(template);
            contentBtn.removeClass("content_click");
            $(this).addClass("content_click");
            isDoubleClick = false;
        });
    });
});