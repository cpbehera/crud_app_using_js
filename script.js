const form = document.querySelector("form");
      const nameInput = document.querySelector("#name-input");
      const genderInput = document.querySelector("#gender-input");
      const elementsContainer = document.querySelector("#elements-container");
      const maleFilter = document.querySelector("#male-filter");
      const femaleFilter = document.querySelector("#female-filter");

      let elements = [];

      function createElement(name, gender) {
        const element = document.createElement("div");
        element.classList.add("elements");


        // creating div for name 
        const nameDiv = document.createElement("div");
        nameDiv.classList.add("nameElement")
        
        // creating div for gender 
        const genderDiv = document.createElement("div");
        genderDiv.classList.add("genderElement")




        // push input values to div
        nameDiv.innerHTML = `${name}`;
        genderDiv.innerHTML = `${gender}`;

        // creating delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("buttonElement");
        deleteButton.textContent = "Delete";


        deleteButton.addEventListener("click", () => {
          element.remove();
          elements = elements.filter((el) => el !== element);
        });

        // appending all elements to 
        
        element.appendChild(nameDiv);
        element.appendChild(genderDiv);
        element.appendChild(deleteButton);
        elementsContainer.appendChild(element);
        elements.push(element);
      }

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        let name = nameInput.value;
        let gender = genderInput.value;
            if(name != "" && gender != ""){
                if(name.length < 3){
                    alert("Name should be 3 or more characters");
                       
                }else{
                    createElement(name, gender);
                }
            }else{
                alert("Please enter values");
            }

           
      });

      function filterElements() {
        const selectedValue = document.querySelector(
          'input[name="gender-filter"]:checked'
        )?.value;
        elements.forEach((el) => {
          if (selectedValue && !el.textContent.includes(selectedValue)) {
            el.style.display = "none";
          } else {
            el.style.display = "flex";
          }
        });
      }

      maleFilter.addEventListener("change", filterElements);
      femaleFilter.addEventListener("change", filterElements);