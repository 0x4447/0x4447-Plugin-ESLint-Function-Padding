/**
 * @fileoverview Padding for functions
 * @author Kevin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/function-padding"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("function-padding", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: ".",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
