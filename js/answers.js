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
            if (number < 0) {
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
        var arrayToWorkWith = arrayCopy(fivesArray),
            n = document.getElementById("q5i2").value,
            elementsToRemove,
            i;

        if (!isInt(n) || !isAResonableNumber(n, arrayToWorkWith.length, false)) {
            document.getElementById("q5i2Error").innerHTML = "* MUST BE ZERO, OR A VALID INTEGER WITHIN THE LENGTH OF THE ARRAY";
        } else {
            document.getElementById("q5i2Error").innerHTML = "";
            if (parseInt(n, 10) === 0 || n === "") {
                document.getElementById("task5Results").innerHTML = "The first element of the array is: " + arrayToWorkWith.unshift();
            } else {
                elementsToRemove = arrayToWorkWith.length - n;
                for (i = 0; i < elementsToRemove; i += 1) {
                    arrayToWorkWith.pop();
                }
                window.console.log("n is equal to " + n);
                document.getElementById("task5Results").innerHTML = "The first " + n + " elements of the array are: " + arrayToWorkWith;
            }
        }

        document.getElementById("clear5").style.display = "inline";
    }

    function clear5() {
        fivesArray = [];
        document.getElementById("task5Results").innerHTML = "";
        document.getElementById("fivesArrayDisplay").innerHTML = "";
        document.getElementById("clear5").style.display = "none";
    }

    function solve6() {
        var myColor = ["Red", "Green", "White", "Black"],
            stringToWorkWith = "\"",
            i;

        for (i = 0; i < myColor.length - 1; i += 1) {
            stringToWorkWith += myColor[i] + ",";
        }
        stringToWorkWith += myColor[myColor.length - 1] + "\"";

        document.getElementById("task6Results").innerHTML = "The resulting string is:" + stringToWorkWith;
        window.console.log("The resulting string is:" + stringToWorkWith);
        document.getElementById("clear6").style.display = "inline";
    }

    function clear6() {
        document.getElementById("task6Results").innerHTML = "";
        document.getElementById("clear6").style.display = "none";
    }

    function addTo7sArray() {
        var value = document.getElementById("q7i1").value.trim();
        document.getElementById("q7i1Error").innerHTML = "";
        sevensArray.push(value);
        document.getElementById("sevensArrayDisplay").innerHTML = "Your array: [" + sevensArray + "]";
        document.getElementById("q7AddAnIndex").innerHTML = "Add Value Index " + sevensArray.length;
        document.getElementById("q7i1").value = "";
        document.getElementById("q7i1").focus();
    }

    function solve7() {
        var arrayToWorkWith = arrayCopy(sevensArray),
            largestNumberOfSavedValues = 0,
            numberOfSameValues = 1,
            valueThatHasTheMostSames,
            i;

        arrayToWorkWith.sort();
        for (i = 1; i < arrayToWorkWith.length - 1; i += 1) {
            if (arrayToWorkWith[i] === arrayToWorkWith[i - 1]) {
                numberOfSameValues += 1;
                if (numberOfSameValues > largestNumberOfSavedValues) {
                    valueThatHasTheMostSames = arrayToWorkWith[i];
                    largestNumberOfSavedValues = numberOfSameValues;
                }
            } else {
                numberOfSameValues = 1;
            }
        }


        document.getElementById("answer7").innerHTML = "The most frequent value is: " + valueThatHasTheMostSames + ", and it occurred " + largestNumberOfSavedValues + " times.";
        document.getElementById("clear7").style.display = "inline";
    }

    function clear7() {
        sevensArray = [];
        document.getElementById("sevensArrayDisplay").innerHTML = "";
        document.getElementById("answer7").innerHTML = "";
        document.getElementById("q7i1Error").innerHTML = "";
        document.getElementById("clear7").style.display = "none";
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
        var arrayToWorkWith = arrayCopy(ninesArray),
            arrayOfDuplicates = [],
            arrayOfDuplicatesCurrentIndex = -1,
            stringOfDuplicateValues = "",
            i,
            j;

        for (i = 1; i < arrayToWorkWith.length; i += 1) {
            if (arrayToWorkWith[i] === arrayToWorkWith[i - 1]) {
                if ((arrayOfDuplicatesCurrentIndex === -1) || (arrayToWorkWith[i] !== arrayOfDuplicates[arrayOfDuplicatesCurrentIndex])) {
                    arrayOfDuplicatesCurrentIndex += 1;
                    arrayOfDuplicates[arrayOfDuplicatesCurrentIndex] = arrayToWorkWith[i];
                }

            }
        }
        for (j = 0; j < arrayOfDuplicatesCurrentIndex; j += 1) {
            stringOfDuplicateValues += arrayOfDuplicates[j] + ", ";
        }
        stringOfDuplicateValues += " and " + arrayOfDuplicates[arrayOfDuplicates.length - 1];

        window.console.log("stringOfDuplicateValues: " + stringOfDuplicateValues);
        window.console.log("arrayOfDuplicatesCurrentIndex: " + arrayOfDuplicatesCurrentIndex);
        window.console.log("arrayOfDuplicates: " + arrayOfDuplicates.toString());

        if (arrayOfDuplicatesCurrentIndex === -1) {
            document.getElementById("answer9").innerHTML = "There were no duplicate values";
        } else if (arrayOfDuplicatesCurrentIndex === 0) {
            document.getElementById("answer9").innerHTML = "There was one duplicate value.\nIt was: " + stringOfDuplicateValues;
        } else {
            document.getElementById("answer9").innerHTML = "There were " + arrayOfDuplicates.length + " values that occured more than once.\nThose values were: " + stringOfDuplicateValues;
        }
        document.getElementById("clear9").style.display = "inline";
    }

    function clear9() {
        ninesArray = [];
        document.getElementById("ninesArrayDisplay").innerHTML = "";
        document.getElementById("answer9").innerHTML = "";
        document.getElementById("clear9").style.display = "none";
    }

    function solve10() {
        var stringToWorkWith = document.getElementById("q10i1").value,
            stringArray = [],
            stringToReturn = "",
            i;
        stringArray = stringToWorkWith.split('');
        stringArray = stringArray.reverse();

        for (i = 0; i < stringArray.length; i += 1) {
            stringToReturn += stringArray[i];
        }

        document.getElementById("answer10").innerHTML = stringToReturn;
    }

    function clear10() {
        window.console.log("clear10");
    }

    function solve11() {
        var stringToWorkWith = document.getElementById("q11i1").value.trim(),
            stringArray = [],
            stringToReturn = "",
            i;
        stringArray = stringToWorkWith.split('');
        stringArray = stringArray.reverse();

        for (i = 0; i < stringArray.length; i += 1) {
            stringToReturn += stringArray[i];
        }

        if (stringToReturn === stringToWorkWith) {
            document.getElementById("answer11").innerHTML = stringToReturn + " is a palindrome!";
        } else {
            document.getElementById("answer11").innerHTML = stringToReturn + " is not a palindrome.";
        }
        document.getElementById("clear11").style.display = "inline";
    }

    function clear11() {
        document.getElementById("q11i1").value = "";
        document.getElementById("answer11").innerHTML = "";
        document.getElementById("clear11").style.display = "none";
    }

    function solve12() {
        var stringToWorkWith = document.getElementById("q12i1").value.trim(),
            stringArrayToWorkWith = [],
            combinations = [],
            combinationsIndex = 0,
            stringArrayToJoin = [],
            stringToAdd = "",
            i,
            j,
            k;

        stringArrayToWorkWith = stringToWorkWith.split('');

        for (i = 0; i < stringArrayToWorkWith.length; i += 1) {
            for (j = 0; j < stringArrayToWorkWith.length; j += 1) {
                stringArrayToJoin = stringArrayToWorkWith.slice(j, stringArrayToWorkWith.length);
                for (k = 0; k < stringArrayToJoin.length; k += 1) {
                    stringToAdd += stringArrayToJoin[k];
                }
                combinations[combinationsIndex] = stringToAdd;
                combinationsIndex += 1;
                stringToAdd = "";
            }
            stringArrayToWorkWith.shift();
        }
        document.getElementById("answer12").innerHTML = combinations.toString();
        document.getElementById("clear12").style.display = "inline";
    }

    function clear12() {
        document.getElementById("q12i1").value = "";
        document.getElementById("answer12").innerHTML = "";
        document.getElementById("clear12").style.display = "none";
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
    document.getElementById("submit11").addEventListener("click", solve11);
    document.getElementById("clear11").addEventListener("click", clear11);
    document.getElementById("submit12").addEventListener("click", solve12);
    document.getElementById("clear12").addEventListener("click", clear12);

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
