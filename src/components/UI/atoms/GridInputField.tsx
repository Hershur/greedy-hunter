import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStateProps } from "../../../reducers/rootReducer";

function GridInputField(): JSX.Element {
    const minGridValue: number = useSelector<IStateProps, IStateProps["minGridValue"]>((state)=> state.minGridValue);
    const maxGridValue: number = useSelector<IStateProps, IStateProps["maxGridValue"]>((state)=> state.maxGridValue);
    const gridValue: number = useSelector<IStateProps, IStateProps["grid"]>((state)=> state.grid);
    const dispatch =  useDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        let gridInputValue = +(event.target.value);

        dispatch({type:"UPDATE_GRID", payload: gridInputValue});
        
        if(gridInputValue > maxGridValue){
            event.target.value = maxGridValue+"";
        }

        if(gridInputValue < minGridValue && gridInputValue > 1 ){
            event.target.value = minGridValue+"";
        }
        
    }

    return (
        <input onInput={handleInputChange} className="grid-input" min={minGridValue} max={maxGridValue} type="number" defaultValue={gridValue} />
    );
}

export default GridInputField;