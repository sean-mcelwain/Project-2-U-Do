var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://rest-api.d7networks.com/secure/send',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic dnRiZzkxOTI6eWdleGxXVXU='
  },
  body: "{\n\t\"to\":\"9137446456\",\n\t\"content\":\"Welcome to D7 sms , we will help you to talk with your customer effectively\",\n\t\"from\":\"SMSINFO\",\n\t\"dlr\":\"yes\",\n\t\"dlr-method\":\"GET\", \n\t\"dlr-level\":\"2\", \n\t\"dlr-url\":\"http://yourcustompostbackurl.com\"\n}"

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
                                                                
                    