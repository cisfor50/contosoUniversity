var data = [

    { "id": "7134", "title": "Trigonometry", "department": "Maths", "capacity": "30" },
    { "id": "7135", "title": "English", "department": "Languages", "capacity": "25" },
    { "id": "7136", "title": "Arithmetic", "department": "Maths", "capacity": "19" },
    { "id": "7137", "title": "French", "department": "Languages", "capacity": "30" },

];

console.log(data);

var crearTHead = '<thead><tr><th>ID</th> <th>TITLE</th> <th>DEPARTMENT</th> <th>Capacity</th> <th>Instructor</th> <th>ACTIONS</th></tr></thead>';



window.addEventListener('load', function () {
    crearTabla(data);
})



function crearTabla(data) {
    var tabla = document.getElementById("cursos-data");
    var tbody = document.createElement("tbody");
    for (var i = 0; i < 1; i++) {

        for (var x = 0; x < data.length; x++) {


            crearTHead += '<tr>';

            crearTHead += '<td>' + data[x].id + '</td>';

            crearTHead += '<td>' + data[x].title + '</td>';

            crearTHead += '<td>' + data[x].department + '</td>';

            crearTHead += '<td>' + data[x].capacity + '</td>';

            crearTHead += '<td> Details' + '</td>';

            crearTHead += '<td> Edit | Remove' + '</td>';
        }

        crearTHead += '</tr>';

    }

    tbody.innerHTML = crearTHead;

    tabla.appendChild(tbody);

}

