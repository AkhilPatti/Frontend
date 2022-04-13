let Employees=[
{
    department: "IT",
    email: "anthoby@gmail.com",
    firstName: "Anthony",
    jobTitle: "SharePoint Practice Head",
    lastName: "Morris",
    office: "Seatle",
    phNo: "9440322211",
    id:1,
    preferredName: "Anthony Morris",
    skypeId: "1231231234",
imageUrl:"Data/images/Image1.jfif"},

{department: "IT",
email: "Helen@gmail.com",
firstName: "Helen",
jobTitle: "Business Analyst",
lastName: "Zimmerman",
office: "Seatle",
phNo: "9986963695",
id:2,
preferredName: "Helen Zimmerman",
skypeId: "asd@789",
imageUrl:"Data/images/Image2.jfif"},

{department: "IT",
email: "Smith@gmail.com",
firstName: "Jonathon",
jobTitle: "Product Manager",
lastName: "Smith",
office: "Seatle",
phNo: "9989563695",
id:3,
preferredName: "Jonathon Smith",
skypeId: "wehr@789",
imageUrl:"Data/images/Image3.jfif"},

{department: "IT",
email: "Tami@gmail.com",
firstName: "Tami",
jobTitle: ".NetDevelopment Lead",
lastName: "Hopkins",
office: "India",
phNo: "99255245",
id:4,
preferredName: "Tami Hopkins",
skypeId: "Tomi@skype",
imageUrl:"Data/images/Image4.jfif"},

{department: "IT",
email: "Frankin@gmail.com",
firstName: "Frankin",
jobTitle: "Network Engineer",
lastName: "Humark",
office: "Seatle",
phNo: "8878945123",
id:5,
preferredName: "Frankin Humark",
skypeId: "Frankin@123",
imageUrl:"Data/images/Image5.jfif"},

{department: "HR",
email: "Angela@gmail.com",
firstName: "Angela",
jobTitle: "Operations Manager",
lastName: "Bailey",
office: "India",
phNo: "9898452541",
id:6,
preferredName: "Angela Bailey",
skypeId: "Angela@skype",
imageUrl:"Data/images/Image6.jfif"},

{
    department: "IT",
    email: "Robert@yahoo.com",
    firstName: "Robert",
    jobTitle: "Software Engineer",
    lastName: "Mitchell",
    office: "India",
    phNo: "9923451575",
    id:7,
    preferredName: "Robert Mitchell",
    skypeId: "Robert@skype",
    imageUrl:"Data/images/Image7.jfif",},

{department: "IT",
email: "Oliva@gmail.com",
firstName: "Oliva",
jobTitle: "UI Developer",
lastName: "Watson",
office: "India",
phNo: "9735157595",
id:8,
preferredName: "Oliva Watson",
skypeId: "Oliva@skype",
imageUrl:"Data/images/Image8.jfif",}];
var idCount=9;
var searchResult = document.getElementById("SearchResult");
var flexy = document.getElementById('alphabets');
var searchWord=document.getElementById("SearchWord");
var Id;
var DepartmentIds=["IT","HR","MD","Sales"];
var OfficeIds=["India","Seatle"];
var JobTitleIds=["SharePointPracticeHead",".NetDevelopmentLead","RecruitingExpert","BIDev","BusinessAnalyst","OperationsManager","UIDeveloper","ProductManager","NetworkEngineer","SoftwareEngineer"];
//Styling Aside Content
var prevDepartment=undefined;
var ITCount=7;
var HRCount=1;
var MDCount=0;
var SalesCount=0;
var SeatleCount=4;
var IndiaCount=4;
var SharePointCount=1;
var DotNetDevCount=1;
var RecruitingExpertCount=0;
var BIDevCount=0;
var BussinessAnalystCount=1;
var OperationsManagerCount=1;
var UIDevCount=1;
var ProductManagerCount=1;
var NetworkEngineerCount=1;
var SoftwareEngineerCount=1;

