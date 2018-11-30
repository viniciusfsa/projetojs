//Declaração de Variáveis e constantes

const mensagem = 'Oi mundo';
console.log(mensagem);
let mensagem2 = "oi";
console.log(mensagem2);
console.log(typeof(mensagem2));


alert("ola");

//Funções
/*
//Outras duas formas de escrever função em javascript
//let somar = function(numA,numB){ 
//let somar = (numA,numB) =>{ 

function somar(numA, numB){
	return numA+numB;
}

let resultado = somar(5,3);
console.log(resultado);

*/

//Vetores
/*
let numeros = ['1','2','3'];
let finalSemana = new Array('sabado', 'domingo');
console.log(finalSemana[0]);
console.dir(numeros);
numeros.push('quatro');
console.dir(numeros);
*/


//Objetos
/*
let agenda = {
	nome: 'Harlley',
	sobrenome: 'Oliveira',
	whatsapp:'(31) 9876-9876',
	nomeCompleto: function() {
		return this.nome + ' ' +this.sobrenome;
	}
	
}
console.dir(agenda);
console.log(agenda.nome);
console.log(agenda.sobrenome);
console.log(agenda.whatsapp);
console.log(agenda.nomeCompleto());
*/

//Condicional
/*
let idade = 21;
if(idade>=18){
	console.log('Voce é maior de idade');
}
else{
	console.log('Voce é menor de idade');
}
*/

//Loops

let finalSemana = ['sabado', 'domingo'];
/*finalSemana.forEach(function(dia){
	console.log('final de semana: ' + dia);	
})*/

for (let dia of finalSemana){
	console.log('dia: '+ dia);
}

//TESTE
