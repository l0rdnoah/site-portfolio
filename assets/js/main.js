function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        //reveals[i].classList.remove("active"); désactivé car je veux pas que ça reparte quand je remonte
        // on affiche une fois et c'est bon
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  