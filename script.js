function videoConAnimation(){
    var videoCon = document.querySelector(".video-container ")
    var play = document.querySelector(".play-button");
    videoCon.addEventListener("mouseenter", function(){  
       gsap.to(play, {
        opacity:1,
        scale:1
       })
    })
    videoCon.addEventListener("mouseleave", function(){
        gsap.to(play, {
            opacity:0,
            scale:0
           })
    })
    videoCon.addEventListener("mousemove", function(dets){
        gsap.to(play, {
            left: dets.x-70,
            top: dets.y-80
           })
    })
}

function loadingAnimaion(){
    gsap.from(".page-1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.5, 
        stagger: 0.3
    })
    gsap.from(".page-1 .video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.2,
        duration: 0.5, 
    })
}

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

videoConAnimation();
loadingAnimaion();





