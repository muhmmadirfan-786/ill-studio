document.addEventListener("DOMContentLoaded", function(){

    const heroSection = document.querySelector(".hero-section");
    const imagesSection = document.querySelector(".images-section");
    const logo = document.querySelector(".logo");
    const aboutSection = document.querySelector(".about-section");

    setTimeout(() => {
        heroSection.classList.add("d-none");
        imagesSection.classList.remove("d-none");
    }, 10000);


    logo.addEventListener("click", function(e){
        e.preventDefault();
        const backArrow = logo.querySelector(".back-arrow");
        
        aboutSection.classList.toggle("d-none");
        logo.classList.toggle("bg-dark");
        backArrow.classList.toggle("d-none");
        
        if (!aboutSection.classList.contains("d-none")) {
            window.location.hash = "about";
        } else {
            window.location.hash = "";
        }
    });

    // Handle hash changes
    window.addEventListener("hashchange", function() {
        const backArrow = logo.querySelector(".back-arrow");
        if (window.location.hash === "#about") {
            aboutSection.classList.remove("d-none");
            logo.classList.add("bg-dark");
            backArrow.classList.remove("d-none");
        } else {
            aboutSection.classList.add("d-none");
            logo.classList.remove("bg-dark");
            backArrow.classList.add("d-none");
        }
    });

    // Check initial hash
    if (window.location.hash === "#about") {
        const backArrow = logo.querySelector(".back-arrow");
        aboutSection.classList.remove("d-none");
        logo.classList.add("bg-dark");
        backArrow.classList.remove("d-none");
    }

});




document.addEventListener("DOMContentLoaded", function(){

    const contentWrappers = document.querySelectorAll(".content-wraper");
    let intervalId;
    let currentIndex2 = 0;
    let cyclingIntervalId;

    contentWrappers.forEach(element => {
        element.addEventListener("mousedown", function () {
            const imageContent = this.querySelector(".image-content");
            intervalId = setInterval(function () {
                imageContent.classList.remove("d-none");
                element.classList.add("bg-change");
            }, 100);

            pauseCycling();
        });

        element.addEventListener("touchstart", function () {
            const imageContent = this.querySelector(".image-content");
            intervalId = setInterval(function () {
                imageContent.classList.remove("d-none");
                element.classList.add("bg-change");
            }, 100);

            pauseCycling();
        });

        element.addEventListener("mouseup", function () {
            stopAlertLoop(this);
            resumeCycling();
        });
        element.addEventListener("touchend", function () {
            stopAlertLoop(this);
            resumeCycling();
        });

        element.addEventListener("mouseleave", function () {
            stopAlertLoop(this);
        });
        element.addEventListener("touchleave", function () {
            stopAlertLoop(this);
        });
    });

    function stopAlertLoop(element) {
        clearInterval(intervalId);
        const imageContent = element.querySelector(".image-content");
        if (imageContent) {
            imageContent.classList.add("d-none");
            element.classList.remove("bg-change");
        }
    }

    function cycleContentWrappers() {
        cyclingIntervalId = setInterval(function () {
            // Add d-none class to all content-wrappers
            contentWrappers.forEach((wrapper, index) => {
                if (index === currentIndex2) {
                    wrapper.classList.remove("d-none");
                } else {
                    wrapper.classList.add("d-none");
                }
            });

            // Move to the next content-wrapper
            currentIndex2 = (currentIndex2 + 1) % contentWrappers.length;
        }, 300); // Change this interval as needed
    }

    function pauseCycling() {
        clearInterval(cyclingIntervalId);
    }

    function resumeCycling() {
        cycleContentWrappers();
    }
    
    
    // Start the cycle
    setTimeout(() => {
        cycleContentWrappers();
    }, 10000);


 })