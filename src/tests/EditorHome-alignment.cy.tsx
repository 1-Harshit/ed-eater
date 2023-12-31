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
	cy.get("#menu-button-editor-area-menu").click();
	cy.get("#menu-list-editor-area-menu-menuitem-42 > .css-70qvj9 > .chakra-text").click();

	// editor should be empty
	cy.get("#editor-main").should("have.text", "");

	// add text to editor
	cy.get("#editor-main").type("Ed Eater Testing");

	// select text
	cy.get("#editor-main").type("{selectall}");
});

describe("<EditorHome Align-Left />", () => {
	it("renders", () => {
		// text align - left
		cy.get("#align-left-button").click();
		// the html formatting must be empty as text-align: left is default
		cy.get("#editor-main").should("contain.html", "Ed Eater Testing");
	});
});

describe("<EditorHome Align-Right />", () => {
	it("renders", () => {
		// text align - right
		cy.get("#align-right-button").click();
		// the html formatting must be text-align:right as set by the button
		cy.get("#editor-main").should(
			"contain.html",
			'<div style="text-align: right;">',
		);
	});
});

describe("<EditorHome Align-Left-After-Right />", () => {
	it("renders", () => {
		// text align -right
		cy.get("#align-right-button").click();
		// select all text
		cy.get("#editor-main").type("{selectall}");
		// text align - left
		cy.get("#align-left-button").click();
		// the html formatting must be empty as text-align:right is removed when
		cy.get("#editor-main").should("contain.html", "Ed Eater Testing");
	});
});

describe("<EditorHome Align-Center />", () => {
	it("renders", () => {
		// text align - right
		cy.get("#align-center-button").click();
		// the html formatting must be text-align:center as set by the button
		cy.get("#editor-main").should(
			"contain.html",
			'<div style="text-align: center;">',
		);
	});
});

describe("<EditorHome Align-Justify />", () => {
	it("renders", () => {
		// text align - right
		cy.get("#align-justify-button").click();
		// the html formatting must be text-align:justify as set by the button
		cy.get("#editor-main").should(
			"contain.html",
			'<div style="text-align: justify;">',
		);
	});
});
