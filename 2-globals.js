//console.log(__dirname);
//console.log(__dirname);
let date;
setInterval(()=>{
    date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
},1000);