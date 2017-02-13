"use strict";

let clickChange = require("./cardChange.js");

var throwError = function () {
    window.alert("Please click a card to begin editing");
};

function activateChange(){
    $(".card").click(clickChange.highlightCard);
    $("#editDesc").keyup(function(){
        let highlighted = document.getElementsByClassName("isClicked");
        if (highlighted.length === 0) {
            throwError();
        }else {
            clickChange.editCard();
        }
    });
}

module.exports = activateChange;
