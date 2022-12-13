/* istanbul ignore file */

const devtool = process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map';

export default devtool;
