document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
      e.preventDefault(); 

      const username = form.querySelector('input[type="text"]').value;
      const password = form.querySelector('input[type="password"]').value;
  
      
      if (username === "arielbetancud@gmail.com" && password === "ariel") {
        
        const popup = document.createElement("div");
        popup.textContent = "Ingreso correcto";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.backgroundColor = "green";
        popup.style.color = "white";
        popup.style.padding = "50px";
        popup.style.borderRadius = "10px";
        popup.style.zIndex = "1000";
  

        document.body.appendChild(popup);
  

        setTimeout(function() {
          document.body.removeChild(popup);
        }, 3000);
      } else {
        const popup = document.createElement("div");
        popup.textContent = "datos incorrectos";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.backgroundColor = "red";
        popup.style.color = "white";
        popup.style.padding = "50px";
        popup.style.borderRadius = "10px";
        popup.style.zIndex = "1000";
  

        document.body.appendChild(popup);
  
       
        setTimeout(function() {
          document.body.removeChild(popup);
        }, 3000);
      }
    });
  });