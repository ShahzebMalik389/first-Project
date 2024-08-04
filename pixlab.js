window.addEventListener("scroll",()=>{
    let header=document.querySelector('nav');
    header.classList.toggle("sticky",window.scrollY>0)
})

// pre loader
 let loader=document.querySelector('.loader');
 window.addEventListener("load",function(){
    loader.style.display="none"
 })
//end pre loader 
gsap.from(".heading h2",{
    y:20,
    duration:1
})
gsap.from(".heading p",{
    y:-20,
    duration:1
})

gsap.from(".image-two",{
    x:-30,
    duration:1,
    scrollTrigger:{
        trigger:".image-two",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
})

gsap.from(".About",{
    x:30,
    duration:1,
    scrollTrigger:{
        trigger:".About",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
})

gsap.from(".services p",{
    y:-10,
    opacity:0.8,
    duration:1,
    scrollTrigger:{
        trigger:".services p",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
})

gsap.from(".services h2",{
    opacity:0.5,
    duration:0.5,
    scrollTrigger:{
        trigger:".services p",
        scroller:"body",
        // markers:true,
        start:"top 90%"
    }
})


gsap.from(".boxes .box ",{
    y:-10,
    opacity:0.8,
    duration:0.2,
    
    stagger:1,
    scrollTrigger:{
        trigger:".boxes .box",
        scroller:"body",
        // markers:true,
        start:"top 80%"
    }

})


gsap.from(".showAll ",{
    x:-15,
    
    duration:1,
    
    delay:0.4,
    scrollTrigger:{
        trigger:".showAll",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }

})




gsap.from(".images ",{
    y:15,
    
    duration:1,
    
    delay:0.6,
    scrollTrigger:{
        trigger:".images",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }

})


// Fivth Section
gsap.from(".wolrd-head",{
    y:-10,  
    opacity:0.5,
      duration:1,
      scrollTrigger:{
        trigger:".wolrd-head",
        scroller:"body",
        // marker:true,
        start:"top 60%"
      }
      
})

gsap.from(".girls-img",{
    y:-10,
    duration:1,
    opacity:0.7,
    scrollTrigger:{
        trigger:".girls-img img",
        scroller:"body",
        // markers:true,
        start:"top 80%"
    }
})
// Six Section
gsap.from(".likeUs",{
      y:12,
      duration:1,
      scrollTrigger:{
       trigger:".likeUs",
       scroller:"body",
    //    marker:true,
       start:"top 60%",
       
      }
})

gsap.from(".boxes6 ",{
    y:12,
    delay:1,
    duration:1,
    scrollTrigger:{
     trigger:".boxes6 ",
     scroller:"body",
    //  markers:true,
     start:"top 60%"
     
     
    }
})

// seven secrtion
gsap.from(".span-img",{
    y:9,
    duration:0.8,
    repeat:-1,
    yoyo:true

})
// Eight section

gsap.from(".meet",{
    y:12,
    duration:1,
    scrollTrigger:{
        trigger:".meet",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
})

gsap.from(".pictures .box-img",{
    y:20,
    delay:0.1,
    duration:0.3,
    stagger:1,
    scrollTrigger:{
        trigger:".pictures .box-img",
        scroller:"body",
       
        start:"top 60%"
    }
})

// nine Section

gsap.from(".rightSection-img",{
    x:100,
    duration:1,
    scrollTrigger:".rightSection-img",
    scroller:"body",
    start:"top 60%"
})

// Ten Section
gsap.from(".new",{
    y:14,
    duration:1,
    scrollTrigger:{
        trigger:".new",
        scroller:"body",
        
        start:"top 60%"
    }
})

gsap.from(".btn-10 ",{
    y:16,
    duration:1,
    scrollTrigger:{
        trigger:".btn-10 ",
        scroller:"body",
        start:"top 60%"
    }
})

// Footer-top-1
gsap.from(".footer-Top-1 div img",{
    x:-40,
    duration:1,
    scrollTrigger:{
        trigger:".footer-Top-1 div img ",
        scroller:"body",
        start:"top 60%"
    }
})

gsap.from(".footer-Top-1 .h3",{
    x:50,
    duration:1,
    scrollTrigger:{
        trigger:".footer-Top-1 .h3 ",
        scroller:"body",
        start:"top 60%"
    }
})

// Footer
gsap.from(".left-footers",{
    y:20,
    duration:1,
    scrollTrigger:{
        trigger:".left-footers",
        scroller:"body",
        start:"top 60%"
    }
})

gsap.from(".right-footers",{
    y:20,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:".lright-footers",
        scroller:"body",
        start:"top 60%"
    }
})