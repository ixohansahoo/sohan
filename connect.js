var crsr=document.querySelector(".cursor")
var main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+1+"px";
    crsr.style.top=dets.y+1+"px";
})
TweenMax.from('#conh1', 2, {
  delay: .5,
  x: 1700,
  ease: Circ.easeInOut
})
TweenMax.from('button', 2, {
    delay: .6,
    y: 1000,
    ease: Circ.easeInOut
  })
  TweenMax.from('#ch1', 2, {
    delay: .6,
    y: 1000,
    ease: Circ.easeInOut
  })

  function ngl() {
            
    // Redirect to the new page and pass image and text data as query parameters
    window.location.href = `https://ngl.link/ixohansahoo?message=ww`;
    
}

function ig() {
            
  // Redirect to the new page and pass image and text data as query parameters
  window.location.href = `https://www.instagram.com/ixohansahoo/`;
  
}

function liin() {
            
  // Redirect to the new page and pass image and text data as query parameters
  window.location.href = `https://www.linkedin.com/in/sohan-sahoo-48b31814b/`;
  
}

function ml() {
  var emailAddress = 'sohan.sahoo316@gmail.com';
  var gmailUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=' + emailAddress 
  window.open(gmailUrl, '_blank');
  
}

function fb() {
            
  // Redirect to the new page and pass image and text data as query parameters
  window.location.href = `https://m.facebook.com/sohan.kumarsahoo.9/`;
  
}
