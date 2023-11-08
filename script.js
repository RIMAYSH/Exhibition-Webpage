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
/*Design a custom cursor for the website */
var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px"
    crsr.style.top = dets.y + 20 + "px"
})
/*Ended Here */

/*Add a text cursor on the video */
var crsr = document.querySelector(".cursor");
var video = document.querySelector("video");

document.addEventListener("mousemove", function (event) {
    crsr.style.left = event.clientX + "px";
    crsr.style.top = event.clientY + "px";

    /*function, which determines whether the mouse cursor is over the video element.*/
    function isCursorOverVideo(event, video) {
        /*It uses the getBoundingClientRect() method to obtain the position and dimensions 
        of the video element and then checks if the mouse cursor's coordinates are within those bounds.
    If the cursor is over the video, the function returns true, otherwise, it returns false. */
        var videoRect = video.getBoundingClientRect();
        return (
            event.clientX >= videoRect.left &&
            event.clientX <= videoRect.right &&
            event.clientY >= videoRect.top &&
            event.clientY <= videoRect.bottom
        );
    }

    if (isCursorOverVideo(event, video)) {
        crsr.classList.add("expanded");
        crsr.textContent = "Enter Video";
        crsr.style.color = "#111";
    } else {
        /*If the cursor is not over the video, this block of code is executed. */
        crsr.classList.remove("expanded");
        crsr.textContent = "";
    }
});
/*Text cursor ended here */


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",

        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})

tl.to(".page1 h1", {
    x: -100,
    duration: 2,
}, "anim")
tl.to(".page1 h2", {
    x: 100,
    duration: 2,
}, "anim")
tl.to(".page1 video", {
    width: "90%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",

        start: "top -115%",
        end: "top -120",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff"
})
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})

tl3.to(".main", {
    backgroundColor: "#0F0D0D"
})
/*Page 5 effect */
var boxes = document.querySelectorAll(".box")
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})


function resetMarquee() {
    const marquee = document.getElementById("tagline-marquee");
    marquee.scrollAmount = 20; // Reset scroll amount
    marquee.start(); // Restart the marquee immediately
}
