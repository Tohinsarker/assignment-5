const idnumber =
  "A1 A2 A3 A4 B1 B2 B3 B4 C1 C2 C3 C4 D1 D2 D3 D4 E1 E2 E3 E4 F1 F2 F3 F4 G1 G2 G3 G4 H1 H2 H3 H4 I1 I2 I3 I4 J1 J2 J3 J4";

let seats40 = 40;
let selectSeatLength = 0;

const getShowTicketId = document.getElementById("showTicket");
const discountPrice = document.getElementById("discountPrice");
const getTicketPrice = returnInnerText("ticketPrice");

let getTotalSeatInnertext = returnInnerText("totalSeat");

let getTotalTicketPrice = returnInnerText("totalPrice");

document.getElementById("seat").addEventListener("click", function (e) {
  // increase seat limit
  selectSeatLength = selectSeatLength + 1;
  //   if(selectSeatLength == 4){
  //     document.getElementById("applyBtn").removeAttribute('disabled');
  // }

  const seatNumbers = idnumber.split(" ");

  const getSeatNumber = e.target.innerText;
  // console.log(getSeatNumber)
  // for(id of seatNumbers){
  //     console.log(id)
  // }

  const bookSeat = seatNumbers.includes(getSeatNumber);

  if (selectSeatLength <= 4) {
    getTotalTicketPrice = getTotalTicketPrice + getTicketPrice;
    document.getElementById("totalPrice").innerText = getTotalTicketPrice;
    if (bookSeat) {
      getTotalSeatInnertext--;
      totalSeat.innerText = getTotalSeatInnertext;
      document.getElementById(getSeatNumber).style.background = "green";
    }

    const li = document.createElement("li");
    const seat = document.createElement("p");
    seat.innerText = getSeatNumber;

    const trainClass = document.createElement("p");
    trainClass.innerText = "Economy";
    trainClass.classList.add("pStyle");

    const showPrice = document.createElement("p");
    showPrice.innerText = getTicketPrice;
    li.classList.add("showSeatPlan");

    li.appendChild(seat);
    li.appendChild(trainClass);
    li.appendChild(showPrice);

    getShowTicketId.appendChild(li);
  }
});

function returnInnerText(id) {
  const getId = document.getElementById(id);
  const parseInNumber = parseInt(getId.innerText);
  return parseInNumber;
}

// coupon functionality

const applyBtnId = document.getElementById("applyBtn");

const couponCodeId = document.getElementById("coupnCode");
const grandTotalId = returnInnerText("grandTotal");


//  Apply Discount Price function 

applyBtnId.addEventListener("click", function () {
  const getCouponCode = couponCodeId.value;
 
  if (getCouponCode == "NEW15") {
    let discountPrice = getTotalTicketPrice * 0.15;
    document.getElementById('discountPrice').innerText = discountPrice;
    document.getElementById('grandTotal').innerText = getTotalTicketPrice - discountPrice;
    document.getElementById("discountDiv").classList.remove("hidden")


  } else {
    alert("Wrong Coupon Code");
  }
});
