const body = document.querySelector("body");
const cartbtn = document.querySelector(".cartbtn");
const Menubtn = document.querySelector(".Menubtn");
const cartbtnSlider = document.querySelector(".cartbtn-slider");
const menuSlideSection = document.querySelector(".menu-slide-section");
const removeCartbtnSlider = document.querySelector(".cart-removebtn");
const menuslideContainer = document.querySelector(".menuslide-container");
const removeMenubtn = document.querySelector(".menu-removebtn");
const chatContainer = document.querySelector(".chat-container");
const openedChatContainer = document.querySelector(".openedChat-container");
const chatRemovebtn = document.querySelector(".chat-removebtn");
const openfileBtn = document.querySelector(".openfile-btn");
const inputFile = document.querySelector(".input-file");
const ocTextContent = document.querySelector(".oc-text-content ");
const textInput = document.querySelector(".text-input");
const sendmessageBtn = document.querySelector(".sendmessage-btn");
const linkBtn = document.querySelector("#link-btn");
const loginBtn = document.querySelector(".login-btn");
const loginSlideContainer = document.querySelector(".loginSlide-container");
const loginremovebtn = document.querySelector(".login-removebtn");
const loadContainer = document.querySelector(".load-container");
/*------------------login-section---------------------*/
const insidesignBox = document.querySelector(".insidesign-box");
const coverBox = document.querySelector(".cover-box");
const insideregBox = document.querySelector(".insidereg-box");
const logincontainer = document.querySelector(".logincontainer");
const regBtn = document.querySelector(".reg-btn");
const logBtn = document.querySelector(".log-btn");
const coverTitle = document.querySelector(".cover-title");
const coverText = document.querySelector(".cover-text");
const smileCont = document.querySelector(".smile-cont");
const emojiList = document.querySelector(".emoji-list");
const emojisearchBar = document.querySelector(".emojisearch-bar");
const smileBtn = document.querySelector("#smile-btn");

const loadImage = () => {
    let file = inputFile.files[0]; // getting selected file
    if (!file) {
        return;
    }

    img.src = URL.createObjectURL(file); // passing selected image in chat
};

cartbtn.addEventListener("click", cartbtnclick);
removeCartbtnSlider.addEventListener("click", removeCartbtnclick);
removeMenubtn.addEventListener("click", removeMenubtnclick);
Menubtn.addEventListener("click", Menubtnclick);
chatContainer.addEventListener("click", chatContainerClick);
chatRemovebtn.addEventListener("click", chatRemovebtnClick);
openfileBtn.addEventListener("click", () => inputFile.click());
inputFile.addEventListener("change", loadImage);
textInput.addEventListener("keyup", clickedinput);
sendmessageBtn.addEventListener("click", messagesendclick);
loginBtn.addEventListener("click", loginbtnclick);
loginremovebtn.addEventListener("click", removeloginbtnclick);
regBtn.addEventListener("click", regBtnClick);
logBtn.addEventListener("click", logBtnClick);
smileBtn.addEventListener("click", smileBtnClick);
emojisearchBar.addEventListener("keyup", smileBtnSearch);

function cartbtnclick() {
    cartbtnSlider.classList.add("active");
    if ((Menubtnclick = true)) {
        body.classList.add("active");
    }
}
function removeCartbtnclick() {
    cartbtnSlider.classList.remove("active");
    if ((Menubtnclick = true)) {
        body.classList.remove("active");
    }
}
function Menubtnclick() {
    menuSlideSection.classList.add("active");
    menuslideContainer.classList.add("active");
    if ((Menubtnclick = true)) {
        body.classList.add("active");
    }
}
function removeMenubtnclick() {
    menuSlideSection.classList.remove("active");
    menuslideContainer.classList.remove("active");
    if ((Menubtnclick = true)) {
        body.classList.remove("active");
    }
}

/*----------firstslider-section----------*/

var swiper = new Swiper(".card-wrapper", {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 480,
        },
        1000: {
            slidesPerView: 4,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 1,
        },
    },
});

