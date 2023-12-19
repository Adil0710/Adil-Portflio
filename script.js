function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

setInterval(() => {
    locoScroll.update();
}, 2500);
}
init()




function AnimationBiggerScreen(){
    if (window.innerWidth > 768){
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#header h1",
                scroller:"#main",
                start:"top 25%",
                end:"top 0",
                scrub:3
            }
        })
        
        tl.to("#header h1",{
            x:-90,
        },"anim")
        
        tl.to("#header h2",{
            x:90
        },"anim")
        
        tl.to("#header video",{
            width: "95%"
        },"anim")



        var tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:"#header h1",
                scroller:"#main",
                start:"top -70%",
                end:"top -80%",
                scrub:1.5
            }
        })
        tl2.to("#main",{
            backgroundColor:"#fff"
        })
        gsap.to(".header-line",{
            width: "100%",
            scrollTrigger:{
                trigger:"#header h1",
                scroller:"#main",
                start:"top -80%",
                end:"top -120%",
                scrub:3
            }
        })

        var tl3 = gsap.timeline({
            scrollTrigger:{
                trigger:"#header h1",
                scroller:"#main",
                start:"top -100%",
                end:"top -50%",
                scrub:3
            }
        })
        tl3.from("#about .sub-title",{
            opacity:"0",
            y:100,
            
        })
       

        var tl4 = gsap.timeline({
            scrollTrigger:{
                trigger:"#about h1",
                scroller:"#main",
                start:"top -40%",
                end:"top -80%",
                scrub:1.5
            }
        })
        tl4.to("#main",{
            backgroundColor:"#0F0D0D"
        })
        gsap.to(".about-line",{
            width:"100%",
            scrollTrigger:{
                trigger:"#about h1",
                scroller:"#main",
                start:"top -50%",
                end:"top -120%",
                scrub:3
            }
        })
        var tl5 = gsap.timeline({
            scrollTrigger:{
                trigger:"#about .sub-title",
                scroller:"#main",
                start:"top -60%",
                end:"top -120%",
                scrub:3,
            }
        })

        
        tl5.from("#skills .sub-title",{
            opacity:0,
            y:100,
            
        })

        
        
        gsap.to("#skills .skills-list .skills div", {
            scale:1,
            opacity: 1,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
              trigger: "#skills .skills-list .skills div",
              scroller: "#main",
              start:"top 30%",
              end: "top 30%",
              scrub:3
            }
          });
          gsap.to(".skills-line",{
            width:"100%",
            scrollTrigger:{
                trigger:"#skills .skills-list h2",
                scroller:"#main",
                start:"top -60%",
                end:"top -120%",
                scrub:3,
            }
        })

        gsap.from("#projects .sub-title",{
            opacity:0,
            y:100,
            scrollTrigger:{
                trigger:"#skills .skills-list h2",
                scroller:"#main",
                start:"top -50%",
                end:"top -120%",
                scrub:3,
            }
        })

        gsap.to(".projects-line",{
            width:"100%",
            scrollTrigger:{
                trigger:"#projects .projects-list",
                scroller:"#main",
                start:"top -60%",
                end:"top -120%",
                scrub:3,
            }
        })

        gsap.from("#certification .sub-title",{
            opacity:0,
            y:100,
            scrollTrigger:{
                trigger:"#projects .projects-list",
                scroller:"#main",
                start:"top -50%",
                end:"top -120%",
                scrub:3,
            }
        })
          
          gsap.to("#certification .certification-list .certification .list", {
            opacity: 1,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
              trigger: "#certification .certification-list .certification .list",
              scroller: "#main",
              start:"top 50%",
              end: "top 30%",
              scrub:0.5,
            }
          });
          
          gsap.to(".certification-line",{
            width:"100%",
            scrollTrigger:{
                trigger:"#certification .certification-list",
                scroller:"#main",
                start:"top -50%",
                end:"top -120%",
                scrub:3,
            }
        })

        gsap.from("#contact .sub-title",{
            opacity:0,
            y:100,
            scrollTrigger:{
                trigger:"#certification .certification-list",
                scroller:"#main",
                start:"top -50%",
                end:"top -120%",
                scrub:3,
            }
        })

    }
}
AnimationBiggerScreen()


