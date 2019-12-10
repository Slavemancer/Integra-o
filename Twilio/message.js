document.addEventListener("DOMContentLoaded", init);
token = "affb9df06ef6f7c0230200409dc8ea5e";
sid = "AC4aaa5f4e929defeecb6fc72f80f48414";
url = "https://api.twilio.com/2010-04-01/Accounts/AC4aaa5f4e929defeecb6fc72f80f48414/Messages.json";

function init() {
    console.log("App Started");
    console.log(url);
    enviar();
}

function receber() {

}

function enviar() {
    mBody = encodeURI("Body=Hi There&From=+12055836254&To=+351913167270");
    fetch(url, {

        method: "POST",
        headers: {
            'Authorization': 'Basic ' + btoa(sid + ":" + token),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: mBody
    }).then(res => res.json()).then(res => console.log(res));
}