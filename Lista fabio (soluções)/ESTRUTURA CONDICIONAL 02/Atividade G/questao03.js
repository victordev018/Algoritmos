//Leia uma letra e verifique se a letra digitada é vogal ou consoante.

import { get_string, verificar_letra } from "./utils/io_utils.js"

function main (){
    //entrada
    let letra = get_string('Digite uma eltra [a-z]: ')

    //processamento/ saida
    verificar_letra(letra)
}

main()