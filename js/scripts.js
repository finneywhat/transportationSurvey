$(document).ready(function(){
  $("form#transportation-survey").submit(function(event){
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");
    });


    event.preventDefault();
  });
});
