// how to access the values inside the object

//object named. student 
const Student2 = { 
    useraname : "Aman",
    rollno : 24,
    marks : 95

};

//accessing 
Student["useraname"];
Student.useraname;

//even if we create a key as number, the number will be converted to string.
const apple = {
    1: "apple"
};

//apple[1] in console will show the 'apple'.

// using the dot operator apple.1 through an error "unexpected number".