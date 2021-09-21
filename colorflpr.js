
let buttonEl=document.getElementById("button-el");
let colorEl=document.getElementById("color-el");
let newButton=document.getElementById("newbutton");
let colors=["green","yellow","white","black","indigo","red","blue","violet","grey","orange","pink"];

buttonEl.addEventListener("click",function()
{
    
    let randomNum= Math.floor(Math.random()* colors.length);
    document.body.style.backgroundColor=colors[randomNum];
    buttonEl.style.backgroundColor=colors[randomNum];
    colorEl.textContent=colors[randomNum];
    colorEl.style.color=colors[randomNum];
})
newButton.addEventListener("click",function()
{
      
    let x = document.getElementById("newColor");
    xclr=x.value;
    document.body.style.backgroundColor=xclr;
    buttonEl.style.backgroundColor=xclr;
    colorEl.textContent=xclr;
    colorEl.style.color=xclr;
    x.value="  "
    colors.push(xclr);
})

