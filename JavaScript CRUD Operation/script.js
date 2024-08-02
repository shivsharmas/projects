function validateForm(){

    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contactNumber").value;
    
    var dob = document.getElementById("dob").value;
    var hobbies = document.getElementById("hobbies").value;
    var gender = document.getElementsByName("gender").value;
    
    

    if(name==""  ){
        alert("Name is required");
        return false;
    }

    if(age= ""){
        alert("Age is required");
        return false;
    }



    if(address==""){
    
    alert("address is required");
    return false;

    }

    if (email == "" || !email.includes("@gmail.com")) {
        alert("Invalid email address");
        return false;
    }

    if(contact ==="" ){

        alert("Contact Number is mandatory")
    }
    

    if(dob===""){
    
        alert("DOB is required");
        return false;
    
        }



        if(gender==""){
    
            alert("gender value is required");
            return false;
        
            }

            if(hobbies==""){
    
                alert("hobbies is required");
                return false;
            
                }

    return true;

}


function calculateAge() {
    var dob = document.getElementById("dob").value;
    var dobDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();

    if(monthDiff < 0 || (monthDiff ===0 && today.getDate() < dobDate.getDate() )){
        age--;
    }
    document.getElementById("age").value = age;
}


// loads all data from local storage 

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null ){
        peopleList = [];
    }

    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html = "";

    // peopleList.forEach(function (element, index){

    //     html += "<tr>";
    //     html += "<td>" + index + 1 +"</td>";
    //     html += "<td>" + element.name + "</td>";
    //     html += "<td>" + element.age + "</td>";
    //     html += "<td>" + element.address + "</td>";
    //     html += "<td>" + element.email + "</td>";
    //     html += "<td>" + element.dob + "</td>";
    //     html += "<td>" + element.hobbies + "</td>";
    //     html += "<td>" + element.gender + "</td>";
        

    //     html += '<td><button onclick="deleteData('+
    //      index + 
    //      ')" class="btn btn-danger" />Delete</button> <button onclick="updateData(' + 
    //      index + 
    //      ')" class="btn btn-warning m-2"> Edit </button> </td>';

    //      html+= "</tr>";

        
    // });

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + (index + 1) + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.contactNumber + "</td>";
        html += "<td>" + element.dob + "</td>";
        html += "<td>" + element.hobbies + "</td>";
        html += "<td>" + element.gender + "</td>";
                
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button>';
        html += '<button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
    
        html += "</tr>";
    });
    





    document.querySelector("#crudTable tbody").innerHTML = html;
}

    // Loads all the data when document or page loaded

    document.onload = showData();


    // function to add data

    function AddData(){
        // if form is validate
        if(validateForm() == true){

            var id = Date.now();
            var name = document.getElementById("name").value;
            var age = document.getElementById("age").value;
            var address = document.getElementById("address").value;
            var email = document.getElementById("email").value;
            var contactNumber = document.getElementById("contactNumber").value;
            var dob = document.getElementById("dob").value;
            var hobbies = document.getElementById("hobbies").value;
           
            // Get selected gender value
        var gender;
        var genderOptions = document.getElementsByName("gender");
        for (var i = 0; i < genderOptions.length; i++) {
            if (genderOptions[i].checked) {
                gender = genderOptions[i].value;
                break;
            }
        }

            var peopleList;
            if(localStorage.getItem("peopleList") == null) {
                peopleList = [];
            }else{
                peopleList = JSON.parse(localStorage.getItem("peopleList"));

          }

          peopleList.push({
            id: id,
            name: name,
            age: age,
            address: address,
            email: email,
            contactNumber : contactNumber,
            dob: dob,
            hobbies: hobbies,
            gender: gender

             
          });

          localStorage.setItem("peopleList", JSON.stringify(peopleList));

          showData();
          document.getElementById("name").value = "";
          document.getElementById("age").value = "";
          document.getElementById("address").value = "";
          document.getElementById("email").value = "";
          document.getElementById("contactNumber").value = "";
          document.getElementById("dob").value = "";
          document.getElementById("hobbies").value = ""; 

          document.getElementById("male").checked = false;
          document.getElementById("female").checked = false;
          document.getElementById("others").checked = false; 

            $(function(){
                toastr.success("Data Saved Successfully", {timeOut : 2000})
            });
        
    
        } 
    }
    

    // function to delete data from local storage

    function deleteData(index){

        var peopleList;
        if(localStorage.getItem("peopleList") == null ){
            peopleList = [];
        }else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.splice(index, 1);
        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();

        $(function(){
            toastr.success("Data Deleted", {timeOut : 2000})
           


        });
    }


    // function to update or edit

    function updateData(index){

        // submit button will  hide and update button will show for updating of data in localstorage
        document.getElementById("submit").style.display = "none";
        document.getElementById("update").style.display = "block"

        var peopleList;
        if(localStorage.getItem("peopleList") == null ){
            peopleList = [];
        }else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        document.getElementById("name").value = peopleList[index].name;
        document.getElementById("age").value = peopleList[index].age;
        document.getElementById("address").value = peopleList[index].address;
        document.getElementById("email").value = peopleList[index].email;
        document.getElementById("contactNumber").value = peopleList[index].contactNumber;
        document.getElementById("dob").value = peopleList[index].dob;
        document.getElementById("hobbies").value = peopleList[index].hobbies;
        document.getElementsByName("gender").value = peopleList[index].gender;
        

        document.querySelector('#update').onclick = function() {
            if(validateForm() == true){
                peopleList[index].name = document.getElementById("name").value;
               peopleList[index].age = document.getElementById("age").value;
                peopleList[index].address = document.getElementById("address").value;
                peopleList[index].email = document.getElementById("email").value;
                peopleList[index].contactNumber = document.getElementById("contactNumber").value;
                peopleList[index].dob = document.getElementById("dob").value;
                peopleList[index].hobbies = document.getElementById("hobbies").value;
                peopleList[index].gender = document.getElementsByName("gender").value;
                

                localStorage.setItem("peopleList", JSON.stringify(peopleList));

                showData();

                $(function(){
                    toastr.success("Update Successfully", {timeOut : 2000})
        
        
                });

                document.getElementById("name").value = "";
                document.getElementById("age").value = "";
                document.getElementById("address").value = "";
                document.getElementById("email").value = "";
                document.getElementById("contactNumber").value = "";
                document.getElementById("dob").value = "";
                document.getElementById("hobbies").value = "";
                document.getElementByName("gender").value = "";
                

        // update  button will  hide and submit button will show for updating of data in localstorage
                document.getElementById("submit").style.display = "block";
                document.getElementById("update").style.display = "none";
        
            }
        }


    }



    // function searchData(){

    // }

   

    const searchData = () => {
        // Get the search input value and convert to uppercase for case-insensitive comparison
        let namefilter = document.getElementById("searchInput").value.replace(/\s+/g, '').toUpperCase();
        // let emailfilter = document.getElementById("searchInput").value.toUpperCase();
        // let contactfilter = document.getElementById("searchInput").value;
        let selectGender = document.getElementById("genderSelect").value.toUpperCase();
    
        // Get all rows from the table
        let myTable = document.getElementById("crudTable");
        let tr = myTable.getElementsByTagName("tr");
    
        // Convert tr HTMLCollection to array for easier manipulation
        let trArray = Array.from(tr);
    
        // Loop through each row and toggle visibility based on search input
        trArray.filter(row => {
            let tdName = row.getElementsByTagName("td")[1]; // Assuming search column is the 2nd column (index 1)
            let tdEmail = row.getElementsByTagName("td")[4]; // Assuming search column is the 5th column (index 4)
            let tdContact = row.getElementsByTagName("td")[5]; // Assuming search column is the 6th column (index 5)
            let tdGender = row.getElementsByTagName("td")[8]; // Assuming search column is the 9th column (index 8)




            if (tdName || tdEmail || tdContact || tdGender) {
                let textValue = (tdName.textContent || tdName.innerText).toUpperCase();
                let emailValue = (tdEmail.textContent || tdEmail.innerText).toUpperCase();;
                let contactValue = (tdContact.textContent || tdContact.innerText).toUpperCase();;
                let genderValue = tdGender.textContent || tdGender.innerText;
                // let rowValue = textValue.toUpperCase();
                // let rowValueEmail = emailValue.toUpperCase();
                // let rowValueContact = contactValue.toUpperCase();
                // let rowGender = genderValue.toUpperCase();
                
    
                // Check if the row value contains the filter text or if filter is empty
                // if ((rowValue.indexOf(namefilter) > -1 || namefilter === "" || rowValueEmail.indexOf(emailfilter) > -1 || emailfilter === "" || rowValueContact.indexOf(contactfilter) > -1 || contactfilter === "") && (selectGender === "" || rowGender === selectGender)) {
                //     row.style.display = ""; // Show the row
                // } else {
                //     row.style.display = "none"; // Hide the row
                // }


                if((textValue.includes(namefilter) || emailValue.includes(namefilter) || contactValue.includes(namefilter))  && (selectGender === "" || rowGender === selectGender)){
                    row.style.display = ""; // Show the row
                } else {
                    row.style.display = "none"; // Hide the row
                }

                //  // Check if the row gender matches the selected gender or if no option is selected
                //  if (selectGender === "" || rowGender === selectGender) {
                //     row.style.display = ""; // Show the row
                // } else {
                //     row.style.display = "none"; // Hide the row
                // }



            }
        });
    }
    