const result = document.getElementById('result');
const increment = document.getElementById('inc');
const decrement = document.getElementById('dec');
const custom = document.getElementById('cus-inc-dec');
const res = document.getElementById('r');




    increment.addEventListener('click', (e)=>{
        result.value= parseint(result.value) +1 ;
    });  


