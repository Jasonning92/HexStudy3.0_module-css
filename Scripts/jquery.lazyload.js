﻿(function (e, t, n, r) {
    var i = e(t);
    e.fn.lazyload = function (n) {
        function a() {
            var t = 0;
            s.each(function () {
                var n = e(this);
                if (u.skip_invisible && !n.is(":visible")) return;
                if (!e.abovethetop(this, u) && !e.leftofbegin(this, u)) if (!e.belowthefold(this, u) && !e.rightoffold(this, u)) n.trigger("appear"), t = 0; else if (++t > u.failure_limit) return !1
            })
        }

        var s = this, o, u = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: t,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null
        };
        return n && (r !== n.failurelimit && (n.failure_limit = n.failurelimit, delete n.failurelimit), r !== n.effectspeed && (n.effect_speed = n.effectspeed, delete n.effectspeed), e.extend(u, n)), o = u.container === r || u.container === t ? i : e(u.container), 0 === u.event.indexOf("scroll") && o.bind(u.event, function (e) {
            return a()
        }), this.each(function () {
            var t = this, n = e(t);
            t.loaded = !1, n.one("appear", function () {
                if (!this.loaded) {
                    if (u.appear) {
                        var r = s.length;
                        u.appear.call(t, r, u)
                    }
                    e("<img />").bind("load", function () {
                        n.hide().attr("src", n.data(u.data_attribute))[u.effect](u.effect_speed), t.loaded = !0;
                        var r = e.grep(s, function (e) {
                            return !e.loaded
                        });
                        s = e(r);
                        if (u.load) {
                            var i = s.length;
                            u.load.call(t, i, u)
                        }
                    }).attr("src", n.data(u.data_attribute))
                }
            }), 0 !== u.event.indexOf("scroll") && n.bind(u.event, function (e) {
                t.loaded || n.trigger("appear")
            })
        }), i.bind("resize", function (e) {
            a()
        }), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function (t) {
            t.originalEvent.persisted && s.each(function () {
                e(this).trigger("appear")
            })
        }), e(t).load(function () {
            a()
        }), this
    }, e.belowthefold = function (n, s) {
        var o;
        return s.container === r || s.container === t ? o = i.height() + i.scrollTop() : o = e(s.container).offset().top + e(s.container).height(), o <= e(n).offset().top - s.threshold
    }, e.rightoffold = function (n, s) {
        var o;
        return s.container === r || s.container === t ? o = i.width() + i.scrollLeft() : o = e(s.container).offset().left + e(s.container).width(), o <= e(n).offset().left - s.threshold
    }, e.abovethetop = function (n, s) {
        var o;
        return s.container === r || s.container === t ? o = i.scrollTop() : o = e(s.container).offset().top, o >= e(n).offset().top + s.threshold + e(n).height()
    }, e.leftofbegin = function (n, s) {
        var o;
        return s.container === r || s.container === t ? o = i.scrollLeft() : o = e(s.container).offset().left, o >= e(n).offset().left + s.threshold + e(n).width()
    }, e.inviewport = function (t, n) {
        return !e.rightoffold(t, n) && !e.leftofbegin(t, n) && !e.belowthefold(t, n) && !e.abovethetop(t, n)
    }, e.extend(e.expr[":"], {
        "below-the-fold": function (t) {
            return e.belowthefold(t, {threshold: 0})
        }, "above-the-top": function (t) {
            return !e.belowthefold(t, {threshold: 0})
        }, "right-of-screen": function (t) {
            return e.rightoffold(t, {threshold: 0})
        }, "left-of-screen": function (t) {
            return !e.rightoffold(t, {threshold: 0})
        }, "in-viewport": function (t) {
            return e.inviewport(t, {threshold: 0})
        }, "above-the-fold": function (t) {
            return !e.belowthefold(t, {threshold: 0})
        }, "right-of-fold": function (t) {
            return e.rightoffold(t, {threshold: 0})
        }, "left-of-fold": function (t) {
            return !e.rightoffold(t, {threshold: 0})
        }
    })
})(jQuery, window, document)