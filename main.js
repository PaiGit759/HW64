let button_press = false;

var number_date;

var result = "";

const person = {firstName:"John", lastName:"Doe", age:5, eyeColor:"green"};

function button_onclick()
{
    document.getElementById("imagecat").src = "cropped.jpeg";
    document.getElementById("pex1").innerHTML = person.age;
    document.getElementById("pex2").innerHTML = person.eyeColor;
    document.getElementById("pex3").innerHTML = person.firstName;
    document.getElementById("pex4").innerHTML = person.lastName;
}



/* 
function button_onclick()
{
 
    input_date = new Date(document.getElementById("fild_for_input").value);
    number_date = input_date.getDay();

    document.getElementById("exsamp").style.background = "#A0bF";
    document.getElementById("exsamp").style.color = "#FFFF";
    document.getElementById("exsamp").innerText = number_date;


switch (number_date) {

    case  0 : {
    result = "This is a Sunday";
    break;
}
    case  1 : {
        result = "This is a Monday";
        break;
    }
    case  2 : {
        result = "This is a Tuesday";
        break;
    }
    case  3 : {
        result = "This is a Wednesday";
        break;
    }
    case  4 : {
        result = "This is a Thursday";
        break;
    }
    case  5 : {
        result = "This is a Friday";
        break;
    }
    case  6 : {
        result = "This is a Saturday";
        break;
    }

}


document.getElementById("exsamp").innerText = result;
}
 */