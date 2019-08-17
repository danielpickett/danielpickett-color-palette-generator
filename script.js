function handleSubmit(e) {
  e.preventDefault()
  var startColor = document.querySelector('[name=startColor]').value
  var endColor = document.querySelector('[name=endColor]').value
  var stepCount = document.querySelector('[name=stepCount]').value
  
  var chromaResult = chroma.scale([startColor,endColor])
  .mode('hsl').colors(stepCount)

  var output = chromaResult.map(result => {
    console.log(result)
    return `<div style="background-color: ${result}; height: 1em"></div>`
  }).join('')

  document.querySelector('.swatches-output').innerHTML = output

  console.log(chromaResult)
  
}