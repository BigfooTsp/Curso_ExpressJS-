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
        "no-multi-spaces": 0
    }
};