/*****************************
 * CODING CHALLENGE 4
 */

/*

*/


/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

        Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

        1. Store Mark's and John's mass and height in variables
        2. Calculate both their BMIs
        3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
        4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

        GOOD LUCK 😀
        */
        /*
        var massMark = 78; // kg
        var heightMark = 1.69; // meters

        var massJohn = 92;
        var heightJohn = 1.95;

        var BMIMark = massMark / (heightMark * heightMark);
        var BMIJohn = massJohn / (heightJohn * heightJohn);
        console.log(BMIMark, BMIJohn);

        var markHigherBMI = BMIMark > BMIJohn;
        console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

1. For each of them, create an object with properties for their full name, mass, and height
*/

var mark = {
    fullName: 'Mark Sachez',
    mass: 78,
    height: 2.1,
    calculateBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var john = {
    fullName: 'John Smith',
    mass: 78,
    height: 2.1,
    calculateBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if(mark.calculateBmi() > john.calculateBmi()){
    console.log(mark.fullName + 'Has higher BMI : ' + mark.bmi);
} else if (mark.calculateBmi() < john.calculateBmi()) {
    console.log(john.fullName + 'Has higher BMI : ' + john.bmi);
} else {
    console.log('Both have the same BMI')
}

        /*
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/