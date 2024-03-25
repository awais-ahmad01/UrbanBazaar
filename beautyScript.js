
const beautyProducts = [
    {
        name: "brush",
        descrption: "Hammer Abaya For Girls",
        price: 1000,
        image: "images/beauty/brush.webp"
    }
    ,

    {
        name: "eyelens",
        descrption: "Wide Waist Belt for women & girls",
        price: 500,
        image: "images/beauty/eyelens.webp"
    },

    {
        name: "glowingSerum",
        descrption: "Shaheen Black Kolapuri Chappal",
        price: 4450,
        image: "images/beauty/glowingserum.webp"
    },

    {
        name: "Comb",
        descrption: "shefon hijab with attached cap",
        price: 1500,
        image: "images/beauty/hairdressingCombs.webp"
    },

    {
        name: "hairdryers",
        descrption: "Servis Shoes - Women",
        price: 2500,
        image: "images/beauty/hairDryer.webp"
    },

    {
        name: "lipstickpencil",
        descrption: "Shahin Star Swiss Lawn",
        price: 5500,
        image: "images/beauty/lipstickpencil.webp"
    },

    {
        name: "nailpaints",
        descrption: "Halah Sultan Summer Collection",
        price: 1000,
        image: "images/beauty/nailpaints.webp"
    },

    {
        name: "Oil",
        descrption: "T Shirt for women n girls",
        price: 500,
        image: "images/beauty/oil.webp"
    },

    {
        name: "shavingmachine",
        descrption: "Sting Berry Blast 300ml PET",
        price: 1000,
        image: "images/beauty/shavingMachine.webp"
    }
    ,

    {
        name: "brush",
        descrption: "Hammer Abaya For Girls",
        price: 1000,
        image: "images/beauty/brush.webp"
    }
    ,

    {
        name: "eyelens",
        descrption: "Wide Waist Belt for women & girls",
        price: 500,
        image: "images/beauty/eyelens.webp"
    },

    {
        name: "glowingSerum",
        descrption: "Shaheen Black Kolapuri Chappal",
        price: 4450,
        image: "images/beauty/glowingserum.webp"
    },

    {
        name: "Comb",
        descrption: "shefon hijab with attached cap",
        price: 1500,
        image: "images/beauty/hairdressingCombs.webp"
    },

    {
        name: "hairdryers",
        descrption: "Servis Shoes - Women",
        price: 2500,
        image: "images/beauty/hairDryer.webp"
    },

    {
        name: "lipstickpencil",
        descrption: "Shahin Star Swiss Lawn",
        price: 5500,
        image: "images/beauty/lipstickpencil.webp"
    },

    {
        name: "nailpaints",
        descrption: "Halah Sultan Summer Collection",
        price: 1000,
        image: "images/beauty/nailpaints.webp"
    },

    {
        name: "Oil",
        descrption: "T Shirt for women n girls",
        price: 500,
        image: "images/beauty/oil.webp"
    },

    {
        name: "shavingmachine",
        descrption: "Sting Berry Blast 300ml PET",
        price: 1000,
        image: "images/beauty/shavingMachine.webp"
    }

]

const beautyItemsContainer = document.querySelector('.items-list');


beautyProducts.forEach((product) =>{

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
        <a href="checkout.html"><h4>Shop Now</h4></a>
        </div>
    `

    beautyItemsContainer.appendChild(list);


})