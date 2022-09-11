import React from "react";
import { render } from "@testing-library/react";

import FlatButton from "./Button";

describe("Button", () => {
    test("renders the Button component", () => {
        render(<FlatButton label="Hello world!" appearance='flat' onClick={() => { }} />);
    });
});