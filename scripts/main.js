$(document).ready(main);

function main() {
    var url = "data/pokedex.json";
    $.ajax({
        url: url,
        success: renderTiles,
        dataType: "json"
    });
}

function renderTiles(payload) {
    for(var tile of payload.pokemon) {
        var data = `<li class="tile" data-toggle="modal" data-target="${"#modal-" + tile.name}">
        <h4>${tile.name}</h4>
        <img src="${tile.img}" alt="'"Thumbnail: ${tile.name}">
        </li>`;
        
        $("#tiles").append(data);

        createModal(tile);
    }
}

function createModal(tile) {
    var data = `<div id="${"modal-" + tile.name}" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">${tile.name}</h4>
      </div>
      <div class="modal-body">
        <div class="text-center"><img src="${tile.img}" alt="'"Thumbnail: ${tile.name}"></div>
        <p>Type: ${tile.type}</p>
        <p>Height: ${tile.height}</p>
        <p>Weight: ${tile.weight}</p>
        <p>Weaknesses: ${tile.weaknesses}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>`;
    
    $("body").append(data);
}