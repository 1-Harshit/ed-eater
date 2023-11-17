import React from "react";
import EditorHome from "../views/editor/index";
import { wordCount } from "../variables/editorPlaceholder";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";

describe("<EditorHome />", () => {
	it("renders", () => {
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

		// word count should be 0
		cy.get("#word-count").should("have.text", 0);

		// editor should be empty
		cy.get("#editor-main").should("have.text", "");

		// add text to editor
		cy.get("#editor-main").type("Ed Eater Testing");

		// count number words in editor
		cy.get("#word-count").should("have.text", "3");
	});
});
