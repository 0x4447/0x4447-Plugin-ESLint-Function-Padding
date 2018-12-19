# Padding for functions (function-padding)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

bad_function(function(){
  cont noPadding = "This function has no padding"
})

```

Examples of **correct** code for this rule:

```js

good_function(function(){

  cont hasPadding = "This function has padding"

})

```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Do not use this rule if you do not care if a function has padding or not.

## Further Reading

This rule is aimed at nice looking function statements, adding padding to the first line of a functions block statement, and the last line makes it look nicer.
