const API_KEY="7b7f1cb94378722f3cee37518c2d2240";
const APIrequests="https://api.themoviedb.org/3/movie/550?api_key=7b7f1cb94378722f3cee37518c2d2240"
const requests = [{
	fetch: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
title:"TRENDING"},
	{fetch: `/discover/tv?api_key=${API_KEY}&with_network=123`,
title:"NETFLIX ORIGINALS"},
	{fetch: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,title:"TOP RATED"},
	{fetch: `/discover/movie?api_key=${API_KEY}&with_genres=28`,title:"ACTION MOVIES"},
	{fetch: `/discover/movie?api_key=${API_KEY}&with_genres=35`,title:"COMEDY MOVIES"},
	{fetch: `/discover/movie?api_key=${API_KEY}&with_genres=27`,title:"HORROR MOVIES"},
{	fetch: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,title:"ROMANTIC MOVIES"},
{	fetch: `/discover/movie?api_key=${API_KEY}&with_genres=99`,title:"DOCUMENTARIES"}
];
export const Netflixurl=`/trending/all/week?api_key=${API_KEY}&language=en-US`;

export default requests;