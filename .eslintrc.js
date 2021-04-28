module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    /* 0 = off, 1 = warn, 2 = error */
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: [0], //语句强制分号结尾
    "no-mixed-spaces-and-tabs": [0], //禁止混用tab和空格
    "no-trailing-spaces": [0], //不允许在行尾添加尾随空白
    "comma-spacing": [0], //逗号前后的空格
    quotes: [0], //引号类型 `` "" ''
    "func-names": 0, //函数表达式必须有名字
    "func-style": [0, "declaration"], //函数风格，规定只能使用函数声明/函数表达式
    "comma-style": [2, "last"], //控制逗号在行尾出现还是在行首出现 (默认行尾)
    /**
     * 数组和对象键值对最后一个逗号,
     * never参数：不能带末尾的逗号,
     * always参数：必须带末尾的逗号,
     * always-multiline：多行模式必须带逗号，单行模式不能带逗号
     */
    "comma-dangle": [0, "always-multiline"],
    "no-multiple-empty-lines": [2, { max: 2 }], //空行最多不能超过2行
    "no-irregular-whitespace": 2, //不规则空格
    "space-before-function-paren": 0, //函数名称或function关键字与开始参数之间允许有空格
    "spaced-comment": 0, //注释内前后强制间距一致性
    // "prettier/prettier": "off",
  }
}
