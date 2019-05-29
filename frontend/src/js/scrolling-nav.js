$(document).ready(() => {
  $('body').scrollspy({
    target: '#mainNav'
  });

  $('a.js-scroll-trigger').click(e => {
    e.preventDefault()
    const link = e.target.getAttribute('href').substr(1)
    console.log(link, typeof link)
    document.querySelector(`section[id=${link}]`)
      .scrollIntoView({ block: 'start', behavior: 'smooth' })
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
})