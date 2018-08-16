<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container nav-container">
      <!-- <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a> -->
      <!-- <a class="navbar-brand navbar-brand-lg hidden-lg-down" href="/">
        <img class="logo" src="../../assets/logo_istfr_white.svg" alt="">
      </a> -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <scrollactive class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#page-top"><i class="fa fa-arrow-up"></i></a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#key-dates">KEY DATES</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#announcements">ANNOUNCEMENTS</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#committee">COMMITTEE</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#program">PROGRAM</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#speakers">SPEAKERS</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#accomodation">ACCOMODATION</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#registration">REGISTRATION</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#submission">SUBMISSION</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#venue">VENUE</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#faq">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#contact">CONTACT</a>
          </li>
        </ul>
              <!-- <b-list-group class="collapse navbar-collapse" id="navbarResponsive">
        <ul  class="navbar-nav ml-auto">
        <b-list-group-item class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#page-top"><i class="fa fa-arrow-up"></i></a>
          </b-list-group-item>
          <b-list-group-item class="nav-item" href="#key-dates">
            KEY DATES
          </b-list-group-item>
          <b-list-group-item class="nav-item" href="#announcements">
            ANNOUNCEMENTS
          </b-list-group-item>
          <b-list-group-item class="nav-item" href="#committee">
            COMMITTEE
          </b-list-group-item>
          <b-list-group-item class="nav-item" href="#program">
            PROGRAM
          </b-list-group-item>
          <b-list-group-item class="nav-item" href="#speakers">
            SPEAKERS
          </b-list-group-item>
          <b-list-group-item class="nav-item" href="#accomodation">
            ACCOMODATION
          </b-list-group-item>
          <b-list-group-item class="nav-item" href="#registration">
            REGISTRATION
          </b-list-group-item>
          <b-list-group-item class="nav-item"  href="#submission">
            SUBMISSION
          </b-list-group-item>
          <b-list-group-item class="nav-item"  href="#venue">
            VENUE
          </b-list-group-item>
          <b-list-group-item class="nav-item" href="#contact">
            CONTACT
          </b-list-group-item>
        </ul>
      </b-list-group> -->
      </scrollactive>
    </div>
  </nav>
</template>

<script>
  // import jQuery from 'jquery'
  export default {
    name: 'Navbar',
    // TODO: Figure out how to fit this script in
    // mounted () {
    //   (function ($) {
    //     'use strict' // Start of use strict

    //     // Smooth scrolling using jQuery easing
    //     $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    //       if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    //         var target = $(this.hash)
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
    //         if (target.length) {
    //           $('html, body').animate({
    //             scrollTop: (target.offset().top - 54)
    //           }, 1000, 'easeInOutExpo')
    //           return false
    //         }
    //       }
    //     })

    //     // Closes responsive menu when a scroll trigger link is clicked
    //     $('.js-scroll-trigger').click(function () {
    //       $('.navbar-collapse').collapse('hide')
    //     })

    //     // Activate scrollspy to add active class to navbar items on scroll
    //     $('body').scrollspy({
    //       target: '#mainNav',
    //       offset: 54
    //     })
    //   })(jQuery) // End of use strict
    // },
    methods: {}
  }
</script>
