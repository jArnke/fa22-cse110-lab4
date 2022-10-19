printDate = function(){
    let d = new Date();
    console.log(d.toLocaleTimeString());
};
setInterval(printDate, 1000);
