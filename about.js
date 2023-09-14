function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".both")
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 1 + "px";
  crsr.style.top = dets.y + 1 + "px";
})
TweenMax.from('.right h2', 2, {
  delay: .5,
  x: 1000,
  ease: Circ.easeInOut
})
TweenMax.to('.im', 2, {
  delay: 1.5,
  width: '37vw',
  ease: Power2.easeInOut
})
TweenMax.to('.left h1', 2, {
  delay: 1,
  // width: '37vw',
  x: 15,
  ease: Power2.easeInOut
})
function loadScript() {
  if (window.innerWidth >= 1500) {
   
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    scroller: ".main",
    // markers:true,
    start: "top -70%",
    end: "top -60%",
    scrub: 3
  }
})



  
     
    tl3.to("#abp2", {
      x: "110%",
      Color: "#66FF00"
    })

    var tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        scroller: ".main",
        // markers:true,
        start: "top -150%",
        end: "top -180%",
        scrub: 3
      }
    })


    tl4.to("#abp3", {
      x: "110%",
      Color: "#66FF00"
    })
    var tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        scroller: ".main",
        // markers:true,
        start: "top -250%",
        end: "top -280%",
        scrub: 3
      }
    })

    tl5.to("#abp4", {
      x: "110%",
      Color: "#66FF00"
    })
    var tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        scroller: ".main",
        // markers:true,
        start: "top -350%",
        end: "top -380%",
        scrub: 3
      }
    })

    tl6.to("#abp5", {
      x: "122%",
      Color: "#66FF00"
    })
    var tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        scroller: ".main",
        // markers:true,
        start: "top -450%",
        end: "top -480%",
        scrub: 3
      }
    })

    tl7.to("#abp6", {
      x: "122%",
      Color: "#66FF00"
    })
    var tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        scroller: ".main",
        // markers:true,
        start: "top -560%",
        end: "top -570%",
        scrub: 3
      }
    })

    tl8.to("#abp7", {
      x: "-120%",
      Color: "#66FF00"
    })

    tl8.to(".both video", {
      height: "73%",
    }, "anim")
  }
}
window.onload = loadScript;
window.addEventListener('resize', loadScript);