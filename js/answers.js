(function () {
    "use strict";

    /* jslint browser */
    /* global window, document */

    var foursArray = [],
        fivesArray = [],
        sevensArray = [],
        ninesArray = [];

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

    function addTo4sArray() {
        var value = document.getElementById("q4i1").value.trim();
        if (isInt(value) && value !== "") {
            document.getElementById("q4i1Error").innerHTML = "";
            foursArray.push(value);
            document.getElementById("foursArrayDisplay").innerHTML = "Your array: [" + foursArray + "]";
            document.getElementById("q4AddAnIndex").innerHTML = "Add Value Index " + foursArray.length;
            document.getElementById("q4i1").value = "";
            document.getElementById("q4i1").focus();
        } else {
            document.getElementById("q4i1Error").innerHTML = "* PLEASE ENTER AN INTEGER";
            document.getElementById("q4i1").value = "";
            document.getElementById("q4i1").focus();
        }

    }

    function solve4() {
        var i,
            equals = false;

        foursArray.sort();
        for (i = 0; i < foursArray.length; i += 1) {
            if (i !== 0 && foursArray[i] === foursArray[i - 1]) {
                equals = true;
            }
        }

        if (equals) {
            document.getElementById("task4Results").innerHTML = "There are multiple indicies with the same value";
        } else {
            document.getElementById("task4Results").innerHTML = "All indicies have unique values";
        }

        document.getElementById("clear4").style.display = "inline";
    }

    function clear4() {
        foursArray = [];
        document.getElementById("task4Results").innerHTML = "";
        document.getElementById("foursArrayDisplay").innerHTML = "";
        document.getElementById("clear4").style.display = "none";
    }

    function addTo5sArray() {
        var value = document.getElementById("q5i1").value.trim();
        if (isInt(value) && value !== "") {
            document.getElementById("q5i1Error").innerHTML = "";
            fivesArray.push(value);
            document.getElementById("fivesArrayDisplay").innerHTML = "Your array: [" + fivesArray + "]";
            document.getElementById("q5AddAnIndex").innerHTML = "Add Value Index " + fivesArray.length;
            document.getElementById("q5i1").value = "";
            document.getElementById("q5i1").focus();
        } else {
            document.getElementById("q5i1Error").innerHTML = "* PLEASE ENTER AN INTEGER";
            document.getElementById("q5i1").value = "";
            document.getElementById("q5i1").focus();
        }

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

    function clear5() {
        fivesArray = [];
        document.getElementById("task5Results").innerHTML = "";
        document.getElementById("fivesArrayDisplay").innerHTML = "";
        document.getElementById("clear5").style.display = "none";
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

    function clear6() {
        document.getElementById("task6Results").innerHTML = "";
        document.getElementById("clear6").style.display = "none";
    }

    function addTo7sArray() {
        var value = document.getElementById("q7i1").value.trim();
        if (isInt(value) && value !== "") {
            document.getElementById("q7i1Error").innerHTML = "";
            sevensArray.push(value);
            document.getElementById("sevensArrayDisplay").innerHTML = "Your array: [" + sevensArray + "]";
            document.getElementById("q7AddAnIndex").innerHTML = "Add Value Index " + sevensArray.length;
            document.getElementById("q7i1").value = "";
            document.getElementById("q7i1").focus();
        } else {
            document.getElementById("q7i1Error").innerHTML = "* PLEASE ENTER AN INTEGER";
            document.getElementById("q7i1").value = "";
            document.getElementById("q7i1").focus();
        }

    }

    function solve7() {
        var num1 = document.getElementById("q7i1").value,
            pyramid = "<br />",
            maximumSize = 40;
        if (!isInt(num1)) {
            document.getElementById("q7i1Error").innerHTML = "* MUST BE AN INTEGER";
        } else if (!isAResonableNumber(num1, maximumSize, false)) {
            document.getElementById("q7i1Error").innerHTML = "* Please keep it between 1 and " + maximumSize + ".";
        } else {
            document.getElementById("q7i1Error").innerHTML = "";

        }
        document.getElementById("answer7").innerHTML = pyramid;
        document.getElementById("clear7").style.display = "inline";
        document.getElementById("secondClear7").style.display = "inline";
    }

    function clear7() {
        sevensArray = [];
        document.getElementById("sevensArrayDisplay").innerHTML = "";
        document.getElementById("answer7").innerHTML = "";
        document.getElementById("q7i1Error").innerHTML = "";
        document.getElementById("clear7").style.display = "none";
        document.getElementById("secondClear7").style.display = "none";
        document.getElementById("q7i1").value = "";
    }

    function addTo9sArray() {
        var value = document.getElementById("q9i1").value.trim();
        if (isInt(value) && value !== "") {
            document.getElementById("q9i1Error").innerHTML = "";
            ninesArray.push(value);
            document.getElementById("ninesArrayDisplay").innerHTML = "Your array: [" + ninesArray + "]";
            document.getElementById("q9AddAnIndex").innerHTML = "Add Value Index " + ninesArray.length;
            document.getElementById("q9i1").value = "";
            document.getElementById("q9i1").focus();
        } else {
            document.getElementById("q9i1Error").innerHTML = "* PLEASE ENTER AN INTEGER";
            document.getElementById("q9i1").value = "";
            document.getElementById("q9i1").focus();
        }

    }

    function solve9() {
        window.console.log("solve9");
    }

    function clear9() {
        ninesArray = [];
        document.getElementById("ninesArrayDisplay").innerHTML = "";
        document.getElementById("answer9").innerHTML = "";
        document.getElementById("clear9").style.display = "none";
    }

    function solve10() {
        window.console.log("solve10");
    }

    function clear10() {
        window.console.log("clear10");
    }

    document.getElementById("submit1").addEventListener("click", solve1);
    document.getElementById("clear1").addEventListener("click", clear1);
    document.getElementById("submit2").addEventListener("click", solve2);
    document.getElementById("clear2").addEventListener("click", clear2);
    document.getElementById("submit3").addEventListener("click", solve3);
    document.getElementById("clear3").addEventListener("click", clear3);
    document.getElementById("submit4").addEventListener("click", solve4);
    document.getElementById("q4AddAnIndex").addEventListener("click", addTo4sArray);
    document.getElementById("clear4").addEventListener("click", clear4);
    document.getElementById("submit5").addEventListener("click", solve5);
    document.getElementById("q5AddAnIndex").addEventListener("click", addTo5sArray);
    document.getElementById("clear5").addEventListener("click", clear5);
    document.getElementById("submit6").addEventListener("click", solve6);
    document.getElementById("clear6").addEventListener("click", clear6);
    document.getElementById("submit7").addEventListener("click", solve7);
    document.getElementById("q7AddAnIndex").addEventListener("click", addTo7sArray);
    document.getElementById("clear7").addEventListener("click", clear7);
    document.getElementById("submit9").addEventListener("click", solve9);
    document.getElementById("q9AddAnIndex").addEventListener("click", addTo9sArray);
    document.getElementById("clear9").addEventListener("click", clear9);
    document.getElementById("submit10").addEventListener("click", solve10);
    document.getElementById("clear10").addEventListener("click", clear10);

    document.getElementById('q4i1').onkeypress = function (e) {
        if (!e) {
            e = window.event;
        }
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            addTo4sArray();
            return false;
        }
    };

    document.getElementById('q5i1').onkeypress = function (e) {
        if (!e) {
            e = window.event;
        }
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            addTo5sArray();
            return false;
        }
    };

    document.getElementById('q7i1').onkeypress = function (e) {
        if (!e) {
            e = window.event;
        }
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            addTo7sArray();
            return false;
        }
    };

    document.getElementById('q9i1').onkeypress = function (e) {
        if (!e) {
            e = window.event;
        }
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            addTo9sArray();
            return false;
        }
    };

}());
