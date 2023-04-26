function showResults(resume) {
  clearResults();
  let nameElem = document.querySelector(".name");
  const name = resume.basics.name;
  nameElem.innerText = name;

  let AppliedForElem = document.querySelector(".AppliedFor");
  const AppliedFor = `<b>Applied For :  </b> ${resume.basics.AppliedFor}`;
  AppliedForElem.innerHTML = AppliedFor;

  const personalInfoList = document.querySelector(".personal-info-list");

  const phone = resume.basics.phone;
  const phoneListItem = document.createElement("p");
  phoneListItem.innerText = phone;
  personalInfoList.appendChild(phoneListItem);

  const email = resume.basics.email;
  const emailListItem = document.createElement("p");
  emailListItem.innerText = email;
  personalInfoList.appendChild(emailListItem);

  const link = resume.basics.profiles.url;
  const linkedInListItem = document.createElement("p");
  linkedInListItem.innerHTML = `<a href="${link}">LinkedIn</a>`;
  personalInfoList.appendChild(linkedInListItem);

  for (i = 0; i < resume.skills.keywords.length; i++) {
    techlist = document.querySelector(".technical-skills-list");
    let p = document.createElement("p");
    p.innerText = `${resume.skills.keywords[i]}`;
    techlist.appendChild(p);
  }

  for (i = 0; i < resume.interests.hobbies.length; i++) {
    hobbieslist = document.querySelector(".hobbies-list");
    let p = document.createElement("p");
    p.innerText = `${resume.interests.hobbies[i]}`;
    hobbieslist.appendChild(p);
  }

  let companyNameElem = document.querySelector(".CompanyName");
  const companyName = `${resume.work["Company Name"]}`;
  companyNameElem.innerText = companyName;

  let StartDateElem = document.querySelector(".StartDate");
  const startDate = `${resume.work["Start Date"]}`;
  StartDateElem.innerText = startDate;

  let EndDateElem = document.querySelector(".EndDate");
  const endDate = `${resume.work["End Date"]}`;
  EndDateElem.innerText = endDate;

  let PositionElem = document.querySelector(".Position");
  const Position = `${resume.work.Position}`;
  PositionElem.innerText = Position;

  let SummaryElem = document.querySelector(".Summary");
  const summary = `${resume.work.Summary}`;
  SummaryElem.innerText = summary;

  let ProjectDescElem = document.querySelector(".ProjectNameDesc");
  ProjectDescElem.innerHTML = `<b>${resume.projects.name}:</b>${resume.projects.description}`;

  let UGElem = document.querySelector(".UG");
  UGElem.innerHTML = `${resume.education.UG.institute}, ${resume.education.UG.course}, ${resume.education.UG["Start Date"]}, ${resume.education.UG["End Date"]}, ${resume.education.UG.cgpa}`;

  let PUElem = document.querySelector(".PU");
  PUElem.innerHTML = `${resume.education["Senior Secondary"].institute}, ${resume.education["Senior Secondary"].cgpa}`;
  let HSElem = document.querySelector(".HS");
  HSElem.innerHTML = `${resume.education["High School"].institute}, ${resume.education["High School"].cgpa}`;

  let ICompanyNameElem = document.querySelector(".ICompanyName");
  const ICompanyName = `${resume.Internship["Company Name"]}`;
  ICompanyNameElem.innerText = ICompanyName;

  let IPositionElem = document.querySelector(".IPosition");
  IPositionElem.innerHTML = `${resume.Internship.Position}`;

  let IStartDateElem = document.querySelector(".IStartDate");
  const IStartDate = `${resume.Internship["Start Date"]}`;
  IStartDateElem.innerText = IStartDate;

  let IEndDateElem = document.querySelector(".IEndDate");
  const IEndDate = `${resume.Internship["End Date"]}`;
  IEndDateElem.innerText = IEndDate;

  let ISummaryElem = document.querySelector(".ISummary");
  const ISummary = `${resume.Internship.Summary}`;
  ISummaryElem.innerText = ISummary;

  for (i = 0; i < resume.achievements.Summary.length; i++) {
    achievelist = document.querySelector(".ASummary");
    let li = document.createElement("li");
    li.innerText = `${resume.achievements.Summary[i]}`;
    achievelist.appendChild(li);
  }
}