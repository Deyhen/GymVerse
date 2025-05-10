module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/, // only for TS/JS files
        use: ['@svgr/webpack'],
      },
      // optionally:
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource',
        exclude: /\.svg$/i, // <- make sure SVGs are excluded here
      },
    ],
  },
};
