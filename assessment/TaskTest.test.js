let {scoreGreaterThan, increaseScore, squareOfNumber, shareBooks,expensiveCalculator, afternoonClasses, mapHealthyAndUnHealthyItem} = require('./Task.js')

test('Test finding score greater than 70', ()=> {
    let number = [38, 92, 72, 48, 45];
    let answer = scoreGreaterThan(number);
    expect(answer).toStrictEqual([92, 72]);
});
test('Test Score', ()=> {
    let number = [85, 92, 78, 88, 95];
    let answer = increaseScore(number);
    expect(answer).toStrictEqual([90, 97, 83, 93, 100]);
});
test('Test SquareNumber', ()=> {
    let number = [2, 4, 6, 8, 10];
    let answer = squareOfNumber(number);
    expect(answer).toStrictEqual([4, 16, 36, 64, 100]);
});
test("Assign books", ()=> {
    const member1 = {
        name: "Emily",
        book: ""
    }
    const member2 = {
        name: "Jack",
        book: ""
    }

    const member3 = {
        name: "Sophia",
        book: ""
    };
    const member4 = {
        name: "Daniel",
        book: ""
    }
    const readers = [member1, member2, member3, member4];
    shareBooks(readers)
    expect(readers[0].book).toBe("Emily's book")

})
test('Test expensive calculator', ()=> {
    let amount = {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80};
    let answer = expensiveCalculator(amount);
    expect(answer).toStrictEqual(380);
})
test("Test get Afternoon classes", ()=>{
    const classesTime = ["9:00 AM", "11:00 AM", "1:00 PM","2:30 PM", "3:00 PM", "5:00 PM", "6:00 PM"];
    expect(afternoonClasses(classesTime)).toEqual(["1:00 PM","2:30 PM", "3:00 PM", "5:00 PM", "6:00 PM"])
})

test("Test filter healthyAndUnHealthyItem", ()=>{
    let shoppingList = [
        {name: 'Apples', category: 'Fruits', isHealthyItem: true},
        {name: 'Potato Chips', category: 'Snacks', isHealthyItem: false},
        {name: 'Carrots', category: 'Vegetable', isHealthyItem: true},
        {name: 'Chocolate Bar', category: 'Sweets', isHealthyItem: false},
        {name: 'Greeks Yogurt', category: 'Diary', isHealthyItem: true},
        {name: 'Soda', category: 'Beverages', isHealthyItem: false}

    ];

    let answer = mapHealthyAndUnHealthyItem(shoppingList)

    let isHealthyItem = [
        {name: 'Apples', category: 'Fruits', isHealthyItem: true},
        {name: 'Carrots', category: 'Vegetable', isHealthyItem: true},
        {name: 'Greeks Yogurt', category: 'Diary', isHealthyItem: true}
    ];
    expect(answer).toEqual(isHealthyItem)
})
