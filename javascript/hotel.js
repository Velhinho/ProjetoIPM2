function getTable(cellnumber) {
    var numbertable = document.getElementById("numbertable");
    var table = {
        previous: numbertable.rows[0].cells[cellnumber],
        current: numbertable.rows[1].cells[cellnumber],
        next: numbertable.rows[2].cells[cellnumber],
    };

    return table;
}


function changeNumber(rownumber, cellnumber)
{
    if(rownumber == 0)
        previousNumber(cellnumber);
    
    if(rownumber == 2)
        nextNumber(cellnumber);
}


function previousNumber(cellnumber)
{
    var table = getTable(cellnumber);

    table.next.innerHTML = table.current.innerHTML;
    table.current.innerHTML = table.previous.innerHTML;

    if(table.previous.innerHTML == "0"){
        table.previous.innerHTML = "9";
    }
    else{
        table.previous.innerHTML = parseInt(table.previous.innerHTML) - 1;
    }
}


function nextNumber(cellnumber)
{
    var table = getTable(cellnumber);

    table.previous.innerHTML = table.current.innerHTML;
    table.current.innerHTML = table.next.innerHTML;

    if(table.next.innerHTML == "9")
    {
        table.next.innerHTML = "0"
    }
    else
    {
        table.next.innerHTML = parseInt(table.next.innerHTML) + 1;
    }
}


function getNumber()
{
    var tablemiddlerow = document.getElementById("numbertable").rows[1];
    var numberstring = "";

    for (let letter = 0; letter < tablemiddlerow.cells.length; letter++) {
        const element = tablemiddlerow.cells[letter].innerHTML;
        numberstring += element;
    }

    return parseInt(numberstring);
}


function checkNumber(password, next_href)
{
    var number = getNumber();

    console.log(number);

    if(number != password)
    {
        wrongNumber("Hotel Number");
    }
    else
    {
        window.location.assign(next_href);
    }
}


function wrongNumber()
{
    var backtext = document.getElementById("backtext");
    backtext.innerHTML = "Invalid Number";
    backtext.style.color = "rgb(255, 147, 131)";
}