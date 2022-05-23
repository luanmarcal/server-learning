class Animals{
    cor;
    peso;

    constructor(){
        this.cor = "vemelho";
        this.peso = 50;
    };

    emitirSom()
    {
        console.log("Implementação do polimorfismo");
    };
}

const animal001 = new Animals();
const animal002 = new Animals();
//console.log(animal001.cor);

console.log(animal001.peso);
console.log(animal002.peso + " " + animal001.cor);


console.log("App inciado");
