export function loadAbout() {
    const contentDiv = document.getElementById("content");  
    contentDiv.innerHTML = "";  

    const aboutDiv = document.createElement("div");
    aboutDiv.className = "aboutDiv";

    const aboutHeading = document.createElement("h1");
    aboutHeading.className = "aboutHeading";
    aboutHeading.textContent = "Welcome to Five Bros!";

    const aboutDescription = document.createElement("p");
    aboutDescription.className = "aboutDescription";
    aboutDescription.textContent = "At Five Bros, we’re passionate about crafting mouthwatering burgers made from the freshest ingredients. Our mission is to deliver an unforgettable burger experience that keeps our customers coming back for more.";

    const historyHeading = document.createElement("h2");
    historyHeading.className = "historyHeading";
    historyHeading.textContent = "Our Story";

    const historyDescription = document.createElement("p");
    historyDescription.className = "historyDescription";
    historyDescription.textContent = "Five Bros was founded in 2015 by a group of burger enthusiasts who believed that everyone deserves a great burger. Starting as a small food truck in a bustling city, we quickly gained a loyal following thanks to our unique flavors and commitment to quality. Today, we’ve expanded into a chain of restaurants across multiple countries, serving millions of customers each year.";

    const growthHeading = document.createElement("h2");
    growthHeading.className = "growthHeading";
    growthHeading.textContent = "Our Growth";

    const growthDescription = document.createElement("p");
    growthDescription.className = "growthDescription";
    growthDescription.textContent = "From our humble beginnings, we’ve grown exponentially. In just a few years, Five Bros has opened over 100 locations across the globe, with a presence in countries including the USA, Canada, the UK, and Australia. We pride ourselves on maintaining the same high standards of quality and service, no matter where you enjoy our burgers.";

    const presenceHeading = document.createElement("h2");
    presenceHeading.className = "presenceHeading";
    presenceHeading.textContent = "A Global Brand";

    const presenceDescription = document.createElement("p");
    presenceDescription.className = "presenceDescription";
    presenceDescription.textContent = "With our continued expansion, Five Bros is dedicated to bringing our delicious burgers to even more communities around the world. We believe in the power of good food to bring people together, and we strive to create a welcoming environment in every location we serve.";

    const keyPoints = document.createElement("ul");
    keyPoints.className = "keyPoints";
    const points = [
        "100% Fresh, Never Frozen Beef",
        "Handcrafted Burgers Made to Order",
        "Locally Sourced Ingredients",
        "Friendly, Fast Service",
        "A Family-Friendly Atmosphere"
    ];
    
    points.forEach(point => {
        const listItem = document.createElement("li");
        listItem.textContent = point;
        keyPoints.appendChild(listItem);
    });

    aboutDiv.appendChild(aboutHeading);
    aboutDiv.appendChild(aboutDescription);
    aboutDiv.appendChild(historyHeading);
    aboutDiv.appendChild(historyDescription);
    aboutDiv.appendChild(growthHeading);
    aboutDiv.appendChild(growthDescription);
    aboutDiv.appendChild(presenceHeading);
    aboutDiv.appendChild(presenceDescription);
    aboutDiv.appendChild(keyPoints);

    // Final append to content div
    contentDiv.appendChild(aboutDiv);
}
