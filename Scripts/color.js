const colors = document.getElementById('colors');

let i;
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListenr('click', changecolor);
}
function changecolor(value){
    //document.documentElement.style.setProperty('--color', fondo);
    //document.documentElement.style.setProperty('--texto', texto);
    if(value==1){
        document.querySelectorAll('h1').forEach(e => e.style.color = "#ffffff");
        document.querySelectorAll('h2').forEach(e => e.style.color = "#ffffff");
        document.querySelectorAll('h3').forEach(e => e.style.color = "#ffffff");
        document.querySelectorAll('h4').forEach(e => e.style.color = "#ffffff");
        document.querySelectorAll('h5').forEach(e => e.style.color = "#ffffff");
        document.querySelectorAll('h6').forEach(e => e.style.color = "#ffffff");
        document.querySelectorAll('p').forEach(e => e.style.color = "#ffffff");
        document.querySelectorAll('a').forEach(e => e.style.color = "#ffffff");
        document.querySelectorAll('div').forEach(e => e.style.backgroundColor = "#000000");
        document.querySelectorAll('section').forEach(e => e.style.backgroundColor = "#000000");
        document.querySelectorAll('footer').forEach(e => e.style.backgroundColor = "#000000");
        document.querySelectorAll('body').forEach(e => e.style.backgroundColor = "#000000");
    }
    if(value==2){
        document.querySelectorAll('h1').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('h2').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('h3').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('h4').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('h5').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('h6').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('p').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('a').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('div').forEach(e => e.style.backgroundColor = "#000000");
        document.querySelectorAll('section').forEach(e => e.style.backgroundColor = "#000000");
        document.querySelectorAll('footer').forEach(e => e.style.backgroundColor = "#000000");
        document.querySelectorAll('body').forEach(e => e.style.backgroundColor = "#000000");
    }
    if(value==4){
        document.querySelectorAll('h1').forEach(e => e.style.color = "#67BFA6");
        document.querySelectorAll('h2').forEach(e => e.style.color = "#67BFA6");
        document.querySelectorAll('h3').forEach(e => e.style.color = "#67BFA6");
        document.querySelectorAll('h4').forEach(e => e.style.color = "#67BFA6");
        document.querySelectorAll('h5').forEach(e => e.style.color = "#67BFA6");
        document.querySelectorAll('h6').forEach(e => e.style.color = "#67BFA6");
        document.querySelectorAll('p').forEach(e => e.style.color = "#67BFA6");
        document.querySelectorAll('a').forEach(e => e.style.color = "#67BFA6");
        document.querySelectorAll('div').forEach(e => e.style.backgroundColor = "#000000");
        document.querySelectorAll('section').forEach(e => e.style.backgroundColor = "#000000");
        document.querySelectorAll('footer').forEach(e => e.style.backgroundColor = "#000000");
        document.querySelectorAll('body').forEach(e => e.style.backgroundColor = "#000000");
    }
    if(value==3){
        document.querySelectorAll('h1').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('h2').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('h3').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('h4').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('h5').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('h6').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('p').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('a').forEach(e => e.style.color = "#F4CE5C");
        document.querySelectorAll('div').forEach(e => e.style.backgroundColor = "#76C8CF");
        document.querySelectorAll('section').forEach(e => e.style.backgroundColor = "#76C8CF");
        document.querySelectorAll('footer').forEach(e => e.style.backgroundColor = "#76C8CF");
        document.querySelectorAll('body').forEach(e => e.style.backgroundColor = "#76C8CF");
    }
    
    switch (value) {
        case 1:
            
            break;
    
        case 2:

            break;
        case 3:

            break;
    }
}