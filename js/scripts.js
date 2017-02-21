$(document).ready(function(){
  $("form#transportation-survey").submit(function(event){
    $("#work-responses").show();
    $("#play-responses").show();

    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");
    });

    $("input:checkbox[name=play-transportation]:checked").each(function(){
      var playTransportationMode = $(this).val();
      $("#play-responses").append(playTransportationMode + "<br>");
    });

    event.preventDefault();
  });
});
