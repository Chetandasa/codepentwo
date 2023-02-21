// Credit: @LukyVj
// https://twitter.com/LukyVj
// https://lucasbonomi.com






if (typeof window.CSS.registerProperty === 'function') {
  console.log('CSS.registerProperty supported 🎉')
  document.body.style.setProperty('--supported', 1);
  document.body.classList.add('registerProperty-supported')
} else {
  console.log('CSS.registerProperty not supported ❌')
  document.body.style.setProperty('--not-supported', 1);
  document.body.classList.add('registerProperty-not-supported')
}
