# eslint-plugin-0x4447

Custom Eslint rules for 0x4447 LLC

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-0x4447`:

```
$ npm install eslint-plugin-0x4447 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-0x4447` globally.

## Usage

Add `0x4447` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "0x4447"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "0x4447/function-padding": "error"
    }
}
```
## Current Rules

`function-padding` Require function to have padding at the top and bottom of the blocks, [Documentation](https://github.com/0x4447/0x4447-Plugin-ESLint-Function-Padding/blob/master/docs/rules/function-padding.md)
