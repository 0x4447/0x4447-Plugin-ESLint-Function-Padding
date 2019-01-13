//
//  Requirements
//
let rule = require("../../../lib/rules/function-padding");
let rule_tester = require("eslint").RuleTester;

//
//  Load RuleTester
//
let rule_tester = new rule_tester();

//
//  Run first test.
//
rule_tester.run("function-padding", rule, {

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
