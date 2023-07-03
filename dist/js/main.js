(function ($) {
  $(function () {
    //  open and close nav 
    $('#navbar-toggle').click(function () {
      $('nav ul.nav-list').slideToggle();
    });
    // Hamburger toggle
    $('#navbar-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  });
})(jQuery);

// -- Mobile Button --//
$(document).ready(function () {
  $("parent").click(function () {
    $("ul").toggleClass("child");
  });
});
