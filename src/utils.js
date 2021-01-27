module.exports = {
  get isProd() {
    const { NODE_ENV } = process.env;
    return NODE_ENV === 'production' || NODE_ENV === 'prod';
  },
  get isDev() {
    return !this.isProd; // any values indicate dev
  }
};
