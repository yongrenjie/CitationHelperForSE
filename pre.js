/* global chse */
// global object for storing info
chse.window.chse = {};
chse.LS_KEY = "cachedEntries";
chse.J_KEY = "journalList";

window.addEventListener("load", function init() {
	var styleEl = document.createElement("style"),
		cssToUse = `
/**https://cdnjs.com/libraries/awesomplete*/
.awesomplete [hidden]{display:none}.awesomplete .visually-hidden{position:absolute;clip:rect(0,0,0,0)}.awesomplete{display:inline-block;position:relative}.awesomplete>input{display:block}.awesomplete>ul{position:absolute;left:0;z-index:1;min-width:100%;box-sizing:border-box;list-style:none;padding:0;border-radius:.3em;margin:.2em 0 0;background:hsla(0,0%,100%,.9);background:linear-gradient(to bottom right,#fff,hsla(0,0%,100%,.8));border:1px solid rgba(0,0,0,.3);box-shadow:.05em .2em .6em rgba(0,0,0,.2);text-shadow:none}.awesomplete>ul:empty{display:none}@supports (transform:scale(0)){.awesomplete>ul{transition:.3s cubic-bezier(.4,.2,.5,1.4);transform-origin:1.43em -.43em}.awesomplete>ul:empty,.awesomplete>ul[hidden]{opacity:0;transform:scale(0);display:block;transition-timing-function:ease}}.awesomplete>ul:before{content:"";position:absolute;top:-.43em;left:1em;width:0;height:0;padding:.4em;background:#fff;border:inherit;border-right:0;border-bottom:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.awesomplete>ul>li{position:relative;padding:.2em .5em;cursor:pointer}.awesomplete>ul>li:hover{background:#b7d2e0;color:#000}.awesomplete>ul>li[aria-selected=true]{background:#3d6c8e;color:#fff}.awesomplete mark{background:#e9ff00}.awesomplete li:hover mark{background:#b5d100}.awesomplete li[aria-selected=true] mark{background:#3c6b00;color:inherit}

.awesomplete{
    position: inherit !important;
    /* required to keep the input element hidden while modal is collapsed*/
}

.${DOI_BOX_CLASS}{
    transition: 0.25s ease;
    height: 0px;
}

.${DOI_BOX_CLASS} input{
    display: inline-block;
    width: 500px;
    font-size: 14px;
    padding: 8px;
    position: inherit;
}

.${DOI_BOX_CLASS}.shown {
     height: 45px;
}

.${DOI_BOX_CLASS} button{
    position: inherit; /*allows buttons to flow in and out*/
    margin: 5px;
}
`;
	styleEl.setAttribute("type", "text/css");
	styleEl.textContent = cssToUse;
	document.head.appendChild(styleEl);
});
