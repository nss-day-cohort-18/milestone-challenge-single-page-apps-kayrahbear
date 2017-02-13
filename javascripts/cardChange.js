"use strict";

let cardChange = {};

cardChange.highlightCard = (event) => {
  var carCards = document.getElementsByClassName("isClicked");
  if (carCards.length > 0) {
    for (var i = 0; i < carCards.length; i++ ) {
      $(carCards[i]).removeClass("isClicked");
    }
  }
  var card = event.target.closest(".card");
  $("#editDesc").focus();
  card.classList.add("isClicked"); //toggle clicked class
};

cardChange.editCard = () => {
  let $copy = $(".description");
  $(".isClicked").find(".description").text($("#editDesc").val());
};

module.exports = cardChange;
