import React from "react";
import './Button.css';

export interface ButtonProps {
    label: string;
    onClick(): any;
    appearance: 'flat' | 'outline';
    color: 'primary' | 'secondary' | 'warning' | 'success' | 'danger';
}

const Button = (props: ButtonProps) => {
    if (props.appearance === 'flat')
        return <button className={'flat-button ' + props.color} onClick={props.onClick}>{props.label}</button>;
    if (props.appearance === 'outline')
        return <button className={'outline-button ' + props.color} onClick={props.onClick}>{props.label}</button>;

    return <button className='flat-button' onClick={props.onClick}>{props.label}</button>;
};

export default Button;