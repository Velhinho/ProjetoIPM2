function changeNumber(rownumber, cellnumber)
{
    if(rownumber == 0)
        previousNumber(rownumber, cellnumber);
    
    if(rownumber == 2)
        nextNumber(rownumber, cellnumber);
}


function previousNumber(rownumber, cellnumber)
{
    var table = document.getElementById("numbertable");
    var previous = table.rows[0].cells[cellnumber];
    var current = table.rows[1].cells[cellnumber];
    var next = table.rows[2].cells[cellnumber];

    next.innerHTML = current.innerHTML;
    current.innerHTML = previous.innerHTML;

    if(previous.innerHTML == "0"){
        previous.innerHTML = "9";
    }
    else{
        previous.innerHTML = parseInt(previous.innerHTML) - 1;
    }
}


function nextNumber(rownumber, cellnumber)
{
    var table = document.getElementById("numbertable");
    var previous = table.rows[rownumber - 2].cells[cellnumber];
    var current = table.rows[rownumber - 1].cells[cellnumber];
    var next = table.rows[rownumber].cells[cellnumber];

    previous.innerHTML = current.innerHTML;
    current.innerHTML = next.innerHTML;

    if(next.innerHTML == "9"){
        next.innerHTML = "0"
    }
    else{
        next.innerHTML = parseInt(next.innerHTML) + 1;
    }
}


function saveNumber(){
    var table
}