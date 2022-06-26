const StyleDictionary = require('style-dictionary')
const webConfig = require('./lib/web')
const baseConfig = require('./config.json')

const StyleDictionaryExtended = StyleDictionary.extend({
  ...baseConfig,
  ...webConfig
})


StyleDictionaryExtended.buildAllPlatforms();
