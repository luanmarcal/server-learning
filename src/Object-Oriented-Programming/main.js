//const PlacasdeDesenvolvimento = require('./PlacasdeDesenvolvimento');
const stm32 = require('./stm32');

const placaStm32= new stm32("ARM 32 Cortex-M3", 94, "512KB", "144KB", "72MHz", "STMicroelectronics" );

console.log(`${placaStm32.getChip(stm32)}`)