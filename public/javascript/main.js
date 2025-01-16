//Fonction pour animer les chiffres 
function animateCount(id, target) {
    let count = 0;
    const steps = 200; 
    const intervalTime = 50; 
    const increment = Math.ceil(target / steps); 
    const element = document.getElementById(id);
  
    const interval = setInterval(() => {
      count += increment; 
      if (count >= target) {
        count = target; 
        clearInterval(interval); 
      }
      element.textContent = count.toLocaleString(); 
    }, intervalTime);
  }
  
  //Appele les fonctions d'animation pour chaque compteur
  window.onload = () => {
    animateCount('twitter-count', 12000);
    animateCount('youtube-count', 5000);
    animateCount('facebook-count', 7500);
  };
  
  