< script type = "text/javascript" > !
function(e, t) {
    "use strict";
    var n, i, a, s, l, o, u, c, r, f, d = fp_utils.$,
    p = fp_utils.after,
    g = fp_utils.hasClass,
    h = fp_utils.addClass,
    v = fp_utils.toggleClass,
    m = fp_utils.removeClass,
    E = fp_utils.siblings,
    L = fp_utils.preventDefault,
    w = ".language",
    y = d("#menu-line")[0],
    _ = d(".menu-active").offsetWidth,
    x = 20,
    k = 0,
    b = 40,
    T = "active";
    function C() {
        b = 2 * parseFloat(getComputedStyle(fp_utils.$(".menu-active a")[0]).paddingLeft)
    }
    function S(e) {
        switch (e.keyCode) {
        case 27:
            g(d(".examples")[0], T) && H()
        }
    }
    function W() {
        g(this, "left") ? fullpage_api.moveSlideLeft() : fullpage_api.moveSlideRight()
    }
    function q() {
        var n = decodeURIComponent(t.location.hash.substr(1));
        n.length && (d("." + n, e).length && fp_utils.trigger(d(".show-examples")[0], "click"))
    }
    function A() {
        clearTimeout(n),
        n = setTimeout(R, 350)
    }
    function R() {
        if (_ = d(".menu-active")[0].offsetWidth, t.innerWidth <= 900) {
            C();
            var e = d("#menu a")[0];
            F.call(e),
            k = e.offsetLeft
        } else t.innerWidth > 900 && (C(), F.call(d("#menu a")[0]), k = 0)
    }
    function H() {
        clearTimeout(i),
        i = setTimeout(function() {
            P(".examples"),
            fullpage_api.setAllowScrolling(!0)
        },
        300)
    }
    function O(e) {
        P(".examples"),
        fullpage_api.setAllowScrolling(!1)
    }
    function P(e) {
        v(d(e)[0], T)
    }
    function U(e) {
        void 0 !== e && (L(e), (e || t.event).stopPropagation()),
        P(w)
    }
    function D(e) {
        m(d(w)[0], T)
    }
    function F() {
        var e = this.parentNode;
        N(e.offsetLeft, e.offsetWidth)
    }
    function M() {
        N(k, _)
    }
    function N(e, t) {
        y.style.left = e + b / 2 + "px",
        y.style.width = t - b + "px"
    }
    function $(e) {
        L(e);
        var t = this.getAttribute("href").substr(1);
        h(this, T),
        m(E(this), T);
        var n = d('[data-tab="' + t + '"]')[0];
        h(n, T),
        m(E(n), T)
    }
    r = "https://alvarotrigo.com/fullPage/dist/non-critical.min.css",
    f = t.document.createElement("link"),
    t.document.styleSheets,
    f.rel = "stylesheet",
    f.href = r,
    p(d("#stylesheet-critical")[0], f),
    C(),
    y.style.width = _ - b + "px",
    y.style.left = x + "px",
    "en" !== (!(a = navigator.language || navigator.userLanguage) || a.indexOf("-") < 0 ? a: a.split("-")[0]) && U(),
    A(),
    d("#menu li a").forEach(function(e) {
        e.addEventListener("mouseover", F),
        e.addEventListener("mouseout", M)
    }),
    t.addEventListener("resize", A),
    t.addEventListener("load", q),
    d(".shell-tab").forEach(function(e) {
        e.addEventListener("click", $)
    }),
    d(".language-current")[0].addEventListener("click", U),
    d("html")[0].addEventListener("click", D),
    d(".info-close")[0].addEventListener("touchstart", H),
    d(".info-close")[0].addEventListener("click", H),
    d(".show-examples")[0].addEventListener("click", O),
    e.addEventListener("keydown", S),
    d(".my-arrow").forEach(function(e) {
        e.addEventListener("click", W)
    }),
    s = "GET",
    l = "https://alvarotrigo.com/fullPage/routes/github-api.php",
    o = null,
    u = function(e) {
        var t = JSON.parse(e),
        n = Object.keys(t);
        n.forEach(function(e) {
            var n = d('[data-github="' + e + '"] h4')[0];
            n && (n.innerHTML = t[e])
        })
    },
    (c = new XMLHttpRequest).open(s, l, !0),
    c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
    c.send(o),
    c.onreadystatechange = function() {
        4 === c.readyState && (200 === c.status ? u(c.responseText) : console.log("Error: " + c.status))
    },
    t.ga = t.ga ||
    function() { (ga.q = ga.q || []).push(arguments)
    },
    ga.l = +new Date,
    ga("create", "UA-94005074-1", "auto"),
    ga("send", "pageview")
} (document, window); < /script>/