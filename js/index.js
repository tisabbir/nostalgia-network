let posts;
const getData = async (loadPosts, checkActive) => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
  posts = data.posts;
  loadPosts(posts);
  checkActive(posts);
};

const loadPosts = () => {
  const discussionContainer = document.getElementById("discussion-container");
  posts.forEach((post) => {
    let discussion = document.createElement("div");

    discussion.innerHTML = `
        <div id="discussion" class="flex gap-6 bg-[#F3F3F5] p-3 lg:p-10 rounded-xl">

                        <div id="profile-picture" class="relative"><img class="w-20 rounded-xl" src="${post.image}" alt="">
                            <i id="active-status" class="absolute active-status -top-2 -right-2 fa-regular fa-circle rounded-full"></i>
                        </div>
    
                        <div class="space-y-4">
                            <p>#<span>${post.category}</span> <span class="ml-5">Author : </span> <span>${post.author.name}</span></p>
                            <h1 id="dis-title" class="text-[#12132D] text-xl font-bold">${post.title}</h1>
                            <p class="para text-left">${post.description}</p>
                            <hr class="border-dashed bg-black">
                            <div class="flex justify-between items-center"> 
                                <div class="flex gap-4 items-center">
                                    <i class="fa-regular fa-message"></i>
                                <p>${post.comment_count}</p>
                                <i class="fa-regular fa-eye"></i>
                                <p id="dis-views">${post.view_count}</p>
                                <i class="fa-regular fa-clock"></i>
                                <p>${post.posted_time}</p>
                                </div>
                    
                                    <i onclick="msgBtnHandler()" class="fa-solid fa-square-envelope w-8 btn bg-green-400 p-2 rounded-full"></i>
                                
                            </div>
                        </div>
                    </div>
        `;

    discussionContainer.appendChild(discussion);
  });
};

getData(loadPosts, checkActive);

function checkActive(posts) {
  const discussion = document.querySelectorAll("#discussion");
  let activeBtns = [];
  discussion.forEach((item) => {
    let activeBtn = item.querySelector("#active-status");
    activeBtns.push(activeBtn);  
  });

  let a = 0;
  posts.forEach(post => {
    if(post.isActive){

       activeBtns[a].classList.add('bg-green-400')
       a++;
    } else{
        activeBtns[a].classList.add('bg-red-400')
        a++;
    }
  })
}

const titleSection = document.getElementById('title-container');
let count = 0;
const markAsRead = document.getElementById('mark-as-read');

const msgBtnHandler=()=>{
    const card = event.target.parentNode.parentNode;
    const title = card.childNodes[3].innerText;
    const views = event.target.parentNode.childNodes[1].childNodes[7].innerText


    const titles = document.createElement('div');

    titles.innerHTML = `
    <div class="title-container flex items-center bg-white rounded-2xl p-4 mt-4 justify-between">
                        <h1>${title}</h1>
                        <div class="flex gap-2 items-center">
                            <i class="fa-regular fa-eye"></i>
                            <p>${views}</p>
                        </div>
                    </div>
    `
    titleSection.appendChild(titles);


    count++;
    markAsRead.innerText = count;
    
}