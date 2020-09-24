$(function() {
  $event.stopPropagation();
  //delete button class
  $(".shopping-item-delete").click(function(event) {
    this.remove("li");
  });

  // check button class //adds a strikethrough text
  $(".shopping-item-toggle").click(function(event) {
    this.toggleClass(".shopping-item__checked")
  });
  //js-shopping-list-form //in form html element
  
  //".shopping-list-entry" // id of text input form


});