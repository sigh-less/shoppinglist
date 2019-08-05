// This is the add item to list function
$("#js-shopping-list-form").on('submit', function(e){
    //prevents form submission
    e.preventDefault();
    //stores user input for use
    let new_item = $('#shopping-list-entry').val();
    //appends input to the ul
    $(".shopping-list").append('<li><span class="shopping-item">'+new_item+'</span></li>');
    //clears the input field
    $('#shopping-list-entry').val("");
});

/* This is the add item to list function -- THIS ADDS BUTTONS BUT THEY DO NOT WORK
$("#js-shopping-list-form").on('submit', function(e){
    //prevents form submission
    e.preventDefault();
    //stores user input for use
    let new_item = $('#shopping-list-entry').val();
    //appends input to the ul
    $(".shopping-list").append('<li><span class="shopping-item">'+new_item+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    //clears the input field
    $('#shopping-list-entry').val("");
}); */

// this function toggles if an item is checked or not
$('.shopping-item-toggle').on('click', function(e){
    $(e.target).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});

// this is the "delete" functionality button
$('.shopping-item-delete').on('click', function(){
    $(this).closest("li").remove();
});