async function log(message) {
    console.log(message);
}

async function incrementNum() {
    console.log("from javascript");
    DotNet.invokeMethodAsync("Blazor_Javascript_CssIsolation", "IncrementNum");
}

function clickElement(element) {
    element.click();
}

 function sayHello(dotNetHelper, name) {
     return dotNetHelper.invokeMethodAsync('GetHelloMessage', name);
}

