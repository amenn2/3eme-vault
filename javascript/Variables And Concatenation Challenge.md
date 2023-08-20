```javascript
let title = "inger";
let p = "inger berrjab";
let date = "24/10";

let card = `
    <div class="card">
        <h3>Hello ${title}</h3>
        <p>${p}</p>
        <span>${date}</span>
    </div>
`;
document.write(card.repeat(4))
```