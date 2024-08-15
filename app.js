gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

// section1
let sectionOneTl = gsap.timeline()

sectionOneTl
  .from('.section1 h1 span:last-child', { x: '100vw', duration: .5, delay: .5 })
  .from('.section1 h1 span:first-child', { x: '-100vw', duration: .5 })
  .from('.section1 p', { rotation: 90, transformOrigin: '0% 0%', opacity: 0, duration: .5 })
  .from('.section1 img', { y: '100vh', duration: .5 })

// section2
let sectionTwoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section2',
    start: 'top 20%',
    // end: 'bottom 20%',
    // markers: true // delete later
  }
})

sectionTwoTl
  .from('.section2 h2 span:first-child', { y: '-80vw', duration: .5 })
  .from('.section2 h2 span:last-child', { y: '-80vw', duration: .5 })
  .from('.section2 p', { scaleX: 0, opacity: 0, duration: .7 })

// horizontal
let horizontalTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.horizontal-sections',
    scrub: 1,
    pin: true,
    start: 'top top',
    end: () => "+=" + document.querySelector('.horizontal-sections').offsetWidth,
    // markers: true // delete later
  }
});

horizontalTl.to('.section3', { xPercent: -100, ease: 'none' })
  .to('.section4', { xPercent: -100, ease: 'none' }, '<')

// section3
let sectionThreeTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section3',
    start: 'top 20%',
    // markers: true // delete later
  }
})

sectionThreeTl
  .from('.section3 h2', { x: '-100vw', scale: 8, duration: .8 })
  .to('.section3 p span', { color: 'black', backgroundColor: 'white', duration: 0})
  .from('.section3 p span', { y: '100vh', duration: .5, stagger: .3}, '<')

// section4
let sectionFourTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.horizontal-sections4',
    start: () => "+=" + document.querySelector('.horizontal-sections').offsetWidth,
    // markers: true // delete later
  }
})

sectionFourTl
  .from('.section4 .portfolio-item', { x: '100vw', opacity: 0, duration: 1.5, stagger: .3 })

// section5
let sectionFiveTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section5',
    scrub: true,
    pin: true,
    start: 'top top',
    end: 'bottom 20%',
    // markers: true // delete later
  }
})

const section5Heading = document.querySelector('.section5 h2');
const headingText = section5Heading.textContent;
section5Heading.innerHTML = headingText.split('').map(letter => `<span>${letter}</span>`).join('');

sectionFiveTl
  .from('.section5 h2 span', { y: '-100vh', opacity:0, duration: .5, stagger: .3, ease: 'power4.out' })
  .from('.section5 p', { y: '10vh', opacity: 0, duration: 1 })
  .from('.section5 .contact-btn', { scale: 0, opacity: 0, duration: .8 })
  .from('.section5', { backgroundPositionX: '150%', duration: 2, ease: 'power2.out' })
