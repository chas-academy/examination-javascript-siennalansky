

let inkomstButton = document.getElementById("incomeBtn");
let utgiftButton = document.getElementById("expenseBtn");
let utgifterList = document.getElementById("expenseList");
let inkomstList = document.getElementById("incomeList");
let totalSaldo = document.getElementById("balance");
let inputItem = document.getElementById("desc");
let inputBelopp = document.getElementById("amount");



const utgifter = [];
const inkomster = [];

let saldo = 0;

//Button for ugifter

utgiftButton.addEventListener("click", () =>{

  
    const newUtgift = inputBelopp.value;
    const newItem = inputItem.value;
    
    

    // kolla att bada falt fylls i 

    if ( newUtgift === "" || newItem === "") {
        alert("Both input fields must be filled in");
        return;
    }

    //add array

    utgifter.push(`${newItem} - ${newUtgift} kr (Utgift)`);
    shwoUtgifter();

     //subtract utgiftbelopp from totalsaldo

     let utgiftNumber = Number(newUtgift);

     saldo -= utgiftNumber;
     totalSaldo.textContent = saldo.toString();

     //ränsa fält
     inputBelopp.value = "";
     inputItem.value = "";

});

   

  // create and show list item  


function shwoUtgifter(){

    utgifterList.innerHTML = "";

    for (let utgift of utgifter) {

        const listItem = document.createElement("li");
        listItem.innerHTML = utgift;
        utgifterList.appendChild(listItem);
    }
}

// Button for inkomster

inkomstButton.addEventListener("click", () =>{

    const newInkomst = inputBelopp.value;
    const newItem = inputItem.value;

    //kolla att bada ar ifyllda

    if (newInkomst === "" || newItem === ""){
        alert("Both input fields must be filled in");
        return;

    }

    //add array

    inkomster.push(`${newItem} - ${newInkomst} kr (Inkomst)`);
    showInkomster();

    // add inkomstbelopp to totalsaldo

       let inkomstNumber = Number(newInkomst);
        saldo += inkomstNumber;
       totalSaldo.textContent = saldo.toString();

        //ränsa fält
     inputBelopp.value = "";
     inputItem.value = "";

});

    // create list item  


function showInkomster() {
    inkomstList.innerHTML = "";

    for (let inkomst of inkomster) {

        const listItem = document.createElement("li");
        listItem.innerHTML = inkomst;
        inkomstList.appendChild(listItem);
    }
}






