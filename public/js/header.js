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
    const container = document.querySelector('.container');
    
    if (isBlur) {
        header.classList.add("blur-filter");
        for(let i=0;i < container.children.length; i++) {
            if (!container.children[i].classList.contains("sidebars")) {
                container.children[i].classList.add("blur-filter");
            }
        }
    } else {
        header.classList.remove("blur-filter");
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
            console.log(contractList.children[i])
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
    console.log('contract nav left button has clicked!')
    if (--contractIndex < 0) {
        contractIndex = contractList.children.length -1;
    }

    console.log(contractIndex);
    showContractInfo(contractList, contractIndex);
});

contractNavRightBtn?.addEventListener('click', () => {
    console.log('contract nav right button has clicked!')
    if (++contractIndex > contractList.children.length - 1) {
        contractIndex = 0;
    }

    console.log(contractIndex);
    showContractInfo(contractList, contractIndex);
});

// Active Contract Box in Sidebars
let contractSidebarsIndex = 0;

const contractSidebarsList = document.querySelector("#contract-box-sidebars");
const contractNavLeftSidebarsBtn = document.querySelector("#contract-nav-left-sidebar").children[0];
const contractNavRightSidebarsBtn = document.querySelector("#contract-nav-right-sidebar").children[0];

contractNavLeftSidebarsBtn?.addEventListener('click', () => {
    console.log('sidebar contract nav left button has clicked!')
    if (--contractSidebarsIndex < 0) {
        contractSidebarsIndex = contractSidebarsList.children.length -1;
    }

    console.log(contractSidebarsIndex);
    showContractInfo(contractSidebarsList, contractSidebarsIndex);
});

contractNavRightSidebarsBtn?.addEventListener('click', () => {
    console.log('sidebar contract nav right button has clicked!')
    if (++contractSidebarsIndex > contractSidebarsList.children.length - 1) {
        contractSidebarsIndex = 0;
    }

    console.log(contractSidebarsIndex);
    showContractInfo(contractSidebarsList, contractSidebarsIndex);
});