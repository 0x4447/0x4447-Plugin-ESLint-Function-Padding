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
            // fill in your schema
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

            // Get comment node from parent node
            const comments = node.comments;


            // If the total amount of comments is not divisible evenly by 3 then error
            if (comments.length % 3 !== 0) {
              context.report({
                node: node,
                message: `Activated ${comments.length % 3}`
              });
            } else {
              return;
            }
          }
        };
    }
};
