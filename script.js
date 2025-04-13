document.querySelector(".hide-footer-button").addEventListener('click', function(){
  document.querySelector("footer").style.display = "none"; 
});

document.querySelector(".change-light-mode").addEventListener('click', function() {
  const elements = document.querySelectorAll("body, footer, .home, .about, .skills, .resume, .projects, .contact");
  const graph = document.querySelector(".project-contribution-graph-svg");

  elements.forEach(function(element) {
    if (element.style.backgroundColor === "gray") {
      element.style.backgroundColor = "";
    } else {
      element.style.backgroundColor = "gray";
    }
  });

  if (graph) {
    graph.classList.toggle("gray-filter");
  }
});


const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.skill-card');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;

  function moveCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(track).gap);
    const visibleCards = Math.floor(document.querySelector('.carousel-window').offsetWidth / (cardWidth + gap));
    const maxIndex = cards.length - visibleCards;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const offset = -currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(${offset}px)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    moveCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    moveCarousel();
  });

  window.addEventListener('resize', moveCarousel);

  moveCarousel(); 

  const skillData = {
    java: {
      title: "Java",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    git: {
      title: "Git & GitHub",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    mongodb: {
      title: "MongoDB",
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    postgresql: {
      title: "PostgreSQL",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    html: {
      title: "HTML",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    css: {
      title: "CSS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
 
           }
          };

  const card = document.querySelectorAll('.skill-card');
  const infoBox = document.getElementById('skill-info');
  const infoTitle = document.getElementById('skill-title');
  const infoDesc = document.getElementById('skill-description');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const key = card.classList[1].replace('-card', ''); 
      const skill = skillData[key];

      if (skill) {
        infoTitle.textContent = skill.title;
        infoDesc.textContent = skill.description;
        infoBox.classList.remove('hidden');
      }
    });
  });
  
 