DepartmentIds.forEach(departmentId=>{
    var department =document.getElementById(departmentId);
    
    department.onclick=function(){UpdateDepartment(department)};
    console.log(departmentId);
    if(departmentId=="IT")
    {
        department.innerText+="("+ITCount+")";
    }
    else if(departmentId=="HR")
    {
        department.innerText+="("+HRCount+")";
    }
    else if(departmentId="MD")
    {
        department.innerText+="("+MDCount+")";
    }
    else if(departmentId="Sales")
    {
        department.innerText+="("+SalesCount+")";
    }
    
});
var prevOffice=undefined;
OfficeIds.forEach(officeId=>{
    console.log(officeId);
    var office =document.getElementById(officeId);
    office.onclick=function(){UpdateOffice(office)};
    if(officeId=="Seatle")
    {office.innerText+="("+SeatleCount+")";}
    else if(officeId=="India")
    {office.innerText+="("+IndiaCount+")";}
});
var prevJobTitle=undefined;
JobTitleIds.forEach(jobTitleId=>{
    var jobTitle =document.getElementById(jobTitleId);
    jobTitle.onclick=function(){UpdateJobTitle(jobTitle);};
    console.log(jobTitleId);
        if(jobTitleId=="SharePointPracticeHead")
        {jobTitle.innerText+="("+SharePointCount+")";}
        else if(jobTitleId==".NetDevelopmentLead")
        {jobTitle.innerText+="("+DotNetDevCount+")";}
        else if(jobTitleId=="RecruitingExpert")
        {jobTitle.innerText+="("+RecruitingExpertCount+")";}
        else if(jobTitleId=="BIDev")
        {jobTitle.innerText+="("+BIDevCount+")";}
        else if(jobTitleId=="BusinessAnalyst")
        {jobTitle.innerText+="("+BussinessAnalystCount+")";}
        else if(jobTitleId=="OperationsManager")
        {jobTitle.innerText+="("+OperationsManagerCount+")";}
        else if(jobTitleId=="UIDeveloper")
        {jobTitle.innerText+="("+UIDevCount+")";}
        else if(jobTitleId=="ProductManager")
        {jobTitle.innerText+="("+ProductManagerCount+")";}
        else if(jobTitleId=="NetworkEngineer")
        {jobTitle.innerText+="("+NetworkEngineerCount+")";}
        else if(jobTitleId=="SoftwareEngineer")
        {jobTitle.innerText+="("+SoftwareEngineerCount+")";}
    
});
function ClearFilters()
{
    if(prevDepartment!=undefined){
    prevDepartment.style.color="black";
    prevDepartment=undefined;}
    if(prevJobTitle!=undefined){
    prevJobTitle.style.color="black";
    prevJobTitle=undefined;}
    if(prevOffice!=undefined){
    prevOffice.style.color="black";
    prevOffice=undefined;}
}
function UpdateDepartment(department)
{
    if(prevDepartment==department)
    {
        
        department.style.color="black";
        prevDepartment=undefined;
    }
    else{
        if (prevDepartment==undefined)
        {
            department.style.color="rgba(30, 173, 255, 0.74)";
        }
        else{
            
            department.style.color="rgba(30, 173, 255, 0.74)";
            prevDepartment.style.color="black";
        }
        prevDepartment=department;
    }
    
}
//.....
function UpdateOffice(office)
{
    if(prevOffice==office)
    {
        office.style.color="black";
        prevOffice=undefined;
    }
    else{
        if (prevOffice==undefined)
        {
            office.style.color="rgba(30, 173, 255, 0.74)";
        }
        else{
            
            office.style.color="rgba(30, 173, 255, 0.74)";
            prevOffice.style.color="black";
        }
    prevOffice=office;
    }
}
//..
function UpdateJobTitle(jobTitle)
{
    if(prevJobTitle==jobTitle)
    {
        jobTitle.style.color="black";
        prevJobTitle=undefined;
    }
    else{
        if (prevJobTitle==undefined)
        {
            jobTitle.style.color="rgba(30, 173, 255, 0.74)";
        }
        else{
            
            jobTitle.style.color="rgba(30, 173, 255, 0.74)";           
            prevJobTitle.style.color="black";
        }
        prevJobTitle=jobTitle;
    }
}
//..
function DisplayPage(employeeList){
    employeeList.forEach(employee => {
    
        var details=document.createElement('div');
        var name=document.createElement('p');
        name.style.fontWeight="bold";
        name.appendChild(document.createTextNode(employee["preferredName"]))
        details.appendChild(name);
        var jobTitle=document.createElement('p');
        jobTitle.style.marginBottom="0px";
        jobTitle.appendChild(document.createTextNode(employee["jobTitle"]))
        details.appendChild(jobTitle);
        var department=document.createElement('p');
        department.appendChild(document.createTextNode(employee["department"]+" Department"));
        department.style.marginTop="0px";
        department.style.marginBottom="0px";
        var icons=document.createElement('div');
        iconpics=['Data/images/call.png','Data/images/message.png','Data/images/popup.png','Data/images/star.png','Data/images/heart.png'];
        iconpics.forEach(iconurl=>
            {
                var icon=document.createElement('img');
                icon.src=iconurl;
                icon.style.height="10px;";
                icon.style.width="15px";
                icon.style.paddingRight="5px";
                icons.appendChild(icon);
            })
        details.appendChild(department);
        details.appendChild(icons);
        details.style.maxWidth="59%";
        
        let imageContainer=document.createElement('div');
        imageContainer.className="image-container";
        var img= document.createElement('img');
        img.src=employee.imageUrl;
        imageContainer.appendChild(img);
        empcard=document.createElement('div');
        empcard.appendChild(imageContainer);
        empcard.onclick=function(){
            EmployeeDetails(employee.id)};
        console.log(empcard);
        empcard.appendChild(details);
        empcard.className="flex-container";
        empcard.style.cursor="pointer";
        searchResult.appendChild(empcard);
    
    });}
