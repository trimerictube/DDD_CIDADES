document.querySelector("#ddd").addEventListener("change", buscaAPI);
cidades_lista = new Array();
function buscaAPI(evento){
	fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`)
	.then(res => res.json())
	.then(ddd => {
		cidades_lista = ddd.cities;
		listaCidades();
	});
}
function listaCidades(){
	ul_lista = document.querySelector('ul');
	ul_lista.textContent = '';
	cidades_lista.forEach(cidade =>{
		li_lista = document.createElement('li');
		li_lista.textContent = cidade;
		ul_lista.append(li_lista);
	});
}
