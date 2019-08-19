import pickrConfig from "./pickrConfig.js";

// var output = chromaResult.map(result => {
//   console.log(result)
//   return `<div style="background-color: ${result}; height: 1em"></div>`
// }).join('')

let colorStart = '#F5F8FA';
let colorEnd = '#152633';

let colorScale;

const pickrStart = Pickr.create({el: '.color-start', default: colorStart, ...pickrConfig});
const pickrEnd = Pickr.create({el: '.color-end', default: colorEnd, ...pickrConfig});

pickrStart.on('change', (color) => {
  colorStart = color.toHEXA().toString();
  makeScale(colorStart, colorEnd)
})

pickrEnd.on('change', (color) => {
  colorEnd = color.toHEXA().toString();
  makeScale(colorStart, colorEnd)
})

makeScale(colorStart, colorEnd)

function makeScale(start, end) {
  let scale = chroma.scale([start,end]).correctLightness().mode('lch').colors(20)
  renderScale(scale)
}

function renderScale(scale){
  var output = scale.map(result => {
    return `<div style="background-color: ${result}; height: 2em"></div>`
  }).join('')
  document.querySelector('.swatches-output').innerHTML = output;
}