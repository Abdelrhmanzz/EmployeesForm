

var empNameInput = document.getElementById("empName");
var empAgeInput = document.getElementById("empAge");
var empSalaryInput = document.getElementById("empSalary");
var empPhoneInput = document.getElementById("empPhone");
var submitBtn = document.getElementById("submitBtn");
var inputs = document.getElementsByClassName("form-control");
var empolyees;
var currentIndex;
submitBtn.setAttribute("disabled","true");

if(localStorage.getItem("employeesList")==null)
{
  empolyees=[];
}
else
{
  empolyees = JSON.parse(localStorage.getItem("employeesList"));
  displayData();
}
submitBtn.onclick = function()
{
  if(submitBtn.innerHTML=="Add Employee")
  {
    addEmpolyee();
  }
  else
  {
    editEmployee()
  }
  displayData();
  clearForm();
}
function addEmpolyee()
{
  var empolyee=
  {
    name:empNameInput.value,
    age:empAgeInput.value,
    salary:empSalaryInput.value,
    phone:empPhoneInput.value,
  }
  empolyees.push(empolyee);
  localStorage.setItem("employeesList",JSON.stringify(empolyees));
  
}
function displayData()
{
      var trs="";

      for(var i=0;i<empolyees.length;i++)
      {
        trs+=`<tr>
        <td>`+empolyees[i].name+`</td>
        <td>`+empolyees[i].age+`</td>
        <td>`+empolyees[i].salary+`</td>
        <td>`+empolyees[i].phone+`</td>
        <td><button onclick='getEmpolyee(`+i+`)' class='btn btn-warning'>edit</button></td>
        <td><button onclick='deleteEmpolyee(`+i+`)' class='btn btn-danger'>delete</button></td>
        </tr>`
      }
      document.getElementById("tableBody").innerHTML=trs;
}
function deleteEmpolyee(i)
{
    empolyees.splice(i,1);
    localStorage.setItem("employeesList",JSON.stringify(empolyees));
    displayData();

}
function clearForm()
{
  for(i=0;i<inputs.length;i++)
  {
    inputs[i].value="";
  }
}
function search(searchTxt)
{
  var trs="";

  for(var i=0;i<empolyees.length;i++)
  {
    if(empolyees[i].name.toLowerCase().includes(searchTxt.toLowerCase()))
    {
      trs+=`<tr>
        <td>`+empolyees[i].name+`</td>
        <td>`+empolyees[i].age+`</td>
        <td>`+empolyees[i].salary+`</td>
        <td>`+empolyees[i].phone+`</td>
        <td><button class='btn btn-warning'>edit</button></td>
        <td><button onclick='deleteEmpolyee(`+i+`)' class='btn btn-danger'>delete</button></td>
        </tr>`
    }
  }
  document.getElementById("tableBody").innerHTML=trs;
}
function getEmpolyee(i)
{
    var currentEmp= empolyees[i];
    empNameInput.value=currentEmp.name;
    empAgeInput.value=currentEmp.age;
    empSalaryInput.value=currentEmp.salary;
    empPhoneInput.value=currentEmp.phone;
    submitBtn.innerHTML="Edit Employee";
    currentIndex=i;
}
function editEmployee()
{
  var empolyee=
  {
    name:empNameInput.value,
    age:empAgeInput.value,
    salary:empSalaryInput.value,
    phone:empPhoneInput.value,
  }
  empolyees[currentIndex]=empolyee;
}

var nameAlert=document.querySelector(".alert-name");

empNameInput.addEventListener("keyup",function(){
  var nameRejex=/^[A-Z][a-z]{2,7}$/ ;
  

  if(nameRejex.test(empNameInput.value))
  {
    empNameInput.classList.add("is-valid");
    empNameInput.classList.remove("is-invalid");
    submitBtn.removeAttribute("disabled");
    nameAlert.style.display="none";
  }
  else
  {
    empNameInput.classList.add("is-invalid");
    empNameInput.classList.remove("is-valid");
    submitBtn.setAttribute("disabled","true");
    nameAlert.style.display="block";

  }
})

var ageAlert=document.querySelector(".alert-age");

empAgeInput.addEventListener("keyup",function(){
  var ageRejex=/^[2-5][1-9]$/ ;
  

  if(ageRejex.test(empAgeInput.value))
  {
    empAgeInput.classList.add("is-valid");
    empAgeInput.classList.remove("is-invalid");
    submitBtn.removeAttribute("disabled");
    ageAlert.style.display="none";
  }
  else
  {
    empAgeInput.classList.add("is-invalid");
    empAgeInput.classList.remove("is-valid");
    submitBtn.setAttribute("disabled","true");
    ageAlert.style.display="block";

  }
})

var salaryAlert=document.querySelector(".alert-salary");

empSalaryInput.addEventListener("keyup",function(){
  var salaryRejex=/^[0-9]{4,5}$/ ;
  

  if(salaryRejex.test(empSalaryInput.value))
  {
    empSalaryInput.classList.add("is-valid");
    empSalaryInput.classList.remove("is-invalid");
    submitBtn.removeAttribute("disabled");
    salaryAlert.style.display="none";
  }
  else
  {
    empSalaryInput.classList.add("is-invalid");
    empSalaryInput.classList.remove("is-valid");
    submitBtn.setAttribute("disabled","true");
    salaryAlert.style.display="block";

  }
})

var phoneAlert=document.querySelector(".alert-phone");

empPhoneInput.addEventListener("keyup",function(){
  var phoneRejex=/^(002)?01[0125][0-9]{8}$/ ;
  
  if(phoneRejex.test(empPhoneInput.value))
  {
    empPhoneInput.classList.add("is-valid");
    empPhoneInput.classList.remove("is-invalid");
    submitBtn.removeAttribute("disabled");
    phoneAlert.style.display="none";
  }
  else
  {
    empPhoneInput.classList.add("is-invalid");
    empPhoneInput.classList.remove("is-valid");
    submitBtn.setAttribute("disabled","true");
    phoneAlert.style.display="block";

  }
})


 