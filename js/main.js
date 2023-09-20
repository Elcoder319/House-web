$(document).ready(function () {
  // smoothly scroll ===============================>
  let navLinks = $("#ul-links li a");
  navLinks.click(function (e) {
    e.preventDefault();
    $("html , body").animate(
      {
      scrollTop: $("#" + $(this).data("scroll")).offset().top + 10,
    },
    20
  );
});

//   On scroll Add Active Class to link
$(window).scroll(function () {
  $(".section").each(function () {
    if ($(window).scrollTop() > $(this).offset().top) {
      navLinks.each(function () {
        navLinks.removeClass("active");
      });
      let secId = $(this).attr("id");
      $('#ul-links li a[data-scroll  = "' + secId + '" ]').addClass("active");
    }
  });
  });
  
  // Add Acive class to nav links
  navLinks.click(function () {
    $(this)
    .addClass("active")
    .parent()
    .siblings()
    .find("a")
    .removeClass("active");
  });

let placeAttr;
  $("[placeholder]").focus(function () {
    placeAttr = $(this).attr("placeholder");
    $(this).attr("placeholder", "");
  }).blur(function () {
    $(this).attr("placeholder", placeAttr);
  })

});