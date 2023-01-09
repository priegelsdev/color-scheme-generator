/* make API calls to GET colors and color schemes with 2 endpoints /id and /scheme
   API: https://www.thecolorapi.com/
   
   fill select menu with available color schemes
   /scheme{?hex,rgb,hsl,cmyk,format,mode,count}

   fill select menu with color schemes (Choices: monochrome monochrome-dark monochrome-light analogic complement analogic-complement triad quad)
   */


/* fetch('https://www.thecolorapi.com/id?hex=24B1E0')
    .then(res => res.json())
    .then(data => {
        const color = data
        console.log(data)
        document.querySelector('.color-pick').style.backgroundColor = `#${color.hex.clean}`
    }) 

    console.log(document.querySelector('.color-pick')) */

// initialization of variables to be used

let hexValue;
let mode;
let jsonData;

  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      getUri()
    }

  })

// function to retrieve hex code from input and save to variable for later param use


// function to send color pick to API and retrieve color scheme

function getJsonScheme(hex, mode) {
  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => { 
      jsonData = data;
      render();
    })
}

// function to render out hex codes to colors

function render() {
  const colorArr = jsonData.colors;
  let colorsHtml = document.querySelector('.colors-container')
  colorsHtml.innerHTML = ''
  let colorsValHtml = document.querySelector('.colors-val-container')
  colorsValHtml.innerHTML = ''
  
  colorArr.forEach(color => { 
    const hex = color.hex.value  
    
    colorsHtml.innerHTML 
      += `<div class="color" style="background-color: ${hex}"></div>`
    colorsValHtml.innerHTML 
      += `<p class="color-value">${hex}</p>`
  })

}


// function to get to be rendered hex codes

function getUri() {
  hexValue = document.querySelector('input').value.substring(1);
  mode = document.querySelector('select').value;
  getJsonScheme(hexValue, mode);
}




