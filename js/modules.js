const page = (month, day) => {
    document.body.style.paddingTop = "50px";
	const root = gel("root");
	const ddd = cel("div");
	const x = cel("div");  
	x.className = "pickM";
	x.innerHTML = "<hr><hr><hr>";
	ddd.className = "ddd";
	ddd.innerHTML = "<h1>"+months[month]+"</h1>";  
	ddd.addEventListener("click", (e) => {
			e.target.innerHTML = screen.width;
		})
	root.append(ddd);
	root.append(x);
		for(let j in plan[month]){
			const div = cel("div");
			div.className = "div";
			if(parseInt(j)===day){
				div.style.background = "#6CFF6C";
				div.setAttribute("mark","today");
			}
			const input = cel("input");
			const dayN = cel("div");
			dayN.className = "dayN";
			input.type = "checkbox";
			input.className = "input";
			div.append(input);
			dayN.append(j);
			div.append(dayN);
			root.append(div);
			plan[month][j].map((f, i, ar) => {
				const di = cel("div");          
				di.className = "di";
				di.append(f);    
				div.append(di);
			}) ;
	}
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
