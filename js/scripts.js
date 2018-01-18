$(document).ready(function() {
  $("#form").submit(function(event) {
  event.preventDefault();
  var userInput = $("#user-sentence").val();
  // The Array.from method turns a string into an array
  var inputArray = Array.from(userInput);
  var aySingle = (userInput + "ay");

  if (inputArray[0] === "a" || inputArray[0] === "e" || inputArray[0] === "i" || inputArray[0] === "o" || inputArray[0] === "u") {
    $("#new-sentence").text(aySingle);
  } else if (inputArray[0] !== "a" || inputArray[0] !== "e" || inputArray[0] !== "i" || inputArray[0] !== "o" || inputArray[0] !=="u") {
    $("#new-sentence").text(aySingle);
  };


  // inputArray.forEach(function(x){
  //   if ((x === "a") || (x === "e") || (x === "i") || (x === "o") || (x === "u"))  {
  //       alert(aySingle);
  //       $("#new-sentence").text(aySingle);
  //   } else if ((x !== "a") || (x !== "e") || (x !== "i") || (x !== "o") || (x !== "u")) {
  //       $("#new-sentence").text(aySingle);
  //   }
  //
  // });





  }); // submit button
}); // document ready
