// import { DeviceParaJASON } from './mqtt_serve_backup'
//*********************** import module ***********************
const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)


// app.get('/Users/bmbed/workspace/TDS/PMS/lib/bloc/device/bloc/device_bloc.dart', (req,res) => {
//   res.send("Server is runing")
// })



io.on('connection', function (client) {

  console.log('client connect...', client.id);

  client.on('message', function name(data) {
    console.log(data);

    var dataString = data.toString();

    io.emit('typing', dataString)ghfhsf
  })

  
  client.on('connect', function () {
      console.log(`client is ${client.id}`)
  })

  client.on('disconnect', function () {
    console.log('client disconnect...', client.id)
    // handleDisconnect()
  })

  client.on('error', function (err) {
    console.log('received error from client:', client.id)
    console.log(err)
  })
})

var server_port = process.env.PORT || 3000;
server.listen(server_port, function (err) {
  if (err) throw err
  console.log('Listening on port %d', server_port);
});