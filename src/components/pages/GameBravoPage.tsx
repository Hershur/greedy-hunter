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



function GameBravoPage(): JSX.Element {
    const timeSpent: number = useSelector<IStateProps, IStateProps["timeSpent"]>((state)=> state.timeSpent);

    const props = useSpring<{x: number, to: object}>({ x: 1, to: { opacity: 1, transform: `scale(${1})` }, from: { opacity: 0, transform: `scale(${0})` }, });


    return (
        <animated.div
            style={props} className="container">
                <GameStartTemplate
                    bgMeshLeft={assets.bgMesh}
                    gameDetails={
                        <GameDetails 
                            heading={<Heading headingTitle="Bravo!" />}
                            gameText={
                                <GameText gameText={<>Time spent: <b className="bold">{timeSpent}</b> seconds</>} />
                            }
                            gameGrid={<GameGrid />}
                            startGameButton={<StartGameButton buttonText="Start again" />}
                        />
                        
                    }
                    bgMeshRight={assets.bgMesh}
                />
        </animated.div>  
    ); 
}

export default GameBravoPage;