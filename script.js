function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
let number=document.getElementById("number");
        let counter=0;
        setInterval(() => {
            if(counter==500)
            {
                clearInterval();
            }
            else{
                counter++;
            number.innerHTML=counter+" + Q<br>Solved";
            }
            
        },0.0001);
