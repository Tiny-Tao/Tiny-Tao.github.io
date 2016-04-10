window.onload = function() {
    if (window.navigator.userAgent.indexOf("MSIE 6.0") != -1 || window.navigator.userAgent.indexOf("MSIE 7.0") != -1 || window.navigator.userAgent.indexOf("MSIE 8.0") != -1) {
        alert("对不起您的浏览器版本过低，有些效果不兼容，请您更换浏览器")
    }
    var h = document.getElementById("header");
    var j = h.children[0];
    move(j, {
        top: 0
    });
    var g = document.getElementById("em-hd-h2");
    var b = document.getElementById("em-hd-p");
    var f = document.getElementById("holder-js");
    var l = f.children;
    var a = f.getElementsByTagName("p");
    var e = document.getElementById("holder-em");
    var k = e.children;
    var c = e.getElementsByTagName("p");
    move(g, {
        left: 0
    });
    move(b, {
        left: 0
    },
    {
                    complete: function() {
                        for (var n = 0; n < k.length; n++) {
                            move(k[n], {
                                opacity: 1
                            })
                        }
                    }
    });
    for (var d = 0; d < l.length; d++) { (function(i) {
            l[d].onmouseover = function() {
                move(a[i], {
                    height: 250
                },
                {
                    duration: 500,
                    easing: Tween.Bounce.easeOut
                })
            };
            l[d].onmouseout = function() {
                move(a[i], {
                    height: 0
                })
            }
        })(d)
    }
    for (var d = 0; d < k.length; d++) { (function(i) {
            k[d].onmouseover = function() {
                move(c[i], {
                    height: 181
                },
                {
                    easing: Tween.Bounce.easeOut,
                    duration: 500
                })
            };
            k[d].onmouseout = function() {
                move(c[i], {
                    height: 0
                })
            }
        })(d)
    }
};