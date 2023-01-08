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

  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      console.log(document.querySelector('input').value)
      renderColors()
    } else if (e.target.tagName === 'INPUT') {
      getHex()
    }

  })

// function to retrieve hex code from input and save to variable for later param use
    
function getHex() {
  hexValue = document.querySelector('input').value.substring(1);
  
  return hexValue
}

// function to send color pick to API and retrieve color scheme

function getColorScheme(hex) {
  console.log('test')


  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => { 
      const colorArr = data.colors;
      colorArr.forEach(color => { 
        const hex = color.hex.value  
        document.querySelector('.colors-container').innerHTML
          += `<div class="color" style="background-color: ${hex}">a</div>`
      })
    })
}

// function to render retrieved color scheme 

function renderColors() {
  getHex();
  getColorScheme(hexValue);
}




