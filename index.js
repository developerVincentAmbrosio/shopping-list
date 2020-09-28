$(function() {

  //delete an item
  $(".shopping-item-delete").click(function(event) {
    $(this).closest("li").remove();
  });

  // check button 
  $(".shopping-item-toggle").click(function(event) {
    $(this).parent().prev().toggleClass("shopping-item__checked");
  });

  // add an item
  $("form").submit(function(event) {
    event.preventDefault()
    const newListItem = $("#shopping-list-entry").val(); //keystrokes from submitted form
    $(".shopping-list").append('<li><span class="shopping-item">' + newListItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');

    $(".shopping-item-delete").click(function(event) {
      $(this).closest("li").remove();
    });
  
    $(".shopping-item-toggle").click(function(event) {
      $(this).parent().prev().toggleClass("shopping-item__checked");
    });
  });

});