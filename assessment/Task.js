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
        add += amount[key];
    }
    return add;

}
function afternoonClasses(classesTime){
    const time = classesTime.filter(time => time.includes("P", time.length - 2));
    return time;
}
// function healthyAndUnHealthyItem(fruit){
//     let healthyFood = fruit.filter(food => food.isHealthy === true)
//     for(const item of healthyFood){
//         console.log(healthyFood.item);
//     }
//     return healthyFood;
// }
function mapHealthyAndUnHealthyItem(array){
    let healthyFood = array.filter(food => food.isHealthyItem === true);
    for(const name of healthyFood){
        console.log(healthyFood.name);
    }
    return healthyFood;
}
module.exports = {increaseScore, squareOfNumber, scoreGreaterThan, shareBooks, expensiveCalculator, afternoonClasses, mapHealthyAndUnHealthyItem};