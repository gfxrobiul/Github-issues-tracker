let allIssues = []; 

const loadIssues = () =>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res=> res.json())
    .then(data =>{
        allIssues = data.data;
        displayButtons();
       console.log(allIssues);
    })
};

//  new functions for tabs btn
const displayButtons = () =>{
    //1. get the container 
    const btnContainer = document.getElementById("btn-container");
    btnContainer.innerHTML = " ";

    const tabs = ["All", "Open", "Closed"];

    // 2. get the every buttons 
    for (const tab of tabs) {
        
        // 3. create element 
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
      <button id="${tab}" onclick="filterIssues('${tab}')" class="btn btn-outline btn-primary">
        ${tab}
      </button> 
        `;
    
        btnContainer.append(btnDiv);
    };
    document.getElementById("All").classList.remove("btn-outline");

};

// filter the btn 

const filterIssues = (tab) =>{
    document.getElementById("All").classList.add("btn-outline");
    document.getElementById("Open").classList.add("btn-outline");
    document.getElementById("Closed").classList.add("btn-outline");

    document.getElementById(tab).classList.remove("btn-outline");

    if (tab === "All") {
        console.log("All Issues", allIssues);
        return;
    }
    const result = allIssues.filter((item) => item.status === tab.toLowerCase());
    console.log(tab+ "Issues", result);
};



loadIssues();