const loadPosts = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await response.json();
    const posts = data.posts;
    console.log(posts)
}

loadPosts();