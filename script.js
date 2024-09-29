const cardWrapper = document.querySelector('.content-cards');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const movies = [
    {
        id: 0,
        title: 'Марсианин1',
        original: 'The Martian',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: './movie.html',
        image: './images/movie.png'
    },
    {
        id: 1,
        title: 'Марсианин2',
        original: 'The Martian',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: './movie.html',
        image: './images/movie.png'
    },
    {
        id: 2,
        title: 'Марсианин3',
        original: 'The Martian',
        category: 'Фантастика, приключения',
        rating: 7.9,
        link: './movie.html',
        image: './images/movie.png'
    }
];

const render = (array) => {
    cardWrapper.innerHTML = '';

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="${item.link}" class="content-cards__item">
                <div class="content-cards__item--img">
                    <img src="${item.image}" alt="movies">
                </div>
                <div class="content-cards__item--title">
                    <h5>${item.title},</h5>
                    <span>${item.original}</span>
                </div>
                <p class="content-cards__item--description">
                    ${item.category}
                </p>
                <p class="content-cards__item--rating">
                    ${item.rating}
                </p>
            </a>
        `);
    })
}

searchButton.addEventListener('click', () => {
    render(movies.filter((item) => item.title.includes(searchInput.value)));
});