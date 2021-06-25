$(document).ready(function () {
  let sum = "";
  let arr;
  let screenEl = document.getElementById("screen");
  // list Functions
  // function number
  function number() {
    let number = $(this).attr("value");
    sum += number;

    $("#screen").html(sum);
    arr = screenEl.innerHTML.split("");
    
  }
  // function operator
  function operator(e) {
    e.preventDefault();
    let operator = $(this).attr("value");
    sum += operator;

    $("#screen").html(sum);
    arr = screenEl.innerHTML;

    if (/(?=(\D{2}))/g.test(sum)) {
      sum = arr.substring(0, arr.length - 1);
      $("#screen").html(sum);
    }
  }

  // function equal
  function equal() {
    let total = eval(sum);

    $("#screen").html(total % 1 != 0 ? total.toFixed(2) : total);
  }
  // function clear
  function clear() {
    sum = "";

    $("#screen").html(0);
  }

  // Main Function
  function calculator() {
    // list Events
    $(".buttons .digit").on("click", number);
    $(".buttons .operator").on("click", operator);
    $("#equal").on("click", equal);
    $("#clear").on("click", clear);
  }
  // Call Main Function
  calculator();
});
