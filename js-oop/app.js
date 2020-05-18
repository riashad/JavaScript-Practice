const productList = {
    products: [
        {
            title: 'A Smart Phone.',
            imageUrl: 'https://i.pcmag.com/imagery/reviews/03xdTO0Ka4H4KvEgtSPg4c2-12..v_1569479325.jpg',
            price:59.99,
            description:'Nice Smart Phone'
        },
        {
            title: 'A Smart Watch.',
            imageUrl: 'https://image.made-in-china.com/2f0j00pPvUVrlKhWoB/Z6-Smart-Watch-Bluetooth-3-0-Support-SIM-TF-Card-Camera-Call-Heart-Rate-Pedometer-Sport-Modes-Smartwatch.jpg',
            price:29.99,
            description:'Great Smart Watch'
        }
    ],

    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button> Add to Cart </button>
                </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();