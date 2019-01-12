# 0x4447 Eslint Plugin for Function Padding

Custom Eslint rules for 0x4447 LLC.

# Installation

You'll first need to install [ESLint](http://eslint.org):

```
] npm i eslint --save-dev
```

Next, install the plug-in itself:

```
] npm install @0x4447/eslint-plugin-0x4447 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@0x4447/eslint-plugin-0x4447` globally.

# Current Rules

- **function-padding**: Require function to have padding at the top and bottom of the blocks, [Documentation](https://github.com/0x4447/0x4447-Plugin-ESLint-Function-Padding/blob/master/docs/rules/function-padding.md)
- **comment-blocks**: (Work in progress) Requires `n` amount of lines per comment block, `n` can be configured to whatever amount is given by the user

# Usage

Add `0x4447` to the plugins section of your `.eslintrc` configuration file.

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
        "0x4447/<rule-name>": "error"
    }
}
```

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out our [0x4447 GitHub account](https://github.com/0x4447), where we have additional resources that you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in build custom solutions on top of AWS. Find out more by following this link: https://0x4447.com or, say [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.).
