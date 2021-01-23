class Passenger {
    constructor(Fname , Lname , Dob , Departure , Arrival , DepartureDate , ArrivalDate , Bags , Food , Extras){
        this.Fname = document.getElementById(Fname).innerHTML;
        this.Lname = document.getElementById(Lname).innerHTML;
        this.Dob = document.getElementById(Dob).innerHTML;
        this.Departure = document.getElementById(Departure).innerHTML;
        this.Arrival = document.getElementById(Arrival).innerHTML;
        this.DepartureDate = document.getElementById(DepartureDate).innerHTML;
        this.ArrivalDate = document.getElementById(ArrivalDate).innerHTML;
        this.Bags = document.getElementById(Bags).innerHTML;
        this.Food = document.getElementById(Food).innerHTML;
        this.Extras = document.getElementById(Extras).innerHTML;
    }
}

function store{
    var mike = new Passenger(Fname , Lname , Dob , Departure , Arrival , DepartureDate , ArrivalDate , Bags , Food , Extras);
}