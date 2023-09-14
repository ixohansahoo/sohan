
var crsr=document.querySelector(".cursor")
var main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+1+"px";
    crsr.style.top=dets.y+1+"px";
})

function openNewPage(imageUrl,headingContent, textContent) {
            
    // Redirect to the new page and pass image and text data as query parameters
    window.location.href = `op.html?image=${imageUrl}&text=${encodeURIComponent(textContent)}&heading=${encodeURIComponent(headingContent)}`;
    
}
var im=document.querySelectorAll(".card")
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