function AnimationSmallerScreen(){
    if (window.innerWidth <= 768){
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#header h2",
                scroller:"#main",
                start:"top 70%",
                end:"top 0%",
                scrub:1
            }
        })
        
        tl.to("#header h1",{
            y:-50,
        },"anim")
        
        tl.to("#header h2",{
            y:50
        },"anim")
        
        tl.to("#header video",{
            width: "100%"
        },"anim")


        var tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:"#header h2",
                scroller:"#main",
                start:"top -20%",
                end:"top -20%",
                scrub:0.5
            }
        })
        tl2.to("#main",{
            backgroundColor:"#fff"
        })
        gsap.to(".header-line",{
            width: "100%",
            delay:0.5,
            scrollTrigger:{
                trigger:"#header h2",
                scroller:"#main",
                start:"top -30%",
                end: "top -50%",
                scrub:3
            }
        })

        var tl3 = gsap.timeline({
            scrollTrigger:{
                trigger:"#header h1",
                scroller:"#main",
                start:"top -50%",
                end: "top -30%",
                scrub:3
            }
        })
        tl3.from("#about .sub-title",{
            opacity:"0",
            y:50,
        },"anime")
        tl3.from("#about .about-col-1 img",{
            opacity:"0",
            scale:0.4,
            delay:0.2,
        },"anime")
        gsap.from("#about .about-col-2",{
            opacity:"0",
            y:10,
            scrollTrigger:{
                trigger:"#header h1",
                scroller:"#main",
                start:"top -110%",
                scrub:3
            }
        })

        var tl4 = gsap.timeline({
            scrollTrigger:{
                trigger:"#about h1",
                scroller:"#main",
                start:"top -120%",
                end:"top -120%",
                scrub:0.5
            }
        })
        tl4.to("#main",{
            backgroundColor:"#0F0D0D"
        })
        gsap.to(".about-line",{
            width:"100%",
            scrollTrigger:{
                trigger:"#about h1",
                scroller:"#main",
                start:"top -130%",
                end:"top -70%",
                scrub:3,
            }
        })


        var tl5 = gsap.timeline({
            scrollTrigger:{
                trigger:"#about .sub-title",
                scroller:"#main",
                start:"top -140%",
                end:"top -10%",
                scrub:3,
            }
        })

        
        tl5.from("#skills .sub-title",{
            opacity:0,
            y:100,
        })

        
        
        gsap.to("#skills .skills-list .skills div", {
            scale:1,
            opacity: 1,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
              trigger: "#skills .skills-list .skills div",
              scroller: "#main",
              start:"top 80%",
              end: "top -50%",
              scrub:3
            }
          });
          gsap.to(".skills-line",{
            width:"100%",
            scrollTrigger:{
                trigger:"#skills .skills-list h2",
                scroller:"#main",
                start:"top -50%",
                end:"top -120%",
                scrub:3,
            }
        })
        gsap.from("#projects .sub-title",{
            opacity:0,
            y:100,
            scrollTrigger:{
                trigger:"#skills .skills-list h2",
                scroller:"#main",
                start:"top -60%",
                end:"top -120%",
                scrub:3,
            }
        })
        
        gsap.to("#projects .projects-list .projects .prj", {
            scale: 1,
            opacity: "1",
            duration: 0.5,
            stagger: 0.5,
            scrollTrigger: {
              trigger: "#projects .sub-title",
              scroller: "#main",
              start:"top 70%",
              end: "top -80%",
              scrub:3,
            }
          });
          gsap.to(".projects-line",{
            width:"100%",
            scrollTrigger:{
                trigger:".seem",
                scroller:"#main",
                start:"top 50%",
                end:"top -10%",
                scrub:3,
            }
        });
        gsap.from("#certification .sub-title",{
            opacity:0,
            y:100,
            scrollTrigger:{
                trigger:".seem",
                scroller:"#main",
                start:"top 40%",
                end:"top 20%",
                scrub:3,
            }
        });
        gsap.to("#certification .certification-list .certification .list", {
            scale: 1,
            opacity: "1",
            duration: 0.5,
            stagger: 0.5,
            scrollTrigger: {
              trigger: "#certification .sub-title",
              scroller: "#main",
              start:"top 70%",
              end: "top -10%",
              scrub:3,
            }
          });
          gsap.to(".certification-line",{
            width:"100%",
            scrollTrigger:{
                trigger:"#contact .sub-title",
                scroller:"#main",
                start:"top 80%",
                end:"top -10%",
                scrub:3,
            }
        });
          gsap.from("#contact .sub-title",{
            opacity:0,
            y:100,
            scrollTrigger:{
                trigger:"#contact .sub-title",
                scroller:"#main",
                start:"top 70%",
                end:"top 20%",
                scrub:3,
            }
        });
    }
}
AnimationSmallerScreen()

function CursorAnimation(){
    var crsr = document.querySelector(".cursor")
    var main = document.querySelector("#main")

    main.addEventListener("mouseenter", function(){
        gsap.to(crsr,{
            scale:1,
            opacity:1
        })
    })
    main.addEventListener("mouseleave", function(){
        gsap.to(crsr,{
            scale:0,
            opacity:0
        })
    })
    

    main.addEventListener("mousemove", function(dets){
        gsap.to(crsr,{
            left:dets.x,
            top:dets.y+20
        })
    })
}
CursorAnimation()
