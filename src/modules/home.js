import burgerImage from '../assets/images/burger.png';
import { loadMenu } from './menu';
export function loadHome() {
    const contentDiv= document.getElementById("content");
    contentDiv.innerHTML= "";

    const heroDiv= document.createElement("div");
    heroDiv.className= "heroDiv";

    const leftContainer= document.createElement("div");
    leftContainer.className= "leftContainer";

    const welcomeText= document.createElement("h1");
    welcomeText.className= "welcomeText";
    welcomeText.textContent = "Welcome to Five Bros";
    leftContainer.appendChild(welcomeText);

    const orderButton= document.createElement("button");
    orderButton.className= "orderButton";
    orderButton.textContent= "ORDER NOW !";
    leftContainer.appendChild(orderButton);

    heroDiv.appendChild(leftContainer);

    const rightContainer= document.createElement("div");
    rightContainer.className= "rightContainer";

    const burger= document.createElement("img");
    burger.src= burgerImage;
    burger.alt= "Image of a burger";
    burger.className= "burgerImage";
    rightContainer.appendChild(burger);

    heroDiv.appendChild(rightContainer);

    contentDiv.appendChild(heroDiv);

    //grid
    const gridContainer= document.createElement("div");
    
    function createGrid(rows, cols) {
        const totalItems= rows * cols;
        gridContainer.style.display= "grid";
        gridContainer.style.gridTemplateColumns= `repeat(${cols}, 1fr)`;
        
        const itemsContent= [
            {
                heading: "Find a location",
                text: "Discover the nearest Five Bros to you.",
                buttonText: "Locate Us",
                buttonaction: () => alert("Finding location..."),
                image: null,
            }, 
            {
                heading: "Click and Collect",            
                text: "Order ahead and skip the line.",            
                buttonText: "Order Now",            
                buttonAction: () => alert("Ordering..."),            
                image: "",
            }, 
            {
                heading: "Delivery",            
                text: "Enjoy Five Bros at home with our delivery service.",            
                buttonText: "Order Delivery",            
                buttonAction: () => alert("Ordering for delivery..."),            
                image: "path/to/delivery-image.png",
            }, 
            {
                heading: "Sign Up",            
                text: "Join our email list for exclusive offers.",            
                buttonText: "Sign Up",            
                buttonAction: () => alert("Signing up..."),            
                image: "path/to/signup-image.png",
            },
            {
                heading: "New Drop!",
                text: "Check out our latest addition!",
                buttonText: "See New Item",
                buttonAction: () => alert("Viewing new item..."),
                image: "path/to/new-item-image.png",
            },
            {
                heading: "Jobs",
                text: "Join our team at Five Bros.",
                buttonText: "View Openings",
                buttonAction: () => alert("Viewing job openings..."),
                image: "path/to/jobs-image.png",
            },
            {
                heading: "Quality ingredients for quality burgers.",
                text: null,
                buttonText: null, 
                buttonAction: null,
                image: null,
            },
            {
                heading: "Our delicious burgers are waiting for you.",
                text: null,
                buttonText: "View Menu",
                buttonAction: loadMenu,
                image: "path/to/picture-image.png",
            },
            {
                heading: "Experience the Five Bros difference.",
                text: null,
                buttonText: null, 
                buttonAction: null,
                image: null, 
            },
            {
                heading: "Taste the freshness!",
                text: null,
                buttonText: null,
                buttonAction: null,
                image: null,
            },
        ]

        for (let i= 0; i < totalItems; i++) {
            const gridItem= document.createElement("div");
            gridContainer.classList.add("grid-container");
            gridItem.classList.add("grid-item");
            gridItem.id = `item-${i + 1}`;            
            gridContainer.appendChild(gridItem);


            if (itemsContent[i]) {
                const content= itemsContent[i]; 

                const heading= document.createElement("h3");
                heading.textContent= content.heading;
                gridItem.appendChild(heading);

                const text= document.createElement("p");
                text.textContent= content.text;
                gridItem.appendChild(text);

                if (content.image) {
                    gridItem.style.backgroundImage = `url(${content.image})`;
                    gridItem.style.backgroundSize = 'cover'; 
                    gridItem.style.backgroundPosition = 'center'; 
                    gridItem.style.backgroundRepeat = 'no-repeat';
                }

                console.log(`Item ${i + 1}:`, content);
                if (content.buttonText) {
                    const button = document.createElement("button");
                    button.textContent = content.buttonText;
                    button.onclick = content.buttonAction; 
                    gridItem.appendChild(button);
                }
            }
        }
    }

    createGrid(5, 2);
    contentDiv.appendChild(gridContainer);
};