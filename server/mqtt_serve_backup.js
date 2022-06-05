var mqtt = require('mqtt');
var prachinburi = 'PMS/Parameter/2204001220'; 
var Trat = 'PMS/Parameter/2204001520'; //subscribe to all topics
var Chanthaburi = 'PMS/Parameter/2204002020'; //subscribe to all topics
var chachoengsao = 'PMS/Parameter/2204002520'; //subscribe to all topics
var SaKaeo = 'PMS/Parameter/2204002720'; //subscribe to all topics
var Nonthaburi = 'PMS/Parameter/2204002820'; //subscribe to all topics
var Phayao = 'PMS/Parameter/2204002920'; //subscribe to all topics
var Kamphaeng_Phet = 'PMS/Parameter/2204003020'; //subscribe to all topics
var Phitsanulok = 'PMS/Parameter/2204003420'; //subscribe to all topics
var Sing_Buri = 'PMS/Parameter/2204003520'; //subscribe to all topics
var Nong_Bua = 'PMS/Parameter/2204003620'; //subscribe to all topics
var Phrae = 'PMS/Parameter/2204003720'; //subscribe to all topics
var Phetchaburi = 'PMS/Parameter/2204003820'; //subscribe to all topics
var Chumphon = 'PMS/Parameter/2204003920'; //subscribe to all topics
var Ratchaburi = 'PMS/Parameter/2204004020'; //subscribe to all topics
var Kanchanaburi = 'PMS/Parameter/2204004220'; //subscribe to all topics
var Kamphaeng_Saen = 'PMS/Parameter/2204004320'; //subscribe to all topics
var Ao_Luek = 'PMS/Parameter/2204004520'; //subscribe to all topics
var Tha_Maka = 'PMS/Parameter/2204004720'; //subscribe to all topics
var La_ngu = 'PMS/Parameter/2204004820'; //subscribe to all topics
var Songkhla_1 = 'PMS/Parameter/2204005020'; //subscribe to all topics
var Songkhla_2 = 'PMS/Parameter/2204005120'; //subscribe to all topics
var Prachuap = 'PMS/Parameter/2204005320'; //subscribe to all topics
var Krabi = 'PMS/Parameter/2204002540'; //subscribe to all topics
var Phang_Nga = 'PMS/Parameter/2204004420'; //subscribe to all topics
var Trang = 'PMS/Parameter/2204005720'; //subscribe to all topics
var Satun = 'PMS/Parameter/2204005820'; //subscribe to all topics
var Phatthalung = 'PMS/Parameter/2204005920'; //subscribe to all topics
var Phuket = 'PMS/Parameter/2204006120'; //subscribe to all topics
var Ranong = 'PMS/Parameter/2204006220'; //subscribe to all topics
var Nakhon = 'PMS/Parameter/2204006420'; //subscribe to all topics
var Pattani = 'PMS/Parameter/2204006520'; //subscribe to all topics
var Yala = 'PMS/Parameter/2204006620'; //subscribe to all topics
var Narathiwat = 'PMS/Parameter/2204007120'; //subscribe to all topics


//******************************** Initial //********************************
var Broker_URL = 'mqtt://192.168.0.39'//'mqtt://192.168.0.253'//'mqtt://tdsmqtt2.dyndns.info';

var options = {
 clientId: 'MyMQTT',
 port: 1883,
 username: 'mqtt',
 password: 'Tds12345', 
 };

var client  = mqtt.connect(Broker_URL, options);
client.on('connect', mqtt_connect);
client.on('reconnect', mqtt_reconnect);
client.on('error', mqtt_error);
client.on('message', mqtt_messsageReceived);
client.on('close', mqtt_close);

