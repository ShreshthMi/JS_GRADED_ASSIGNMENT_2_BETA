let resumeIndex;
let displayResumeArray;
let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");
function navigationHandler(resumeArray) {
  nextButton.classList.remove("hidden");
  previousButton.classList.remove("hidden");

  if (resumeArray.resume.length == 1) {
    nextButton.classList.add("hidden");
    previousButton.classList.add("hidden");
  } else {
    previousButton.classList.add("hidden");
  }

  showResults(resumeArray.resume[0]);
  resumeIndex = 0;
  setResumeArray(resumeArray);
}

function onNext() {
  resumeIndex++;
  previousButton.classList.remove("hidden");
  let currentArray = getResumeArray();

  if (resumeIndex < currentArray.resume.length) {
    showResults(currentArray.resume[resumeIndex]);
  }
  if (resumeIndex == currentArray.resume.length - 1) {
    nextButton.classList.add("hidden");
  }
}

function onPrevious() {
  let currentArray = getResumeArray();
  nextButton.classList.remove("hidden");

  if (resumeIndex > 0) {
    resumeIndex--;

    showResults(currentArray.resume[resumeIndex]);
  }
  if (resumeIndex == 0) {
    previousButton.classList.add("hidden");
  }
}

function getResumeArray() {
  return displayResumeArray;
}

function setResumeArray(resumeArray) {
  displayResumeArray = resumeArray;
}