
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromYenToPound = (Yen) => {
    let valueEuro = Yen / 127.9;
    let euroToPound = valueEuro * 0.8
    return euroToPound;
}

const fromDollarToYen = (dollar)=> {
    let valueEuro = dollar / 1.2
    let euroToYen = valueEuro * 127.9;
    return euroToYen;
}

module.exports ={fromEuroToDollar,fromDollarToYen,fromYenToPound}