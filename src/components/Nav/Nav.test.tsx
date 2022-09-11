import React from "react";
import { render } from "@testing-library/react";

import Nav from "./Nav";

describe("Button", () => {
    test("renders the Button component", () => {
        render(<Nav title="Title" />);
    });
});