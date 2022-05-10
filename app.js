const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', () => {
  client.subscribe('SalaAngie/+/#',  (err) => {
    if (!err) {
      client.publish('SalaAngie/Jardin', 'Luz solar')
      client.publish('SalaAngie/pasillo/baño' , 'Luz artificial')
    }
  })
})

client.on('message',  (topic, message) => {
  // message is Buffer
  console.log(`${topic} ${message.toString()}` )
  
})