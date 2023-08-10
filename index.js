function renderSumEl() {
    let sum = [...document.querySelector("#root > div > div > main > div > div:last-child > div:last-child > div").children]
        .slice(1, -1).map(e =>[...e.children].slice(1)).flat(1)
        .map(e => [...e.lastChild.children].slice(-2, -1)).flat(1)
        .map(e => parseFloat(e.firstChild.textContent.match(/[\.\d\-]/g).join("")))
        .reduce((acc, e) => acc + e, 0).toFixed(2);
    
    if(!document.querySelector(".custom-sum-element")) {
        let sumEl =  document.createElement('span')
        sumEl.classList.add("custom-sum-element")
        document.querySelector("#root > div > div > main > div > div:last-child > div:last-child > div").firstChild.lastChild.firstChild.prepend(sumEl)
    }

    document.querySelector(".custom-sum-element").textContent = sum
}

let trial = 0;
function tryRender() {
    ++trial
    if(trial > 20) return

    setTimeout(() => {
        try {
            renderSumEl()
            document.querySelector("#root > div > div > main > div > div:last-child > div:first-child").addEventListener('click', renderSumEl)
            document.addEventListener("scrollend", renderSumEl);
        } catch(e) {
            tryRender()
            console.log('Wallet extension trial: ', trial)
        }
    }, 1000)
}

tryRender()

