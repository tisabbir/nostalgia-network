const loadCards = async()=>{
 const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
 const data = await response.json();
 console.log(data[0].cover_image)

 const cardContainer = document.getElementById('cardContainer');

 data.forEach((element)=>{
    const card = document.createElement('div');
    card.innerHTML = `
    <div id="card" class="border-2 border-solid rounded-3xl p-1 lg:p-4 border-[#12132d26] space-y-6">
                    <img class="max-w-full rounded-2xl mx-auto" src="${element.cover_image}" alt="">
                    <div class="flex items-center gap-3">
                        <i class="fa-regular fa-calendar-days"></i>
                        <p>${element.author.posted_date ? element.author.posted_date : 'No Published Date'}</p>
                    </div>
                    <h1 class="text-[#12132D] text-lg lg:text-xl font-extrabold">${element.title}</h1>
                    <p class="para text-left">${element.description}</p>

                    <div class="flex gap-4 items-center">
                        <img class="w-8 h-8 rounded-full" src="${element.profile_image}" alt="">
                        <div>
                            <h1 class="text-[#12132D] text-lg font-extrabold" >${element.author.name}</h1>
                            <p class="para text-sm text-left">${element.author.designation ? element.author.designation : 'Unknown' }</p>
                        </div>
                    </div>
                </div>
    `;

    cardContainer.appendChild(card);
 })
}


loadCards()