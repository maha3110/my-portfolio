const counter = document.querySelector(".counter-number")
async function updateCounter() {
    let response = await fetch("https://wqic5puv5us3xyzdhmjtnudg6e0ocens.lambda-url.eu-west-3.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();