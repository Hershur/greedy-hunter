import GameStartTemplate from "../templates/GameStartTemplate";
import assets from '../../common/assets';
import GameDetails from "../UI/organisms/GameDetails";
import Heading from "../UI/molecules/Heading";
import GameText from "../UI/atoms/GameText";
import GameGrid from "../UI/molecules/GameGrid";
import StartGameButton from "../UI/atoms/StartGameButton";
import { useSpring, animated } from "react-spring";

function GameStartPage(): JSX.Element {
    const props = useSpring({ to: { opacity: 1, marginTop: 0 }, from: { opacity: 0, marginTop: -500 } })
    return (
        <animated.div style={props} className="container">
            <GameStartTemplate 
                bgMeshLeft={assets.bgMesh}
                gameDetails={
                    <GameDetails 
                        heading={<Heading headingTitle="Greedy Hunter" />}
                        gameText={
                            <GameText gameText="The aim is to eat all the food in record time" />
                        }
                        gameText2={
                            <GameText gameText="Configure your game grid below &#x1F447;" />
                        }
                        gameGrid={<GameGrid />}
                        startGameButton={<StartGameButton buttonText="Start game" />}
                    />
                    
                }
                bgMeshRight={assets.bgMesh}
            />
        </animated.div>  
    ); 
}

export default GameStartPage;

