require("dotenv").config()
<<<<<<< HEAD
const { select } = require("async");
=======
>>>>>>> api
var request = require('request');
var body = { messages: [
  {
    to: [
<<<<<<< HEAD
      '+19137446456',
=======
      "+19137446456",
      "+19132267603",
      "+19132218549"
>>>>>>> api
    ],
    content: "To-do list app reminder. HAVE A GREAT DAY!",
    from: "D7sms"
  }]};

var options = {
  'method': 'POST',
<<<<<<< HEAD
  'url': 'https://rest-api.d7networks.com/secure/send',
=======
  'url': 'https://rest-api.d7networks.com/secure/sendbatch',
>>>>>>> api
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${process.env.D7_KEY}`
  },
body:JSON.stringify(body)

};
<<<<<<< HEAD

var api = 'https://rest-api.d7networks.com/secure/send'
var smsText = 'body'
var apikey = `Basic ${process.env.D7_KEY}`



module.exports = function sendText(body){
  var button = select('#submit'); 
  button.mousePress(sendingText);

  input = select('#sms1');

  function sendingText(){
    var url = api + smsText + apiKey;
  }
  console.log(sendingText);
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });

}

=======
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

console.log(options);
>>>>>>> api
