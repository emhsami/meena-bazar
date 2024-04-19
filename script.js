var tl = gsap.timeline();


tl.to(".man1", {top: 0 })
tl.to(".banana", {top: -240, left: 0, rotate: 0, delay: -0.5})
tl.to(".text1", {left: 0, ease: "none", duration: 0.2})

tl.to(".woman1", {top: 0, delay: 2})
tl.to(".broccoli", {top: -240, delay: -0.5})

tl.to(".woman1", {left: -320, delay: 2})
tl.to(".broccoli", {left: 320, delay: -0.5})

tl.to(".woman2", {left: 0, delay: -0.5})
tl.to(".eggplant", {left: 0, delay: -0.5})

tl.to(".woman3", {top: 0, delay: 2})
tl.to(".tomato", {top: -240, delay: -0.5})

tl.to(".man1, .banana, .text1, .woman1, .broccoli, .woman2, .eggplant, .grapes", {opacity: 0})

tl.to(".woman3", {left: 320, delay: 2})
tl.to(".tomato", {left: -320, delay: -0.5})

tl.to(".last-frame", {opacity: 1, ease: "none", delay: -0.5})


