$(function() {

  // add an item
  $("form").submit(function(event) {
    event.preventDefault()
    const newListItem = $("#shopping-list-entry").val(); //keystrokes from submitted form
    $("ul").append('<li><span class="shopping-item">' + newListItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
  });

  //delete an item
  $("ul").on("click", ".shopping-item-delete", function(event) {
    $(this).closest("li").remove();
  });

  // check button 
  $("ul").on("click", ".shopping-item-toggle", function(event) {
    $(this).parent().prev().toggleClass("shopping-item__checked");
  });

});