function podśwKol(x,tab=tabela) {
    for(let wiersz of tab.querySelector("tbody").children) {
        wiersz.children[x].classList.toggle("podświetl");
    }
}

