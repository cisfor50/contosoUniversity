/* FILTRADO DEL SELECT */
let select = document.getElementById('course-select');
 
select.addEventListener('change', ()=> {
  for (j = 1; j < tr.length; j++) {
    td = tr[j].getElementsByTagName("td")[1];
    if(select.value == 'All'){
      tr[j].style.display = 'table-row';
    }
    else if (select.value == td.innerText) {
      tr[j].style.display = ''
    }
    else {
      tr[j].style.display = 'none'
    }
  }
})