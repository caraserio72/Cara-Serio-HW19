// var helloWorld = 'Hello World!';

// $(".primary-nav").hover(function(){
//     $(this).css({
//         "font-size": "24px",
//         "color": "red"
//     });
//     }, function(){
//     $(this).css({
//         "font-size": "18px",
//     });

// $(".primary-nav").hover(function(){
//     $(this).css("font-size","24px");
//     });

// $(".primary-nav").hover(function(){
//     $(this).css({
//         "font-size":"24px",
//         "font-weight": "bolder"
//     });
//     });

// On Hover
$(".primary-nav").hover(function(){
    $(this).css({
        "font-size": "22px",
        "font-weight": "bolder",
        "text-decoration": "underline"
    });
    }, function(){
    $(this).css({
        "font-size": "18px",
        "font-weight": "regular",
        "text-decoration": "none"
    });
  });

// On Click
// $(".primary-nav").mousedown(function(){
//     $(this).css({
//         "background-color": "#F2CDC3",
//         "font-size": "24px",
//         "font-weight": "bolder",
//         "text-decoration": "underline"
//     });
//     }, function(){
//     $(this).css({
//         "background-color": "#062559",
//         "font-size": "18px",
//         "font-weight": "regular"
//     });
//   });


$(".button-design").on("click", function(){
    console.log("button clicked!");
});