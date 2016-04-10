window.onload = function() {
    if (window.navigator.userAgent.indexOf("MSIE 6.0") != -1 || window.navigator.userAgent.indexOf("MSIE 7.0") != -1 || window.navigator.userAgent.indexOf("MSIE 8.0") != -1) {
        alert("对不起您的浏览器版本过低，有些效果不兼容，请您更换浏览器")
    }
    var b = document.getElementById("header");
    var g = b.children[0];
    move(g, {
        top: 0
    });
    var a = document.getElementById("stt-top-h2");
    var e = document.getElementById("stt-top-p");
    var c = document.getElementById("bot-360");
    var f = document.getElementById("bot-player");
    var d = document.getElementById("bot-oppo");
    move(a, {
        left: 0
    });
    move(e, {
        left: 0
    },
    {
        complete: function() {
            move(c, {
                left: 0
            },{type:'linear'});
            move(d, {
                left: 0
            },
            {
                complete: function() {
                    move(f, {
                        opacity: 1
                    },{type:'linear'})
                }
            })
        }
    })
};