window.onload = function() {
    if (window.navigator.userAgent.indexOf("MSIE 6.0") != -1 || window.navigator.userAgent.indexOf("MSIE 7.0") != -1 || window.navigator.userAgent.indexOf("MSIE 8.0") != -1) {
        alert("对不起您的浏览器版本过低，有些效果不兼容，请您更换浏览器")
    }
    var g = document.getElementById("header");
    var i = g.children[0];
    move(i, {
        top: 0
    });
    var c = document.getElementById("our-offers");
    var h = document.getElementById("our-story");
    var b = h.children[0];
    var d = h.children[1];
    var a = document.getElementById("offers");
    var e = document.getElementById("offers-title");
    var k = document.getElementById("offer-holder");
    var j = k.children[0];
    var f = k.children[1];
    move(b, {
        opacity: 1
    });
    move(d, {
        left: 305
    },
    {
        complete: function() {
            move(a, {
                opacity: 1
            });
            move(e, {
                top: 0,
                opacity: 1
            },
            {
                complete: function() {
                    window.onscroll = function() {
                        var m = document.documentElement.scrollTop || document.body.scrollTop;
                        var l = document.documentElement.clientHeight || document.body.clientHeight;
                        if (m + l > a.offsetTop) {
                            move(j, {
                                left: 0
                            });
                            move(f, {
                                right: 0
                            })
                        }
                    }
                }
            })
        }
    })
};