document.addEventListener('DOMContentLoaded', function(){

    const products = [
        {
            id: "1",
            name: "sting",
            descrption: "Sting Berry Blast 300ml PET",
            price: 150,
            image: "images/sting.jpg"
        }
        ,
    
        {
            id: "2",
            name: "shoe",
            descrption: "Sting Berry Blast 300ml PET",
            price: 1500,
            image: "images/shoe.jpg"
        },
    
        {
            id: "3",
            name: "jacket",
            descrption: "Sting Berry Blast 300ml PET",
            price: 4450,
            image: "images/jacket.jpg"
        },
    
        {
            id: "4",
            name: "watch",
            descrption: "Sting Berry Blast 300ml PET",
            price: 1500,
            image: "images/watch.webp"
        },
    
        {
            id: "4",
            name: "airpods",
            descrption: "Sting Berry Blast 300ml PET",
            price: 2500,
            image: "images/airpods.webp"
        },
    
        {
            id: "5",
            name: "solar",
            descrption: "Sting Berry Blast 300ml PET",
            price: 5500,
            image: "images/solar.png"
        },
    
        {
            id: "6",
            name: "usbp",
            descrption: "Sting Berry Blast 300ml PET",
            price: 1000,
            image: "images/usbsp.jpg"
        },
    
        {
            id: "7",
            name: "lipstick",
            descrption: "Sting Berry Blast 300ml PET",
            price: 500,
            image: "images/lipstick.webp"
        },
    
        {
            id: "8",
            name: "shoe",
            descrption: "Sting Berry Blast 300ml PET",
            price: 1500,
            image: "images/shoe.jpg"
        },
    
        {
            id: "9",
            name: "sting",
            descrption: "Sting Berry Blast 300ml PET",
            price: 150,
            image: "images/sting.jpg"
        }
    
    
    
    
    
    ];

    if (window.location.pathname.includes('index.html')) {
        // JavaScript code specific to the index.html page
        const dealsItemsContainer = document.querySelector('.items-list');

        if (dealsItemsContainer) {
            products.forEach((product) => {
                const list = document.createElement('li');
                list.classList.add("item");

                list.innerHTML = `
                    <img src="${product.image}" alt="">
                    <div class="item-detail">
                        <div class="item-title">
                            <p>${product.descrption}</p>
                        </div>
                        <div class="item-price">
                            Rs. ${product.price}
                        </div>
                    </div>
                    <div class="shop">
                        <a href="shoppingcart.html?productId=${product.id}"><h4>Shop Now</h4></a>
                    </div>
                `;

                dealsItemsContainer.appendChild(list);
            });
        }
    } 
    else if (window.location.pathname.includes('shoppingcart.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('productId');
        const selectedProduct = products.find(product => product.id === productId);
        const productDetailsContainer = document.querySelector('.product-details');
        const checkoutContainer = document.querySelector('.shoppingCart-container');
        const emptyCheckoutContainer = document.querySelector('.shoppingCart-empty');

        if (selectedProduct && productDetailsContainer) {
            productDetailsContainer.innerHTML = `
                <div class="product-list">
                    <div class="product-img">
                        <img src="${selectedProduct.image}" alt="">
                    </div>
                    <div class="title-price">
                        <div class="item-title">
                            <p>${selectedProduct.descrption}</p>
                        </div>
                        <div class="item-price">
                            <p>Rs. ${selectedProduct.price}</p>
                        </div>
                    </div>
                </div>
            `;

            checkoutContainer.style.display = 'block';
            emptyCheckoutContainer.style.display = 'none';
        }

        const decrementButton = document.getElementById('decrement');
        const incrementButton = document.getElementById('increment');
        const quantitySpan = document.getElementById('quantity');
        const totalPrice = document.getElementById('total-price');

        let productPrice = selectedProduct.price;
        totalPrice.innerText = productPrice;
        

        decrementButton.addEventListener('click', function() {

                let currentQuantity = parseInt(quantitySpan.innerText);
                if (currentQuantity > 1) {

                    quantitySpan.innerText = currentQuantity - 1;


                    let currentTotal = parseInt(totalPrice.innerText);
                    totalPrice.innerText = currentTotal-productPrice;
                }
            
            // if (parseInt(quantityInput.value) > parseInt(quantityInput.min)) {
            //     quantityInput.value = parseInt(quantityInput.value) - 1;
            // }
        });


        incrementButton.addEventListener('click', function() {

            let currentQuantity = parseInt(quantitySpan.innerText);
            if(currentQuantity < 10){
                quantitySpan.innerText = currentQuantity + 1;


                let currentTotal = parseInt(totalPrice.innerText);
                totalPrice.innerText = currentTotal + productPrice;

            }
            // if (parseInt(quantityInput.value) < parseInt(quantityInput.max) || !quantityInput.max) {
            //     quantityInput.value = parseInt(quantityInput.value) + 1;
            // }
        });


    }
});
