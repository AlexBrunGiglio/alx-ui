import React from "react";
import { render } from "@testing-library/react";

import Nav from "./Nav";

describe("Button", () => {
    test("renders the Button component", () => {
        render(<Nav title='NavTitle' links={[
            {
                label: 'Link1',
                onClick: () => { },
            },
            {
                label: 'Link2',
                onClick: () => { },
            },
            {
                label: 'Link3',
                onClick: () => { },
            },
        ]} showMenu={true} menuLabel="Menu" />);
    });
});