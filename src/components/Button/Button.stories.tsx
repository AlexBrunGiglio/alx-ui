import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";


export default {
    title: "Buttons",
    component: Button,
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FlatButton = Template.bind({});
FlatButton.args = {
    label: "Flat",
};