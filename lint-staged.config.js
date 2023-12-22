/** @type {import('lint-staged').Config} */
module.exports = {
  '**/*.{js,jsx,ts,tsx,vue}': 'eslint --fix',
  '**/*.{html,json}': 'prettier --write',
}
