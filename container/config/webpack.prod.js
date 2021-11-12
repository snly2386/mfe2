const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      shared: dependencies,
      remotes: {
        marketingService: `marketingApp@${domain}/marketing/remoteEntry,js`
      }
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)
