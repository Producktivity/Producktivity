/** @type {import('lint-staged').Config} */
export default {
  '**/*.{js,jsx,ts,tsx,vue}': 'eslint --fix',
  '**/*.{html,json}': 'prettier --write',
}
