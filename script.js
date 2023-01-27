const buttonsOne = document.querySelectorAll('.bone');
const buttonsTwo = document.querySelectorAll('.btwo');
const buttonsThree = document.querySelectorAll('.bthree');
const buttonsFour = document.querySelectorAll('.bfour');
const buttOne = document.querySelector('.bone');
const buttTwo = document.querySelector('.btwo');
const buttThree = document.querySelector('.bthree');
const buttFour = document.querySelector('.bfour');
const colorOne = document.querySelector('.cOne');
const colorTwo = document.querySelector('.cTwo');
const colorThree = document.querySelector('.cThree');
const colorFour = document.querySelector('.cFour');
const bandOne = document.querySelector('#b1');
const bandTwo = document.querySelector('#b2');
const bandThree = document.querySelector('#b3');
const bandFour = document.querySelector('#b4');
const valueContainer = document.querySelector('.resistorValue');
const calculateButton = document.querySelector('#calculate');

function buttClick(buttons,buttNumber,inputColor,bandColor){
    buttons.forEach(band=>{
        band.addEventListener('click',(e)=>{
            if(e.target == buttNumber.children[0]){
                inputColor.innerHTML = e.target.innerHTML;
                bandColor.style.background = `${e.target.innerHTML.toLowerCase()}`;
            }
            else if(e.target == buttNumber.children[1]){
                inputColor.innerHTML = e.target.innerHTML;
                bandColor.style.background = `${e.target.innerHTML.toLowerCase()}`;
            }
            else if(e.target == buttNumber.children[2]){
                inputColor.innerHTML = e.target.innerHTML;
                bandColor.style.background = `${e.target.innerHTML.toLowerCase()}`;
            }
            else if(e.target == buttNumber.children[3]){
                inputColor.innerHTML = e.target.innerHTML;
                bandColor.style.background = `${e.target.innerHTML.toLowerCase()}`;
            }
            else if(e.target == buttNumber.children[4]){
                inputColor.innerHTML = e.target.innerHTML;
                bandColor.style.background = `${e.target.innerHTML.toLowerCase()}`;
            }
            else if(e.target == buttNumber.children[5]){
                inputColor.innerHTML = e.target.innerHTML;
                bandColor.style.background = `${e.target.innerHTML.toLowerCase()}`;
            }
            else if(e.target == buttNumber.children[6]){
                inputColor.innerHTML = e.target.innerHTML;
                bandColor.style.background = `${e.target.innerHTML.toLowerCase()}`;
            }
            else if(e.target == buttNumber.children[7]){
                inputColor.innerHTML = e.target.innerHTML;
                bandColor.style.background = `${e.target.innerHTML.toLowerCase()}`;
            }
            else if(e.target == buttNumber.children[8]){
                inputColor.innerHTML = e.target.innerHTML;
                bandColor.style.background = `${e.target.innerHTML.toLowerCase()}`;
            }
        })
    })
}

buttClick(buttonsOne,buttOne,colorOne,bandOne);
buttClick(buttonsTwo,buttTwo,colorTwo,bandTwo);
buttClick(buttonsThree,buttThree,colorThree,bandThree);
buttClick(buttonsFour,buttFour,colorFour,bandFour);

calculateButton.addEventListener('click',Calculate)


function Calculate(){
    let returnValue = '';
    let toleranceValue = '';
    let resistorband = document.querySelector('.logo h2', '.logo h4');
    const ColorCodeValues = {
        'Black': 0,
        'Brown': 1,
        'Red': 2,
        'Orange': 3,
        'Yellow': 4,
        'Green': 5,
        'Blue': 6,
        'Violet': 7,
        'Gray': 8,
        'White': 9,
    }
    const toleranceValues = {
        'Brown': 1,
        'Red': 2,
        'Green': 0.5,
        'Blue': 0.25,
        'Violet': 0.1,
        'Gray': 0.05,
        'Gold': 5,
        'Silver': 10,
    }
    setTimeout(function() {
      resistorband.classList.add('bandAnimation');
    }, 2000);
    let color1 = colorOne.innerHTML;
    let color2 = colorTwo.innerHTML;
    let color3 = colorThree.innerHTML;
    let color4 = colorFour.innerHTML;
    if(color1!=='' & color2!=='' & color3!==''){
        if(color4){
            returnValue = (ColorCodeValues[color1] + ColorCodeValues[color2]) * Math.pow(10,ColorCodeValues[color3])
            toleranceValue = toleranceValues[color4];
            valueContainer.innerHTML = `<h2>Resistor value is ${returnValue}Ω with ±${toleranceValue}% tolerance</h2>`;
        }
        else{
            returnValue = (ColorCodeValues[color1] + ColorCodeValues[color2]) * Math.pow(10,ColorCodeValues[color3])
            valueContainer.innerHTML = `<h2>Resistor value is ${returnValue}Ω</h2>`;
        }
        console.log(returnValue);
    }
    else{
        alert('make sure at least the first 3 bands are specified')
    }
};