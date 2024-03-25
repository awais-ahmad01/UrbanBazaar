
const womensProducts = [
    {
        name: "abaya",
        descrption: "Hammer Abaya For Girls",
        price: 1000,
        image: "images/womenFashion/abaya.webp"
    }
    ,

    {
        name: "belt",
        descrption: "Wide Waist Belt for women & girls",
        price: 500,
        image: "images/womenFashion/belt.webp"
    },

    {
        name: "chappal",
        descrption: "Shaheen Black Kolapuri Chappal",
        price: 4450,
        image: "images/womenFashion/chappal.webp"
    },

    {
        name: "hijab",
        descrption: "shefon hijab with attached cap",
        price: 1500,
        image: "images/womenFashion/hijab.jpg"
    },

    {
        name: "shoes",
        descrption: "Servis Shoes - Women",
        price: 2500,
        image: "images/womenFashion/shoes.webp"
    },

    {
        name: "suit",
        descrption: "Shahin Star Swiss Lawn",
        price: 5500,
        image: "images/womenFashion/suit.webp"
    },

    {
        name: "suit3",
        descrption: "Halah Sultan Summer Collection",
        price: 1000,
        image: "images/womenFashion/suit3.webp"
    },

    {
        name: "Tshirt",
        descrption: "T Shirt for women n girls",
        price: 500,
        image: "images/womenFashion/Tshirt.webp"
    },

    {
        name: "abaya",
        descrption: "Sting Berry Blast 300ml PET",
        price: 1000,
        image: "images/womenFashion/abaya.webp"
    }
    ,

    {
        name: "belt",
        descrption: "Sting Berry Blast 300ml PET",
        price: 500,
        image: "images/womenFashion/belt.webp"
    },


    {
        name: "abaya",
        descrption: "Hammer Abaya For Girls",
        price: 1000,
        image: "images/womenFashion/abaya.webp"
    }
    ,

    {
        name: "belt",
        descrption: "Wide Waist Belt for women & girls",
        price: 500,
        image: "images/womenFashion/belt.webp"
    },

    {
        name: "chappal",
        descrption: "Shaheen Black Kolapuri Chappal",
        price: 4450,
        image: "images/womenFashion/chappal.webp"
    },

    {
        name: "hijab",
        descrption: "shefon hijab with attached cap",
        price: 1500,
        image: "images/womenFashion/hijab.jpg"
    },

    {
        name: "shoes",
        descrption: "Servis Shoes - Women",
        price: 2500,
        image: "images/womenFashion/shoes.webp"
    },

    {
        name: "suit",
        descrption: "Shahin Star Swiss Lawn",
        price: 5500,
        image: "images/womenFashion/suit.webp"
    },

    {
        name: "suit3",
        descrption: "Halah Sultan Summer Collection",
        price: 1000,
        image: "images/womenFashion/suit3.webp"
    },

    {
        name: "Tshirt",
        descrption: "T Shirt for women n girls",
        price: 500,
        image: "images/womenFashion/Tshirt.webp"
    },

    {
        name: "abaya",
        descrption: "Sting Berry Blast 300ml PET",
        price: 1000,
        image: "images/womenFashion/abaya.webp"
    }
    ,

    {
        name: "belt",
        descrption: "Sting Berry Blast 300ml PET",
        price: 500,
        image: "images/womenFashion/belt.webp"
    }

]

const womensItemsContainer = document.querySelector('.items-list');


womensProducts.forEach((product) =>{

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

    womensItemsContainer.appendChild(list);


})