
var passList=[]; 
class Passenger {
    constructor(Food , Extras){
        this.id = ID
        this.Fname = document.getElementById("Fname").value;
        this.Lname = document.getElementById("Lname").value;
        this.Dob = document.getElementById("Dob").value;
        this.Departure = document.getElementById("Departure").value;
        this.Arrival = document.getElementById("Arrival").value;
        this.DepartureDate = document.getElementById("DepartureDate").value;
        this.ArrivalDate = document.getElementById("ArrivalDate").value;
        this.Bags = document.getElementById("Bags").value;
        this.Food = Food;
        this.Extras = Extras;
    }
}
var currentPass = null
var ID = 1

function create(Fname , Lname , Dob , Departure , Arrival , DepartureDate , ArrivalDate , Bags , Food , Extras){
    

var radios = document.getElementsByTagName('input');

    document.getElementById("Food").value
    var Food = null;
    var Extras = null;
    for (var i = 0; i < radios.length; i++) {
        if(radios[i].checked && radios[i].id == "Food"){
            Food = radios[i].value;
        }
        if(radios[i].checked && radios[i].id == "Extras"){
            Extras = radios[i].value;
        }
    }

    return new Passenger(Food , Extras);
}
function store(){
 passList.push(create(Fname , Lname , Dob , Departure , Arrival , DepartureDate , ArrivalDate , Bags , Food , Extras));
 ID++;
}

function search(Ids){
    for(i = 0; i < passList.length; i++){
        if(passList[i].id == document.getElementById("Ids").value){
            currentPass = passList[i];
            return passList[i];
        }
    }
}

