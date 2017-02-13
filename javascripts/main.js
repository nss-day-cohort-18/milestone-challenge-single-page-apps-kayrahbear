"use strict";

//declare variables for seperate .js and template
let Handlebars = require("hbsfy/runtime"),
    cardTemplate = require("../templates/carLot.hbs"),
    carInventory = require("./carLotInventory.js"),
    clickEvents = require("./events.js");

function populatePage(inventory) {
    let cardDiv = document.createElement("div"); //make an empty div
    cardDiv.innerHTML = cardTemplate(inventory); //set the HTML of that div to the Handlebars template we made
    $("#carCards").append(cardDiv); //the new div to the div we already have

    clickEvents();
}

    carInventory.loadInventory() //run the loadInventory function from the inventory js
    .then( //after that loads do this function below
        function(weGotIt) {
            populatePage(weGotIt); //run populate page function with data from loadInventory function
            console.log("cars", weGotIt);
    });
