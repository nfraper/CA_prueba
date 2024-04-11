import Postmonger from 'postmonger-master';

var connection  = new Postmonger.Session();

$(window).ready(onRender); // cuando esté lista la ventana del iframe llama a la función onRender

function onRender() {
    connection.trigger('ready'); // avisa a Postmonger de que la app ya está lista
}

connection.on('initActivity', function(data) { // cuando se haga el trigger de ready, se ejecuta esta función
    if(data) { payload = data } // valida si tenemos alguna configuración (en este caso sí, en el fichero config.json)
}); 

connection.on('clickedNext', function() {
    payload['metaData'].isConfigured = true;
    connection.trigger('updateActivity', payload);
});