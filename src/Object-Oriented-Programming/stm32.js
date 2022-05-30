const PlacasdeDesenvolvimento = (require('./PlacasdeDesenvolvimento'));

class stm32 extends PlacasdeDesenvolvimento
{
    #debug

    constructor(chip, quantidadeDePinos, memoriaFlash, memoriaRam, Frequencia, Fabricante)
    {
        super(chip, quantidadeDePinos, memoriaFlash, memoriaRam, Frequencia, Fabricante);
        this.#debug = true;
    }
}

module.exports = stm32;

