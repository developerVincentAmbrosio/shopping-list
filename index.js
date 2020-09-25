$(function() {
//  $event.stopPropagation();

  //delete an item
  $(".shopping-item-delete").click(function(event) {
    $(this).closest("li").remove();
//    console.log($(this).closest("li"));
  });

  // check button 
  $(".shopping-item-toggle").click(function(event) {
    $(this).closest(".shopping-item").toggleClass("shopping-item__checked");
  //  console.log($(this).closest(".shopping-item"));
  });
  
  // add an item
  //event.preventDefault()
  $("form").submit(function(event) {
    const newListItem = $this.val(text); //keystrokes from submitted form

    $("ul").append("<li>" + newListItem + "<li>");
  });

  //js-shopping-list-form //in form html element

});