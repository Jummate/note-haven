export default {
  '*.{js,jsx,ts,tsx,json,md,yml,yaml}': ['prettier --write'],

  '*.{js,jsx,ts,tsx}': ['eslint --fix'],

  '*.{js,jsx,ts,tsx,json,env}': ['npm run ggscan'],

  //   'src/**/*.{js,jsx,ts,tsx}': ['npm test'],
};
