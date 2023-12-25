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
//  currentProductSizes.forEach((size, index)=>{
//     size.addEventListener("click", () => {
//         currentProductSizes.forEach((size)=>{
//             size.style.backgroundColor="white";
//             size.style.color="black";  
//         });
//     size.style.backgroundColor="black";
//     size.style.color="white";
//     });
//  }) ;
 
 const buyNow=document.querySelector(".buyNow");
 const payment=document.querySelector(".payment");
 const close=document.querySelector(".close");

 buyNow.addEventListener("click", ()=> {
    payment.style.display="flex";
 });
 close.addEventListener("click", () => {
    payment.style.display="none";
 })


