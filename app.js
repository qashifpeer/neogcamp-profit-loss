const initialPriceRef = document.querySelector("#initial-price");
const quantityRef = document.querySelector("#quantity");
const currentPriceRef = document.querySelector("#current-price");
const btnSubmitRef = document.querySelector("#btn-submit");
const resultRef = document.querySelector("#result");

function calculate(initial, quantity, current) {
  
    if (initial > current) {
    //loss logic
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / initial) * 100;
   showOutput(`the loss is ${loss} and the percentage is ${lossPercentage}%`);
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / initial) * 100;
    showOutput(
      `the profit is ${profit} and the percentage is ${profitPercentage}%`
    );
  } else {
    showOutput("No pain No gain..");
  }
}

btnSubmitRef.addEventListener("click", submitHandler);

function submitHandler() {
  let initialPrice = initialPriceRef.value;
  let quantity = quantityRef.value;
  let currentPrice = currentPriceRef.value;
  if(initialPrice!=="" && currentPrice !=="" && currentPrice !=""){
  calculate(initialPrice, quantity, currentPrice);
  
  }else{
    showOutput("Please enter the values First");
  }
}

function showOutput(message){

    resultRef.innerText= message;


}
