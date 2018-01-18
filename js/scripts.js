

$(document).ready(function() {
  $("#form").submit(function(event) {
  event.preventDefault();
  var userInput = $("#user-sentence").val();
  // The Array.from method turns a string into an array
  var inputArray = Array.from(userInput);
  var aySingle = (userInput + "ay");
  var charLength = inputArray.length;
  var firstLetter = userInput.slice(0,1);
  var finalWord = (userInput.slice(1, ) + firstLetter + "ay");

  if (inputArray[0] === "a" || inputArray[0] === "e" || inputArray[0] === "i" || inputArray[0] === "o" || inputArray[0] === "u") {
    $("#new-sentence").text(aySingle);
  } else if ((inputArray[0] !== "a" || inputArray[0] !== "e" || inputArray[0] !== "i" || inputArray[0] !== "o" || inputArray[0] !=="u") && charLength === 1) {
    $("#new-sentence").text(aySingle);
  }

  else {
    $("#new-sentence").text(finalWord);
};

  }); // submit button
}); // document ready
