export function alertAdmin(price) {
    console.log("received here");
    if (price < 20) {
        return "Admin alerted in the browser.";
    } else {
        return "Admin NOT alerted.";
    }
}