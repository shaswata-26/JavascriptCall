let name = {
    fname: "Anjali",
    Lname: "Bana",
   
};
let a= function() {
    console.log(this.fname + " " +this. Lname);
}
 // Output: Anjali Bana

let name2 = {
    fname: "KATI",
    Lname: "Banda"
};

a.call(name2); // Output: KATI Banda
a.call(name);