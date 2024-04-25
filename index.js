let salario_minimo=[
    { ano: 2010, salario: 510.00 },
    { ano: 2011, salario: 545.00 },
    { ano: 2012, salario: 622.00 },
    { ano: 2013, salario: 678.00 },
    { ano: 2014, salario: 724.00 },
    { ano: 2015, salario: 788.00 },
    { ano: 2016, salario: 880.00 },
    { ano: 2017, salario: 937.00 },
    { ano: 2018, salario: 954.00 },
    { ano: 2019, salario: 988.00 },
    { ano: 2020, salario: 1045.00 }
]

let inflacao=[
    {ano:2010, ipca:5.91},
    {ano:2011, ipca:6.50},
    {ano:2012, ipca:5.84},
    {ano:2013, ipca:5.91},
    {ano:2014, ipca:6.41},
    {ano:2015, ipca:10.67},
    {ano:2016, ipca:6.29},
    {ano:2017, ipca:3.75},
    {ano:2018, ipca:4.31},
    {ano:2019, ipca:5.91},
    {ano:2020, ipca:4.52}
]

import entradaDados from 'readline-sync';

console.log("\nEscolha uma das alternativas:");
console.log("\n1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice de IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA")

let escolha= entradaDados.question("\nDigite o numero da sua escolha: ")

if (escolha == 1){
   for (let dados of salario_minimo) {
    let labelAno = "\nAno:"
    let labelSalario = "Salário Mínimo:"
    let salarioCompleto = 'R$ ' + dados.salario.toFixed(2).replace(".", ",")
    console.log(labelAno.padEnd(25,'.') + dados.ano) 
    console.log(labelSalario.padEnd(24,'.') + salarioCompleto)
   }
}

else if (escolha == 2){
    for (let dados of inflacao){
    let labelAno = "\nAno:"
    let labelInflacao = "Inflação IPCA:"
    let porcentagemIPCA = dados.ipca.toFixed(2).replace(".", ",")  + '% '
    console.log(labelAno.padEnd(25,'.') + dados.ano )
    console.log(labelInflacao.padEnd(24,'.') + porcentagemIPCA)
   }
}

else if (escolha == 3){
    for (let i = 0; i <= salario_minimo.length-1; i++) {
        let salarioAnterior = (i > 0) ? salario_minimo[i - 1].salario : salario_minimo[i].salario;
        let dadosSalarioAtual = salario_minimo[i]; 
        let dadosInflacaoAtual = inflacao[i];
        let crescimentoSalarial = "-";
        let labelAno = "\nAno:"
    
        let labelSalario = "Salário Mínimo:"
        let labelInflacao = "Inflação IPCA:"
        let labelCrescimento = "Crescimento Salarial:"

        if (i > 0) {
            let diferenca = dadosSalarioAtual.salario - salarioAnterior;
            let crescimento = (diferenca / salarioAnterior) * 100;
            crescimentoSalarial = crescimento.toFixed(2).replace(".", ",") + '%';
        }

        let salarioCompleto = 'R$ ' + dadosSalarioAtual.salario.toFixed(2).replace(".", ","); 
        let porcentagemIPCA = dadosInflacaoAtual.ipca.toFixed(2).replace(".", ",") + '% ';

        console.log(labelAno.padEnd(25,'.') + dadosSalarioAtual.ano)
        console.log(labelSalario.padEnd(24,'.') + salarioCompleto)
        console.log(labelCrescimento.padEnd(24,'.') + crescimentoSalarial);
        console.log(labelInflacao.padEnd(24,'.') + porcentagemIPCA)
        
    }
}

else{
    console.log("\nOpção Inválida!");
} 

 