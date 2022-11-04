let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (let item in obj) {
        if (typeof obj[item] == 'number') {
            obj[item] *= 2
        }
    }
}

console.log(menu);
