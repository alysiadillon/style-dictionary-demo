module.exports = {
    type: 'value',
    matcher: function(prop) {
      return prop.attributes.category === 'time';
    },
    transformer: function(prop) {
      return (parseInt(prop.original.value) / 1000).toString() + 's';
    }
}