import assets from './assets';


export default function moveCharacter(newCharPosition: string, characterPositionId: string){ 


    let newCharElement = document.getElementById(newCharPosition) as HTMLElement;

    // if(!(calculateNextMove(newCharElement.id,characterPositionId))) return false;
    

    // let charElement = document.getElementById(characterPositionId) as HTMLElement;


    //Character eats food from non-empty box 
    // isBoxEmpty(newCharElement);
    
   
    // charElement.querySelectorAll('*').forEach( n => n.remove() );
    
    
    
    // charElement.innerHTML = "";
    if ((document.getElementById(characterPositionId) as any).childNodes.length > 0) {
        // (document.getElementById(characterPositionId) as any).replaceChildren();
        (document.getElementById(characterPositionId) as any).innerHTML = "";
    }
    

    if(newCharElement){
        let node = document.createElement("img");
        let att = document.createAttribute("src");
        let att2 = document.createAttribute("class");
        att.value = `${assets.character}`;
        att2.value = 'img';
        node.setAttributeNode(att); 
        node.setAttributeNode(att2); 
        (newCharElement as any).replaceChildren();
        newCharElement.insertAdjacentElement("beforeend", node);
        // newCharElement.innerHTML = `<img src=${assets.character} alt="character" class="img" />`;
    }


    
    
    
    // characterPositionId = newCharPosition;

    

    return false;

    // foodConsumed = totalFoodBoxes - countFoodBoxes;
    //If there're no more food boxes, show total food eaten
    // if(countFoodBoxes == 0) {
    //     play('https://freesound.org/data/previews/258/258142_4631294-lq.mp3');
    //     clearTimeout(timeAllowed);
    //     alert("Total Food: "+ foodConsumed+"/"+totalFoodBoxes);
    // } 
}


