"use strict";

$(document).ready(main);

function main() {
    var url = "data/pokedex.json";
    var data = "";
    $.ajax({
        url: url,
        success: renderTiles,
        dataType: "json"
    })
    .then(searchWrapper);
}

function renderTiles(payload) {
    var pokemon = payload.pokemon;
    
    // first, clear whatever current contents of list & modals
    // useful to remove "Loading..." at first load
    // and also for search filtering
    $("#tiles, #modals").empty();

    for(var tile of pokemon) {
        var data = `<li class="tile" data-toggle="modal" data-target="${"#modal-" + tile.name}">
        <h4>${tile.name}</h4>
        <img src="${tile.img}" alt="Thumbnail: ${tile.name}">
        </li>`;
        
        $("#tiles").append(data);

        createModal(tile);
    }
}

function createModal(tile) {
    var data = `<div id="${"modal-" + tile.name}" class="modal fade" role="dialog">
  <div class="modal-dialog text-center">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">${tile.name}</h4>
      </div>
      <div class="modal-body">
        <div><img src="${tile.img}" alt="Thumbnail: ${tile.name}"></div>
        <hr>
        <h4>Type</h4>
        <p>${tile.type}</p>
        <hr>
        <h4>Height</h4>
        <p>${tile.height}</p>
        <hr>
        <h4>Weight</h4>
        <p>${tile.weight}</p>
        <hr>
        <h4>Weaknesses</h4>
        <p>${tile.weaknesses}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>`;
    
    $("#modals").append(data);
}

/*
We cannot directly use the search function here,
since, once used as an event handler,
its parameter would be the event object,
instead of the AJAX payload from the promise.
Instead, the payload is passed from
the jQuery AJAX promise via the searchWrapper,
and closed over by the inner search closure.
*/
function searchWrapper(payload) {
  function search() {
    var searchTerm = $("#search-box").val().replace(/[ ]/gi, "");

    if(searchTerm === "") {
      renderTiles(payload);
    }
    else {
      var filteredPayload = payload.pokemon.filter(function(node) {
                          var pattern = new RegExp(searchTerm, "gi");
                          return pattern.test(node.name);
                        });
      renderTiles({"pokemon": filteredPayload});
    }
  }

  $("#search-box").keyup(search);
  $("#clear-button").click(clearSearch);
  $("#clear-button").click(search);
}

function clearSearch() {
  $("#search-box").val("");
}