const EventEmitter = require('events');

const emitter = new  EventEmitter();

//listener
emitter.on('temperaturehigh', (temphigh) => {
    console.log(`Warning temperature high : ${temphigh}`);
})
let curenttemp = 45;
if (curenttemp > 40) {
    emitter.emit('temperaturehigh', curenttemp);
}


