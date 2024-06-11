let name = {
    fname: "Anjali",
    Lname: "Bana",
    A: function() {
        console.log(this.fname + " " + this.Lname);
    }
};

name.A(); // Output: Anjali Bana

let name2 = {
    fname: "KATI",
    Lname: "Banda"
};

name.A.call(name2); // Output: KATI Banda
