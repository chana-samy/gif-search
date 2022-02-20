

export const getGifs=  async(category)=>{
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=7&api_key=P7N9xQBQbHCJY5utE4HJF5gkH75KPGC4`;
  const resp= await fetch(url);
  const {data} = await resp.json();



  const gifs = data.map(img =>{
    return{
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });

  return gifs;
}