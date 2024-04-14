/*
Especificação:
Leia a Lista de Alunos de um Arquivo (disponibilizado)
Sistema deve Mostrar quanto alunos Carregador/Disponíveis para sorteio.
O Usuário deverá informar quantos Grupos deseja.
O maior grupo deverá ser o último (caso não seja divisão exata)
Deve ser possível excluir alunos do sorteio: Listar e pede ao usuário para indicar qual aluno desejar
excluir, até digitar um flag que indica não desejar mais excluir.
Divisão por Sorteio - Ter a funcionalidade para sortear
Ter opção Exibir Grupos ordenado por nome.
Ter opção para gravar resultado em arquivo, ordenado por grupo e nome, do último sorteio realizado
Fazer sistema com Menu de Opções
*/

import fs from 'fs'

function main(){
    const data = fs.readFileSync('alunos.txt', 'utf-8')

    const lines = data.split('\n')

    for(let line of lines){
        console.log(line)
    }
}

main()