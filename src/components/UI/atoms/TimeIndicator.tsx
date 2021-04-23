function TimeIndicator(): JSX.Element{
    return (
        <div className="indicator-frame__div" id="heart-box">
            <div id="heart">
                <div id="ellipse"></div> <div id="ellipse2"></div>
            </div>
            <div id="indicator-box">
                <div id="indicator"></div>
            </div>
        </div>
    );
}

export default TimeIndicator;