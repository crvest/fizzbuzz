for(var i=1; i<=100; i++) {
    if(i%3 == 0 && i%5 == 0) {  // test for multilpes of 3 and 5
        console.log("FizzBuzz");
    }
    else if (i%3 !== 0 && i%5 !== 0) { //test for multiples of neither
        console.log(i);
    }
    else {  // otherwise test for multiple of 3 or 5 exclusive
        if(i%3 == 0) {
            console.log("Fizz");
        }
        if(i%5 == 0) {
            console.log("Buzz");
        }
    }
}