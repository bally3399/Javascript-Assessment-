function scoreGreaterThan(number){
    return number.filter(num => (num >= 70));
}

function increaseScore(number){
    return number.map(num => num + 5);
}
function squareOfNumber(number){
    return number.map(num  => (num * num));
}
function shareBooks(listOfMembers){
    for (const value of listOfMembers){
        value.book += value.name+"'s book"
    }
}
function expensiveCalculator(amount){
    let add = 0;
    for(const key in amount) {
        if (amount[key] != null) {
            add += amount[key].amount;
        }
    }
}
module.exports = {increaseScore, squareOfNumber, scoreGreaterThan, shareBooks, expensiveCalculator};