import { question } from "readline-sync";

function main(){
    // criating an array of medicaments
    let medicaments = []
    
    let qtd_medicaments = question("\n> Quantity of medicament to be added")

    // add medicaments in array
    for (let i = 0; i < qtd_medicaments; i++){
        let nameMedicament = question("\n > Enter a name of medicament: ")
        medicaments.push(nameMedicament)
    }

    // which remedy does the client want?
    let nameRemedy = question("> Remedy name: ")

    // checking if medicament is in stock:
    if (medicamentInStock(nameRemedy, medicaments)){
        console.log("Medicameent is in stock!")
    }
    else{
        console.log("Medicament not in stock...")
    }

}

function medicamentInStock(name, medicament){
    // scrolling through array
    for (let index = 0; index < medicament.length; index++){
        // checking if medicament is in stock
        if (medicament[index] == name){
            return true;    
        }
    }
    
    return false;
}

main()