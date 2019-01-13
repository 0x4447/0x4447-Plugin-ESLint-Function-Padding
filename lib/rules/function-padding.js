/**
 * @fileoverview Padding for function blocks
 * @author Kevin
 */
 "use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: "Padding for function blocks",
			category: "Fill me in",
			recommended: false
		},
		fixable: null,  // or "code" or "whitespace".
		schema: []		// Fill your Schema.
	},
	create: function(context) {

		return {

			FunctionExpression: function(node) {

				let valid_types = ["FunctionExpression", "FunctionDeclaration"];

				let node_type = node.type;

				if(!valid_types.includes(node_type))
				{
					return;
				}

				let node_start = node.loc.start.line;
				let node_end = node.loc.end.line;
				let block_statement = node.body.body;

				try
				{
					if(block_statement[0].loc.start.line === node_start + 1)
					{
						context.report({
							node: node.body.body[0],
							message: "Padding after opening block statement"
						});
					}
					else if(block_statement[block_statement.length - 1].loc.start.line === node_end - 1)
					{
						context.report({
							node: node.body.body[0],
							message: "Padding before closing block statement"
						});
					}
				}
				catch(error) {

				}
			}
		};
	}

};
