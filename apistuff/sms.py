from pip._vendor import requests

url = "https://http-api.d7networks.com/send"
querystring = {
"username":"vtbg9192",
"password":"ygexlWUu",
"from":"Test%20SMS",
"content":"U-DO List Reminder! SENT BY U-DO APP",
"dlr-method":"POST",
"dlr-url":"https://4ba60af1.ngrok.io/receive",
"dlr":"yes",
"dlr-level":"3",
"to":"+19137446456"
}
headers = {
'cache-control': "no-cache"
}
response = requests.request("GET", url, headers=headers, params=querystring)
print(response.text)