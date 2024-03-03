const loadPosts = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await response.json();
    const posts = data.posts;
    
    const discussionContainer = document.getElementById('discussion-container');

    posts.forEach((post)=>{
        let discussion = document.createElement('div');
        
        discussion.innerHTML = `
        <div id="discussion" class="flex gap-6 bg-[#F3F3F5] p-3 lg:p-10 rounded-xl">

                        <div id="profile-picture" class="relative"><img class="w-20 rounded-xl" src="https://i.ibb.co/pjM6Ybr/pexels-anastasia-shuraeva-9607206.jpg" alt="">
                            <i id="active-status" class="absolute -top-2 -right-2 fa-regular fa-circle bg-green-600 rounded-full"></i>
                        </div>
    
                        <div class="space-y-4">
                            <p>#<span>Coding</span> <span class="ml-5">Author : </span> <span>Safiya Chowdury</span></p>
                            <h1 class="text-[#12132D] text-xl font-bold">10 Kids Unaware of Their Halloween Costume</h1>
                            <p class="para text-left">It's one thing to subject yourself to ha Halloween costume mishap because, hey that's your prerogative</p>
                            <hr class="border-dashed bg-black">
                            <div class="flex justify-between items-center"> 
                                <div class="flex gap-4 items-center">
                                    <i class="fa-regular fa-message"></i>
                                <p>560</p>
                                <i class="fa-regular fa-eye"></i>
                                <p>1568</p>
                                <i class="fa-regular fa-clock"></i>
                                <p>5 min</p>
                                </div>
                                <div class="btn bg-green-400 p-2 rounded-full">
                                    <i class="fa-solid fa-square-envelope w-8"></i>
                                </div>
                            </div>
                        </div>
                    </div>
        `

        discussionContainer.appendChild(discussion);
    })
}

loadPosts();