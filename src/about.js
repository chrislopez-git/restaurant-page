export default function aboutScreen() {
    while (document.getElementById("content").firstChild) {
        document.getElementById("content").removeChild(document.getElementById("content").firstChild);
      }
    console.log('I get called from contact.js!');
    const element = document.createElement('div');
    element.classList.add('mainContainer');
    element.innerHTML = "About our team at Coley's Pizza! ";
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = "Learn about our team at Coley's Pizza!";
    element.appendChild(header);
    const pizzaImg = new Image;
    pizzaImg.src = "https://fastly.4sqi.net/img/general/width960/vLJi_iIYM2ZWOJSHhE6WqBnPHvGb1sNE_qVfQ04FWjE.jpg";
    pizzaImg.setAttribute("height", "500");
    pizzaImg.setAttribute("width", "500");
    element.appendChild(pizzaImg);
    document.getElementById("content").appendChild(element);

  }