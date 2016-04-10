window.onload = function() {
    if (window.navigator.userAgent.indexOf("MSIE 6.0") != -1 || window.navigator.userAgent.indexOf("MSIE 7.0") != -1 || window.navigator.userAgent.indexOf("MSIE 8.0") != -1) {
        alert("对不起您的浏览器版本过低，有些效果不兼容，请您更换浏览器")
    }
    var k = document.getElementById("header");
    var l = k.children[0];
    move(l, {
        top: 0
    });
    var e = document.getElementById("home-intro");
    var n = e.children[0];
    var j = e.children[1];
    var g = document.getElementById("below");
    move(n, {
        left: 0
    });
    move(j, {
        right: 0
    },
    {
        complete: function() {
            move(g, {
                opacity: 1
            })
        }
    });
    g.onclick = function() {
        var u = null;
        var q = document.documentElement.scrollTop || document.body.scrollTop;
        var r = Math.floor(1000 / 30);
        var t = q;
        var p = 570 - t;
        var s = 0;
        clearInterval(u);
        u = setInterval(function() {
            s++;
            var v = 1 - s / r;
            var w = t + p * (1 - Math.pow(v, 3));
            document.body.scrollTop = document.documentElement.scrollTop = w;
            if (s == r) {
                clearInterval(u)
            }
        },
        30)
    };
    g.onmouseover = function() {
        g.className = "show"
    };
    g.onmouseout = function() {
        g.className = "below"
    };
    var d = document.getElementById("Adhere-box");
    var c = d.children[0];
    var b = c.children[1];
    var a = d.children[1];
    var h = a.children[0];
    var o = a.children[1];
    var f = a.children[2];
    var m = a.children[3];
    var i = "一个人在完成自己梦想的时候，总会遇到各种各样的困难和挫折，但是不要紧，这只是完成梦想的磨练，请微笑着，一步一步往前走，坚持我的路，不抛弃，不放弃，阳光依然照射在你的前路，就算世界只剩下我一个人独奏，我也一样可以疯狂的演奏独曲，只要你坚持，一样可以化蛹成蝶，飞向属于自己的天空，坚持到最后，不管成功与否，你也一样可以赢得掌声，你依然是那最灿烂的星星。";
    window.onscroll = function() {
        var q = document.documentElement.scrollTop || document.body.scrollTop;
        var p = document.documentElement.clientHeight || document.body.clientHeight;
        if (q + p > d.offsetTop) {
            move(c, {
                top: 0
            },
            {
                complete: function() {
                    for (var v = 0; v < i.length; v++) {
                        var w = document.createElement("span");
                        w.innerHTML = i.charAt(v);
                        b.appendChild(w)
                    }
                    var w = b.children;
                    var x = null;
                    var v = 0;
                    x = setInterval(function() {
                        move(w[v], {
                            opacity: 1
                        });
                        v++;
                        if (v == i.length) {
                            clearInterval(x)
                        }
                    },
                    30)
                }
            });
            move(h, {
                left: 0
            },
            {
                complete: function() {
                    move(o, {
                        right: 0
                    },
                    {
                        complete: function() {
                            move(f, {
                                left: 0
                            },
                            {
                                complete: function() {
                                    move(m, {
                                        right: 0
                                    })
                                }
                            })
                        }
                    })
                }
            });
            function s(C, B) {
                var z = C.offsetWidth;
                var A = C.offsetHeight;
                var v = z / 2 + C.offsetLeft - B.clientX;
                var D = A / 2 + C.offsetTop - B.clientY;
                return Math.round((Math.atan2(D, v) * 180 / Math.PI + 180) / 90) % 4
            }
            var u = a.children;
            var r = a.getElementsByTagName("p");
            for (var t = 0; t < u.length; t++) {
                u[t].index = t;
                u[t].onmouseover = function(w) {
                    var v = w || event;
                    var z = s(this, v);
                    var y = v.fromElement || v.relatedTarget;
                    if (this.contains(y)) {
                        return
                    }
                    var x = r[this.index];
                    switch (z) {
                    case 0:
                        x.style.left = -246 + "px";
                        x.style.top = 0;
                        break;
                    case 1:
                        x.style.top = -246 + "px";
                        x.style.left = 0;
                        break;
                    case 2:
                        x.style.left = 246 + "px";
                        x.style.top = 0;
                        console.log(2);
                        break;
                    case 3:
                        x.style.top = 246 + "px";
                        x.style.left = 0;
                        break
                    }
                    move(x, {
                        left: 0,
                        top: 0
                    })
                };
                u[t].onmouseout = function(w) {
                    var v = w || event;
                    var z = s(this, v);
                    var y = v.toElement || v.relatedTarget;
                    if (this.contains(y)) {
                        return
                    }
                    var x = r[this.index];
                    switch (z) {
                    case 0:
                        move(x, {
                            left: -246,
                            top: 0
                        });
                        break;
                    case 1:
                        move(x, {
                            left: 0,
                            top: -246
                        });
                        break;
                    case 2:
                        move(x, {
                            left: 246,
                            top: 0
                        });
                        break;
                    case 3:
                        move(x, {
                            left: 0,
                            top: 246
                        });
                        break
                    }
                }
            }
        }
    }
};