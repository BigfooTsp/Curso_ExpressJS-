module.exports = {
    "extends": ["airbnb"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "rules": {
        "strict": 0,
        "linebreak-style": 0,
        "no-console": 0,
        "no-use-before-define": 0,
        "no-multi-spaces": 0,
        "import/newline-after-import": 0,
        "consistent-return": 0,
        "no-multi-spaces": 0,
        "no-trailing-spaces": 0,
        "no-multiple-empty-lines": 0,
        "no-tabs": 0,
        "global-require": 0,
        "padded-blocks": 0,
        "func-names": 0,
        "max-len": 0,
        "no-underscore-dangle": 0,
        "camelcase": 0,
        "prefer-const": 0,
    }
};