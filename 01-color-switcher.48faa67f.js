const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),o={timerId:null,isActive:!1,colorStart(){this.isActive=!0,this.isActive&&(t.disabled="true",e.removeAttribute("disabled")),this.timerId=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)},colorStop(){this.isActive=!1,clearInterval(this.timerId),t.removeAttribute("disabled"),e.disabled="true"}};t.addEventListener("click",(()=>{o.colorStart()})),e.addEventListener("click",(()=>{o.colorStop()}));
//# sourceMappingURL=01-color-switcher.48faa67f.js.map