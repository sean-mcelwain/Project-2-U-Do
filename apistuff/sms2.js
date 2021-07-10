
const { bashCompletionSpecFromOptions } = require("dashdash");
var request = require('request');

module.exports = function sendText(phoneNumber, listContent, expressRes){
  const body = `{\n\t\"to\":\"${phoneNumber}\",\n\t\"content\":\"${listContent}\",\n\t\"from\":\"SMSINFO\",\n\t\"dlr\":\"yes\",\n\t\"dlr-method\":\"GET\", \n\t\"dlr-level\":\"2\", \n\t\"dlr-url\":\"http://yourcustompostbackurl.com\"\n}`

  
  var options = {
    'method': 'POST',
    'url': 'https://rest-api.d7networks.com/secure/send',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${process.env.D7_KEY}`
    },
  body:body

  
  };
console.log('sms options', options);
  
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    expressRes.status(200).json({});
  });
}

