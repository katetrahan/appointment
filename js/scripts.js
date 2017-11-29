// Business (or back-end) logic:





// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  // $("form#name").submit(function(event) {
  $("form#form1").submit(function(event) {
    $("#return").show();
    event.preventDefault();
    var namePatient = $("input#nameEntry").val();
    $(".name").text(namePatient);
    var descriptionPatient = $("input#descriptionEntry").val();
    $(".description").text(descriptionPatient);
    var datePatient = $("input#dateEntry").val();
    $(".date").text(datePatient);
    var startPatient = $("input#startEntry").val();
    $(".time").text(startPatient);
    var endPatient = $("input#endEntry").val();
    $(".time2").text(endPatient);

    });

  });
