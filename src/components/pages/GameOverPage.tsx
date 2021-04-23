import GameStartTemplate from "../templates/GameStartTemplate";
import assets from '../../common/assets';
import GameDetails from "../UI/organisms/GameDetails";
import Heading from "../UI/molecules/Heading";
import GameText from "../UI/atoms/GameText";
import GameGrid from "../UI/molecules/GameGrid";
import StartGameButton from "../UI/atoms/StartGameButton";
import { useSelector } from "react-redux";
import { IStateProps } from "../../reducers/rootReducer";
import { useSpring, animated } from "react-spring";


function GameOverPage(): JSX.Element {
    const timeSpent: number = useSelector<IStateProps, IStateProps["timeSpent"]>((state)=> state.timeSpent);
    const foodsEaten: number = useSelector<IStateProps, IStateProps["foodsEaten"]>((state)=> state.foodsEaten);
    const totalFoods: number = useSelector<IStateProps, IStateProps["totalFoods"]>((state)=> state.totalFoods);

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 500, })


    return (

        <animated.div style={props} className="container">
            <GameStartTemplate
                bgMeshLeft={assets.bgMesh}
                gameDetails={
                    <GameDetails 
                        heading={<Heading headingTitle="Game Over!" />}
                        gameText={
                            <GameText gameText={<>Total Food: <b className="bold">{`${foodsEaten}/${totalFoods}`}</b></>} />
                        }
                        gameText2={
                            <GameText gameText={<>Time spent: <b className="bold">{timeSpent}</b> seconds</>} />
                        }
                        gameGrid={<GameGrid  />}
                        startGameButton={<StartGameButton buttonText="Start again" />}
                    />
                    
                }
                bgMeshRight={assets.bgMesh}
            />
        </animated.div>  
    ); 
}

export default GameOverPage;