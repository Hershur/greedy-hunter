import { useSpring, animated } from "react-spring";
import GamePlayTemplate from "../templates/GamePlayTemplate";
import GameFrame from "../UI/organisms/GameFrame";


function GamePlayPage(): JSX.Element {
    const props = useSpring({ to: { opacity: 1, marginLeft: 0 }, from: { opacity: 0, marginLeft: -1000 }, transition: "ease-in", duration: 1500 })

    return (
        <animated.div style={props} className="game-play">
            <GamePlayTemplate  gameFrame={<GameFrame />}  />
        </animated.div>
    ); 
}

export default GamePlayPage;