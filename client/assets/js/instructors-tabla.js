var data = [

    { "id": "7134", "name": "Julio Perez", "hireDate": "08/04/2000"},
    { "id": "7135", "name": "Rick Dominguez", "hireDate": "01/02/1997"},
    { "id": "7136", "name": "Andrés Locke", "hireDate": "23/07/2017"},
    { "id": "7137", "name": "John Lopez", "hireDate": "13/05/2019"},
]

var createTable = '<thead><tr><th>ID</th> <th>TITLE</th> <th>DESCRIPTION</th> <th>ACTIONS</th> </tr></thead>';

window.addEventListener('load', function(){
  crearcreateTable(data);
})



function crearcreateTable(data) {
    var tabla = document.getElementById("instructors-data");
    var tbody = document.createElement("tbody");
  for (var i = 0; i < 1; i++) {

    for (var x = 0; x < data.length; x++) {

      
      createTable += '<tr>';

      createTable += '<td>' + data[x].id + '</td>';

      createTable += '<td>' + data[x].name + '</td>';

      createTable += '<td>' + data[x].hireDate + '</td>';    

      createTable += '<td> Edit | Remove' + '</td>';

    }

    createTable += '</tr>';

  }

/*   console.log(createTable); */
  tbody.innerHTML = createTable;

  tabla.appendChild(tbody);

}