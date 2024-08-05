
let input = require('readline-sync');
import { get_number_min } from './utils/io_utils.js';

function main(){
    // entrada dos dados
    const cotacao_dollar = input.question("> Cotação do dollar em R$: ");
    const pontos_por_dolar = input.question("> Bonus por conversão: ");
    const bonus_por_transferencia = input.question("> Bonus de conversao %: ");

    let qtd_compas = 0;
    
    let compra = get_number_min("> valor da compra: ", 0);
    
    let valor_total_fatura_reais = compra;

    // lendo n compras até o valor for 0
    while (compra != 0){
        qtd_compas++;     // incrementa contador
        // solicita valor da compra
        compra = get_number_min("> valor da compra: ", 0);
        valor_total_fatura += compra;
    }

    let valor_total_fatura_dollar = valor_total_fatura_reais / cotacao_dollar;
    let pontos = valor_total_fatura_reais * pontos_por_dolar;
    let milhas = pontos + (pontos * bonus_por_transferencia / 100);

    const resultado =`
    >      Milhas & Pontos       <
    ------------------------------
    > quantidade compras: ${qtd_compas}
    > valor fatura R$: ${valor_total_fatura_reais.toFixed(2)}
    > valor fatura U$: ${valor_total_fatura_dollar.toFixed(2)}
    > pontos: ${pontos_por_dolar} pontos
    > milhas: ${milhas} milhas
    `

    // exbibindo resultado
    console.log(resultado)
}

main();