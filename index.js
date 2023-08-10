function renderSumEl() {
    let sum = [...document.querySelector("#root > div > div > main > div > div:last-child > div:last-child > div").children]
        .slice(1, -1).map(e =>[...e.children].slice(1)).flat(1)
        .map(e => [...e.lastChild.children].slice(-2, -1)).flat(1)
        .reduce((acc, e) => {
            let amount = parseFloat(e.firstChild.textContent.match(/[\.\d\-]/g).join(""))
            let currency = e.firstChild.textContent.match(/[^\d\.\-\ \ \,]/g).join("")

            if(!acc[currency]) acc[currency] = 0
            acc[currency] += amount
            
            return acc
        }, {})
    
    if(!document.querySelector(".custom-sum-element")) {
        let sumEl =  document.createElement('span')
        sumEl.classList.add("custom-sum-element")
        document.querySelector("#root > div > div > main > div > div:last-child > div:last-child > div").firstChild.lastChild.firstChild.prepend(sumEl)
    }

    let res = Object.entries(sum)
        .map(([key, val]) => "<span>" + key + " " + val.toFixed(2) + "</span>")
        .join("")  // &#160; = space

    document.querySelector(".custom-sum-element").innerHTML = res
}

let trial = 0;
function tryRender() {
    ++trial
    if(trial > 20) return

    setTimeout(() => {
        try {
            renderSumEl()
            document.querySelector("#root > div > div > main > div > div:last-child > div:first-child")
                .addEventListener('click', () => setTimeout(renderSumEl, 200))
            document.addEventListener("scrollend", renderSumEl);
        } catch(e) {
            tryRender()
            console.log('Wallet extension trial: ', trial)
        }
    }, 1000)
}

tryRender()

