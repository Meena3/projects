const searchFun = () =>{
    let filter = document.getElementById('searchInput').value.toUpperCase();
    let namesTable = document.getElementById('namesTable');
    let tr = namesTable.getElementsByTagName('tr');
    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];
        if(td){
            let value = td.textContent || td.innerHTML;
            if(value.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
    }
}