var EmpInfo=document.getElementById("EmployeeInfo");
document.getElementById("InfoSubmitForm").onclick=function(){
    var firstName=document.getElementById("EmpFirstName");
    var lastName=document.getElementById("EmpLastName");
    var email=document.getElementById("EmpEmail");
    var jobTitle=document.getElementById("EmpJobTitle");
    var office=document.getElementById("EmpOffice");
    var department=document.getElementById("EmpDepartment");
    var phNo=document.getElementById("EmpPhoneNumber");
    var skypeId=document.getElementById("EmpSkypeId");
    if((!/^[A-Z]{0,1}[a-z]+$/.test(firstName.value)))
    {
        alert("Please Enter a valid First Name");
        return;
    }
    if((!/^[A-Z]{0,1}[a-z]+$/.test(lastName.value)))
    {
        alert("Please Enter a valid First Name");
        return;
    }
    if((!/^\w+\@\w+\.(com|co\.in)$/.test(email.value)))
    {
        alert("Please Enter a Valid Email Address");
        return;
    }
    if((!/^[0-9]+$/.test(phNo.value)))
    {
        alert("Please Enter a Valid Phone Number");
        return
    }
    console.log(jobTitle);
    Employees[Id-1]["firstName"]=firstName.value.trim();
    Employees[Id-1]["lastName"]=lastName.value.trim();
    Employees[Id-1]["preferredName"]=firstName.value.trim()+" "+lastName.value.trim();
    Employees[Id-1]["jobtitle"]=jobTitle.value;
    Employees[Id-1]["office"]=office.value;
    Employees[Id-1]["department"]=department.value;
    Employees[Id-1]["email"]=email.value;
    Employees[Id-1]["phNo"]=phNo.value;
    Employees[Id-1]["skypeId"]=skypeId.value;
    
    document.getElementById("form").reset();
    EmpInfo.style.display="none";
       
    DeleteChildren(searchResult);
    DisplayPage(Employees);
    Department=undefined;
    Office=undefined;
    JobTitle=undefined;
    console.log("finish");
}
//DeleteCHildren
var viewMore=document.getElementById("viewmore");
var viewLess=document.getElementById("viewless");
var AdditionalContent=document.getElementById("AddContent");
AdditionalContent.style.display="none";
viewMore.onclick=function(){
    viewMore.style.display="none";
    viewLess.style.display="block"
    AdditionalContent.style.display="block";
}
viewLess.onclick=function(){
    viewLess.style.display="none";
    viewMore.style.display="block"
    AdditionalContent.style.display="none";
}
//...
var CloseForm=document.getElementById("InfoCloseForm").onclick=function()
{
    EmpInfo.style.display="none";
}
    function EmployeeDetails(id)
{
    Id=id;
    console.log("This is me",id);
    var form = document.getElementById("EmployeeInfo");
    var empPhoto=document.querySelector("#EmployeePhoto>img")
    empPhoto.src=Employees[id-1]["imageUrl"];
    form.style.display="block";
    document.getElementById("EmpFirstName").value=Employees[id-1]["firstName"];
    document.getElementById("EmpLastName").value=Employees[id-1]["lastName"];
    document.getElementById("EmpEmail").value=Employees[id-1]["email"];
    document.getElementById("EmpJobTitle").value=Employees[id-1]["jobTitle"];
    document.getElementById("EmpOffice").value=Employees[id-1]["office"];
    document.getElementById("EmpDepartment").value=Employees[id-1]["department"];
    document.getElementById("EmpPhoneNumber").value=Employees[id-1]["phNo"];
    document.getElementById("EmpSkypeId").value=Employees[id-1]["skypeId"];

}
    //DisplayPage(Employees);
