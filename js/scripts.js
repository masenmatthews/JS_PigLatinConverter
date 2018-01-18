$(document).ready(function() {
  $("#form").submit(function(event) {
  var userInput = $("#user-sentence").val();
  $("#new-sentence").text(userInput);
  event.preventDefault();
  });
});
