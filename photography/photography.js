
var crsr=document.querySelector(".cursor")
var main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+1+"px";
    crsr.style.top=dets.y+1+"px";
})

var im=document.querySelectorAll(".gallary img")
for(var i=0;i<im.length;i++){
im[i].addEventListener("mouseenter",function(dets){
    crsr.style.width="100px"
    crsr.style.height="100px"
    crsr.style.borderRadius="50%"
    cur.style.fontWeight="bold"
    cur.style.paddingTop="30%"
    cur.style.color="black"
    cur.innerText="view"
    
    // cur.style.mix-blend-mode("difference")
    crsr.style.cursor="pointer"
   
})}
for(var i=0;i<im.length;i++){
im[i].addEventListener("mouseleave",function(dets){
    crsr.style.width="20px"
    crsr.style.height="20px"
    crsr.style.borderRadius="50%"
    crsr.style.color="white"
    cur.innerText=""
    
    // cur.style.mix-blend-mode("difference")
    crsr.style.cursor="auto"
   
})}
// var imggg=document.querySelector(".img")
// gsap.to('.img-container',{
//   scale:25,
//   display:"none",
//   ease:"ease",
//   scrollTrigger:{
//     trigger:'.video-section',
//     scrub:1,
//     start:"top top",
//     end:"bottom",
//     pin:true
//   },
  
// })

// var imggg=document.querySelector(".img")

// gsap.to(".page1", {
//   y: -130,
//   duration: 2,
//   ease: "elastic",
//   scrollTrigger: {
//     trigger: ".box-1",
//     containerAnimation: scrollTween,
//     start: "left center",
//     toggleActions: "play none none reset"
//   }
// });


// var page1_vid=document.querySelector("#page1_vid")
// page1_vid.addEventListener("mouseenter",function(dets){
//     crsr.style.width="100px"
//     crsr.style.height="20px"
//     crsr.style.borderRadius="15px"
//     cur.innerText="Sound On"
//     cur.style.mix-blend-mode("difference")
//     crsr.style.cursor="pointer"

        
// })
// page1_vid.addEventListener("mouseleave",function(dets){
//     crsr.style.width="20px"
//     crsr.style.height="20px"
//     crsr.style.borderRadius="50%"
//     cur.innerText=""
// })

// let vid = document.getElementById("page1_vid");

// page1_vid.addEventListener("click",function(dets){
    
//     if(vid.muted === false){
//         vid.muted = true
//         cur.innerText="Sound Off"
//     }
//     else{
//         vid.muted = false
//         cur.innerText="Sound On"
//     }
// })

// vid.muted = true;

// var tl=gsap.timeline({
//     scrollTrigger:{
//         trigger:".page1 h1",
//         scroller:".main",
//         start: "top 317%",
//         end:"top 0",
//         scrub:3
//     }
// })


// tl.to(".page1 h1",{
//     x:-35,
// },"anim")
//  tl.to(".page1 ",{
    
//  },"anim")
// tl.to(".page1 h2",{
//     x:35,
// },"anim")
// tl.to(".page1 h3",{
//     x:35,
// },"anim")

//  tl.to(".page1 video", {
//       width: "90%",
//       y: 100, 
      
      
//  }, "anim")


//  var boxes = document.querySelectorAll(".box")
 
//  boxes.forEach(function(elem){
//      elem.addEventListener("mousemove",function(){
//          var att=elem.getAttribute("data-img")
//          crsr.style.width="500px"
//          crsr.style.height="300px"
//          crsr.style.borderRadius="5%"
         
//          crsr.style.backgroundImage=`url(${att})`
//      })
//      elem.addEventListener("mouseleave",function(){
//          var att=elem.getAttribute("data-img")
//          crsr.style.width="20px"
//          crsr.style.height="20px"
//          crsr.style.borderRadius="50%"
//          crsr.style.backgroundImage=`none`
//      })
//  })
//  TweenMax.from('.right h2', 2, {
//     delay: .5,
//     x: 1000,
//     ease: Circ.easeInOut
//   })
//   TweenMax.to('.im', 2, {
//     delay: 1.5,
//     width: '37vw',
//     ease: Power2.easeInOut
//   })
//   TweenMax.to('.left h1', 2, {
//     delay: 1,
//     // width: '37vw',
//     x:15,
//     ease: Power2.easeInOut
//   })
 
 
//   const p1hElement = document.getElementsByClassName('clickable');
//   const p2hElement = document.getElementById('p2h');

//   // Add event listeners to change the cursor on hover
//   p1hElement.addEventListener('mouseover', function () {
//       document.body.style.cursor = 'pointer';
//   });

//   p1hElement.addEventListener('mouseout', function () {
//       document.body.style.cursor = 'default';
//   });

//   p2hElement.addEventListener('mouseover', function () {
//       document.body.style.cursor = 'pointer';
//   });

//   p2hElement.addEventListener('mouseout', function () {
//       document.body.style.cursor = 'default';
//   });