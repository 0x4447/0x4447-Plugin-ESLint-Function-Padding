# Padding for functions (function-padding)

After over a decade of coding and working with other developers, we realized that the issue with the so called "hard" part of coding is not programming itself, it's the mental strain that we put on ourself by making code look cooler, while sacrificing clarity and making our brain perform unnecessary extra work, energy that could be used to find out the problem in the code.

## Rule Details

This rule aims to increase readability of code, by physically having a visual separation from the code above and bellow, thus minimizing the amount of work the brain has to perform by mentally splitting the lines.

Examples of **incorrect** code for this rule:

```js

bad_function(function() {
  let no_padding = "This function has no padding";
})

```

Examples of **correct** code for this rule:

```js

good_function(function() {

  let has_padding = "This function has padding";

})

```

## When Not To Use It

If you like going over the struggle of mentally splitting the line to understand the code, then so be it :)

## Further Reading

This rule is aimed at nice looking function statements, adding padding to the first line of a functions block statement, and the last line makes it easier to reason about.
