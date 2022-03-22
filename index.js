class Pessoa{
    constructor(nome, nascimento, ano, altura){
        this.nome = nome
        this.nascimento = nascimento
        this.ano = ano
        this.altura = altura
    }

    calcularIdade(){
        return this.ano - this.nascimento;
    }
}

let pessoa = new Pessoa("Caio", "2006", "2022", "1,78m");
console.log(pessoa.calcularIdade())