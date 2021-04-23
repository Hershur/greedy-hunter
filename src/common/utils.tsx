
type StringJSX = string | JSX.Element;

interface IGridPatternParams {
    grid: number,
    box: string,
    character: string,
    food: string,
}


function randomInteger(min: number, max: number): number {
    return Math.abs(Math.floor(Math.random() * (max - min + 1))) + min;
}


function randomNumArray(grid: number): number[]{
    return [
        Math.abs(Math.floor(Math.random() * grid)),
        Math.abs(Math.floor(Math.random() * grid))
    ];
}

function randomArrays(grid: number): number[][]{
    return Array.from({length: randomInteger(grid*2-1,grid*2)}, () => Array.from({length: 2}, () => Math.abs(Math.floor(Math.random() * grid))));
}


function array2D(box: StringJSX, grid: number): StringJSX[][] {
    return Array.from({length: grid}, ()=> (Array.from({length: grid}, ()=> box)));
}

export function randomFoodAndCharacter(grid: number){
    let generatedArray: StringJSX[][] = array2D("",grid);
    let genRandomArrays = randomArrays(grid);
    let genRandomNumArray = randomNumArray(grid);
    
    generatedArray = generatedArray.map((arr, i)=> {
        genRandomArrays.forEach(el=> {
            if(i===el[0]){
                let tempArray: StringJSX[] = [...arr];
                tempArray[el[1]] = "F";
                arr = tempArray;
            }  
        });

        if(i === genRandomNumArray[0]){
            let tempArr: StringJSX[] = [...arr];
            tempArr[genRandomNumArray[1]] = "C";
            arr = tempArr;
        } 

        return arr;
    });

    return generatedArray;
}



function gridPattern({grid,box,character,food}: IGridPatternParams): string[][]{
    let eachArrayBox: string[] = Array.from({length: grid}, ()=> box);
    let arrayBox: string[][] = Array.from({length: grid}, ()=> eachArrayBox);
    let randNumArr: number[] = [
        Math.abs(Math.floor(Math.random() * grid)),
        Math.abs(Math.floor(Math.random() * grid))
    ];

    arrayBox = arrayBox.map((arr, i)=> {

        //Insert the foods randomly on the grid
        randomArrays(grid).forEach(el=> {
            if(i===el[0]){
                let tempArray: string[] = [...arr];
                tempArray[el[1]] = food;
                arr = tempArray;
            }  
        });


        //Insert the character randomly on the grid
        if(i===randNumArr[0]){
            let tempArr: string[] = [...arr];
            tempArr[randNumArr[1]] = character;
            arr = tempArr;
        } 

        // countFoodBoxes += arr.filter(el => el == food).length;

        return arr;
    });

    // totalFoodBoxes = countFoodBoxes;

  
  return arrayBox;
}


export const play = (audioFile: string): void=>{
    let audio = new Audio(audioFile);
    audio.play();
}

export function isBoxEmpty(elemId: string): boolean{
    if(document.getElementById(elemId)?.innerHTML){
        // countFoodBoxes = countFoodBoxes - 1;
        
        //play munching sound
        play('https://freesound.org/data/previews/467/467610_9659530-lq.mp3');
        
        // console.log("remaining food", countFoodBoxes);
        // console.log("total", totalFoodBoxes);
        return true
    } 
    return false;
}


export function calculateNextMove(newCharElemId: string, characterPositionId: string): Boolean{
    let characterPosition = characterPositionId.split("_");
    let newCharacterPosition = newCharElemId.split("_");
    characterPosition.shift();
    newCharacterPosition.shift();

    let possibleMoves = [ ];
    let upward = [(+characterPosition[0]-1)+"",characterPosition[1]];
    let downward = [(+characterPosition[0]+1)+"",characterPosition[1]];
    let right = [characterPosition[0],(+characterPosition[1]+1)+""];
    let left = [characterPosition[0],(+characterPosition[1]-1)+""];
    possibleMoves = [upward,downward,right,left];

    // console.log(possibleMoves);

    let moveCheck = possibleMoves.map(move=> JSON.stringify(move) === JSON.stringify(newCharacterPosition));

    if(moveCheck.every(val=> val === false)){
        play('https://freesound.org/data/previews/351/351563_2398403-lq.mp3');
        return false;
    } 

    return true;

    
}

export function setElementId(arr:string[],i:number){
    let insertedID = arr.map((el, index)=> {
      el = el.substr(0,4)+ ` id="id_${i}_${index}" `+el.substr(4);
      return el;
    });
    
    return insertedID;
}


export function getCharacterPosition(arr: NodeListOf<Element>): string{
    for(let i=0; i<arr.length; i++){
        console.log("yeyeye",arr[i]);
        if(arr[i].innerHTML.includes("character")){
            return "";
        }
    }
    console.log(arr);
    return ""
}


export default gridPattern;