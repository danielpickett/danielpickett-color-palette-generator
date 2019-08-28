import pickrConfig from "./pickrConfig.js";

let colorStart = '#f8fafc';
let colorMiddle = '#d5dadd'
let colorEnd = '#152633';

let colorScale;

const pickrStart = Pickr.create({el: '.color-start', default: colorStart, ...pickrConfig});
const pickrMiddle = Pickr.create({el: '.color-middle', default: colorMiddle, ...pickrConfig});
const pickrEnd = Pickr.create({el: '.color-end', default: colorEnd, ...pickrConfig});

pickrStart.on('change', (color) => {
  colorStart = color.toHEXA().toString();
  makeScale(colorStart, colorMiddle, colorEnd)
})

pickrMiddle.on('change', (color) => {
  colorMiddle = color.toHEXA().toString();
  makeScale(colorStart, colorMiddle, colorEnd)
})

pickrEnd.on('change', (color) => {
  colorEnd = color.toHEXA().toString();
  makeScale(colorStart, colorMiddle, colorEnd)
})

makeScale(colorStart, colorMiddle, colorEnd)

function makeScale(start, middle, end) {
  let scale
  scale = chroma.scale([start, middle, end]).domain([0, 0.25, 1]).colors(20)
  scale = chroma.bezier([start, middle, end]).scale().domain([0, 0.25, 1]).colors(20)
  renderScale(scale)
}

function renderScale(scale){
  var output = scale.map((result, i) => {
    return `<div style="background-color: ${result};"><span>$greyScale${(i < 9 ? ('0' + (i+1)) : (i + 1))}: ${result};</span></div>`
  }).join('')
  document.querySelector('.swatches-output').innerHTML = output;
}