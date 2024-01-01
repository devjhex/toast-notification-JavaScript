const notifications = document.querySelector(".notifications");
const buttonGroup = document.querySelector(".btnGroup");

const toastDetails = {
    toastTimer:5000,
    news:{
        logoImage:'./svg-icons/news.svg',
        logoImageAlt:'news',
        toastTitle:'News',
        toastText:'This is the news for today that and the whole world will be surprised...',
        toastTime:'Today 10:30PM',
        progressColor:'before:bg-[#237fd2]'
    },
    success:{
        logoImage:'./svg-icons/success.svg',
        logoImageAlt:'success',
        toastTitle:'File Transfer successful',
        toastText:'All Files have been transferred successfully.',
        toastTime:'Today 10:44PM',
        progressColor:'before:bg-[#48B16E]'
    },
    alert:{
        logoImage:'./svg-icons/alert.svg',
        logoImageAlt:'alert',
        toastTitle:'Alert Message',
        toastText:'You have shutdown the connection that was intact.',
        toastTime:'Today 10:49PM',
        progressColor:'before:bg-[#DCA048]'
    },
    error:{
        logoImage:'./svg-icons/error.svg',
        logoImageAlt:'error',
        toastTitle:'Error Message',
        toastText:'An error occurred please check your internet connection.',
        toastTime:'Today 11:49PM',
        progressColor:'before:bg-[#FB3836]'
    }

}

notifications.addEventListener("click", (event)=>{
    if(event.target.parentElement.classList.contains('closeBtn')){
        let toast = event.target.closest('article');
        removeToast(toast);

    }
});

buttonGroup.addEventListener("click", (event)=>{
    if(event.target.id){
        let id = event.target.id;
        createToast(id);
    }
});

function createToast (id){
    //empty the notification parent
    empty(notifications);

    let toastUi = createToastRoot();
    let toastInfo = toastDetails[id];

    //Add content to the created toast notification.
    toastUi.querySelector('.logoImage').src = toastInfo.logoImage;
    toastUi.querySelector('.logoImage').alt = toastInfo.logoImageAlt;
    addToastContent(toastUi, ".toastTitle", toastInfo.toastTitle);
    addToastContent(toastUi, ".toastText", toastInfo.toastText);
    addToastContent(toastUi, ".toastTime", toastInfo.toastTime);
    toastUi.classList.add(toastInfo.progressColor);

    //append the toast to the notification parent.
    notifications.appendChild(toastUi);

    toastUi.timeOutId = setTimeout(()=>removeToast(toastUi), toastDetails.toastTimer);
    
}

function removeToast(toast){
    toast.classList.add("hide");
    if(toast.timeOutId) clearInterval(toast.timeOutId);
    setTimeout(()=> {
        toast.remove();
       },500);

}

function createToastRoot(){
    const range = document.createRange();
    range.selectNode(document.body);
    return range.createContextualFragment(
        `
        <article class="w-11/12 medium:w-[400px] bg-[#20315c] rounded-[1.5rem] p-4 mx-auto mt-4 relative before:content-[''] before:absolute before:w-full before:h-[10px] before:bottom-0 before:animate-progress overflow-hidden before:left-0 toast animate-showToast">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-[1rem]">
                    <img src="" alt="" class="logoImage">
                    <h1 class="text-white text-[1.3rem] font-[500] leading-normal toastTitle"></h1>
                </div>
                <div class="self-start hover:bg-[#237fd2] duration-[.5s] rounded-[.5rem] p-2 closeBtn">
                    <img src="./svg-icons/close.svg" alt="close" class="cursor-pointer toastClose">
                </div>
            </div>
            <div>
                <p class="mt-[.5rem] text-[#BBC9EC] font-[400] leading-[1rem] toastText"></p>
                <span class="text-[#9FAED7] text-[.8rem] font-[400] leading-[1.4rem] mt-[1.7rem] block toastTime"></span>
            </div>
        </article>`
    ).children[0];
}

function addToastContent(parent, className, content){
    parent.querySelector(className).textContent = content;
}

function empty (element){
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}