/*----------second-section----------*/
var swiper1 = new Swiper(".followus-card-wrapper", {
    slidesPerView: 3.8,
    spaceBetween: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 480,
        },
        1000: {
            slidesPerView: 4,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
    },
});
/*----------scroll-section----------*/

const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenelement = document.querySelectorAll(".hidden");
hiddenelement.forEach((ell) => {
    Observer.observe(ell);
});
/*----------scroll-section----------*/

const Observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show1");
        } else {
            entry.target.classList.remove("show1");
        }
    });
});

const hiddenelement1 = document.querySelectorAll(".hidden1");
hiddenelement1.forEach((ell) => {
    Observer1.observe(ell);
});

/*----------chat-section----------*/
function chatContainerClick() {
    chatContainer.classList.remove("active");
    openedChatContainer.classList.add("active");
}
function chatRemovebtnClick() {
    chatContainer.classList.add("active");
    openedChatContainer.classList.remove("active");
}
function clickedinput(e) {
    let value = textInput.value.trim();
    if (value.length == 0) {
        sendmessageBtn.classList.remove("active");
        smileBtn.classList.remove("active");
        linkBtn.classList.remove("active");
    } else {
        sendmessageBtn.classList.add("active");
        smileBtn.classList.add("active");
        linkBtn.classList.add("active");
    }
    if (e.key == "Enter") {
        messagesendclick();
    }

    function scrollToBottom() {
        ocTextContent.scrollTop = ocTextContent.scrollHeight;
    }
    scrollToBottom();
}

function messagesendclick() {
    let day = new Date();
    let hr = day.getHours();
    let mn = day.getMinutes();
    if (textInput.value.trim() != 0) {
        let newtext = document.createElement("div");
        newtext.classList.add("newtype-text-cont");
        newtext.innerHTML = `
            <div class="real-time">
            <p>${hr + ":" + mn}</p>  
        </div>
    <div class="newtext-inside-cont">
    <p > ${textInput.value}</p>
    </div>
    `;
        ocTextContent.appendChild(newtext);
        textInput.value = " ";
    }
}

/*----------login-section----------*/
function loginbtnclick() {
    loginSlideContainer.classList.add("active");
    if ((Menubtnclick = true)) {
        body.classList.add("active");
    }
}

function removeloginbtnclick() {
    loginSlideContainer.classList.remove("active");
    if ((Menubtnclick = true)) {
        body.classList.remove("active");
    }
}

function regBtnClick() {
    coverBox.classList.add("active");
    insidesignBox.classList.add("active");
    insideregBox.classList.add("active");
    regBtn.classList.add("active");
    logBtn.classList.add("active");
    logincontainer.classList.add("active");
    coverTitle.innerHTML = `    <h1 class="cover-title">LOGIN</h1>`;
    coverText.innerHTML = `<p class="cover-text">
        Login and enjoy with content.
    </p>`;
}

function logBtnClick() {
    coverBox.classList.remove("active");
    insidesignBox.classList.remove("active");
    insideregBox.classList.remove("active");
    regBtn.classList.remove("active");
    logBtn.classList.remove("active");
    logincontainer.classList.remove("active");
    coverTitle.innerHTML = `    <h1 class="cover-title">REGISTER</h1>`;
    coverText.innerHTML = `<p class="cover-text">
    Register now if you are not!
</p>`;
}

function smileBtnClick() {
    smileCont.classList.toggle("active");
}

// fetch(
//     "https://emoji-api.com/emojis?access_key=ef2b8d32e41c9d3745e2ce9d26e79fc51111715f"
// )
//     .then((res) => res.json())
//     .then((data) => console.log(data));

// function loadEmoji(data) {
//     data.forEach((emoji) => {
//         let li = document.createElement("li");
//         li.setAttribute("emoji-name", emoji.slug);
//         li.textContent = emoji.character;
//         emojiList.appendChild(li);
//     });
// }

function smileBtnSearch() {}

window.addEventListener("load", function () {
    loadContainer.classList.add("active");
    body.removeAttribute("loadContainer");
    body.classList.remove("active");
});
