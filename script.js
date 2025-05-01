const result = document.getElementById('result');
const increment = document.getElementById('inc');
const decrement = document.getElementById('dec');
const custom = document.getElementById('cus-inc-dec');
const res = document.getElementById('r');




    increment.addEventListener('click', (e)=>{
        let current = parseInt(result.value);
        if(!isNaN(parseInt(custom.value))){
            let cusval = parseInt(custom.value);
            let v = isNaN(custom.value)? cusval : current += cusval;
            result.value = v;
        }else{
            let v = isNaN(current)? 1 : current + 1;
            result.value = v;
        }
        
    }); 
    
    decrement.addEventListener('click', (e)=>{
        let current = parseInt(result.value);
        if(!isNaN(parseInt(custom.value))){
            let cusval = parseInt(custom.value);
            let v = isNaN(custom.value)? cusval : current -= cusval;
            result.value = v;
        }else{
            let v = isNaN(current)? -1 : current - 1;
            result.value = v;
        }
        
    }); 

    res.addEventListener('click',(e)=>{
        result.value = 0;
    });
    
    


