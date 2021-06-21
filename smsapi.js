var unirest = require("unirest");

var req = unirest("POST", "https://d7sms.p.rapidapi.com/secure/send");

req.headers({
	"content-type": "application/json",
	"authorization": "Basic cm9vdDpwYXNzd29yZA==",
	"x-rapidapi-key": "caf8988263mshe40011e50822913p1c018bjsn79e7c46913f1",
	"x-rapidapi-host": "d7sms.p.rapidapi.com",
	"useQueryString": true
});

req.type("json");
req.send({
	"coding": "8",
	"from": "SMSInfo",
	"hex-content": "00480065006c006c006f",
	"to": 9137446456
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});