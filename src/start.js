export default function startScreen() {
    while (document.getElementById("content").firstChild) {
      document.getElementById("content").removeChild(document.getElementById("content").firstChild);
    }
    console.log('I get called from start.js!');
    const element = document.createElement('div');
    // element.setAttribute("display", "flexbox");
    // element.setAttribute("flex-direction", "vertical");
    element.classList.add('mainContainer');
    element.innerHTML = "Coley's Pizza Serves the best pizza in all of South Florida! ";
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = "Coley's Pizza";
    element.appendChild(header);
    const pizzaImg = new Image;
    pizzaImg.src = "https://fastly.4sqi.net/img/general/width960/vLJi_iIYM2ZWOJSHhE6WqBnPHvGb1sNE_qVfQ04FWjE.jpg";
    pizzaImg.setAttribute("height", "500");
    pizzaImg.setAttribute("width", "500");
    element.appendChild(pizzaImg);
    document.getElementById("content").appendChild(element);

  }