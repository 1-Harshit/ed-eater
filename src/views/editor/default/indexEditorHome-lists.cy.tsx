import React from "react";
import EditorHome from "./index";
import { wordCount } from "./variables/editorDefaultData";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../../theme/theme";

beforeEach(() => {
	cy.viewport(1920, 1080);
	// see: https://on.cypress.io/mounting-react
	cy.mount(
		<ChakraProvider theme={theme}>
			<EditorHome />
		</ChakraProvider>,
	);

	// focus on editor-area
	cy.get("#editor-main").click();

	// count number words in defaultData whihc is jsx element rendering
	cy.get("#word-count").should("have.text", wordCount);

	// clear editor
	// click on cy.get('#menu-button-24')
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

describe("<EditorHome Ordered-List />", () => {
	it("renders", () => {
		// ordered(numbered) list
		cy.get("#ordered-list-button").click();
		// the html formatting must be <ol> followed by <li> and Ed Eater Testing
		cy.get("#editor-main").should("contain.html", '<ol><li>Ed Eater Testing</li></ol>')
	});
});

describe("<EditorHome Unordered-List />", () => {
	it("renders", () => {
		// unordered(bullets) list
		cy.get("#unordered-list-button").click();
		// the html formatting must be <ul> followed by <li> and Ed Eater Testing
		cy.get("#editor-main").should("contain.html", '<ul><li>Ed Eater Testing</li></ul>')
	});
});