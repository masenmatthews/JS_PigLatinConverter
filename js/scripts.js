$(document).ready(function() {
  $("#form").submit(function(event) {
  event.preventDefault();
  var userInput = $("#user-sentence").val();
  // The Array.from method turns a string into an array
  var inputArray = Array.from(userInput);
  var aySingle = (userInput + "ay");

  inputArray.forEach(function(x){
    if ((x === "a") || (x === "e") || (x === "i") || (x === "o") || (x === "u"))  {
        $("#new-sentence").text(aySingle);
    } else if ((x !== "a") || (x !== "e") || (x !== "i") || (x !== "o") || (x !== "u")) {
        $("#new-sentence").text(aySingle);
    }
    
  });

  console.log();



  });
});
