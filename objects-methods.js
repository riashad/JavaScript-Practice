let restaurant = {
    name: 'Hotel Shahbag',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize){ //method
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize;

    },
    RemoveParty: function(partySize){
        this.guestCount = this.guestCount - partySize;
    }
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));

restaurant.RemoveParty(5);
console.log(restaurant.checkAvailability(4));

/* Solution using functions */

/*

// SeatParty
let SeatParty = function(hotel, bookingNumber){
    if(restaurant.checkAvailability(bookingNumber)){
        hotel.guestCount = hotel.guestCount + bookingNumber;
        console.log("Thanks for booking. Now total seat is: " +hotel.guestCount);
    }else{
        console.log("Ops! No Seat Available")
    }
}
console.log(SeatParty(restaurant, 5));
console.log(SeatParty(restaurant, 70));

//console.log(SeatParty(restaurant, 1));
// RemoveParty
let removeParty = function(hotel, removeBooking){
    hotel.guestCount = restaurant.guestCount - removeBooking;
    console.log("Now total seat available is : "+ hotel.guestCount);     
}

console.log(removeParty(restaurant,5));

*/