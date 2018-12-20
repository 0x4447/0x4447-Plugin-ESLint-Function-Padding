/**
 * @fileoverview Comment blocks must be 3 lines long
 * @author Kevin
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Comment blocks must be 3 lines long",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
          Program: function(node) {
            // Const to get all comments in program
            // Const to set the amount of acceptable lines per block
            const options = context.options;
            const comments = node.comments;

            // !TODO Add options to allow user to configure how many lines it should parse
            const maxLines = 3;

            // If modulus of the length is not 0 then that means there are not 3 lines per comment block
            if (comments.length % maxLines !== 0) {
              context.report({
                node: node,
                message: "All comment blocks must be 3 lines long"

              })

            } else {
              // Get the amount of 3 line comment blocks in the page
              let numberOfBlocks = 0;
              for (let i = 0;i < comments.length;  i++) {
                if (i % maxLines === 0) {
                  numberOfBlocks++;
                }
              }
              // Error out and show the user how many comment blocks there are in the program
              context.report({
                node: node,
                message: `Number Of Blocks: ${numberOfBlocks}`
              })

            }
          }
        };
    }
};
