function primo(n){
    if(n < 2){
        return false;
    }
    for(let i = 2; i * i <= n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

function MostrarPrimos(n){
    let lista = Array.from({length: n}, (v, i) => i + 1);
    let listaPrimos = [];
    lista.forEach(element => {
        if(primo(element)){
            listaPrimos.push(element);
        }
    });
    return listaPrimos;
}

function darVuelta(string){
    let lista = string.split("");
    lista = lista.reverse()
    return lista.join("")
}

function removerDuplicador(lista){
    
}