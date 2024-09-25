// imports

// funções úteis para vetor

export function deleteElementWithId(list, id){
    const newList = [];
    for (let obj of list){
        if (obj["id"] == id){
            continue;
        }
        newList.push(obj);
    }
    return newList;
}