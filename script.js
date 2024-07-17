gsap.to(".page2 h1",{
    transform:"translateX(-150%)",
        scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,  
        pin:true
    }
})

var initiallpath = `M 10 100 Q 500 100 990 100`

var finalpath = `M 10 100 Q 500 100 990 100`

var string = document.querySelector(".string")

string.addEventListener("mousemove", function(dets){
console.log(dets)
})
string.addEventListener("mouseleave", function(){
console.log("hey")
})