/**
 *
 * @param doc The website.
 * @param site The id of the button to turn "active"
 * @param func Callback
 * @returns {string}
 */
var load = function (doc, site, func) {
    'use strict';

    if (!window.XMLHttpRequest && 'ActiveXObject' in window) {
        window.XMLHttpRequest = function () {
            return new ActiveXObject('MSXML2.XMLHttp');
        };
    }

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "/templates/html/navbar.html", true);

    xmlhttp.onreadystatechange = function () {
        if (this.readyState !== 4 || this.status !== 200) {
            document.getElementById('navbar').innerHTML = "<b> Error reading navbar.html </b>";
            return;
        }

        document.getElementById('navbar').innerHTML = this.responseText;
        //setHighlight(site);
        if (func != null && typeof  func === "function") {
            func();
        }
    };

    xmlhttp.send();

    return xmlhttp.responseText;
};

function setHighlight(site) {
    var id = site.toLowerCase();
    id = "#nav-" + id;
    $(id).addClass("active");
}