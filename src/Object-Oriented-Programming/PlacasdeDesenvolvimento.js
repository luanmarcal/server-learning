class PlacasdeDesenvolvimento
{
    #chip;
    #quantidadeDePinos;
    #memoriaFlash;
    #memoriaRam;
    #Frequencia;
    #Fabricante;

    constructor(chip, quantidadeDePinos, memoriaFlash, memoriaRam, Frequencia, Fabricante)
    {
        this.#chip = chip;
        this.#quantidadeDePinos = quantidadeDePinos;
        this.#memoriaFlash = memoriaFlash;
        this.#memoriaRam = memoriaRam;
        this.#Frequencia = Frequencia;
        this.#Fabricante = Fabricante;
    }  
    
    getChip(){
        return this.#chip;
    }

    getQuantidadeDePinos(){
        return this.#quantidadeDePinos;
    }

    getMemoriaFlash(){
        return this.#memoriaFlash;
    }

    getMemoriaRam(){
        return this.#memoriaRam;
    }

    getFrequencia(){
        return this.#Frequencia;
    }

    getFabricante(){
        return this.#Fabricante;
    }

}

module.exports = PlacasdeDesenvolvimento;

