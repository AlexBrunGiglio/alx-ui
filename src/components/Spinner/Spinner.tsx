import React from "react";
import './Spinner.css';

export interface SpinnerProps {
    show: boolean;
    size?: 's' | 'm';
}

const Spinner = (props: SpinnerProps) => {
    if (props.show)
        return <div className={'spinner ' + (props.size ?? 'm')}>
            <div></div><div></div><div></div><div></div>
        </div>;

    return null;
};

export default Spinner;