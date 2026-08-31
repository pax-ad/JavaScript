let student = {
    name:"aman",
    eng:98,
    phy:99,
    chem:80,

     getAvgfunc(){let s = (eng+phy+chem)/3;
       console.log(`Your avg is ${s}`);
     },
   // this func won't be able to get the values

    //use of this
     getAvvg() {
        let s = ((this.eng + this.phy + this.chem)/3);
        console.log(`Your avg is ${s}`);
    }
}

function getAvg() {
    console.log(this);
}
