topProducts=document.querySelectorAll(".wish_list__content .product__top");
[...topProducts].forEach((element,idx) => {
    const tag=element.querySelector(".tag");
    const icons=element.querySelector(".icons");
    const addButton=element.querySelector("button");
    if(idx!=0) tag.style.display='none';
    else{
        tag.textContent="-35%";
        tag.style.backgroundColor="var(--Secondary-2, #DB4444)"
    }
    trashIcon=`<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17" cy="17" r="17" fill="white"/>
    <path d="M25 10.5714H10.3333L11.6667 26H22.3333L23.6667 10.5714H9M17 14.4286V22.1429M20.3333 14.4286L19.6667 22.1429M13.6667 14.4286L14.3333 22.1429M14.3333 10.5714L15 8H19L19.6667 10.5714" stroke="black" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
    icons.innerHTML=trashIcon;
    addButton.style.display="block";
});
