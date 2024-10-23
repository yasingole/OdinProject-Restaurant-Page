export function loadCareers() {
    const contentDiv= document.getElementById("content");
    contentDiv.innerHTML= "";

    const searchDiv= document.createElement("div");
    searchDiv.className= "searchDiv";

    const careersText= document.createElement("h1");
    careersText.className= "careersText";
    careersText.textContent = "JOIN THE FIVE BRO'S TEAM, WHERE GOOD FOOD AND  INCREDIBLE CAREERS AWAIT!";
    searchDiv.appendChild(careersText);

    const jobTitleDiv = document.createElement("div");
    jobTitleDiv.className = "jobTitleDiv";
    const jobTitleInput = document.createElement("input");
    jobTitleInput.type = "text";
    jobTitleInput.placeholder = "Enter job title and keyword";
    jobTitleDiv.appendChild(jobTitleInput);
    searchDiv.appendChild(jobTitleDiv);
    
    const locationTitleDiv = document.createElement("div");
    locationTitleDiv.className = "locationTitleDiv";
    const locationTitleInput = document.createElement("input");
    locationTitleInput.type = "text";
    locationTitleInput.placeholder = "Enter your location";
    locationTitleDiv.appendChild(locationTitleInput);
    searchDiv.appendChild(locationTitleDiv);
    
    const searchButton = document.createElement("button");
    searchButton.textContent = "Search Jobs";
    searchButton.className = "searchButton";
    searchDiv.appendChild(searchButton);
    
    const nearMeButton = document.createElement("button");
    nearMeButton.textContent = "Jobs Near Me";
    nearMeButton.className = "nearMeButton";
    searchDiv.appendChild(nearMeButton);

    contentDiv.appendChild(searchDiv);

    createGrid();


    function createGrid() {
        const gridContainer = document.createElement("div");
        gridContainer.className = "gridContainerCareer";

        const items = [
            { title: "Crew Member", description: "0 Vaccancies" },
            { title: "Shift Manager", description: "0 Vaccancies" },
            { title: "Assistant Manager", description: "0 Vaccancies" },
            { title: "Deputy General Manager", description: "0 Vaccancies"},
            { title: "General Manager", description: "0 Vaccancies"},
        ];

        items.forEach(item => {
            const gridItem = document.createElement("div");
            gridItem.className = "gridItemCareer";
            
            const title = document.createElement("h2");
            title.textContent = item.title;
            gridItem.appendChild(title);

            const description = document.createElement("p");
            description.textContent = item.description;
            description.className = "description";
            gridItem.appendChild(description);

            gridItem.addEventListener("mouseenter", () => {
                description.style.maxHeight = "100px";
            });
            gridItem.addEventListener("mouseleave", () => {
                description.style.maxHeight = "0"; 
            });
            gridContainer.appendChild(gridItem);
        });

        contentDiv.appendChild(gridContainer);
    }
    
};