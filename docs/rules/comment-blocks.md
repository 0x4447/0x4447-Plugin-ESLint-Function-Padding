# Comment blocks must be 3 lines long (comment-blocks)

Please describe the origin of the rule here.

## Rule Details

This rule aims to give the the end user a way to keep all comments looking similar and not over complicated.

Examples of **incorrect** code for this rule:
If the amount of comments per comment block is set to `3`
```js
//
//
// This will fail
// This comment block has 4 lines and the rule states 3
```

Examples of **correct** code for this rule:
If the amount of comments per comment block is set to `3`
```js
//
// This will Pass
//
```

### Options

`"0x4447": ["error", "<numbers-of-lines>"`

## When Not To Use It

If you do not care how many lines a comment block uses then this rule is not necessary to use.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
