const page = (month) => {
	const root = gel("root");

	if(!localStorage.getItem("plan")){
		localStorage.setItem("plan", JSON.stringify(transformPlan(plan)));
	}

	const tplan = JSON.parse(localStorage.getItem("plan"));

	root.innerHTML = `
		<div class="ddd">
			<div class="pickM"><div class="pickDiv"></div></div>
			<h1>${months[month]}</h1>
			<button class="cls-btn">Очистить</buttom>
		</div>
		`;

	root.innerHTML += tplan[month].map(v => makeLine(month, v)).join("");

}

const pickMonth = () => {
    const root = gel("root");
    const d = cel("div");
    const conDiv = cel("div");
    conDiv.className = "conDiv";
    d.className = "d";
    d.append(conDiv);
    months.map((v,i,arr) => {
        const dd = cel("div");
        const sp = cel("span");
        sp.className = "yes";
        dd.style.height = (window.innerHeight/4-20)+"px";
        if(i===m){
            dd.style.background = "#6CFF6C";
        }
        sp.innerHTML = v;
        sp.setAttribute("point",i);
        sp.style.border = "none";
        dd.append(sp);
        dd.className = "yes";
        dd.setAttribute("point",i);
        
        conDiv.append(dd);
    });
    
    
    
    root.append(d);
} 
