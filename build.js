const StyleDictionary = require('style-dictionary').extend('config.json')

StyleDictionary.registerTransform({
    name: 'time/seconds',
    type: 'value',
    matcher: function(prop) {
      return prop.attributes.category === 'time';
    },
    transformer: function(prop) {
      return (parseInt(prop.original.value) / 1000).toString() + 's';
    }
  });

  StyleDictionary.registerTransform({
    name: 'size/grid',
    type: 'value',
    matcher: token => {
      return token.attributes.category === 'grid'
    },
    transformer: token => {
      console.log('custom transform for token: ', token)
      return Object.values(token.value).join(' grid ');
    }
  })

  StyleDictionary.registerTransformGroup({
    name: 'custom/scss',
    transforms: StyleDictionary.transformGroup['less'].concat([
      'size/grid'
    ])
  })
  
  StyleDictionary.buildAllPlatforms();