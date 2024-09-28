module.exports = {
  parser: '@typescript-eslint/parser',   // Define o parser para TypeScript
  extends: [
    'eslint:recommended',                  // Regras recomendadas do ESLint
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    'prettier/@typescript-eslint',        // Desativa regras do ESLint que conflitam com Prettier
    'plugin:prettier/recommended'         // Adiciona Prettier como plugin
  ],
  rules: {
    // Adicione regras personalizadas aqui
    'no-unused-vars': 'off',              // Desativa a regra padrão de variáveis não utilizadas
    '@typescript-eslint/no-unused-vars': ['error'], // Usa a regra do TypeScript
  },
  env: {
    node: true,                           // Ambiente Node.js
    es6: true                              // Suporte a ES6
  }
};