function mqtt_connect() {
    console.log("Connecting MQTT");
    // client.subscribe(prachinburi, mqtt_subscribe);
    // client.subscribe(chachoengsao, mqtt_subscribe);
    // client.subscribe(Trat, mqtt_subscribe);
    // client.subscribe(Chanthaburi, mqtt_subscribe);
    // client.subscribe(chachoengsao, mqtt_subscribe);
    // client.subscribe(SaKaeo, mqtt_subscribe);
    // client.subscribe(Nonthaburi, mqtt_subscribe);
    // client.subscribe(Phayao, mqtt_subscribe);
    // client.subscribe(Kamphaeng_Phet, mqtt_subscribe);
    // client.subscribe(Phitsanulok, mqtt_subscribe);
    // client.subscribe(Sing_Buri, mqtt_subscribe);
    // client.subscribe(Nong_Bua, mqtt_subscribe);
    // client.subscribe(Phrae, mqtt_subscribe);
    // client.subscribe(Phetchaburi, mqtt_subscribe);
    // client.subscribe(Chumphon, mqtt_subscribe);
    // client.subscribe(Ratchaburi, mqtt_subscribe);
    // client.subscribe(Kanchanaburi, mqtt_subscribe);
    // client.subscribe(Kamphaeng_Saen, mqtt_subscribe);
    // client.subscribe(Ao_Luek, mqtt_subscribe);
    // client.subscribe(Tha_Maka, mqtt_subscribe);
    // client.subscribe(La_ngu, mqtt_subscribe);
    // client.subscribe(Songkhla_1, mqtt_subscribe);
    // client.subscribe(Songkhla_2, mqtt_subscribe);
    // client.subscribe(Prachuap, mqtt_subscribe);
    // client.subscribe(Krabi, mqtt_subscribe);
    // client.subscribe(Phang_Nga, mqtt_subscribe);
    // client.subscribe(Trang, mqtt_subscribe);
    // client.subscribe(Satun, mqtt_subscribe);
    // client.subscribe(Phatthalung, mqtt_subscribe);
    // client.subscribe(Phuket, mqtt_subscribe);
    // client.subscribe(Ranong, mqtt_subscribe);
    // client.subscribe(Nakhon, mqtt_subscribe);
    // client.subscribe(Pattani, mqtt_subscribe);
    client.subscribe(Yala, mqtt_subscribe);
    client.subscribe(Narathiwat, mqtt_subscribe);
}

function mqtt_subscribe(err, granted) {
    // console.log("Subscribed to " + prachinburi);
    // console.log("Subscribed Top1 to " + chachoengsao);
    // console.log("Subscribed to " + Trat);
    // console.log("Subscribed Top1 to " + Chanthaburi);
    // console.log("Subscribed to " + chachoengsao);
    // console.log("Subscribed to " + SaKaeo);
    // console.log("Subscribed to " + Nonthaburi);
    // console.log("Subscribed to " + Phayao);
    // console.log("Subscribed to " + Kamphaeng_Phet );
    // console.log("Subscribed to " + Kamphaeng_Phet);
    // console.log("Subscribed to " + Phitsanulok);
    // console.log("Subscribed to " + Sing_Buri);
    // console.log("Subscribed to " + Nong_Bua);
    // console.log("Subscribed to " + Phrae);
    // console.log("Subscribed to " + Phetchaburi);
    // console.log("Subscribed to " + Chumphon);
    // console.log("Subscribed to " + Ratchaburi);
    // console.log("Subscribed to " + Kanchanaburi);
    // console.log("Subscribed to " + Kamphaeng_Saen);
    // console.log("Subscribed to " + Ao_Luek);
    // console.log("Subscribed to " + Tha_Maka);
    // console.log("Subscribed to " + La_ngu);
    // console.log("Subscribed to " + Songkhla_1);
    // console.log("Subscribed to " + Songkhla_2);
    // console.log("Subscribed to " + Prachuap);
    // console.log("Subscribed to " + Krabi);
    // console.log("Subscribed to " + Phang_Nga);
    // console.log("Subscribed to " + SaKaeo);
    // console.log("Subscribed to " + Trang);
    // console.log("Subscribed to " + Satun);
    // console.log("Subscribed to " + Phatthalung);
    // console.log("Subscribed to " + Phuket);
    // console.log("Subscribed to " + Ranong);
    // console.log("Subscribed to " + Nakhon);
    // console.log("Subscribed to " + Pattani);
    console.log("Subscribed to " + Yala);
    console.log("Subscribed to " + Narathiwat);

    if (err) {console.log(err);}
}

