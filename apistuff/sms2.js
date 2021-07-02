require("dotenv").config()
var request = require('request');
var body = { messages: [
  {
    to: [
      "+19137446456",
      "+19132267603",
      "+19132218549"
    ],
    content: "To-do list app reminder. HAVE A GREAT DAY!",
    from: "D7sms"
  }]};

var options = {
  'method': 'POST',
  'url': 'https://rest-api.d7networks.com/secure/sendbatch',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${process.env.D7_KEY}`
  },
body:JSON.stringify(body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

console.log(options);
