const idnumber =
  "A1 A2 A3 A4 B1 B2 B3 B4 C1 C2 C3 C4 D1 D2 D3 D4 E1 E2 E3 E4 F1 F2 F3 F4 G1 G2 G3 G4 H1 H2 H3 H4 I1 I2 I3 I4 J1 J2 J3 J4";

let seats40 = 40;
let selectSeatLength = 0;
const bookedSeat = [];

let phoneNumber=[];
console.log('ohone', phoneNumber)
const getShowTicketId = document.getElementById("showTicket");
const discountPrice = document.getElementById("discountPrice");
const getTicketPrice = returnInnerText("ticketPrice");

let getTotalSeatInnertext = returnInnerText("totalSeat");

let getTotalTicketPrice = returnInnerText("totalPrice");

const seatNumbers = idnumber.split(" ");

document.getElementById("seat").addEventListener("click", function (e) {
  const getSeatNumber = e.target.innerText;
  const bookSeat = seatNumbers.includes(getSeatNumber);

  if (bookedSeat.includes(getSeatNumber)) {
    return;
  } else {
    if (bookSeat) {
      selectSeatLength++;
      if (selectSeatLength <= 4) {
        getId("seatBooking").innerText = selectSeatLength;
      }
      // increase seat limit
      if (selectSeatLength === 4) {
        document.getElementById("applyBtn").removeAttribute("disabled");
      }

      
      if ((selectSeatLength >= 1) && (phoneNumber>0) ) {
        document.getElementById("submit").removeAttribute("disabled");
      }

      if (selectSeatLength <= 4) {
        getTotalTicketPrice = getTotalTicketPrice + getTicketPrice;
        document.getElementById("totalPrice").innerText = getTotalTicketPrice;
        getId("grandTotal").innerText = getTotalTicketPrice;

        getTotalSeatInnertext--;
        totalSeat.innerText = getTotalSeatInnertext;
        document.getElementById(getSeatNumber).style.background = "green";

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

        // CHECK SEAT ALL READY BOOKED

        bookedSeat.push(getSeatNumber);

        getShowTicketId.appendChild(li);
      }
    }
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
    getId("discountPrice").innerText = discountPrice;
    getId("grandTotal").innerText = getTotalTicketPrice - discountPrice;
    document.getElementById("discountDiv").classList.remove("hidden");
    getId("couponInputField").classList.add("hidden");
  } else if (getCouponCode == "Couple 20") {
    let discountPrice = getTotalTicketPrice * 0.2;
    getId("discountPrice").innerText = discountPrice;
    document.getElementById("discountDiv").classList.remove("hidden");
    getId("grandTotal").innerText = getTotalTicketPrice - discountPrice;
    getId("couponInputField").classList.add("hidden");
  } else {
    alert("Wrong Coupon Code");
  }
});

// document.getElementById("submit").addEventListener("click", function() {
//   const pName = document.getElementById('pName');
//   const getName = pName.value;
//   const pNumber = retunInputValue("pNumber");
//   console.log('name', pName, 'num', pNumber)
//   window.location.href = "./success.html";

// });

// function retunInputValue(id) {
//   const fieldId = document.getElementById(id);
//   const getText = fieldId.value;

//   return getText;
// }

document.getElementById("submit").addEventListener("click", function () {
  const pasName = document.getElementById("pName");
  let passNameLength = pasName.value;
  if (passNameLength == "") {
    // getId(nameMsg).style.classList.remove('hidden')
    getId("nameMsg").classList.remove("hidden");
  }

  const pasNumber = document.getElementById("pNumber");
  const passNumber = pasNumber.value.length;

  if (pasNumber.value == "") {
    getId("emptyNumberField").classList.remove("hidden");
  }

  console.log(passNumber);

  if (passNumber > 0) {
    window.location.href = "./success.html";
  }
});

function getId(id) {
  const returnId = document.getElementById(id);

  return returnId;
}

let i = 0;
document.getElementById("pName").addEventListener("keypress", function (event) {
  i++;

  if (i >= 1) {
    getId("nameMsg").style.display = "none";
  }
});




document.getElementById("pNumber").addEventListener("keypress", function (e) {
 

  phoneNumber++;
  if (phoneNumber >= 1) {
    getId("emptyNumberField").style.display = "none";
  }
});


function pNUmberKeyPress(){
let val = getId("pNumber").value;
console.log('val', val)
}