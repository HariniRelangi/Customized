const wrapper=document.querySelector(".sliderWrapper");
const menuItems=document.querySelectorAll(".menuItem");

const products=[
    {
        id:1,
        title:"Thread Bangles",
        price:300,
        desc:"Kundan silk Thread Bangles",
        colors:[
            {
                code:"Green",
                img:"./img/TB2.png",
            },
            {
                code:"Deekpink",
                img:"./img/TB4.png",
            },
        ],
    },
    {
        id:2,
        title:"Embroidary Gifts",
        price:1000,
        desc:"wonderful embroidary gift articles",
        colors:[
            {
                code:"red",
                img:"./img/G1.png",
            },
            {
                code:"beige",
                img:"./img/G2.png",
            },
        ],
    },
    {
        id:3,
        title:"lipon Articles",
        price:900,
        desc:"Mirror design Lipon aticles",
        colors:[
            {
                code:"orange",
                img:"./img/LA1.png",
            },
            {
                code:"yellow",
                img:"./img/LA2.png",
            },
        ],
    },
    {
        id:4,
        title:"Home Decoratives",
        price:500,
        desc:"Beautiful decorative bottles for home",
        colors:[
            {
                code:"Blue",
                img:"./img/D1.png",
            },
            {
                code:"crimson",
                img:"./img/D2.png",
            },
        ],
        
    },
];
let choosenProduct=products[0];


const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductDesc=document.querySelector(".productDesc");
// const currentProductSizes=document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
         //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

         //change the choosen product
        choosenProduct=products[index];

        //change texts of currentproduct
        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent="$"+choosenProduct.price;
        currentProductImg.src=choosenProduct.colors[0].img;
        currentProductDesc.textContent=choosenProduct.desc;

        //assign new colors
        currentProductColors.forEach((color, index)=> {
            color.style.backgroundColor=choosenProduct.colors[index].code;
        });
    });
});

        currentProductColors.forEach((color,index) => {
            color.addEventListener("click", () => {
                currentProductImg.src=choosenProduct.colors[index].img;
            });
        });
 
 const buyNow=document.querySelector(".buyNow");
 const payment=document.querySelector(".payment");
 const close=document.querySelector(".close");

 buyNow.addEventListener("click", ()=> {
    payment.style.display="flex";
 });
 close.addEventListener("click", () => {
    payment.style.display="none";
 })

 const loginNow=document.querySelector(".loginNow");
 const login2=document.querySelector(".login2");
 const close1=document.querySelector(".close1");
 const signupNow=document.querySelector(".signupNow");
 const signup2=document.querySelector(".signup2");
 const close2=document.querySelector(".close2");

 loginNow.addEventListener("click", ()=> {
    login2.style.display="flex";
 });
 close1.addEventListener("click", ()=>{
    login2.style.display="none";
 });
 signupNow.addEventListener("click", ()=>{
    signup2.style.display="flex";
 });
 close2.addEventListener("click", ()=>{
    signup2.style.display="none";
 });

// code for cart
 
const product=[
    {
        id:0,
        image:'./img/TB6.png',
        title:'Thread Bangles',
        price:300,
    },
    {
        id:1,
        image:'img/G3.png',
        title:'Embroidary Gift',
        price:600,
    },
    {
        id:2,
        image:'img/LA3.png',
        title:'Lipon Article',
        price:600,
    },
    {
        id:3,
        image:'img/D5.png',
        title:'Decoratives',
        price:400,
    },    
    {
        id:4,
        image:'img/TB7.png',
        title:'Thread Bangles',
        price:300,
    },
    {
        id:5,
        image:'img/G4.png',
        title:'Embroidary Gift',
        price:800,
    },
    {
        id:6,
        image:'img/LA4.png',
        title:'Lipon Article',
        price:1000,
    },
    {
        id:7,
        image:'img/D6.png',
        title:'Decoratives',
        price:400,
    },
    {
        id:8,
        image:'img/TB8.png',
        title:'Thread Bangles',
        price:250,
    },
    {
        id:9,
        image:'img/G5.png',
        title:'Embroidary Gift',
        price:900,
    },
    {
        id:10,
        image:'img/LA5.png',
        title:'Lipon Article',
        price:900,
    },
    {
        id:11,
        image:'img/D7.png',
        title:'Decoratives',
        price:300,
    },
];
const categories=[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>
    {
        var {image, title, price}=item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>`+
                    "<button class='cart-button' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
            </div>` 
        )
    }).join('')

var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a){
    let j=0 ,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById("cartItem").innerHTML="Your cart is empty";
        document.getElementById("total").innerHTML="$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((items)=>
        {
            var {image, title, price}=items;
            total= total+price;
            document.getElementById("total").innerHTML="$ "+total+".00";
            return(
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:20px;'>${title}</p>
                    <h2 style='font-size:17px;'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
            );
        }).join('')
    }
}
const checkOut=document.querySelector(".checkOut");

 checkOut.addEventListener("click", ()=> {
    payment.style.display="flex";
 });
