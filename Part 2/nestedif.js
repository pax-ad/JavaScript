let Marks = 90;

if(Marks >= 33){ 
    console.log("Pass");

if(Marks >= 80){ 
    console.log("Grade : A");
    }
    else{
        console.log("Grade : B");
    }
}

else { 
    console.log("better luck next time");
}

//firs if tells about the student get passed
//second one tells about the grade of the student
//nested-if => if written inside the if

 /*
 when i wrote this code i got two errors in the console which is 
 "Refused to execute http://127.0.0.1:5500/Part%202/nestedif.js as script because "X-Content-Type-Options: nosniff" was given and its Content-Type is not a script MIME type"
 
 because  nestedif.js is inside the root folder(javascript) and i was trying to run it from the part2 folder so i changed the path of the file 

 scondely Part%202 means space get converted to %20 ,Special enitity
 
 */