import React from "react";
import './Button.css';

export interface ButtonProps {
    label: string;
    onClick(): any;

    appearance: 'flat' | 'outline';
}

const FlatButton = (props: ButtonProps) => {
    if (props.appearance === 'flat')
        return <button className='flat-button' onClick={props.onClick}>{props.label}</button>;
    if (props.appearance === 'outline')
        return <button className='outline-button' onClick={props.onClick}>{props.label}</button>;
    else
        return <button className='flat-button' onClick={props.onClick}>{props.label}</button>;
};

export default FlatButton;