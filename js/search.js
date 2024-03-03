const inputField = document.getElementById('input-field');


const search = () => {
    const inputValue = inputField.value
    console.log(inputValue);

    const loadPostByCategory = async () => {
        const response = await fetch(
            `https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputValue}`
          );
          const data = await response.json();
         let posts = data.posts;

         if(posts.length === 0){
            alert('please enter a valid category');
            return;
         }

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
        checkActive(posts);
      };

      const discussionContainers = document.getElementById("discussion-container");
      discussionContainers.innerHTML = '';
      loadPostByCategory();
      
}