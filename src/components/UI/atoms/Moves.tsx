type MovesProps = {
    numberOfMoves: number,
    moveDescription: string
}

function Moves({numberOfMoves, moveDescription}: MovesProps): JSX.Element {
    return (
        <div className="moves-frame__div">
            {moveDescription}: &nbsp; <strong>{numberOfMoves}</strong>
        </div>
    );
}

export default Moves;