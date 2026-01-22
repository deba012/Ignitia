
    // Typing effect for "PSIT PRESENTS"
    const text = "PSIT PRESENTS";
    const words = text.split(" ");
    let wordIndex = 0;
    let charIndex = 0;
    const typingText = document.getElementById("typing-text");

    function typeWord() {
        if (wordIndex < words.length) {
            if (charIndex < words[wordIndex].length) {
                typingText.textContent += words[wordIndex][charIndex];
                charIndex++;
                setTimeout(typeWord, 150); 
            } else {
                typingText.textContent += " ";
                charIndex = 0;
                wordIndex++;
                setTimeout(typeWord, 300); 
            }
        } else {
            setTimeout(() => {
                const logoContainer = document.getElementById("logo").parentElement;
                logoContainer.style.opacity = "1";
            }, 500);
        }
    }

    
    window.addEventListener("load", () => {
        setTimeout(typeWord, 1000); 
    });

    // countdown timer
    const festDate = new Date("February 26, 2026 09:00:00").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const gap = festDate - now;

        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((gap % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    setInterval(updateTimer, 1000);



