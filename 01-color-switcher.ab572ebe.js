const t={buttonStartEl:document.querySelector("button[data-start]"),buttonStopEl:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")};function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}let e=0;t.buttonStopEl.addEventListener("click",(function(o){clearInterval(e),t.buttonStopEl.disabled=!0,t.buttonStartEl.disabled=!1})),t.buttonStartEl.addEventListener("click",(function(){t.bodyEl.style.backgroundColor=o(),e=setInterval((()=>{t.bodyEl.style.backgroundColor=o()}),2e3),t.buttonStartEl.disabled=!0,t.buttonStopEl.disabled=!1}));
//# sourceMappingURL=01-color-switcher.ab572ebe.js.map
