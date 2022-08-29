function consultaPartido(){
    var local = document.getElementById("local").value;
        local = local.replaceAll(" ","-");
    var visita = document.getElementById("visita").value;
        visita = visita.replaceAll(" ","-");
        window.open("https://footballpredictions.net/es/predicciones-"+local+"-v-"+visita+"-datos-apuestas" , "_blank");
}