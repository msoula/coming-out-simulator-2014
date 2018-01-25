var translations = {};

// load given json file
function loadJSON(filename, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', filename, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);
        }
    }
    xobj.send(null);
}

// load json file containing translation
function load(lang, callback) {
    loadJSON('locales/' + lang + '.json', function(data) {
        translations = JSON.parse(data);
        callback();
    });

}

function tr(part, key) {
    if (!translations[part]) return key;
    return translations[part][key] || key;
}

Choose({
    "English": function(message){
        Start();
    },
    "Français": function(message){
        load('fr', function() {
            Start();
        });
    }
});
