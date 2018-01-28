var translations = {};

function load(lang, callback) {
    loadJSON('locales/'+lang+'.json', function(data) {
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
        load('en', function() {
            Start();
        });
    },
    "Français": function(message){
        load('fr', function() {
            Start();
        });
    }
});
