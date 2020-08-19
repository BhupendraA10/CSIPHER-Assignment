/* *************************************************************
                            Very Easy
************************************************************* */

//Q1:minute to sec
/* function convert(n)
 { 
  var sec = n * 60;  
  return sec;         
}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));  */

//Q2: Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

/* function dividesEvenly(a,b) {
	if (a>b && a%b == 0)
		return true;
	else
		return false;
}
console.log(dividesEvenly(98,7));
console.log(dividesEvenly(7,98)); */

/* *************************************************************
                               Easy
************************************************************* */

//Q1:Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

/* 
 function char_count(str1, str2) 
{
 var Count = 0;
 for (var i = 0; i < str2.length; i++) 
 {
    if (str2.charAt(i) == str1) 
      {
        Count += 1;
      }
  }
  return Count;
}
console.log(char_count("a", "edabit"));
console.log(char_count("c", "Chamber of secrets"));
console.log(char_count("b", "big fat bubble"));  */

//Q2:Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

/* function addUp(n) {
  let sum = 0;
  if (n >=1 && n < 1000) {
    for (let i = 1; i <= n; i++) {
      sum += i;
    }

    return sum;
  }
  else{
      console.log(n +" is greater than 1000");
  }
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
console.log(addUp(1100)); */

//Q3:Replace Vowel with Another Character

/* function replaceVowel(s){
    let str=s.split('');
    for(let i=0;i<str.length;i++){
        if(str[i]==='a'){
            str[i]='1';
        }
        else if(str[i]==='e'){
            str[i]='2';
        }
        else if(str[i]==='i'){
            str[i]='3';
        }
        else if(str[i]==='o'){
            str[i]='4';
        }
        else if(str[i]==='u'){
            str[i]='5';
        }
    }
    console.log(str.join(''));
}
console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("khandbari")); */

/* *************************************************************
                            Medium
************************************************************* */

//Q1:Reverse Words Starting with a Particular Letter
/* 
 function specialReverse(str,s){
  let user=str.split(' ').map(e => e.trim());
  for(let i=0;i<user.length;i++){
      let word=user[i].split('');
      if(word[0]===s){
          user[i]=word.reverse().join('');
      }
    }
  user=user.join(' ');
  console.log(user);
}
 
 console.log(specialReverse ("first man to walk on the moon", "m"));
 console.log(specialReverse ("peter piper picked pickled peppers", "p"));
 console.log(specialReverse("word searches are super fun", "s"));  
 */
//Q2:Hitting the Jackpot

/* function testJackpot(result){
        return result.every(find => find=== result[0]);
}
console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot (["abc", "abc", "abc", "abc"]));
console.log(testJackpot (["SS", "SS", "SS", "SS"]));
console.log(testJackpot (["&&", "&", "&&&", "&&&&"]) );
console.log(testJackpot (["SS", "SS", "SS", "Ss"]) ); */

//Q3:Remove Duplicates from an Array

/* function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b);
}
console.log(removeDuplicates([1, 0, 1, 0]));
console.log(removeDuplicates(["The", "big", "cat"]));
console.log(removeDuplicates(["John", "Taylor", "John"])); */

/* *************************************************************
                             Hard
************************************************************* */

//Q1:Get Real Type
/* 
function realType(value)
{
var dtypes = [Function,Array,Object,Boolean], x, len;
    
if (typeof value === "object"|| typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(realType(1));
console.log(realType('a'));
console.log(realType(true));
console.log(realType(false));
console.log(realType(null));
console.log(realType([]));  
 */

//Q2:Numbers in String
/* numCheck = (value)=>{
  for(let i=0;i<value.length;i++){
    if(value[i]>=1 && value[i]<=9){
      return true;
    }
  }
  return false;
}
numInStr= (value)=>{
  val=value.filter((string)=>{
    return numCheck(string);
  });
  return val;
}

console.log(numInStr (["1a", "a", "2b", "b"]) );
console.log(numInStr (["abc", "abc10"]));
console.log(numInStr (["abc", "ab10c","a10bc","bcd"]));
console.log(numInStr (["this is a test", "test1"])); */
