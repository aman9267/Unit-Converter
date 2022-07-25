var feet = 
document.getElementById('feet');

var inch = 
    document.getElementById('inch');


feet.addEventListener('input', function(){

    let f = this.value;
    
    let i = f*12;
    // console.log('change');

    inch.value = i;
});