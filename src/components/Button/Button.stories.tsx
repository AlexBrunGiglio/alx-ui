import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";


export default {
    title: "Buttons",
    component: Button,
} as ComponentMeta<typeof Button>;


export const FlatButton: ComponentStory<typeof Button> = () => (
    <div>
        <Button label="Button" appearance='flat' color='primary' onClick={() => { }} />
        <Button label="Button" appearance='flat' color='secondary' onClick={() => { }} />
        <Button label="Button" appearance='flat' color='success' onClick={() => { }} />
        <Button label="Button" appearance='flat' color='warning' onClick={() => { }} />
        <Button label="Button" appearance='flat' color='danger' onClick={() => { }} />
    </div>
);

export const OutlineButton: ComponentStory<typeof Button> = () => (
    <div>
        <Button label="Button" appearance='outline' color='primary' onClick={() => { }} />
        <Button label="Button" appearance='outline' color='secondary' onClick={() => { }} />
        <Button label="Button" appearance='outline' color='success' onClick={() => { }} />
        <Button label="Button" appearance='outline' color='warning' onClick={() => { }} />
        <Button label="Button" appearance='outline' color='danger' onClick={() => { }} />
    </div>
);
