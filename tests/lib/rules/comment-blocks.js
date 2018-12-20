/**
 * @fileoverview Comment blocks must be 3 lines long
 * @author Kevin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/comment-blocks"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("comment-blocks", rule, {

    valid: ["// 1. Hello\n // 2. Hello\n // 3. Hello"],

    invalid: [
        {
            code: "// 1 line comment",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
