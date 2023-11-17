import React from "react";
import EditorHome from "../views/editor/index";
import { wordCount } from "../variables/editorPlaceholder";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";

beforeEach(() => {
	cy.viewport(1920, 1080);
	// see: https://on.cypress.io/mounting-react
	cy.mount(
		<ChakraProvider theme={theme}>
			<EditorHome />
		</ChakraProvider>,
	);

	// count number words in defaultData whihc is jsx element rendering
	cy.get("#word-count").should("have.text", wordCount);

	// clear editor
	cy.get("#menu-button-24").click();
	cy.get("#menu-list-24-menuitem-22 > .css-70qvj9 > .chakra-text").click();

	// editor should be empty
	cy.get("#editor-main").should("have.text", "");

	// add text to editor
	cy.get("#editor-main").type("Ed Eater Testing");

	// count number words in editor
	cy.get("#word-count").should("have.text", "3");

	// select text
	cy.get("#editor-main").type("{selectall}");
});

describe("<EditorHome Bold />", () => {
	it("renders", () => {
		// bold text
		cy.get("#bold-button").click();
		// check if text is bold by checking if it starts with <b> and ends with </b>
		cy.get("#editor-main").should("contain.html", "<b>Ed Eater Testing");
	});
});

describe("<EditorHome Italic />", () => {
	it("renders", () => {
		// italic text
		cy.get("#italic-button").click();
		// check if text is italic by checking if it starts with <i> and ends with </i>
		cy.get("#editor-main").should("contain.html", "<i>Ed Eater Testing");
	});
});

describe("<EditorHome Underline />", () => {
	it("renders", () => {
		// underline text
		cy.get("#underline-button").click();
		// check if text is underline by checking if it starts with <u> and ends with </u>
		cy.get("#editor-main").should("contain.html", "<u>Ed Eater Testing");
	});
});
