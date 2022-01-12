page(m);

window.addEventListener("click", (e) => {
    switch(e.target.className){
        case "input":
            inputHandler(e);
            break;
        case "pickM":
            gel("root").innerHTML = "";
            pickMonth();
            break;
        case "pickDiv":
            gel("root").innerHTML = "";
            pickMonth();
            break;    
        case "yes":
            gel("root").innerHTML = "";
            if(parseInt(e.target.getAttribute("point"))===m){
                page(e.target.getAttribute("point"));
            }else{
                page(e.target.getAttribute("point"));
            }
            break;
        case "cls-btn":
            cleanHandler();
            break;       
            
    }
}) ;
