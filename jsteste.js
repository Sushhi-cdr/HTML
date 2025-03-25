/*Json: {
    "valor" "valor"
    //lista de valores:
    "idade" [
    {"1" "2" "3"}
    ]
}*/
let exemplojson = {
    "nome":"Hugo",
    "email":"hugo.souza",
    "ult_login":"2023-01-01 22:30:00",
    "quant_carros": 1,
    "saldo_bancario": 1.99,
    "filhos":[
        {"nome": " Pedro", "sobrenome": "Fumero"},
        {"nome": "Faustao", "sobrenome": "Fumero"},
        {"nome": "Paulo", "sobrenome": "Fumero"},
        {"nome": "Hugo", "sobrenome": "Fumero"},
    ]
}

console.log(exemplojson.nome)
console.log(exemplojson.saldo_bancario)

//exibe a lista criada ".filhos"
exemplojson.filhos.map(function(item){
    console.log(item)
});

console.log(exemplojson.filhos[0].nome + " " + exemplojson.filhos[0].sobrenome + " \n " + exemplojson.filhos[1].nome + " " + exemplojson.filhos[1].sobrenome + " \n " + exemplojson.filhos[2].nome + " " + exemplojson.filhos[2].sobrenome + " \n " + exemplojson.filhos[3].nome + " " + exemplojson.filhos[3].sobrenome)
