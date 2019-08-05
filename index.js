/* this function changes if an item is checked or not
    it uses closest with find to toggle on/off the checked class 
*/
$('.shopping-item-toggle').click(function(e){
    $(e.target).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});

// This is the add item to list function
$("#js-shopping-list-form").on('submit', function(e){
    e.preventDefault();
    let new_item = $('#shopping-list-entry').val();
    $(".shopping-list").append('<li>'+new_item+'</li>');
});

// this is the "delete" functionality button
$('.shopping-item-delete').click(function(e){
    $(e.target).closest("li").remove();
});