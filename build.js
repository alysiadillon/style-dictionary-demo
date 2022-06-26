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
      return Object.values(token.value).join(' grid ');
    }
  })

  StyleDictionary.registerTransform({
    name: 'effect/shadow',
    type: 'value',
    matcher: token => {
      return token.type === 'custom-shadow'
    },
    transformer: token => {
      return `${token.value.offsetX}px ${token.value.offsetY}px ${token.value.radius}px ${token.value.color}`;
    }
  })
  StyleDictionary.registerTransform({
    name: 'font',
    type: 'value',
    matcher: function (token) {
      return token.type === 'custom-fontStyle'
    },
    transformer: function ({ value: font }, { options }) {
      // font: font-style font-variant font-weight font-size/line-height font-family;
      const notDefault = (value, defaultValue) => (value !== defaultValue) ? value : ''
      const fontFamily = ({ fontFamily }, { fontFamilies } = {}) => fontFamilies && fontFamilies[fontFamily] ? fontFamilies[fontFamily] : fontFamily

      return `${notDefault(font.fontStretch, 'normal')} ${notDefault(font.fontStyle, 'normal')} ${font.fontWeight} ${font.fontSize}/${font.lineHeight} ${fontFamily(font, options)}`.trim()
    }
  })

  StyleDictionary.registerTransformGroup({
    name: 'custom/scss',
    transforms: StyleDictionary.transformGroup['less'].concat([
      'size/grid',
      'effect/shadow',
      'font'
    ])
  })
  
  StyleDictionary.buildAllPlatforms();
