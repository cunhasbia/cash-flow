let valuesIn = JSON.parse(localStorage.getItem('valuesIn')) || [];
let valuesOut = JSON.parse(localStorage.getItem('valuesOut')) || [];

function addIn() {
    const inputIn = document.getElementById('inputIn');
    const value = parseFloat(inputIn.value);
    
    valuesIn.push(value);
    inputIn.value = '';

    saveLocalStorage('valuesIn', valuesIn);
    updateScreen();
};

function addOut() {
    const inputOut = document.getElementById('inputOut');
    const value = parseFloat(inputOut.value);
    
    valuesOut.push(value);
    inputOut.value = '';
    
    saveLocalStorage('valuesOut', valuesOut);
    updateScreen();
};

function calculateTotal() {
    let totalIn = 0;
    let totalOut = 0;

    for (const item of valuesIn) {
        totalIn += item;
    }

    for (const item of valuesOut) {
        totalOut += item;
    }

    return totalIn - totalOut;
};

function updateScreen() {
    let total = calculateTotal();
    
    if (total >= 0) {
        document.getElementById('displayUp').style = 'display: flex';
        document.getElementById('totalUp').innerText = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        document.getElementById('displayDown').style = 'display: none';
    } else {
        document.getElementById('displayDown').style = 'display: flex';
        document.getElementById('totalDown').innerText = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        document.getElementById('displayUp').style = 'display: none';
    }
};

function saveLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
};

function clearStorage() {
    valuesIn = [];
    valuesOut = [];
    localStorage.clear();
    updateScreen();
};

updateScreen();