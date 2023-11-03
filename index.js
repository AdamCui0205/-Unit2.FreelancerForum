const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  //1* we need to build a structrue; h1: Freelancer Forum; h3: The average starting price is $30; h1: Available Freelancers;
  //h1:name; ul; li1 Alice; li: Bob; li: Carol

  //createelement
const body = document.body;
const createH1 = document.createElement("h1");
const createP = document.createElement("p");
const createH2 = document.createElement("h2")
const createDiv = document.createElement("div")
const createNameUl = document.createElement("ul")
const createNameli1 = document.createElement("li")
const createNameli2 = document.createElement("li")
const createNameli3 = document.createElement("li")
const createOccupationUl = document.createElement("ul")
const createOccupationli1 = document.createElement("li")
const createOccupationli2 = document.createElement("li")
const createOccupationli3 = document.createElement("li")
const createStartPriceUl = document.createElement("ul")
const createStartPriceli1 = document.createElement("li")
const createStartPriceli2 = document.createElement("li")
const createStartPriceli3 = document.createElement("li")




//give the elements content
createH1.textContent = 'Freelancer Forum';
createP.textContent = "The average starting price is $30.";
createH2.textContent = "Available Freelancers";
createNameUl.textContent = "Name";
createNameli1.textContent = "Alice"; 
createNameli2.textContent = "Bob";
createNameli3.textContent = "Carol";
createOccupationUl.textContent = "Occupation";
createOccupationli1.textContent = "Writer";
createOccupationli2.textContent = "Teacher";
createOccupationli3.textContent = "Programmer";
createStartPriceUl.textContent = "Starting Price";
createStartPriceli1.textContent = "$30";
createStartPriceli2.textContent = "$50";
createStartPriceli3.textContent = "$70";


//style and append
body.setAttribute("style", "border: 1px solid black; width: 30%; align-content: center;")
createH1.setAttribute("style", "text-align: center; font-size: 2.6rem;")
createP.setAttribute("style", "text-align: center; font-size: 1.6rem;")
createH2.setAttribute("style", "text-align: center; font-size: 2rem;")
createDiv.setAttribute("style", "display: flex;")
body.appendChild(createH1)
body.appendChild(createP)
body.appendChild(createH2)
body.appendChild(createDiv)
createDiv.appendChild(createNameUl)
createDiv.appendChild(createOccupationUl)
createDiv.appendChild(createStartPriceUl)
createNameUl.appendChild(createNameli1)
createNameUl.appendChild(createNameli2)
createNameUl.appendChild(createNameli3)
createOccupationUl.appendChild(createOccupationli1)
createOccupationUl.appendChild(createOccupationli2)
createOccupationUl.appendChild(createOccupationli3)
createStartPriceUl.appendChild(createStartPriceli1)
createStartPriceUl.appendChild(createStartPriceli2)
createStartPriceUl.appendChild(createStartPriceli3)




  //element content

  //setArribute--edit style // createElement--create element in html // document.querySelectorAll--select element in html // getElementById --select specific element with input id

