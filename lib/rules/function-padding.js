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
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
      return {
        FunctionExpression: function(node) {
          const validTypes = ["FunctionExpression", "FunctionDeclaration"];
          const nodeType = node.type;
          if (!validTypes.includes(nodeType)) {
            return;
          }
          const nodeStart = node.loc.start.line;
          const nodeEnd = node.loc.end.line;
          const blockStatement = node.body.body;
          try{
            if (blockStatement[0].loc.start.line === nodeStart + 1) {
              context.report({
                node: node.body.body[0],
                message: "Padding after opening block statement"
              });
            } else if (
              blockStatement[blockStatement.length - 1].loc.start.line ===
              nodeEnd - 1
            ) {
              context.report({
                node: node.body.body[0],
                message: "Padding before closing block statement"
              });
            }
          }catch(err){

          }
        }
      };
}

};
