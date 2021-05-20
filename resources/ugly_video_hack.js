function videoHack(id, url, mime) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.responseType = 'arraybuffer';

    // Process the response when the request is ready.
    xhr.onload = function(e) {
    if (this.status == 200) {
        // Create a binary string from the returned data, then encode it as a data URL.
        var uInt8Array = new Uint8Array(this.response);
        var i = uInt8Array.length;
        var binaryString = new Array(i);
        while (i--)
        {
        binaryString[i] = String.fromCharCode(uInt8Array[i]);
        }
        var data = binaryString.join('');

        var base64 = window.btoa(data);

        document.getElementById(id).src="data:"+mime+";base64," + base64;
    }
    };

    xhr.send();
}