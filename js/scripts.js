// Business (or back-end) logic:





// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  // $("form#name").submit(function(event) {
  $("form#form1").submit(function(event) {
    $("#return").show();
    event.preventDefault();
    var namePatient = $("input#nameEntry").val();

    $(".name").text(namePatient);

    });

    $("form#form2").submit(function(event) {
      event.preventDefault();
      var descriptionPatient = $("input#descriptionEntry").val();

      $(".description").text(descriptionPatient);

      });

    $("form#form3").submit(function(event) {
        event.preventDefault();
        var datePatient = $("input#dateEntry").val();

      $(".date").text(datePatient);

    });

    $("form#form4").submit(function(event) {
        event.preventDefault();
        var startPatient = $("input#startEntry").val();

      $(".time").text(startPatient);

    });

    $("form#form5").submit(function(event) {
        event.preventDefault();
        var endPatient = $("input#endEntry").val();

      $(".time2").text(endPatient);

    });

  });
