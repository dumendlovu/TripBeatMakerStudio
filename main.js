window.addEventListener('load', () =>{
  const pads = document.querySelectorAll('.pads div');
  const sounds = document.querySelectorAll('.sound');
  const visual = document.querySelector('.visual');
  const colors = [
    "#FF5714",
    "#FFB800",
    "#E4FF1A",
    "#6EEB83",
    "#1BE7FF",
    "#587291"
  ];

  //play sounds
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].currentTime = 0;
      sounds[index].play;
      createBubbles(index);
    });
  });

  //Visuals
  const createBubbles = (index) =>{
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function () {
      visual.removeChild(this);
    });
  };
});
