const noResume = document.getElementById('noResult');
noResume.classList.add('hidden');
    let counter =0;


        
let inputElem = document.getElementById("searchResume")
inputElem.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        console.log("Hi")
        
       
        fetchData(e.target.value)
    }
})
function fetchData(val) {
    
    fetch('./Data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const inputValue = document.getElementById('searchResume').value.toLowerCase();
            const filteredData = data.resume.filter(item => item.basics.AppliedFor.toLowerCase().includes(inputValue));
            filteredData.forEach(item =>{
                console.log("reached FilteredData")
                
            showResults(item)
            counter+=1;
        })
        if(counter == 0) {
            noResume.classList.remove('hidden');
        }
        })
        
}

function showResults(item) {
    let nameElem = document.querySelector(".name")
    const name= ` ${item.basics.name}`;
    nameElem.textContent = name

   


    let AppliedForElem = document.querySelector(".AppliedFor")
    const AppliedFor=`Applied For : ${item.basics.AppliedFor}`;
    AppliedForElem.innerText = AppliedFor

    let phoneElem = document.querySelector(".phone")
    const phone=item.basics.phone;
    phoneElem.innerText=phone

    let emailElem=document.querySelector(".email")
    const email=item.basics.email;
    emailElem.innerText=email



/*
    const skills=item.skills.keywords;
    const list = document.createElement('ul');

    // Loop through the skills array and create an HTML list item for each skill
    for (let i = 0; i < skills.length; i++) {

      let keywordVal=`.keyword${i}`
      let keywordElem=document.querySelector(keywordVal)
      console.log(keywordVal);
      console.log("skill ",skills[i]);
      keywordElem.innerText = `${skills[i]}`;
    }

    // Display the skills in the HTML list
    //document.getElementById('skills').appendChild(list);
    let skillsElem=document.querySelector(".keyword1")
    skillsElem.innerText=list  */

    /*const myLink = document.getElementById('myLink');
    const url=item.basics.profiles.url;
    myLink.href = url;
    myLink.innerHTML = 'LinkedIn';
   
*/
     let companyNameElem=document.querySelector(".CompanyName")
    const companyName=`Company Name: ${item.work["Company Name"]}`;
    companyNameElem.innerText=companyName


  
    
    let StartDateElem=document.querySelector(".StartDate")
    const startDate= `Start Date: ${item.work["Start Date"]}`;
    StartDateElem.innerText= startDate

    let EndDateElem=document.querySelector(".EndDate")
    const endDate=`End Date: ${item.work["End Date"]}`;
    EndDateElem.innerText=endDate

    let PositionElem=document.querySelector(".Position")
    const Position=`Position : ${item.work.Position}`;
    PositionElem.innerText=Position

    
    let SummaryElem=document.querySelector(".Summary")
    const summary=`Summary : ${item.work.Summary}`;
    SummaryElem.innerText=summary

    

    
    let ProjectDescElem=document.querySelector(".ProjectNameDesc")
    ProjectDescElem.innerHTML=`<b>${item.projects.name} : </b>${item.projects.description}`;
    

    let UGElem=document.querySelector(".UG")
    UGElem.innerHTML=`<b>UG :</b> ${item.education.UG.institute}, ${item.education.UG.course}, ${item.education.UG["Start Date"]}, ${item.education.UG["End Date"]}, ${item.education.UG.cgpa}`;
    
    let PUElem=document.querySelector(".PU")
    PUElem.innerHTML=`<b>PU :</b> ${item.education["Senior Secondary"].institute}, ${item.education["Senior Secondary"].cgpa}`;




    
    
    let ICompanyNameElem=document.querySelector(".ICompanyName")
    const ICompanyName=`Company Name: ${item.Internship["Company Name"]}`;
    ICompanyNameElem.innerText=ICompanyName

    let IPositionElem=document.querySelector(".IPosition")
    IPositionElem.innerHTML=`<b>Position : </b> ${item.Internship.Position}`
    

  
    
    let IStartDateElem=document.querySelector(".IStartDate")
    const IStartDate= `Start Date: ${item.Internship["Start Date"]}`;
    IStartDateElem.innerText= IStartDate

    let IEndDateElem=document.querySelector(".IEndDate")
    const IEndDate=`End Date: ${item.Internship["End Date"]}`;
    IEndDateElem.innerText=IEndDate


    
    let ISummaryElem=document.querySelector(".ISummary")
    const ISummary=`Summary : ${item.Internship.Summary}`;
    ISummaryElem.innerText=ISummary;
    
   let ASummaryElem=document.querySelector(".ASummary")
   ASummaryElem.innerHTML=`<ul><li> ${item.achievements.Summary}</li></ul>`

}

