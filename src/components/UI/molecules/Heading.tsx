import assets from '../../../common/assets';
import GameTitle from '../atoms/GameTitle';

type HeadingTitleProps = {
    headingTitle: string
}

function Heading({headingTitle}: HeadingTitleProps): JSX.Element {
    return (
        <div className="heading">
            <div>
                <img src={assets.character} alt="&#x1F975;" />
            </div>
            <div>
                <GameTitle gameTitle={headingTitle}/>
            </div>
        </div>    
    ); 
}

export default Heading;