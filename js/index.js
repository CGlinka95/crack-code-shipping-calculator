 console.log('crack code shipping calculator')

 const inputWeight = document.querySelector('.control #weight')
 const calcButton = document.querySelector('.control label')
 const outputDisplay = document.querySelector('.display')
 console.log(inputWeight, calcButton, outputDisplay)

 calcButton.addEventListener('click', function(e){
     const shippingWeight = inputWeight.value
     outputDisplay.textContent = shippingWeight;
     console.log('This is the code inside the button')
 })