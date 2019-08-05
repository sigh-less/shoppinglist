/* $('#btn1').click(function(){
    alert('Button Clicked!');
}); */

$('.shopping-item-toggle').click(function(e){
    $(e.target).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});

/*$("#js-shopping-list-form").on('submit', function(e){
    let newItem = $('shopping-list-entry').val();
    $(".shopping-list").append();

    e.preventDefault();
}); */