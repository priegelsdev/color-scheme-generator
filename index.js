fetch('https://www.thecolorapi.com/id?hex=24B1E0')
    .then(res => res.json())
    .then(data => {
        const color = data
        console.log(data)
        document.querySelector('.color-pick').style.border = `1px solid #${color.hex.clean}`
    }) 


    console.log(document.querySelector('.color-pick'))