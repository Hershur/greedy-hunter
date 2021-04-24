
export interface IStateProps {
    grid: number,
    minGridValue: number,
    maxGridValue: number,
    startedGame: boolean,
    timeSpent: number,
    totalMoves: number,
    totalFoods: number,
    foodsEaten: number,
}

type Action = {type: string, payload: any } 

const initialState = {
    grid: 5,
    minGridValue: 5,
    maxGridValue: window.screen.width < 400 ? 10 : 12,
    startedGame: false,
    timeSpent: 0,
    totalMoves: 0,
    totalFoods: 0,
    foodsEaten: 0,
} 
 
const rootReducer = (state: IStateProps = initialState, action: Action)=>{
    switch(action.type){
        case "UPDATE_GRID":
            return {...state, grid: action.payload}
        case "START_GAME":
            return {...state, startedGame: action.payload}
        case "SET_TIME":
            return {...state, timeSpent: action.payload}
        case "COUNT_MOVES":
            return {...state, totalMoves: action.payload}
        case "TOTAL_FOODS":
            return {...state, totalFoods: action.payload}
        case "FOODS_EATEN":
            return {...state, foodsEaten: action.payload}
        default:
            return state;
    }
}

export default rootReducer;