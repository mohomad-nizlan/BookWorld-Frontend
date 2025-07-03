// JavaScript for categories page
function showCategory() {
    const category = document.getElementById('category-select').value;
    const categoryContent = document.getElementById('category-content');
    categoryContent.innerHTML = ''; // Clear previous content

    // Example items for each category
    const items = {
        'fiction': [
            { name: 'Book 1', description: 'Fictional book 1', price: '$10' },
            { name: 'Book 2', description: 'Fictional book 2', price: '$15' }
        ],
        'non-fiction': [
            { name: 'Book 3', description: 'Non-fiction book 1', price: '$20' },
            { name: 'Book 4', description: 'Non-fiction book 2', price: '$25' }
        ],
        'stationery': [
            { name: 'Notebook', description: 'A5 Notebook', price: '$5' },
            { name: 'Pen', description: 'Ballpoint Pen', price: '$2' }
        ],
        'gifts-cards': [
            { name: 'Greeting Card', description: 'Birthday card', price: '$3' },
            { name: 'Gift Wrap', description: 'Colorful wrap', price: '$1' }
        ]
    };

    if (items[category]) {
        items[category].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Price: ${item.price}</p>
                <button>Order Now</button>
            `;
            categoryContent.appendChild(itemDiv);
        });
    }
}
