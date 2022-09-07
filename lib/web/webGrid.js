module.exports = {
    type: 'value',
    matcher: token => {
      return token.attributes.category === 'grid'
    },
    transformer: token => {
      return Object.values(token.value).join(' grid ');
    }
}