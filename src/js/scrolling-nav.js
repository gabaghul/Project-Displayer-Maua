$(document).ready( () => {
//     // Closes responsive menu when a scroll trigger link is clicked
//     $('.js-scroll-trigger').click(function () {
//       $('.navbar-collapse').collapse('hide');
//     });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 56
    });

  }
)