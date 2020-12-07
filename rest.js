function showNum(...nums){
    console.log(nums);
};

showNum(10,50,12,99); //[ 10, 50, 12, 99 ]

function sum(...nums){
    return nums.reduce((total,val) => total + val)
};
console.log(sum(100,20,5598,65)); //5783

function multiplyNum(multiplier,...args){
    return args.map(num => num * multiplier)
};
console.log(multiplyNum(3 , 4 , 10 , 50)); //[ 12, 30, 150 ]
