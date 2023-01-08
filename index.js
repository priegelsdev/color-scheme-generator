/* make API calls to GET colors and color schemes with 2 endpoints /id and /scheme
   API: https://www.thecolorapi.com/
   
   fill select menu with available color schemes
   /scheme{?hex,rgb,hsl,cmyk,format,mode,count}

   fill select menu with color schemes (Choices: monochrome monochrome-dark monochrome-light analogic complement analogic-complement triad quad)
   */


fetch('https://www.thecolorapi.com/id?hex=24B1E0')
    .then(res => res.json())
    .then(data => {
        const color = data
        console.log(data)
        document.querySelector('.color-pick').style.backgroundColor = `#${color.hex.clean}`
    }) 


    console.log(document.querySelector('.color-pick'))


