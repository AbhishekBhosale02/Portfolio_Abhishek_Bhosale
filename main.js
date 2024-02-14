//Anime for App Developer Text //////////////////////////////////////////////////////////////////////////
var typed = new Typed(".text", {
    strings: ["App Developer...", "Web Developer..."], 
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true,
    showCursor: false // Add this line to hide the cursor

});

var typed = new Typed(".text2", {
    strings: ["..."],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 1000,
    loop: true,
    showCursor: false // Add this line to hide the cursor
});


//Animated Name ABHISHEK BHOSALE: //////////////////////////////////////////////////////////////////////////////////
const nameSpans = document.querySelectorAll('#animatedName span');

// Initial index of the name array
let currentIndex = 0;

// Call the animateLetters function initially
animateLetters();

function animateLetters() {
    // Check if we reached the end of the name
    if (currentIndex >= nameSpans.length) {
        return;
    }

    // Get the current span element
    const currentSpan = nameSpans[currentIndex];

    // Animate the current letter (grow then shrink)
    growLetter(currentSpan, () => {
        shrinkLetter(currentSpan, () => {
            // Move to the next letter after the animation completes
            currentIndex++;
            animateLetters();
        });
    });
}

function growLetter(span, callback) {
    // Increase font size and opacity gradually
    let fontSize = 30;
    const interval = setInterval(() => {
        fontSize += 1;
        span.style.fontSize = fontSize + 'px';
        span.style.opacity = 1;
        if (fontSize >= 56) {
            clearInterval(interval);
            // Execute the callback function after the animation completes
            callback();
        }
    }, 10);
}

function shrinkLetter(span, callback) {
    // Decrease font size and opacity gradually
    let fontSize = 100;
    const interval = setInterval(() => {
        fontSize -= 1;
        span.style.fontSize = fontSize + 'px';
        if (fontSize <= 30) {
            clearInterval(interval);
            // Execute the callback function after the animation completes
            callback();
        }
    }, 10);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
