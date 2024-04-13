function func1() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    document.getElementById('for_func1').innerHTML = `${hours}:${minutes}`;
}
setInterval(func1, 1000); 
