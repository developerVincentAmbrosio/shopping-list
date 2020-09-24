$(function() {
  $event.stopPropagation();
  $event.stopDefault();
  //delete an item
  $(".shopping-item-delete").click(function(event) {
    this.remove("li");
  });

  // check button 
  $(".shopping-item-toggle").click(function(event) {
    this.toggleClass(".shopping-item__checked")
  });
  
  // add an item
  $("#shopping-list-entry").submit(function(event) {
    const newListItem = $this; //keystrokes from submitted form

    $("ul").append("<li>" + newListItem + "<li>");
  });

  //js-shopping-list-form //in form html element

});