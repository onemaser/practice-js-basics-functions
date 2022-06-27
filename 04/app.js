function runTimer() {
    console.log('run')

    let interv = 0; 
    const idInterval = setInterval(function(){
        const time = (new Date()).toLocaleTimeString();
    console.log(time);

    interv++;
    if (interv === 5){
    clearInterval(idInterval)}
    
    }, 1000)
    

}

runTimer ();