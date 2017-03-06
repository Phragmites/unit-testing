!(function(isEmptyObject) {
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

        define(isEmptyObject);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = isEmptyObject();
    } else {
        window.isEmptyObject = isEmptyObject();
    }
})(function() {
    function isEmptyObject(e){
        var t;
        for (t in e) return !1; return !0
    }
    return isEmptyObject
});