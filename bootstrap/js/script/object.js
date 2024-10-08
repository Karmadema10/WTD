let cat = { name: "baby", color: "golden brown" , age: 21}
let dog = new Object();
dog.bread = "bull";
dog.name = "khamtu";
dog.isVaccinated = true;

document.grtElementById("para1").innerHTML = "bread: " + dog.bread + "<br>name" + dog["name"];
console.log(dog);
delete dog