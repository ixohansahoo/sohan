
var crsr=document.querySelector(".cursor")
var main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+1+"px";
    crsr.style.top=dets.y+1+"px";
})
var imggg=document.querySelector(".img")
gsap.to('.img-container',{
  scale:25,
  display:"none",
  ease:"ease",
  scrollTrigger:{
    trigger:'.video-section',
    scrub:1,
    start:"top top",
    end:"bottom",
    pin:true
  },
  
})

var imggg=document.querySelector(".img")

gsap.to(".page1", {
  y: -130,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".box-1",
    containerAnimation: scrollTween,
    start: "left center",
    toggleActions: "play none none reset"
  }
});


var page1_vid=document.querySelector("#page1_vid")
page1_vid.addEventListener("mouseenter",function(dets){
    crsr.style.width="100px"
    crsr.style.height="20px"
    crsr.style.borderRadius="15px"
    cur.innerText="Sound On"
    cur.style.mix-blend-mode("difference")
    crsr.style.cursor="none"

        
})
page1_vid.addEventListener("mouseleave",function(dets){
    crsr.style.width="20px"
    crsr.style.height="20px"
    crsr.style.borderRadius="50%"
    cur.innerText=""
})

// Define the elements you want to add hover effects to
const smartHomeElement = document.getElementById('p2h');
const dietPlannerElement = document.getElementById('p1h');
const foodSpoilageElement = document.getElementById('p3h');
const cloneWebsitesElement = document.getElementById('p4h');

// Add event listeners for hover effects
smartHomeElement.addEventListener('mouseover', function () {
    crsr.style.width = '50px'; // Change the cursor width to 50px when hovering over SMART HOME AUTOMATION SYSTEM
});

smartHomeElement.addEventListener('mouseout', function () {
    crsr.style.width = '20px'; // Change the cursor width back to 20px when leaving the element
});

dietPlannerElement.addEventListener('mouseover', function () {
    crsr.style.width = '50px'; // Change the cursor width to 50px when hovering over diet planner
});

dietPlannerElement.addEventListener('mouseout', function () {
    crsr.style.width = '20px'; // Change the cursor width back to 20px when leaving the element
});

foodSpoilageElement.addEventListener('mouseover', function () {
    crsr.style.width = '50px'; // Change the cursor width to 50px when hovering over FOOD SPOILAGE DETECTION
});

foodSpoilageElement.addEventListener('mouseout', function () {
    crsr.style.width = '20px'; // Change the cursor width back to 20px when leaving the element
});

cloneWebsitesElement.addEventListener('mouseover', function () {
    crsr.style.width = '50px'; // Change the cursor width to 50px when hovering over clone websites
});

cloneWebsitesElement.addEventListener('mouseout', function () {
    crsr.style.width = '20px'; // Change the cursor width back to 20px when leaving the element
});



let vid = document.getElementById("page1_vid");

page1_vid.addEventListener("click",function(dets){
    
    if(vid.muted === false){
        vid.muted = true
        cur.innerText="Sound Off"
    }
    else{
        vid.muted = false
        cur.innerText="Sound On"
    }
})

vid.muted = true;

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start: "top 317%",
        end:"top 0",
        scrub:3
    }
})


tl.to(".page1 h1",{
    x:-35,
},"anim")
 tl.to(".page1 ",{
    
 },"anim")
tl.to(".page1 h2",{
    x:35,
},"anim")
tl.to(".page1 h3",{
    x:35,
},"anim")

 tl.to(".page1 video", {
      width: "90%",
      y: 100, 
      
      
 }, "anim")


 var boxes = document.querySelectorAll(".box")
 
 boxes.forEach(function(elem){
     elem.addEventListener("mousemove",function(){
         var att=elem.getAttribute("data-img")
         crsr.style.width="500px"
         crsr.style.height="300px"
         crsr.style.borderRadius="5%"
         
         crsr.style.backgroundImage=`url(${att})`
     })
     elem.addEventListener("mouseleave",function(){
         var att=elem.getAttribute("data-img")
         crsr.style.width="20px"
         crsr.style.height="20px"
         crsr.style.borderRadius="50%"
         crsr.style.backgroundImage=`none`
     })
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
    x:15,
    ease: Power2.easeInOut
  })
 
 
  const p1hElement = document.getElementsByClassName('clickable');
  const p2hElement = document.getElementById('p2h');

  // Add event listeners to change the cursor on hover
  p1hElement.addEventListener('mouseover', function () {
      document.body.style.cursor = 'none';
  });

  p1hElement.addEventListener('mouseout', function () {
      document.body.style.cursor = 'none';
  });

  p2hElement.addEventListener('mouseover', function () {
      document.body.style.cursor = 'none';
  });

  p2hElement.addEventListener('mouseout', function () {
      document.body.style.cursor = 'none';
  });

  
function oppoem() {
            
    // Redirect to the new page and pass image and text data as query parameters
    window.location.href = `./poems/poem.html`;
    
}
function opsketch() {
            
    // Redirect to the new page and pass image and text data as query parameters
    window.location.href = `./sketch/sketch.html`;
    
}
function opphoto() {
            
    // Redirect to the new page and pass image and text data as query parameters
    window.location.href = `./photography/photography.html`;
    
}

function opsmart() {
            
    // Redirect to the new page and pass image and text data as query parameters
    window.location.href = `smarthome/smarthome.html`;
    
}
function opdiet() {
            
    // Redirect to the new page and pass image and text data as query parameters
    window.location.href = `https://ixohansahoo.github.io/dietplanner/`;
    
}
function oppjc() {
            
    // Redirect to the new page and pass image and text data as query parameters
    window.location.href = `clone/clone.html`;
    
}
function opfsp() {
            
    // Redirect to the new page and pass image and text data as query parameters
    window.location.href = `foodsp/foodsp.html`;
    
}
