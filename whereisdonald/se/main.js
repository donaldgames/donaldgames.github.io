/// <reference path="/script/jquery-1.3.2-vsdoc2.js"/>

var mainParams = { 'menu': 'false', 'wmode': 'opaque', 'allowScriptAccess': 'sameDomain' };
var popParams = { 'menu': 'false', 'wmode': 'transparent', 'allowScriptAccess': 'sameDomain' };
var isOpen = false;

$(document).ready(function() {
    var q = $.query;
    swfobject.embedSWF("WheresDonald.swf", "mainContent", "100%", "100%", "9.0.0", false, q.keys, mainParams);
});




function openPopup(theSwf) {
    if (!isOpen) {
        $('body').append('<div id="behind"></div><div id="popup"><h1>Popup</h1></div>');
        swfobject.embedSWF(theSwf, "popup", "100%", "100%", "9.0.0", false, {/* this is the flashvars object*/}, popParams);
        centerThis('popup');
        isOpen = true;
    }
}


function closePopup() {
    if (isOpen) {
        $('#behind').remove();
        $('#popup').remove();
        //tellFlash();
        isOpen = false;
    }
}

function centerThis(div) {
    var winH = $(window).height();
    var winW = $(window).width();
    var centerDiv = $('#' + div);
    var x = (winW / 2) - (754/ 2);
    var y = (winH / 2) - (442 / 2);
    centerDiv.css('top', y);
    centerDiv.css('left', x);
}

function thisMovie(movieName) {
    var x = document.getElementById(movieName);
    return x;
}
function tellFlash() {
    var x = thisMovie("popup");
    x['windowClosed']();
}
