// lets declare some arrays

// const ages = [1, 2, 3, 4, 5];
// const ages2 = [6, 7, 8];
// const ages3 = [9, 10, 11, 12, 13];

// const allAges = ages.concat(ages2, 5, ages3);

// console.log(allAges);

// const ages = [1, 2, 3, 4, 5];
// const ages2 = [6, 7, 8];
// const ages3 = [9, 10, 11, 12, 13];

// const allAges = [...ages, ...ages2, 5, ...ages3]; /// using spread operator

// console.log(allAges);

const money = [100, 200, 300, 400, 500];
const max = Math.max(...money);

console.log(max);