
Tools = function() {};
Tools.prototype = {
/**
Find the first element of *iterable* that leads to minimal value in respect to the function *callback*
Return dict with keys element, value and index.
Example: tools.findMin([0,1,-1,-5,-5,-5,-5], function(x) {return -x*x})
Result: { element: -5, value: -25, index: 3 }
**/
findMin : function (iterable, callback) {
    var minVal = Number.POSITIVE_INFINITY;
    var minElement = null;
    var minIndex = null;
    $.each(iterable, function (i, element) {
        var newVal = callback(element);
        if (newVal < minVal) {
            minIndex = i;
            minVal = newVal;
            minElement = element;
        }
    });
    var ret = {
        element: minElement,
        value: minVal,
        index: minIndex
    }
    return ret;
},

/**
Find the first element of *iterable* that leads to minimal value in respect to the function *callback*
Return dict with keys element, value and index.
Example: tools.findMax([0,1,-1,-5,-5,-5,-5], function(x) {return x*x})
Result: { element: -5, value: 25, index: 3 }
**/
findMax : function (iterable, callback) {
    var maxVal = Number.NEGATIVE_INFINITY;
    var maxElement = null;
    var maxIndex = null;
    $.each(iterable, function (i, element) {
        var newVal = callback(element);
        if (newVal > maxVal) {
            maxIndex = i;
            maxVal = newVal;
            maxElement = element;
        }
    });
    var ret = {
        element: maxElement,
        value: maxVal,
        index: maxIndex
    }
    return ret;
}};

tools = new Tools();
