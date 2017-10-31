//write first method
function sleep_in(weekday,vacation) {
    if(!weekday && vacation){
        return true;
    }
    if(weekday && vacation){
        return true;
    }
    if(!weekday && !vacation){
        return true;

    }
    if(!weekday){
        return true;
    }
    if(weekday){
        return false;
    }
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile && b_smile){
        return true;
    }
    if(!a_smile && !b_smile){
        return true
    }
    if(a_smile && !b_smile){
        return false
    }
    if(!a_smile && b_smile){
        return false
    }

}


function string_times(string, int) {
    var word = "";
    for( var i = 0; i < int;i++){
        word += string;

    }
    return word;
}

document.getElementById("output").innerHTML = sleepIn(true, false);
document.getElementById("output2").innerHTML = nextOne(true, false);
//test third method, etc




function front_times(word, x ){
    var answer = "";
    var front = word.substring(0,3);
    ///iterate (for) x time
    for( var i = 0; i < x;i++){
        answer += front;
    }

    return answer;


}



function string_bits(word){
    var answer = "";


    for(var i = 0; i < word.length; i+=2) {
        answer += word[i];
    }
    return answer;
}






function caughtSpeeding(speed, isBirthdate){
    var birthday = 0
    if(isBirthdate){
        birthday = 5;
    }
    if(speed > (80 + birthday)){
        return 2
    }

    if(speed > (60 + birthday)){
        return 1
    }
    else {
        return 0
    }
}




function fizz_buzz(nums) {
    var Fizz = "Fizz";
    var Buzz = "Buzz";
    var FizzBuzz = "FizzBuzz";
    var here = "!";

    if (nums % 5 == 0 && nums % 3 == 0) {
        return FizzBuzz;

    }
    if (nums % 5 == 0) {
        return Buzz;
    }
    if (nums % 3 == 0) {
        return Fizz;

    } else {
        return nums + here
    }

}


We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great.
    A party is good (1) if both tea and candy are at least 5. However, if either tea or candy is at least double the amount of the other one, the party is great (2).
    However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

teaParty(6, 8) → 1         teaParty(3, 8) → 0          teaParty(20, 6) → 2



function teaParty(numOfTea, numOfcandy) {
    if(numOfTea >= 5 && numOfcandy >= 5) {
        if((numOfcandy >= (numOfTea * 2) || (numOfTea >= (numOfcandy * 2)))){
            return 2

        }else {
            return 1;
        }
    }
    return 0;
}





function blackjack(int,num) {

    if (num > int && num <= 21) {
        return num
    }
    if (int > num && int <= 21) {
        return int
    }


    if (int > 21 && num > 21) {
        return 0
    }

    if(int> 21 && num<= 21 ){
        return num
    }

    if(num> 21 && int<= 21 ){
        return int
    }

}



// Given 3 int values, a b c,
// return their sum.
//     However, if one of the values is the same as another of the values
//     , it does not count towards the sum.
//
// loneSum(1, 2, 3) → 6       loneSum(3, 2, 3) → 2        loneSum(3, 3, 3) → 0


function loneSum(a, b , c){
    var a1 = a;
    var b1 = b;
    var c1 = c;

    if( a == b){
        b1 = 0;
        a1 = 0;

    }
    if (b == c){
        b1 = 0;
        c1 = 0;
    }

    if( c == a){
        a1 = 0;
        c1 = 0;
    }
    return a1 + b1 + c1;

}
