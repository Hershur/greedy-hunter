import { ReactChild } from "react";

interface IBoxProps {
    // id: string,
    children?: ReactChild,
    // handleClick(id: string): void
}
function Box({ children }: IBoxProps):JSX.Element{
    return (
        <div>{children}</div>
    );
}

export default Box;