var data = [

  { "id": "7134", "title": "Math" },
  { "id": "7135", "title": "Languages" },
  { "id": "7136", "title": "Math" },
  { "id": "7137", "title": "Languages" },
];



var createTable = '<thead><tr><th>ID</th> <th>TITLE</th> <th>DESCRIPTION</th> <th>ACTIONS</th> </tr></thead>';

window.addEventListener('load', function(){
  crearcreateTable(data);
})



function crearcreateTable(data) {
    var tabla = document.getElementById("departamento-data");
    var tbody = document.createElement("tbody");
  for (var i = 0; i < 1; i++) {

    for (var x = 0; x < data.length; x++) {

      
      createTable += '<tr>';

      createTable += '<td>' + data[x].id + '</td>';

      createTable += '<td>' + data[x].title + '</td>';

      createTable += '<td> Details' + '</td>';

      createTable += '<td> Edit | Remove' + '</td>';

    }

    createTable += '</tr>';

  }

/*   console.log(createTable); */
  tbody.innerHTML = createTable;

  tabla.appendChild(tbody);

}


