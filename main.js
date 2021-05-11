page(m, dd);

window.addEventListener("click", (e) => {
    switch(e.target.className){
        case "input":
            if(!e.target.parentNode.style.background){
                e.target.parentNode.style.background = "#FFE635";
            }else{
                if(e.target.parentNode.getAttribute("mark")){
                    e.target.parentNode.style.background = "#6CFF6C";
            }else{
                e.target.parentNode.style.background = "";
            }
                
            }
            break;
        case "pickM":
            gel("root").innerHTML = "";
            pickMonth();
            break;
        case "yes":
            gel("root").innerHTML = "";
            if(parseInt(e.target.getAttribute("point"))===m){
                page(e.target.getAttribute("point"), dd);
            }else{
                page(e.target.getAttribute("point"), null);
            }
            
            
    }
}) ;
