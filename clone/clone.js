var crsr=document.querySelector(".cursor")
var main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+1+"px";
    crsr.style.top=dets.y+1+"px";
})
TweenMax.from('#conh1', 2, {
  delay: .3,
  x: 1700,
  ease: Circ.easeInOut
})
TweenMax.from('#con2h1', 2, {
    delay: .4,
    y: 1000,
    ease: Circ.easeInOut
  })
  TweenMax.from('#con3h1', 2, {
    delay: .3,
    x: 1000,
    ease: Circ.easeInOut
  })