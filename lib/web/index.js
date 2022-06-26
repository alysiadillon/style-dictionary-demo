const StyleDictionary = require('style-dictionary')

module.exports = {
  transform: {
    'size/px': require('./sizePixel'),
    'web/time': require('./webTime'),
    'web/font': require('./webFont'),
    'web/shadow': require('./webShadows'),
    'web/grid': require('./webGrid'),
  },
  transformGroup: {
    'custom/scss': StyleDictionary.transformGroup.css.concat([
      'web/font',
        'web/shadow',
        'web/grid',
        'web/time',
    ])
  },
  format: {},
  action: {}
}
