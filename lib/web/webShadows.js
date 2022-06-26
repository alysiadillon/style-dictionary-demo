module.exports = {
  type: 'value',
  matcher: token => {
    return token.type === 'custom-shadow'
  },
  transformer: token => {
    return `${token.value.offsetX}px ${token.value.offsetY}px ${token.value.radius}px ${token.value.color}`;
  }
}