for(let i=65;i<91;i++)
{
    var element= document.createElement('li');
    element.appendChild(document.createTextNode(String.fromCharCode(i)));
    element.id=String.fromCharCode(i)
    element.addEventListener('click',UpdateSearchBar);
    flexy.appendChild(element);
}

function UpdateSearchBar(event)
{
    document.getElementById("SearchWord").value= document.getElementById("SearchWord").value+event.target.innerHTML;
    SearchBarFiltering();
}



//Searching using search Bar
var searchItem=document.getElementById("SearchItems");
var previousSearchItem=searchItem.value;
previousSearchItem=undefined;
searchItem.onclick=SearchBarFiltering()
function SearchBarFiltering()
{
    var currentSearchItem = searchItem.value;
    var searchResultItems=Employees.filter(s=>(s[currentSearchItem].toLowerCase().startsWith(searchWord.value.toLowerCase())));
    DeleteChildren(searchResult);
    DisplayPage(searchResultItems);
    ClearFilters();
    previousSearchItem=currentSearchItem;
}
function DeleteChildren(parent)
{
    while (parent.firstChild) {console.log(parent.firstChild);
    parent.removeChild(parent.firstChild);
}
}
var URL=undefined;
searchWord.addEventListener('input', SearchBarFiltering);
var image_input = document.querySelector("#image_input");
var upload_image="";
image_input.addEventListener('change',function(event){
    const reader=new FileReader();
    reader.addEventListener('load',()=>{
        upload_image=reader.result;
        document.querySelector("#display_image").src=upload_image;
        URL=reader.result;
    });
    reader.readAsDataURL(this.files[0]);
});
//Get Data URL
function GetDataURL()
{
    var imageInput=document.getElementById("image_input");
    const reader=new FileReader();
    var URL=undefined;
    reader.addEventListener('load',()=>{
        URL=reader.result;
        return URL;
    });
    reader.readAsDataURL((imageInput.files)[0]);
    
}
//Add Employee Form
var EmpForm=document.getElementById("AddEmployeeForm");
var AddEmpbtn=document.getElementById("AddEmployeeBtn");
AddEmpbtn.onclick=function()
{
    EmpForm.style.display="block";
}
document.getElementById("CloseForm").onclick=function()
{
        EmpForm.style.display="none";
}
//Clear
var clear=document.getElementById("ClearSearch");
clear.onclick=function()
{DeleteChildren(searchResult);
    DisplayPage(Employees);
}
//Employee Details
var submitForm=document.getElementById("SubmitForm");

submitForm.onclick=function()
{
    
    var firstName=document.getElementById("FirstName");
    var lastName=document.getElementById("LastName");
    var email=document.getElementById("Email");
    var jobTitle=document.getElementById("JobTitle");
    var office=document.getElementById("Office");
    var department=document.getElementById("Department");
    var phNo=document.getElementById("PhoneNumber");
    var skypeId=document.getElementById("SkypeId");
    if((!/^[A-Z]{0,1}[a-z]+$/.test(firstName.value)))
    {
        alert("Please Enter a valid First Name");
        return;
    }
    if((!/^[A-Z]{0,1}[a-z]+$/.test(lastName.value)))
    {
        alert("Please Enter a valid First Name");
        return;
    }
    if((!/^\w+\@\w+\.(com|co\.in)$/.test(email.value)))
    {
        alert("Please Enter a Valid Email Address");
        return;
    }
    if((!/^[0-9]+$/.test(phNo.value)))
    {
        alert("Please Enter a Valid Phone Number");
        return
    }
    DataURL=URL;
    URL=undefined;
    console.log('url'.URL);
    if(DataURL==undefined){DataURL="Data/images/Image.jpg";}
    let Employee={
        "firstName":firstName.value.trim(),
        "lastName":lastName.value.trim(),
        "preferredName":firstName.value.trim()+" "+lastName.value.trim(),
        "jobTitle":jobTitle.value,  
        "office":office.value,
        "department":department.value,
        "email":email.value,
        "phNo":phNo.value,
        "skypeId":skypeId.value,
        "imageUrl":DataURL,
        "id":idCount
    }
    if(office.value=="Seatle")
    {SeatleCount+=1;
        let sc=document.getElementById("Seatle");
        sc.innerText=sc.innerText.slice(0,6)+'('+SeatleCount+')';
    }
    if(office.value=="India")
    {SeatleCount+=1;
        let sc=document.getElementById("India");
        sc.innerText=sc.innerText.slice(0,5)+'('+IndiaCount+')';
    }
    idCount+=1;
    Employees.push(Employee);
    
    document.getElementById("form").reset();
    EmpForm.style.display="none";
    ClearFilters();
            
            DeleteChildren(searchResult);
            DisplayPage(Employees);
}

