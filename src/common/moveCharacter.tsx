

export default function moveCharacter(newCharPosition: string, character: string){ 


    let newCharElement = document.getElementById(newCharPosition) as HTMLElement;

    if(newCharElement){
        
        newCharElement.innerHTML = `<img src=${character} alt="character" class="img" />`;
    }

    // characterPositionId = newCharPosition;

    

    return false;

}


