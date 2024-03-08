const { sum, subtract, multiply, divide } = require('./math');

test('sum', () => {
    expect(sum(2, 2)).toBe(4);
}
);

test('subtract', () => {
    expect(subtract(2, 2)).toBe(0);
}
);
test('multiply', () => {
    expect(multiply(2, 2)).toBe(4);
}
);
test('divide', () => {
    expect(divide(2, 2)).toBe(1);
}
);