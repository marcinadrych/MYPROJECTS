let Otwarcie = {
    ">>":"q",
    "_!":"ins",s
    "-!":"del"
}
let Zamknięcie = {
    "<<":"q",
    "!_":"ins",
    "!-":"del"
}

znacznik ={
    "*": "em",
    "**":"strong"
}


class numeracja {
	constructor() {
		this.id = numeracja.incrementId();
		this.treść = "";
		this.flagaTreści = false;
	}
	doit(znak) {
		if(this.flagaTreści)
			this.treść += znak;
		else 
			this.treść += znak;
			this.flagaTreści = true;
			
		
	}
	toString() {
		return "<h1 id=\""
			+ this.id
			+ "\">"
			+ this.treść
			+ "</h1>";
	}
	static incrementId() {
		if (!this.latestId) this.latestId = 1
		else this.latestId++
		return this.latestId
	  }
}

class spcln {
	constructor() {
		this.typ = "";
		this.tytuł = "";
		this.treść = "";
		this.flagaTytułu = false;
		this.flagaTreści = false;
	}
	input(inp) {
		if(this.flagaTytułu)
			this.treść += inp;
		else if(this.flagaTreści)
			if(inp == "}")
				this.flagaTytułu = true;
			else
				this.tytuł += inp;
		else
			if(inp == "|")
				this.flagaTreści = true;
			else
				this.typ += inp;
	}
	toString() {
		return "<aside cat=\""
			+ this.typ
			+ "\"><header>"
			+ this.tytuł
			+ "</header>"
			+ "<main>"
			+ this.treść
			+ "</main>"
			+ "</aside>";
	}
}

class Spc {
	constructor() {
		this.klasa = "";
		this.treść = "";
		this.flagaTreści = false;
	}
	static start = "[";
	static separator = "|";
	static stop = "]";
	dopisz(znak) {
		if(this.flagaTreści)
			this.treść += znak;
		else if(znak == Spc.separator /*!*/)
			this.flagaTreści = true;
		else
			this.klasa += znak;
	}
	toString() {
		return "<a href=\""
			+ this.klasa
			+ "\">"
			+ this.treść
			+ "</a>";
	}
}



let test = `*podkreslone* -!joljol!- _!bebe!_ >>cytat<< **pogrubione** 
blabla
[znak|test]
cimcirimci
{Definicja|PI}Stosunek obwodu okręgu do jego średnicy, w przybliżeniu 3,14
costamcostam
#numerownia1 
#numerowanie2
costamcostam`;
let out = "";
let stos = [];
let staryZnak = "";
for(let linia of test.split("\n")) {
	linia = linia.trim();
	if(linia[0] == "{") {
		let bufor = new spcln();
		for(let znak of linia.substr(1))
			bufor.input(znak);
			out += bufor+"\n";
		}
	else if(linia[0] =="#"){
		let bufor = new numeracja();
		for(let znak of linia.substr(1))
			bufor.doit(znak);
			out += bufor+"\n";		
	}
	
	else{  
		out+= "<p>"
		for(let znak of linia){
			
			if(znacznik[staryZnak+znak]) {
				
				if(stos[0] == znacznik[staryZnak+znak]) {
					out += "</"
						+ stos.shift()
						+ ">";
				}
				else {
					stos.unshift(znacznik[staryZnak+znak]);
					out += "<"
						+ stos[0]
						+ ">";
				}
				staryZnak = "";
			}
			else if(znacznik[staryZnak]) {
				if(stos[0] == znacznik[staryZnak]) {
					out += "</"
						+ stos.shift()
						+ ">";
				}
				else {
					stos.unshift(znacznik[staryZnak]);
					out += "<"
						+ stos[0]
						+ ">";
				}
				staryZnak = znak;	

			}
			else if(Otwarcie[staryZnak+znak]) {
				stos.unshift(Otwarcie[staryZnak+znak]);
				out += "<"+ Otwarcie[staryZnak+znak] +">";
				staryZnak = "";
			}
			else if(Zamkniecie[staryZnak+znak]) {
				if(stos[0] == Zamkniecie[staryZnak+znak]) {
					out += "</"+ Zamkniecie[staryZnak+znak] + ">";
					staryZnak = "";
					stos.shift();
				}
				else {
					out += "<!--Błąd - próbuję domknąć </" + Zamkniecie[staryZnak+znak] + "> zamiast </" + stos[0] + ">-->";
					break;
				}
			}
			else if(stos[0]	&& stos[0].constructor.name =="Spc"	) {
				if(znak == Spc.stop /*!*/) {
					out += stos.shift();
				}
				else {
					stos[0].dopisz(znak);
				}
			}
			else if(znak == Spc.start /*!*/) {
				stos.unshift(new Spc());
			}		

			else {			
				
				out += staryZnak;
				staryZnak = znak;
				
			}
		}
		out += staryZnak;
		out += "</p>\n"
		staryZnak = ""
	}	
}

while(stos[0]) {
	out += "<!--Błąd: nie domknięty blok </"+stos.shift()+">-->";
}
console.log(out);