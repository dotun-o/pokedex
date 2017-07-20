"use strict";

$(document).ready(main);

function main() {
  var url = "data/pokedex.json";
  var data = "";
  $.ajax({
    url: url,
    success: renderTiles,
    dataType: "json"
  }).then(searchWrapper).fail(dataNotFound);
}

function renderTiles(payload) {
  var pokemon = payload.pokemon;

  // first, clear whatever current contents of list & modals
  // useful to remove "Loading..." at first load
  // and also for search filtering
  $("#tiles, #modals").empty();

  for (var _iterator = pokemon, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var tile = _ref;

    var data = "<li class=\"tile\" data-toggle=\"modal\" data-target=\"" + ("#modal-" + tile.name.toLowerCase().replace(/[^a-z]/gi, "")) + "\">\n        <h4>" + tile.name + "</h4>\n        <img src=\"" + tile.img + "\" alt=\"Thumbnail: " + tile.name + "\">\n        </li>";

    $("#tiles").append(data);

    createModal(tile);
  }
}

function createModal(tile) {
  var data = "<div id=\"" + ("modal-" + tile.name.toLowerCase().replace(/[^a-z]/gi, "")) + "\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog text-center\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">" + tile.name + "</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div><img src=\"" + tile.img + "\" alt=\"Thumbnail: " + tile.name + "\"></div>\n        <hr>\n        <h4>Type</h4>\n        <p>" + tile.type + "</p>\n        <hr>\n        <h4>Height</h4>\n        <p>" + tile.height + "</p>\n        <hr>\n        <h4>Weight</h4>\n        <p>" + tile.weight + "</p>\n        <hr>\n        <h4>Weaknesses</h4>\n        <p>" + tile.weaknesses + "</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>";

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

    if (searchTerm === "") {
      renderTiles(payload);
    } else {
      var filteredPayload = payload.pokemon.filter(function (node) {
        var pattern = new RegExp(searchTerm, "gi");
        return pattern.test(node.name);
      });
      renderTiles({ "pokemon": filteredPayload });
    }
  }

  $("#search-box").keyup(search);
  $("#clear-button").click(clearSearch);
  $("#clear-button").click(search);
}

function clearSearch() {
  $("#search-box").val("");
}

function dataNotFound() {
  $("#tiles").html("Error: Data could not be loaded.");
}