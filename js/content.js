chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        debugger;

        if(request.action == "Replace"){
            setInterval(function(){
                var elements = document.getElementsByTagName("img");
                var anchors = document.getElementsByTagName("a");
                var replacementHref = "http://usatlife.files.wordpress.com/2014/06/terrycrewspecs_take2.gif?w=1000";

                for(var i = 0; i < elements.length; i++){
                    elements[i].src = replacementHref;
                }
                for(var i = 0; i < anchors.length; i++){
                    anchors[i].href = replacementHref;
                }
            }, 3000);

            sendResponse(load);
        }
    }


);