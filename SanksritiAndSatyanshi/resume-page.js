let allResume;

function fetchEverything(){
    fetch("./Data.json")
    .then((response) => response.json())
    .then((data) => {
        allResume=data;        
    navigationHandler(allResume);  
    });       
}

