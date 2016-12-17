
function extend(target) {
  const sources = [].slice.call(arguments, 1);
  sources.forEach(source => {
    for (const prop in source) {
      target[prop] = source[prop];
    }
  });
  return target;
}
const DEFAULT_ENV = {
  APP_ENV: '"local"',
  API_URL: '"http://management-api.daovoice.co/v1"'
};

const CURRENT_ENV = extend({}, DEFAULT_ENV);

Object.keys(CURRENT_ENV).forEach(k => {
  if (process.env[k]) {
    CURRENT_ENV[k] = JSON.stringify(process.env[k]);
  }
});

module.exports = CURRENT_ENV;
