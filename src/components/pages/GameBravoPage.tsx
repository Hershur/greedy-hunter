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
    const moves: number = useSelector<IStateProps, IStateProps["totalMoves"]>((state)=> state.totalMoves);
    const gridValue: number = useSelector<IStateProps, IStateProps["grid"]>((state)=> state.grid);

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
                            gameText2={
                                <GameText gameText={<>Moves: <b className="bold">{moves}/{Math.round((gridValue * gridValue)/2)}</b></>} />
                            }
                            gameText3={
                                <GameText gameText={<>Grid Size: <b className="bold">{gridValue}</b></>} />
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