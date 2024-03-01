const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const sideBars = document.querySelector(".sidebars");
let searchBtnLogic = false;

// Toggle Search Bar
searchBtn?.addEventListener('click', () => {
    console.log('clicked!');
    
    searchBtnLogic = !searchBtnLogic;
    
    if (searchBtnLogic) {
        searchBtn.innerHTML = `<i class="fa fa-times"></i>`;
        searchBar.style.display = 'block';

    } else {
        searchBtn.innerHTML = `<i class="fa fa-search"></i>`;
        searchBar.style.display = 'none';
        searchBarInput.value = "";
    }
});

function blurScreen(isBlur) {
    const header = document.querySelector('header');
    const headerItems = header.querySelectorAll('.header-items');
    const container = document.querySelector('.container');
    
    if (isBlur) {
        // Set blur filter on header except brand icon and hamburger-btn
        for (let i=0; i < headerItems.length; i++) {
            if (i === 0 || i === headerItems.length - 1) {
                continue;
            }
    
            headerItems[i].classList.add("blur-filter");
        }
        
        // Set everything in container blur
        for(let i=0;i < container.children.length; i++) {
            if (!container.children[i].classList.contains("sidebars")) {
                container.children[i].classList.add("blur-filter");
            }
        }
    } else {
        // remove blur filter on header except brand icon and hamburger-btn
        for (let i=0; i < headerItems.length; i++) {
    
            headerItems[i].classList.remove("blur-filter");
        }

        // Set everything in container to normal
        for(let i=0;i < container.children.length; i++) {
            if (!container.children[i].classList.contains("sidebars")) {
                container.children[i].classList.remove("blur-filter");
            }
        }
    }
    
}

hamburgerBtn?.addEventListener('click', () => {
    if (document.body.classList.contains("stop-scrolling")) {
        document.body.classList.remove("stop-scrolling");

        searchBtn.style.display = 'block';
        sideBars.style.display = 'none';
        blurScreen(false);

        window.onscroll = function () { };
    } else {
        document.body.classList.add("stop-scrolling");

        // Get the current page scroll position
        const scrollTop =  document.documentElement.scrollTop;
        const scrollLeft = document.documentElement.scrollLeft;

        
        searchBtn.style.display = 'none';
        sideBars.style.display = 'block';
        blurScreen(true);

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
});

// Active Search Bar
const searchBarInput = searchBar.querySelector("input");

// console.log(searchBarInput)
searchBarInput.addEventListener('keypress', (e) => {
    let keyCode = e.key;
    if (keyCode === "Enter") {
        console.log("search ok...")
    }
})

function showContractInfo(contractList, index) {

    for(let i=0; i < contractList.children.length; i++) {
        if (index != i) {
            contractList.children[i].style.display = "none";
        } else {
            contractList.children[i].style.display = "block";
        }
    }
}

// Active Contract Box
let contractIndex = 0;

const contractList = document.querySelector("#contract-box");
const contractNavLeftBtn = document.querySelector("#contract-nav-left").children[0];
const contractNavRightBtn = document.querySelector("#contract-nav-right").children[0];

contractNavLeftBtn?.addEventListener('click', () => {
    if (--contractIndex < 0) {
        contractIndex = contractList.children.length -1;
    }

    showContractInfo(contractList, contractIndex);
});

contractNavRightBtn?.addEventListener('click', () => {
    if (++contractIndex > contractList.children.length - 1) {
        contractIndex = 0;
    }

    showContractInfo(contractList, contractIndex);
});

// Active Contract Box in Sidebars
let contractSidebarsIndex = 0;

const contractSidebarsList = document.querySelector("#contract-box-sidebars");
const contractNavLeftSidebarsBtn = document.querySelector("#contract-nav-left-sidebar").children[0];
const contractNavRightSidebarsBtn = document.querySelector("#contract-nav-right-sidebar").children[0];

contractNavLeftSidebarsBtn?.addEventListener('click', () => {
    if (--contractSidebarsIndex < 0) {
        contractSidebarsIndex = contractSidebarsList.children.length -1;
    }

    showContractInfo(contractSidebarsList, contractSidebarsIndex);
});

contractNavRightSidebarsBtn?.addEventListener('click', () => {
    if (++contractSidebarsIndex > contractSidebarsList.children.length - 1) {
        contractSidebarsIndex = 0;
    }

    showContractInfo(contractSidebarsList, contractSidebarsIndex);
});