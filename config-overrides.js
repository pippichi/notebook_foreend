const path = require('path')
const {
  override,
  addWebpackAlias,
  addDecoratorsLegacy,
  fixBabelImports,
  addLessLoader,
} = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
   fixBabelImports('import', {
       libraryName: 'antd',
       libraryDirectory: 'es',
       style: true
   }),
   addLessLoader({
       lessOptions: {
           javascriptEnabled: true,
           modifyVars: { '@primary-color': 'green' }
       }
   })
)