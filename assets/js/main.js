document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.bloc');
    let index = 0;

    function scrollToNextSection() {
        if (index < sections.length - 1) {
            index++;
            sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    }

    function scrollToPreviousSection() {
        if (index > 0) {
            index--;
            sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    }

    window.addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            // Scrolling down
            scrollToNextSection();
        } else if (e.deltaY < 0) {
            // Scrolling up
            scrollToPreviousSection();
        }
    }, { passive: false });

    // Ajoute un gestionnaire pour le défilement tactile (swipe)
    let touchstartY;
    window.addEventListener('touchstart', function(e) {
        touchstartY = e.touches[0].clientY;
    });

    window.addEventListener('touchend', function(e) {
        const touchendY = e.changedTouches[0].clientY;
        const deltaY = touchendY - touchstartY;

        if (deltaY > 0) {
            // Swiping down
            scrollToNextSection();
        } else if (deltaY < 0) {
            // Swiping up
            scrollToPreviousSection();
        }
    });
});
