

 let input = document.getElementsByClassName("input");


 let firstNameInput = input[0];
 let lastNameInput = input[1];
 let countryInput = input[2];
 let playerScoreInput = input[3];
 
 let addButton = input[4];
 
 addButton.addEventListener("click", () =>{
 
 let FirstName = firstNameInput.value.trim();
 let LastName = lastNameInput.value.trim();
 let country = countryInput.value.trim();
 let ScoreInput = playerScoreInput.value.trim();
 
 
 addPlayer(FirstName, LastName, country, ScoreInput);
 
 firstNameInput.value = "";
 lastNameInput.value = "";
 countryInput.value = "";
 playerScoreInput.value = "";
 })
 
 function Conditional(FirstName, LastName, country, ScoreInput) {
       if(FirstName === "" || LastName === "" || country === "" || ScoreInput === "") {
          
           return false;
       }else{
         return true;
       }
 }
 
 
 function addPlayer(FirstName, LastName, country, ScoreInput) {
 
 let valid = Conditional(FirstName, LastName, country, ScoreInput);
 
 if(valid === false) {
     return;
 }
 
 let userInformation = document.createElement("div");
 userInformation.setAttribute("class", "user_property")
 
 let container = document.getElementsByClassName("container")[0];
 container.appendChild(userInformation);

 let details = document.createElement("div");
 details.setAttribute("class", "details");
 
 let Tag1Name = document.createElement("p");
 Tag1Name.innerText = FirstName +" " + LastName ;
 
 
 let name = document.createElement('div');
 name.setAttribute("class", "name");
 name.appendChild(Tag1Name);

 let nameDate = document.createElement('div');
 nameDate.setAttribute("class", "name-date");
 nameDate.appendChild(name);
 details.appendChild(nameDate);
 

 let Dateuser = document.createElement("p");
 const tdate = new Date();
 let stdate= tdate[Symbol.toPrimitive]('string').slice(4, 21)
 Dateuser.innerText = stdate;
 Dateuser.setAttribute("class", "date-class")
 

 let date = document.createElement("div");
 date.setAttribute("class", "date")
 date.appendChild(Dateuser);
 nameDate.appendChild(date);

 let pTag1 = document.createElement("p");
 pTag1.innerText = country;
 details.appendChild(pTag1)
 
 let pTag2 = document.createElement("p");
 pTag2.innerText = ScoreInput;
 details.appendChild(pTag2)
 

 let button = document.createElement("div");
 button.setAttribute("class", "button")
 
 
 let incrementalValue = document.createElement("div");
 incrementalValue.setAttribute("class", "incrementalValueA");
 button.appendChild(incrementalValue);
 incrementalValue.innerHTML = "delete"
 
 let incrementalValueII = document.createElement("div");
 incrementalValueII.setAttribute("class", "incrementalValueA");
 button.appendChild(incrementalValueII);
 incrementalValueII.innerHTML = ` <p> +5 </p> `
 
 let incrementalValueIII = document.createElement("div");
 incrementalValueIII.setAttribute("class", "incrementalValueA");
 button.appendChild(incrementalValueIII);
 incrementalValueIII.innerHTML = ` <p> -5 </p> `
 
 userInformation.appendChild(details);
 userInformation.appendChild(button)
 
 
 
     let del = incrementalValue;
     del.addEventListener("click", () => {
          container.removeChild(userInformation);
     });

     let increment = incrementalValueII;
     increment.addEventListener("click", () => {
        let num =  Number(pTag2.innerText);
        num += 5; 
        pTag2.innerText = num;
     })

     let decrement = incrementalValueIII;
     decrement.addEventListener("click", () => {
         let num =  Number(pTag2.innerText);
         num -= 5; 
         pTag2.innerText = num;
      })
 }
 
 
 
 
 
  
 
 
 
 
 
 
 
 
 