var str = "\"Hello World!<>'&\"";
// function that converts characters that need to be escaped in html to html entities
function escapeCharacters(text) {
    var tempStr = text.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39')
    return tempStr;
}
console.log(str);
console.log(escapeCharacters(str));