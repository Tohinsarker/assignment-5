const idnumber = "A1 A2 A3 A4 B1 B2 B3 B4 C1 C2 C3 C4 D1 D2 D3 D4 E1 E2 E3 E4 F1 F2 F3 F4 G1 G2 G3 G4 H1 H2 H3 H4 I1 I2 I3 I4 J1 J2 J3 J4";





document.getElementById('seat').addEventListener('click', function(e){

    const seatNumbers = idnumber.split(' ');
    console.log(seatNumbers)
    const getSeatNumber = (e.target.innerText);
    // console.log(getSeatNumber)
    // for(id of seatNumbers){
    //     console.log(id)
    // }
    
    const bookSeat = seatNumbers.includes(getSeatNumber);
    
    if(bookSeat){
        document.getElementById(getSeatNumber).style.background="green"
    }

})