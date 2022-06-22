// sort all the movies in 2018 with rating > 4
// sort them by rating
// descending order
// pick title
const movies = [
    {title: 'a', year: 2018, rating: 4.5}, 
    {title: 'b', year: 2018, rating: 4.7}, 
    {title: 'c', year: 2018, rating: 3}, 
    {title: 'd', year: 2017, rating: 4.5}, 
];

function sortSpecial(array: {title: string, year: number, rating: number}[]) {
    const arr = [...array];
    const newArr = arr.filter((movie) => movie.rating > 4 && movie.year === 2018)
    .sort((movie1, movie2) => -movie1.rating + movie2.rating)
    .map((movie) => {return {'title': movie.title, 'rating': movie.rating}});
    return newArr;
}

sortSpecial(movies).forEach((movie) => console.log(movie));