function getParameterName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return false;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export {getParameterName};

//NOT ORIGINAL
//FROM: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
