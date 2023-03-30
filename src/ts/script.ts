/*7. Altere o arquivo script.ts para criar um objeto tipo Pessoa, 
tipo PessoaFisica e tipo PessoaJuridica, com valores que você quiser, 
e imprima no console cada atributo de cada objeto.*/

let pessoa1 = new Pessoa ("Pedro", 21, new Date('2002-07-29'));
console.log(pessoa1.toString());

let pessoaFisica = new PessoaFisica ("Julio", 21, new Date('2002-01-01'), '123-456');
console.log(pessoaFisica.toString());

let pessoaJuridica = new PessoaJuridica("Vagner",40,new Date('1976-05-12'),'7894341-22');
console.log(pessoaJuridica.toString())