var Office=undefined;
var Department=undefined;
var JobTitle=undefined;

window.onclick=function(event)
{
    currentDepartment=undefined;
    currentOffice=undefined;
    currentJobTitle=undefined;
        if(event.target.id=="India")
        {
            currentOffice="India";
        }
        else if(event.target.id=="Seatle")
        {
            currentOffice="Seatle";   
        }
        else if(event.target.id=="HR")
        {
            currentDepartment="HR";   
        }
        else if(event.target.id=="MD")
        {
            currentDepartment="MD";   
        }
        else if(event.target.id=="Sales")
        {
            currentDepartment="Sales";   
        }
        else if(event.target.id=="IT")
        {
            currentDepartment="IT";
        }
        
        else if(event.target.id==".NetDevelopmentLead")
        {
            currentJobTitle=".NetDevelopment Lead";   
        }
        else if(event.target.id=="SharePointPracticeHead")
        {
            currentJobTitle="SharePoint Practice Head";
        }
        else if(event.target.id=="RecruitingExpert")
        {
            currentJobTitle="RecruitingExpert";
        }
        else if(event.target.id=="BIDev")
        {
            currentJobTitle="BI Developer";
        }
        else if(event.target.id=="BusinessAnalyst")
        {
            currentJobTitle="Business Analyst";
        }
        else if(event.target.id=="OperationsManager")
        {
            currentJobTitle="Operations Manager";
        }
        else if(event.target.id=="UIDeveloper")
        {
            currentJobTitle="UI Developer";
        }
        else if(event.target.id=="ProductManager")
        {
            currentJobTitle="Product Manager";
        }
        else if(event.target.id=="NetworkEngineer")
        {
            currentJobTitle="Network Engineer";
        }
        else if(event.target.id=="SoftwareEngineer")
        {
            currentJobTitle="Software Engineer";
        }
        else
        {
            
            return;
        }
        if (currentDepartment==Department)
        {
            Department=undefined;
        }
        else
        {
            if(currentDepartment!=undefined)
            Department=currentDepartment;
        }
        if (currentJobTitle==JobTitle)
        {
            JobTitle=undefined;
        }
        else
        {
            if(currentJobTitle!=undefined)
            JobTitle=currentJobTitle
        }
        if (currentOffice==Office)
        {
            Office=undefined;
        }
        else
        {
            if(currentOffice!=undefined)
            Office=currentOffice;
        }
        
    if(JobTitle==undefined && Department==undefined && Office==undefined)
    {
        DeleteChildren(searchResult);
        DisplayPage(Employees);
        return;
    }
    
    var FilteredEmployees=[]
    Employees.forEach(
        employee=>{
            let k=0;
            if(Department!=undefined){if(employee["department"]==Department)
                {k+=1;
                    
                }}
            else{k+=1;}
                if(Office!=undefined){if(employee["office"]==Office)
                {
                    k+=1;
                    
                }}
                else{k+=1;}
                if(JobTitle!=undefined){if(employee["jobTitle"]==JobTitle)
                {k+=1;
                    
                }
            }
                else{k+=1;}
        
        if(k==3)
        {
            FilteredEmployees.push(employee);
        }
    }
    );
    DeleteChildren(searchResult);
    DisplayPage(FilteredEmployees);
    
}
//....