var http = require("http").createServer(servidor);
var fs = require("fs");

function servidor(requisicao, resposta) {

	//avisando ao navegador que a requisicao foi recebida - código 200 é o status do HTTP (http://httpstatus.es)
	resposta.writeHead(200);

	var url = requisicao.url;
	if (url == '/') {
	
		resposta.end(fs.readFileSync("view/index.html"));
		
	} else if (url == '/clientes') {
	
		console.log("Rota Clientes Acessada");
		
		var contents = fs.readFileSync("json/clientes.json");
		var jsonContent = JSON.parse(contents);	
		resposta.end(JSON.stringify(jsonContent));
		//resposta.end(jsonContent);
	
	} else {
		resposta.end("<h1>Error: 404 - Pagina nao encontrada</h1>");
	}	
}

http.listen(4000, function() { 
	console.log("Servidor Online");
});