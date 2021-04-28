import React, { MouseEvent, useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import assets from "../../../common/assets";
import { calculateNextMove, isBoxEmpty, play, randomFoodAndCharacter } from "../../../common/utils";
import moveCharacter  from "../../../common/moveCharacter";
import {IStateProps} from '../../../reducers/rootReducer';
import { useHistory } from "react-router-dom";
import Box from "./Box";





const GridBoxes = (): JSX.Element => {

    let allFoods = 0;

    const [emptyBox, setEmptyBox] = useState("");
    const [character, setCharacter] = useState(assets.character);
    const gridValue: number = useSelector<IStateProps, IStateProps["grid"]>((state)=> state.grid);

    const dispatch = useDispatch();
    const history = useHistory();
    let [moves, foods] = [0,0];
    let positionChar = "";
    
    
    const handleClick = (event: MouseEvent)=> {
        event.preventDefault();

        const { target } = event;
        // let previous = positionChar;
        //console.log("previous id", positionChar);

        
        
        //console.log("current id", event.currentTarget.id);
        //console.log("position", positionChar);
        if (target){
            
            
            if(!(calculateNextMove(event.currentTarget.id,positionChar))) return false;

            if(isBoxEmpty(event.currentTarget.id)){
                foods++;
            }

            
            moveCharacter(event.currentTarget.id, character);

            (document.getElementById(positionChar) as any).innerHTML = emptyBox;
            
            
            positionChar = event.currentTarget.id;
            // //console.log(getCharacterPosition(boxElements));
            // dispatch({type:"COUNT_MOVES", payload: 5});
            moves++;
            //console.log("moves",moves);
            //console.log("foods",foods);

            // props.movesFoodFunction({foods: foods, moves: moves});
            // const counting = dispatch({type: "COUNT_MOVES", payload: totalMoves});
            // //console.log(getCharacterPosition(boxElements));
            // e.currentTarget.innerHTML = `<img src=${assets.character} class="img" alt="character" />`;
            // //console.log(e.currentTarget.id);


        }
        

        
        
    }

    useEffect(()=> {

        let t = setInterval(()=> {
            const timeSpent = document.getElementById("time-spent");
            const indicator = document.getElementById("indicator");
            
            let countDown = Number(timeSpent?.innerHTML);
            countDown = countDown - 1;
            
            let timeTakenPercent = ((gridValue*3) - countDown) / (gridValue*3) * 100;
            
            
            dispatch({type:"SET_TIME", payload: (gridValue*3)-countDown});
            
    
            if(indicator || timeSpent){
                (indicator as any).style.width = timeTakenPercent+"%";
                (timeSpent as any).innerHTML = countDown.toString().length < 2 ? countDown.toString().padStart(2,"0") : countDown;
            }
        
            //Check countdown time
            if( countDown < 1 ){
                clearInterval(t);
                clearInterval(m);

                history.push("/over");
                play("https://freesound.org/data/previews/175/175409_1326576-lq.mp3");
                
            } 
            //Check if all foods have been eaten
            if(foods === allFoods){
                clearInterval(t);
                clearInterval(m);

                history.push("/finished");
                play("https://freesound.org/data/previews/258/258142_4631294-lq.mp3");

            }
        }, 1000);

        let m = setInterval(()=> {
            if((moves === Math.round((gridValue * gridValue)/2) && foods !== allFoods)){
                clearInterval(t);
                clearInterval(m);

                history.push("/over");
                play("https://freesound.org/data/previews/175/175409_1326576-lq.mp3");
            }

            dispatch({type:"COUNT_MOVES", payload: moves});
            dispatch({type:"FOODS_EATEN", payload: foods});
        }, 300);

        dispatch({type:"TOTAL_FOODS", payload: allFoods})
        //console.log(allFoods);
    });
    
    


    return(
           
        <div>
            {randomFoodAndCharacter(gridValue).map((items, index) => {
                return (
                    <div key={index} className="col">
                    {items.map((subItems, sIndex) => {
                        if(subItems === "F"){
                            subItems = <div onClick={handleClick} className="box" id={`id_${index}_${sIndex}`} key={sIndex}><Box key={`key_${sIndex}`}><img src={assets.food} alt="food" className="img" /></Box></div>
                            allFoods += 1;
                        } else if(subItems === "C"){
                            positionChar = `id_${index}_${sIndex}`;
                            subItems = <div onClick={handleClick} className="box" id={`id_${index}_${sIndex}`} key={sIndex}><Box key={`key_${sIndex}`}><img src={assets.character} alt="character" className="img" /></Box></div>
                        } else {
                            subItems = <div onClick={handleClick} className="box" id={`id_${index}_${sIndex}`} key={sIndex}></div>
                        }


                        return subItems;
                    })}
                </div>
                );
            })}
        </div>
    );
}


export default GridBoxes;



