const result = document.getElementById('result');
const increment = document.getElementById('inc');
const decrement = document.getElementById('dec');
const custom = document.getElementById('cus-inc-dec');
const res = document.getElementById('r');




    increment.addEventListener('click', (e)=>{
        let current = parseInt(result.value);
        let v = isNaN(current)? 1 : current + 1;
        result.value = v;
    }); 
    
    decrement.addEventListener('click', (e)=>{
        let current = parseInt(result.value);
        let v = isNaN(current)? -1 : current - 1;
        result.value = v;
    });
    
    


