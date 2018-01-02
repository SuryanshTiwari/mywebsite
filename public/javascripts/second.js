$(function() {
  $( ".spotlight" ).draggable();
  $( ".drophere" ).droppable({
    drop: function( event, ui ) {
      $( ".success" ).addClass( "showme" );
    }
  });
});