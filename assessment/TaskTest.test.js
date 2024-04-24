let {scoreGreaterThan, increaseScore, squareOfNumber, shareBooks,expensiveCalculator} = require('./Task.js')

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
    const obj1 = {
        amount: 150
    }
    const obj2 = {
        name: "David",
        value: "dinner out",
        amount:100
    }
    const obj3={
        name: "David",
        value: "Transportation",
        amount:50
    }
    const obj4={
        name: "David",
        value: "Entertainment",
        amount:80
    }
    const amount = [obj1.amount + obj2.amount + obj3.amount + obj4.amount];
     expensiveCalculator(amount);
    expect(amount).toStrictEqual([380]);
})


