(function () {
    "use strict";

    /* jslint browser */
    /* global window, document */

    function isInt(value) {
        if (isNaN(value)) {
            window.console.log(value + " is NaN");
            return false;
        } else if (value % 1 !== 0) {
            window.console.log(value + " has a remainder after being modulused by zero");
            return false;
        } else {
            return true;
        }
    }

    function isAResonableNumber(number, reasonable, signable) {
        if (!signable) {
            if (number < 1) {
                return false;
            }
        }

        if (number > reasonable) {
            return false;
        } else {
            return true;
        }
    }

    function arrayCopy(x) {
        var a = x.length,
            b = [],
            i;
        for (i = 0; i < a; i += 1) {
            b[i] = x[i];
        }
        return b;
    }

    function solve1() {
        var d = new Date(),
            theDate = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
        window.console.log("THE SOLUTION FOR TASK 1:");
        document.getElementById("clear1").style.display = "inline";
        window.console.log(theDate);
        document.getElementById("answer1").innerHTML = theDate;

    }

    function clear1() {
        document.getElementById("answer1").innerHTML = "";
        document.getElementById("clear1").style.display = "none";
    }

    function solve2() {
        var num1 = document.getElementById("q2i1").value,
            year = new Date().getFullYear();

        if (isInt(num1) && isAResonableNumber(num1, (year * 2), false)) {
            document.getElementById("q2i1Error").innerHTML = "";
            document.getElementById("clear2").style.display = "inline";
            if (((num1 % 100 !== 0) || (num1 % 400 === 0)) && (num1 % 4 === 0)) {
                if (num1 < year) {
                    document.getElementById("answer2").innerHTML = num1 + " was a leap year";
                    window.console.log(num1 + " was a leap year");
                } else {
                    document.getElementById("answer2").innerHTML = num1 + " will be a leap year";
                    window.console.log(num1 + " will be a leap year");
                }
            } else {
                if (num1 < year) {
                    document.getElementById("answer2").innerHTML = num1 + " was a not leap year";
                    window.console.log(num1 + " was not a leap year");
                } else {
                    document.getElementById("answer2").innerHTML = num1 + " will not be a leap year";
                    window.console.log(num1 + " will not be a leap year");
                }
            }
        } else {
            document.getElementById("answer2").innerHTML = "";
            document.getElementById("clear2").style.display = "none";
            document.getElementById("q2i1Error").innerHTML = "* PLEASE ENTER A YEAR BETWEEN 0 AND " + year;
        }
    }

    function clear2() {
        document.getElementById("q2i1").value = "";
        document.getElementById("answer2").innerHTML = "";
        document.getElementById("clear2").style.display = "none";
    }

    function solve3() {
        var num1 = document.getElementById("q3i1").value,
            num2 = document.getElementById("q3i2").value,
            num3 = document.getElementById("q3i3").value,
            num4 = document.getElementById("q3i4").value,
            num5 = document.getElementById("q3i5").value,
            numArray = [num1, num2, num3, num4, num5],
            inputArray = ["q3i1", "q3i2", "q3i3", "q3i4", "q3i5"],
            errorArray = ["q3i1Error", "q3i2Error", "q3i3Error", "q3i4Error", "q3i5Error"],
            i,
            consecutive = true;

        for (i = 0; i < numArray.length; i += 1) {
            if (!isInt(numArray[i]) || !isAResonableNumber(numArray[i], Infinity, false)) {
                document.getElementById(errorArray[i]).innerHTML = "* MUST BE AN INTEGER";
                document.getElementById(inputArray[i]).value = "";
                document.getElementById(inputArray[i]).focus();
            } else {
                document.getElementById(errorArray[i]).innerHTML = "";
                if (i !== 0 && (parseInt(numArray[i], 10) !== (parseInt(numArray[i - 1], 10) + 1))) {
                    consecutive = false;
                }
            }
        }

        if (!consecutive) {
            document.getElementById("answer3").innerHTML = "The numbers of the array are NOT consecutive.";
            document.getElementById("clear3").style.display = "inline";
        } else {
            document.getElementById("answer3").innerHTML = "The numbers of the array are consecutive.";
            document.getElementById("clear3").style.display = "inline";
        }
    }


    function clear3() {
        document.getElementById("q3i1").value = "";
        document.getElementById("q3i2").value = "";
        document.getElementById("q3i3").value = "";
        document.getElementById("q3i4").value = "";
        document.getElementById("q3i5").value = "";
        document.getElementById("answer3").innerHTML = "";
        document.getElementById("clear3").style.display = "none";
    }

    function clear4() {
        document.getElementById("task4Results").innerHTML = "";
        document.getElementById("clear4").style.display = "none";
    }

    function solve4() {
        var htmlResults = "",
            i;
        for (i = 0; i <= 15; i += 1) {
            if (i % 2 === 0) {
                htmlResults += "the current number is: " + i + ", and it is even <br />";
                window.console.log("the current number is " + i + ", and it is even");
            } else {
                htmlResults += "the current number is: " + i + ", and it is odd <br />";
                window.console.log("the current number is " + i + ", and it is odd");
            }
        }

        document.getElementById("task4Results").innerHTML = htmlResults;
        document.getElementById("clear4").style.display = "inline";
    }

    function clear5() {
        document.getElementById("task5Results").innerHTML = "";
        document.getElementById("clear5").style.display = "none";
        document.getElementById("secondClear5").style.display = "none";
    }


    function solve5() {
        var htmlResults = "",
            i;
        for (i = 1; i <= 100; i += 1) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                htmlResults += "FizzBuzz <br />";
                window.console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                htmlResults += "Fizz <br />";
                window.console.log("Fizz");
            } else if (i % 5 === 0) {
                htmlResults += "Buzz <br />";
                window.console.log("Buzz");
            } else {
                htmlResults += i + "<br />";
                window.console.log(i);
            }
        }

        document.getElementById("task5Results").innerHTML = htmlResults;
        document.getElementById("clear5").style.display = "inline";
        document.getElementById("secondClear5").style.display = "inline";
    }

    function clear6() {
        document.getElementById("task6Results").innerHTML = "";
        document.getElementById("clear6").style.display = "none";
    }

    function solve6() {
        var htmlResults = 0,
            i;
        for (i = 1; i <= 1000; i += 1) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                htmlResults += 1;
            }
        }
        document.getElementById("task6Results").innerHTML = "There are " + htmlResults + " numbers between 1 and 1000 that are evenly divisible by three.";
        window.console.log("There are " + htmlResults + " numbers between 1 and 1000 that are evenly divisible by three.");
        document.getElementById("clear6").style.display = "inline";
    }


    function returnNumberOfSpaces(x) {
        var stringToReturn = "",
            i = 0;
        for (i = 0; i < x; i += 1) {
            stringToReturn += " ";
        }
        return stringToReturn;
    }

    function returnStringOfNumbers(x) {
        var stringToReturn = "",
            i = 0;
        for (i = 1; i <= x; i += 1) {
            stringToReturn += i;
        }

        for (i = x - 1; i > 0; i -= 1) {
            stringToReturn += i;
        }
        return stringToReturn;
    }

    function clear7() {
        document.getElementById("answer7").innerHTML = "";
        document.getElementById("q7i1Error").innerHTML = "";
        document.getElementById("clear7").style.display = "none";
        document.getElementById("secondClear7").style.display = "none";
        document.getElementById("q7i1").value = "";
    }

    function solve7() {
        var num1 = document.getElementById("q7i1").value,
            pyramid = "<br />",
            maximumSize = 40,
            i = 0;
        if (!isInt(num1)) {
            document.getElementById("q7i1Error").innerHTML = "* MUST BE AN INTEGER";
        } else if (!isAResonableNumber(num1, maximumSize, false)) {
            document.getElementById("q7i1Error").innerHTML = "* Please keep it between 1 and " + maximumSize + ".";
        } else {
            document.getElementById("q7i1Error").innerHTML = "";

            for (i = 1; i <= num1; i += 1) {
                pyramid += "<pre>" + returnNumberOfSpaces(num1 - i) + returnStringOfNumbers(i) + returnNumberOfSpaces(num1 - i) + "</pre><br />";
                window.console.log(returnNumberOfSpaces(num1 - i) + returnStringOfNumbers(i) + returnNumberOfSpaces(num1 - i));
            }
        }
        document.getElementById("answer7").innerHTML = pyramid;
        document.getElementById("clear7").style.display = "inline";
        document.getElementById("secondClear7").style.display = "inline";
    }

    function clear8() {
        document.getElementById("answer8").innerHTML = "";
        document.getElementById("q8i1Error").innerHTML = "";
        document.getElementById("clear8").style.display = "none";
        document.getElementById("secondClear8").style.display = "none";
        document.getElementById("q8i1").value = "";
    }

    function solve8() {
        var num1 = document.getElementById("q8i1").value,
            pyramid = "<br />",
            maximumSize = 30,
            i = 0;
        if (!isInt(num1)) {
            document.getElementById("q8i1Error").innerHTML = "* MUST BE AN INTEGER";
        } else if (!isAResonableNumber(num1, maximumSize, false)) {
            document.getElementById("q8i1Error").innerHTML = "* Please keep it between 1 and " + maximumSize + ".";
        } else {
            document.getElementById("q8i1Error").innerHTML = "";

            for (i = 1; i <= num1; i += 1) {
                pyramid += "<pre>" + returnNumberOfSpaces(num1 - i) + returnStringOfNumbers(i) + returnNumberOfSpaces(num1 - i) + "</pre><br />";
                window.console.log(returnNumberOfSpaces(num1 - i) + returnStringOfNumbers(i) + returnNumberOfSpaces(num1 - i));
            }
            for (i = num1; i >= 1; i -= 1) {
                pyramid += "<pre>" + returnNumberOfSpaces(num1 - i) + returnStringOfNumbers(i) + returnNumberOfSpaces(num1 - i) + "</pre><br />";
                window.console.log(returnNumberOfSpaces(num1 - i) + returnStringOfNumbers(i) + returnNumberOfSpaces(num1 - i));
            }
        }
        document.getElementById("answer8").innerHTML = pyramid;
        document.getElementById("clear8").style.display = "inline";
        document.getElementById("secondClear8").style.display = "inline";
    }

    document.getElementById("submit1").addEventListener("click", solve1);
    document.getElementById("clear1").addEventListener("click", clear1);
    document.getElementById("submit2").addEventListener("click", solve2);
    document.getElementById("clear2").addEventListener("click", clear2);
    document.getElementById("submit3").addEventListener("click", solve3);
    document.getElementById("clear3").addEventListener("click", clear3);
    /*
    document.getElementById("submit3").addEventListener("click", solve3);
    document.getElementById("submit4").addEventListener("click", solve4);
    document.getElementById("submit5").addEventListener("click", solve5);
    document.getElementById("submit6").addEventListener("click", solve6);
    document.getElementById("submit7").addEventListener("click", solve7);
    document.getElementById("submit8").addEventListener("click", solve8);
    */


}());
