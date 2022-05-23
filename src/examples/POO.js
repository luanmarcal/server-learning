class Animal {
    cor;
    peso;

    constructor(){
        this.cor = "amarelo";
        this.peso = 50;
    }

    emitirSom(){
        console.log("Implementar o polimorfismo!")
    }
}

const animal001 = new Animal();
const animal002 = new Animal();


console.log(animal002.peso + " " + animal002.cor)

