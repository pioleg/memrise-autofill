// ==UserScript==
// @name         Memrise - hide reviewed
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Zmniejsza widoczność powtórzonych słów
// @author       You
// @match        https://app.memrise.com/course/*
// @icon         https://www.google.com/s2/favicons?domain=memrise.com
// @downloadURL  https://github.com/pioleg/memrise-autofill/raw/main/memrise%20-%20hide.user.js
// @updateURL    https://github.com/pioleg/memrise-autofill/raw/main/memrise%20-%20hide.user.js
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

//-- Remove Tampermonkey warnings about jQuery
let $ = window.$;
function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

$(document).ready(function() {
    $('.thinguser .status').each(function(index, value){
        // Treść powtórzoną zaznacza na szaro
        if($(this).text() != 'now') {
            $(this).parent().parent().addClass('ignored');
        }
        // Treść powtórzoną zaznacza na szaro

        // Usuń status
        //$(this).remove();
        // Usuń status
    });
});
