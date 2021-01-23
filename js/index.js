
var passList=[]; 
class Passenger {
    constructor(Fname , Lname , Dob , Departure , Arrival , DepartureDate , ArrivalDate , Bags , Food , Extras){
        this.Fname = document.getElementById("Fname").value;
        this.Lname = document.getElementById("Lname").value;
        this.Dob = document.getElementById("Dob").value;
        this.Departure = document.getElementById("Departure").value;
        this.Arrival = document.getElementById("Arrival").value;
        this.DepartureDate = document.getElementById("DepartureDate").value;
        this.ArrivalDate = document.getElementById("ArrivalDate").value;
        this.Bags = document.getElementById("Bags").value;
        this.Food = document.getElementById("Food").value;
        this.Extras = document.getElementById("Extras").value;
    }
}

function create(Fname , Lname , Dob , Departure , Arrival , DepartureDate , ArrivalDate , Bags , Food , Extras){
    return new Passenger(Fname , Lname , Dob , Departure , Arrival , DepartureDate , ArrivalDate , Bags , Food , Extras);
}
function store(){
 passList.push(create(Fname , Lname , Dob , Departure , Arrival , DepartureDate , ArrivalDate , Bags , Food , Extras))
}