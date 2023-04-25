const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");

// This is known as callback hell.
setTimeout(()=> {
    heading1.textContent = "Yellow";
    heading1.style.color = "yellow";
    setTimeout(()=> {
        heading2.textContent = "Indigo";
        heading2.style.color = "indigo";
        setTimeout(()=> {
            heading3.textContent = "Blue";
            heading3.style.color = "blue";
            setTimeout(()=>{
                heading4.textContent = "Green";
                heading4.style.color = "green";
                console.log('Color would be changed by now');
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
console.log('Color not changed yet');
