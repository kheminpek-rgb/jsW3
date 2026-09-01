// Exercise 5: Array Methods — forEach, filter, map

const scores = [55, 72, 88, 91, 40, 67, 100];

// TODO 1: Use forEach() to log every score, one per line, prefixed with "Score: ".
scores.forEach((items) => {
    console.log(`Score : ${items}`);
});

// TODO 2: Use filter() to create a new array `passingScores` containing only
// scores >= 60. Log the result.

const passingScores = [83, 60, 80 ,93];

const result = passingScores.filter((num) => num>=60);
console.log(result);
// TODO 3: Use map() to create a new array `withBonus` where every score has 5 points
// added. Log the result. (original `scores` array should NOT be modified)

const withBonus = passingScores.map((items) => items+=5);
console.log(withBonus);
// TODO 4: Chain filter() + map() in one line: get all passing scores, then convert
// each one to a letter using this simple rule — >= 90 "A", >= 80 "B", >= 70 "C", else "D".
// Store the result in `letterGrades` and log it.
// Hint: scores.filter(s => s >= 60).map(s => ...)
const passed = scores.filter((num) => num>=60).map((num) => num+=5);

console.log(passed);
const letterGrades = passed.map((num) => {
    if(num>=90){
        return "A";
    }else if(num>=80){
        return "B";
    }else if(num>=70){
        return "C";
    }else{
        return "D";
    }
});
console.log(letterGrades);

// TODO 5 (challenge): Use forEach() to calculate the average of all `scores` and log it
// (you'll need a running total variable declared with `let` before the loop).
total = 0;
scores.forEach((items) =>{
    total=total+items;
});
console.log(total/scores.length);