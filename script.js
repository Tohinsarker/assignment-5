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
  if (selectSeatLength === 4) {
    document.getElementById("applyBtn").removeAttribute("disabled");
  }

  if (selectSeatLength >= 1) {
    document.getElementById("submit").removeAttribute("disabled");
  }

  const seatNumbers = idnumber.split(" ");

  const getSeatNumber = e.target.innerText;

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
    document.getElementById("discountPrice").innerText = discountPrice;
    document.getElementById("grandTotal").innerText =
      getTotalTicketPrice - discountPrice;
    document.getElementById("discountDiv").classList.remove("hidden");
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

document.getElementById('submit').addEventListener("click", function(){
  const pasName = document.getElementById("pName");
  let passNameLength = pasName.value;
  if(passNameLength == ""){
    // getId(nameMsg).style.classList.remove('hidden')
    getId("nameMsg").classList.remove("hidden");
  }
  


 
  const pasNumber = document.getElementById("pNumber");
  const passNumber = (pasNumber.value).length;

  if(pasNumber.value == ""){
    getId("emptyNumberField").classList.remove("hidden")
  }

  console.log(passNumber)

  if(passNumber>0){
    window.location.href = './success.html';

  }
})




function getId(id){
  const returnId = document.getElementById(id);

  return returnId;
}



let i = 0
document.getElementById("pName").addEventListener("keypress", function(event){
  i++;

  if(i>=1){
    getId("nameMsg").style.display = 'none';
   
  }

  
})


let j=0;
document.getElementById('pNumber').addEventListener("keypress", function(e){
j++;
  if(j>=1){
    getId("emptyNumberField").style.display = 'none';
   
  }
})