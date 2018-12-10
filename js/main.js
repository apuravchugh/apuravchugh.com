const header = new Vue({
    el: "#mainHeader",
    methods: {
        navBar(){
            document.querySelector('.hamburgerMenu').classList.toggle("closeBtn");
            document.querySelector('#smallScreenNav').classList.toggle("navOpen");
        }
    }
});
function activeNav() {
    if(document.documentElement.clientHeight, window.innerWidth > 720){
        scrollSpy('#bigScreenNav', {
            offset: 1,
            menuActiveTarget: 'li',
            activeClass: 'active',
        })
    } else {
        scrollSpy('#smallScreenNav', {
            offset: 1,
            menuActiveTarget: 'li',
            activeClass: 'active',
        })
    }
}
activeNav();
function windowSizeDependant(){
    var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    document.querySelector('#home').style.height = (viewPortHeight - 90) + "px";
    document.querySelector('#smallScreenNav').style.paddingTop = ((viewPortHeight - 200) / 2) + "px";
    document.querySelector('#smallScreenNav').style.paddingBottom = ((viewPortHeight - 90) / 2) + "px";
    var viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
    if(viewPortWidth <= 420){
        document.querySelector('#meImage').src = "images/my_photof.png";
    }
    if(viewPortWidth < 720){
        document.querySelector('.filter').classList.add("hidden");
    } else {
        document.querySelector('.filter').classList.remove("hidden");
    }
}
windowSizeDependant();
var waypoint = new Waypoint({
    element: document.querySelector('#about'),
    handler: function(direction) {
      document.querySelector('#getToKnowMe').classList.add('leftSlideIn')
    },
    offset: '75%'
})
var waypoint = new Waypoint({
    element: document.querySelector('#about'),
    handler: function(direction) {
      document.querySelector('#inspirationContainer').classList.add('rightSlideIn')
    }
})
var waypoint = new Waypoint({
    element: document.querySelector('#video'),
    handler: function(direction) {
      document.querySelector('#myServices').classList.add('leftSlideIn')
    },
    offset: '75%'
})
var waypoint = new Waypoint({
    element: document.querySelector('#video'),
    handler: function(direction) {
      document.querySelector('#techContainer').classList.add('rightSlideIn')
    },
    offset: '10%'
})
var waypoint = new Waypoint({
    element: document.querySelector('#portfolio'),
    handler: function(direction) {
      document.querySelector('#myWork').classList.add('leftSlideIn')
    }
})
var waypoint = new Waypoint({
    element: document.querySelector('#contact'),
    handler: function(direction) {
      document.querySelector('#contactForm').classList.add('leftSlideIn')
    }
})
var waypoint = new Waypoint({
    element: document.querySelector('#contact'),
    handler: function(direction) {
      document.querySelector('#myContactInfo').classList.add('rightSlideIn')
    }
})
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,
    easing: 'easeInOutCubic'
});
window.addEventListener("resize", activeNav, false);
window.addEventListener("resize", windowSizeDependant, false);



