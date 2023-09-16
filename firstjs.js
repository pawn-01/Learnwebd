var crs = document.querySelector("#cursor")
var blur = document.querySelector("#crblur")
document.addEventListener("mousemove",function(dets){
     crs.style.left = dets.x+"px"
     crs.style.top = dets.y+"px"
     blur.style.left = dets.x-100+"px"
     blur.style.top = dets.y-100+"px"
})
gsap.to("#nav",{
    backgroundColor : "#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -12%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
