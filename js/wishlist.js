window.onload = function () {
    try{
        //redesign the page
        const saletag=(tag,salePrice)=>{
            tag.textContent=`-${salePrice}%`;
            tag.style.backgroundColor="var(--Secondary-2, #DB4444)"
        };
        const topProducts=document.querySelectorAll(".product__top");
        [...topProducts].forEach((element,idx) => {
            const tag=element.querySelector(".tag");
            const icons=element.querySelector(".icons");
            const addButton=element.querySelector("button");
            if(idx!=0) tag.style.display='none';
            else saletag(tag,35);
            trashIcon=`<svg class="trash" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="17" fill="white"/>
            <path d="M25 10.5714H10.3333L11.6667 26H22.3333L23.6667 10.5714H9M17 14.4286V22.1429M20.3333 14.4286L19.6667 22.1429M13.6667 14.4286L14.3333 22.1429M14.3333 10.5714L15 8H19L19.6667 10.5714" stroke="black" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `;
            icons.innerHTML=trashIcon;
            addButton.style.display='flex';
        });
        const suggestedProducts=document.querySelectorAll(".suggestion__lists .product__top");
        [...suggestedProducts].forEach((element,idx) => {
            const tag=element.querySelector(".tag");
            const icons=element.querySelector(".icons");
            if(idx===0){
                tag.style.display='block';
                saletag(tag,35);
            }else if(idx===2){
                tag.style.display='block';
            }
            viewIcon=`<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `;
            icons.innerHTML=viewIcon;
        });
        //add heartNumber
        var heart=document.querySelector(".header .HeartIcons");
        var shoppingCart=document.querySelector(".header .CartIcons");
        var wishListCounter=document.querySelectorAll(".wish_list__content .product").length;
        var addNumber=0;
        loadWishListCounter();
        loadShoppingCartCounter();
        function loadWishListCounter(){
            if(!heart.classList.contains("active")) heart.classList.add("active");
            heart.setAttribute("data-count",`${wishListCounter}`);
        };
        function loadShoppingCartCounter(){
            if(!shoppingCart.classList.contains("active")) shoppingCart.classList.add("active");
            shoppingCart.setAttribute("data-count",`${addNumber}`);
        };
    }
    catch(e){
        console.log(e);
    }
    //app
    finally{
        //add to cart
        const addToCart=document.querySelectorAll(".product__top button");
        [...addToCart].forEach(button => {
            button.addEventListener("click",(e)=>{
                addNumber++;
                if(e.currentTarget.parentElement.parentElement.parentElement.matches(".wish_list__content")){ 
                    handleDelte();
                }
                loadShoppingCartCounter();
                e.currentTarget.parentElement.parentElement.remove();
                
            });
        });
        const wishList=document.querySelector(".wish_list");
        const wishlistProducts=wishList.querySelectorAll(".wish_list__content .product");
        //Move Wishlist to Bag
        wishList.addEventListener("click",(e)=>{
            if(e.target.matches(".button")){
                [...wishlistProducts].forEach(product=>{
                    product.remove();
                    handleDelte();
                    addNumber++;
                    loadShoppingCartCounter();
                });
            }
        });
        //Move Wishlist to Trash
        [...wishlistProducts].forEach(product=>{
            product.addEventListener("click",(e)=>{
                if(e.target.parentElement.matches(".trash")){
                    e.currentTarget.remove();
                    handleDelte();
                }
            });
        });
        function handleDelte(){
            if(wishListCounter>0){
                wishListCounter--;
                let wishListCounterElement=document.querySelector(".wish_list__top .title");
                wishListCounterElement.textContent=`Wishlist (${wishListCounter})`;
                loadWishListCounter()
            }
        };
        //See All
        const seeAll=document.querySelector(".title  .button");
        seeAll.addEventListener("click",(e)=>{
            const sgList=document.querySelector('.suggestion__lists');
            sgList.classList.toggle("suggestion__lists--active");
            e.target.textContent=e.target.textContent==="See All"?"See Less":"See All";
        });
    }
};
