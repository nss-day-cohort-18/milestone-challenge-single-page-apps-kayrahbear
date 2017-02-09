"use strict";

var carInfo = {}; //empty object to hold data exported from loadInventory function

carInfo.loadInventory = ()=>{
    return new Promise(function(resolve, reject) { //a promise will allow other code to continue doing its thing while we GET data from the json
        var inventoryLoader = new XMLHttpRequest(); //go get the data!
        inventoryLoader.open("GET", "inventory.json"); //same^
        inventoryLoader.send(); //now send it!

        inventoryLoader.addEventListener("load", function(){  //add event listener for on page load
            var data = JSON.parse(this.responseText); //convert reponseText(json string) to js object)
            resolve(data); //sets the state of the promise to fulfilled, passes in new js object
        });
    });
};

module.exports = carInfo;  //exports (sends out) the module we just created so other .js pages can utilize it