function mqtt_reconnect(err) {
    console.log("Reconnect MQTT");
    if (err) {console.log(err);}
 client  = mqtt.connect(Broker_URL, options);
}

function mqtt_error(err) {
    console.log("Error!");
 if (err) {console.log(err);}
} 

function after_publish() {
 //do nothing
} 

function mqtt_messsageReceived(topic, message, packet) {
 console.log('Message received = ' + message);

 //insert_message(topic, message, packet);
}

function mqtt_close() {
 //console.log("Close MQTT");
}

var mysql = require('mysql');

var connection =mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: "Tds12345",
        database: "pmsdb"
    }); 
 
// connection.connect(function(err){
//     if(err) throw err;
//     console.log("Database Connected"); 
// });


// function insert_message(topic, message, packet){
//      var obj = JSON.parse(message)
//     console.log('Store');
 
//     var clientID = "MyMQTT";
//     var sql = `INSERT INTO voltage (U1, U2, U3, U12, U23, U31, site_id) VALUES(${obj.U1}, 2.00, 3.00 ,4.00 , 500.0 , 123.456, 1)`
//     var sql = `INSERT INTO current (i1, i2, i3, reserved, timestamp) VALUES(${obj.I1}, ${obj.I2}, ${obj.I3})`
//     var sql = `INSERT INTO active_power_phase (active_power_pha)`
// // connection.query(sql, function(error, results)
// // {
// //     if(error) throw error;
// //     console.log("Success"); 
// // });

// obj.U1
// obj.U2
// obj.U3
// obj.U12
// obj.U23
// obj.U31
// obj.I1
// obj.I2
// obj.I3
// obj.Active_Power_Phase_L1_P1
// obj.Active_Power_Phase_L2_P2
// obj.Active_Power_Phase_L3_P3
// obj.Active_Power_Total_Pt
// obj.Reactive_Power_Phase_L1_Q1
// obj.Reactive_Power_Phase_L2_Q2
// obj.Reactive_Power_Phase_L3_Q3
// obj.Reactive_Power_Total_St
// obj.Apparent_Power_Phase_L1_S1
// obj.Apparent_Power_Phase_L2_S2
// obj.Apparent_Power_Phase_L3_S3
// obj.Active_Power_Toral_St
// obj.Power_Factor_Phase_1_PF1
// obj.Power_Factor_Phase_2_PF2
// obj.Power_Factor_Phase_3_PF3
// obj.Power_Factor_Total_PFt
// obj.Frequency
// obj.I1_THD
// obj.I2_THD
// obj.I3_THD
// obj.U1_THD
// obj.U2_THD
// obj.U3_THD
// obj.U12_THD
// obj.U23_THD
// obj.U31_THD
// obj.Peak_Active_Power_Total_Pt_Pos
// obj.Peak_Active_Power_Total_Pt_Neg
// obj.Peak_Reactive_Power_Total_Qt_C
// obj.Peak_Reactive_Power_Total_Qt_L
// obj.Peak_Apparent_Power_Total_St
// obj.PeakDI1
// obj.PeakDI2
// obj.PeakDI3
// obj.Active_Power_Total_Pt_Pos
// obj.Active_Power_Total_Pt_Neg
// obj.Reactive_Power_Total_Qt_C
// obj.Reactive_Power_Total_Qt_L
// obj.Apparent_Power_Total_St
// obj.DI1
// obj.DI2
// obj.DI3
// obj.Energy_Counter_1
// obj.Energy_Counter_2
// obj.Energy_Counter_3
// obj.Energy_Counter_4
// obj.Over_Voltage_H
// obj.Over_Voltage_HH
// obj.Under_Voltage_L
// obj.Under_Voltage_LL
// obj.Phase_Unbalance_L1_L2H
// obj.Phase_Unbalance_L2_L3H
// obj.Phase_Unbalance_L3_L1H
// obj.Phase_Unbalance_L1_L2HH
// obj.Phase_Unbalance_L2_L3HH
// obj.Phase_Unbalance_L3_L1HH
// obj.Phase_failure
// obj.DIO1
// obj.DIO2
// obj.DIO3
// }