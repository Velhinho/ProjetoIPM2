var hotelnames = ["Hotel1", "Hotel2"];
var hotelnumbers = [2222, 4444];
var idnumbers = [1111, 3333];


function getTable(cellnumber) 
{
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



function addAvailableClass(table_element, anchor_element, href)
{
    table_element.classList.add("available");
    anchor_element.href = href;
}


function addUnavailableClass(table_element, anchor_element) 
{
    table_element.classList.add("available");
    anchor_element.href = "#";
}


function alreadyCheckedIn()
{
    var current = document.getElementById("current");
    var checkin = document.getElementById("checkin");
    var checkout = document.getElementById("checkout");
    var currentlink = document.getElementById("currentlink");
    var checkinlink = document.getElementById("checkinlink");
    var checkoutlink = document.getElementById("checkoutlink");

    if(!sessionStorage.hotel)
    {
        addUnavailableClass(current, currentlink);
        addAvailableClass(checkin, checkinlink, idnumber.html);
        addUnavailableClass(checkout, checkoutlink);
    }
    else
    {
        addAvailableClass(current, currentlink, "#");   //FIX HREF
        addUnavailableClass(checkin, checkinlink);
        addAvailableClass(checkout, checkoutlink, "#"); //FIX HREF
    }
}


function getEnteredNumber()
{
    var tablemiddlerow = document.getElementById("numbertable").rows[1];
    var numberstring = "";

    for (let letter = 0; letter < tablemiddlerow.cells.length; letter++) {
        const element = tablemiddlerow.cells[letter].innerHTML;
        numberstring += element;
    }

    return numberstring;
}


function passwordIndex(list, password)
{
    for (let index = 0; index < list.length; index++) {
        if( !password.localeCompare(list[index]) )
            return index;
    }

    return -1;
}


function wrongNumber() 
{
    var backtext = document.getElementById("backtext");
    backtext.innerHTML = "Invalid Number";
    backtext.style.color = "rgb(255, 147, 131)";
}


function goNextScreen(next_href)
{
    window.location.assign(next_href);
}


function checkNumber(screen, next_href)
{
    var number = getEnteredNumber();
    var index;

    if(screen == 'id')
    {
        index = passwordIndex(idnumbers, number);

        if(index != -1)
        {
            sessionStorage.idindex = index;
            goNextScreen(next_href);
        }
        else
        {
            wrongNumber();
        }
    }

    if(screen == 'hotel')
    {
        index = parseInt(sessionStorage.index);
        
        if(number.localeCompare(hotelnumbers[index]))
        {
            sessionStorage.hotel = hotelnames[index];
            goNextScreen(next_href);
        }
        else 
        {
            wrongNumber();
        }
    }
}