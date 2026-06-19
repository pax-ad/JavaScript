//based upon switch statement

let day ;

switch(day){ // remember write s in small letter because it is case sensitive
    
    case "1":
        console.log("Today is Monday");
        break;
    case "2":
        console.log("Today is Tuesday");
        break;
    case "3":
        console.log("Today is Wednesday");              
        break;
    case "4":
        console.log("Today is Thursday");
        break;
    case "5":
        console.log("Today is Friday");
        break;
    case "6":
        console.log("Today is Saturday");
        break;
    case "7":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}

// out put mein default aayega because day ki value undefined hai aur koi case match nahi ho raha hai

// switch is used when we have to check multiple conditions based on the value of a variable
// switch is more efficient than if-else when we have to check multiple conditions based on the value of a variable

// if i wrote the code without break then it will execute all the cases after the matched case until it finds a break statement or end of switch statement

// if i wrote the code without default then it will not execute any case if no case matches the value of the variable

// if  i wrote day = '4' , now it shows the thrusday, otherwise write case 1 not case "1"

