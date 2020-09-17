function sortTable(n) {
    var table;
    table = document.getElementById("table");
    var rows, i, x, y, count = 0;
    var switching = true; 
    var direction = "ascending"; 
    while (switching) {
        switching = false; 
        var rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            var Switch = false; 
            x = rows[i].getElementsByTagName("TD")[n]; 
            y = rows[i + 1].getElementsByTagName("TD")[n]; 
            if (direction == "ascending") { 
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
                    {
                        Switch = true; 
                        break; 
                    }
            } else if (direction == "descending") { 
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
                    { 
                        Switch = true; 
                        break; 
                    } 
                } 
            }
            if (Switch) { 
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
                switching = true; 
                count ++; 
            } else { 
                if (count == 0 && direction == "ascending") { 
                direction = "descending"; 
                switching = true;
            }
        }
    }
}

function addRow()
    {
        var person = document.getElementById('person').value;
        var lname = document.getElementById('lname').value;
        var price = document.getElementById('price').value;
        var age = document.getElementById('age').value;
        var company = document.getElementById('company').value;
        
        var table = document.getElementsByTagName('table')[0];

        var newRow = table.insertRow(table.rows.length); 
        
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        
        cel1.innerHTML = person;
        cel2.innerHTML = lname;
        cel3.innerHTML = price;
        cel4.innerHTML = age;
        cel5.innerHTML = company;
    }

function sredniaZar(){
    var table = document.getElementById("table"), sumVal=0;
     for(var i = 1; i < table.rows.length; i++)
        {
            sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML/5);
        }
    document.getElementById("sredniaZarobkow").innerHTML = "Średnia wszystkich zarobkow = " + sumVal;
}

function sredniaWiek(){
    var table = document.getElementById("table"), sumVal=0;
     for(var i = 1; i < table.rows.length; i++)
        {
            sumVal = sumVal + parseInt(table.rows[i].cells[3].innerHTML/5);
        }
    document.getElementById("sredniaWiek").innerHTML = "Średnia wieku = " + sumVal;
}
