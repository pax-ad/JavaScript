let colors = "red";

switch(colors){
    case "red":
        console.log("YOU HAVE TO STOP !");
        break;
    case "yellow":
        console.log( " You have to wait for the green light to go");
        break;
    case "green":
        console.log("You can go now");
        break;
    default:
        console.log("Invalid color");
}

// switch is used when we have to check multiple conditions based on the value of a variable
// switch is more efficient than if-else when we have to check multiple conditions based on the value of a variable       
