export function loadMenu() {
    const contentDiv = document.getElementById("content");  
    contentDiv.innerHTML = "";  

    const menuDiv = document.createElement("div");
    menuDiv.className = "menuDiv";  

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our Menu";  
    menuTitle.className = "menuTitle";  
    menuDiv.appendChild(menuTitle);

   
    const tabContainer = document.createElement("div");
    tabContainer.className = "tabContainer"; 

    
    const categories = [
        { name: "Burgers", key: "burgers" },
        { name: "Glizzy's", key: "beefDogs" },  
        { name: "Sandwiches", key: "sandwiches" },
        { name: "Fries", key: "fries" },
        { name: "Milkshakes", key: "milkshakes" },
        { name: "Drinks", key: "drinks" }
    ];

    categories.forEach(category => {
        const tab = document.createElement("button");
        tab.textContent = category.name;  
        tab.className = "tabButton";  

        
        tab.addEventListener("click", () => {
            const targetElement = document.getElementById(category.key);
            const headerOffset = 140; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });

        tabContainer.appendChild(tab);  
    });
    menuDiv.appendChild(tabContainer);  

    const menuItems = {
        burgers: {
            title: "BURGERS",
            description: "Make your burger your own by choosing any or all of our 15 free toppings.",
            items: [
                { name: "Hamburger", description: "Two fresh high-quality beef patties hot off the grill, on a soft, toasted bun." },
                { name: "Cheeseburger", description: "Two fresh high-quality beef patties hot off the grill, with melted cheese on a soft, toasted bun." },
                { name: "Turkey Bacon Burger", description: "Two fresh high-quality beef patties hot off the grill, with two strips of crispy, smoked turkey bacon." },
                { name: "Turkey Bacon Cheeseburger", description: "Two fresh high-quality beef patties, melted cheese with two strips of crispy, smoked turkey bacon." }
            ],
            freeToppings: [
                "Lettuce", "Tomato", "Pickles", "Fresh Onions", "Jalapeño Peppers", "Green Peppers",
                "Grilled Mushrooms", "Grilled Onions", "Ketchup", "Mayo", "Mustard", "HP Sauce",
                "BBQ Sauce", "Hot Sauce", "Relish"
            ]
        },
        beefDogs: {
            title: "GLIZZY'S",  
            description: "Our All Beef Hot Dog, split and grilled for a caramelised exterior. Add up to 15 free toppings of your choice.",
            items: [
                { name: "All Beef Hot Dog", description: "Our All-beef Hotdog, split and grilled lengthwise for a caramelised finish." },
                { name: "Cheese Dog", description: "Our All-beef Hotdog, topped with a slice of melted cheese." },
                { name: "Turkey Bacon Dog", description: "Our All-beef Hotdog with a layer of crispy, smoked turkey bacon." },
                { name: "Turkey Bacon Cheese Dog", description: "Our All-beef Hotdog with a layer of melted cheese topped with crispy, smoked turkey bacon." }
            ],
            freeToppings: [
                "Lettuce", "Tomato", "Pickles", "Fresh Onions", "Jalapeño Peppers", "Green Peppers",
                "Grilled Mushrooms", "Grilled Onions", "Ketchup", "Mayo", "Mustard", "HP Sauce",
                "BBQ Sauce", "Hot Sauce", "Relish"
            ]
        },
        sandwiches: {
            title: "SANDWICHES",
            description: "For when you're hungry but don't fancy a burger. All customisable with up to 15 free toppings of your choice.",
            items: [
                { name: "BLT", description: "Crispy, smoked turkey bacon with fresh-cut tomato and cool, crunchy lettuce on a toasted bun." },
                { name: "Grilled Cheese", description: "Cheese melted on an inside-out bun. Toasted with a thin layer of mayo until golden brown." },
                { name: "Veggie Sandwich", description: "Lettuce, tomato, grilled onions, grilled mushrooms, and green peppers… plus any of our FREE toppings." },
                { name: "Veggie Sandwich with Cheese", description: "Lettuce, tomato, grilled onions, grilled mushrooms, green peppers, and melted cheese." }
            ],
            freeToppings: [
                "Lettuce", "Tomato", "Pickles", "Fresh Onions", "Jalapeño Peppers", "Green Peppers",
                "Grilled Mushrooms", "Grilled Onions", "Ketchup", "Mayo", "Mustard", "HP Sauce",
                "BBQ Sauce", "Hot Sauce", "Relish"
            ]
        },
        fries: {
            title: "FRIES",
            description: "Boardwalk-style. Hand cut from fresh potatoes, twice cooked in peanut oil.",
            items: [
                { name: "Five Bros Style", description: "Hot, fresh boardwalk-style fries. Cut fresh, cooked twice, and salted." },
                { name: "Cajun Style", description: "Our Five Bros fries with Cajun spice added." }
            ]
        },
        milkshakes: {
            title: "MILKSHAKES",
            description: "11 FREE mix-ins to customise your milkshake. A delicious addition to your burger and fries.",
            items: [
                { name: "Five Bros Shake", description: "11 FREE mix-ins to customise your shake." }
            ],
            freeMixIns: [
                "Popcorn", "Mango", "Oreo® Cookie Pieces", "Vanilla", "Chocolate", "Strawberry",
                "Biscoff®", "Peanut Butter", "Banana", "Salted Caramel", "Turkey Bacon"
            ]
        },
        drinks: {
            title: "DRINKS",
            items: [
                { name: "Coca-Cola Freestyle", description: "Unlimited refills from favourites, such as Coca-Cola, Fanta, Sprite, Dr Pepper, and more." },
                { name: "Smart Water", description: "600ml bottle" },
                { name: "Coke", description: "500ml bottle" },
                { name: "Diet Coke", description: "500ml bottle" },
                { name: "Coke Zero", description: "500ml bottle" },
                { name: "Sprite", description: "500ml bottle" },
                { name: "Fanta", description: "500ml bottle" },
                { name: "Dr Pepper", description: "500ml bottle" }
            ]
        }
    };


    categories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.id = category.key;  
        categoryDiv.className = "category-section";  

        const selectedCategory = menuItems[category.key]; 

        const titleDiv = document.createElement("h2");
        titleDiv.textContent = selectedCategory.title;
        categoryDiv.appendChild(titleDiv);

        const descriptionDiv = document.createElement("p");
        descriptionDiv.textContent = selectedCategory.description;
        categoryDiv.appendChild(descriptionDiv);

        selectedCategory.items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "menu-item";

        const itemName = document.createElement("span");  
        itemName.className = "menu-item-name";  
        itemName.textContent = item.name; 

        const itemDescription = document.createElement("span");  
        itemDescription.className = "menu-item-description";  
        itemDescription.textContent = item.description; 

        itemDiv.appendChild(itemName);  
        itemDiv.appendChild(itemDescription);  
        categoryDiv.appendChild(itemDiv);  
        });

        if (selectedCategory.freeToppings) {
            const toppingsDiv = document.createElement("div");
            toppingsDiv.innerHTML = `<h3>Free Toppings:</h3><p>${selectedCategory.freeToppings.join(', ')}</p>`;
            categoryDiv.appendChild(toppingsDiv);
        }

        menuDiv.appendChild(categoryDiv);
    });

    contentDiv.appendChild(menuDiv);
}
