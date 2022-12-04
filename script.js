const places = [
  {
    title: 'Phu yen',
    image: 'https://cdn.pixabay.com/photo/2020/05/10/06/07/hon-yen-5152456_960_720.jpg'
  },
  {
    title: 'new york',
    image: 'https://cdn.pixabay.com/photo/2015/05/01/14/46/new-york-748595_960_720.jpg'
  },
  {
    title: 'paris',
    image: 'https://cdn.pixabay.com/photo/2021/06/22/16/39/arch-6356637_960_720.jpg'
  },
  {
    title: 'singapore',
    image: 'https://cdn.pixabay.com/photo/2016/10/30/05/43/asia-1782429_960_720.jpg'
  },
  {
    title: 'tokyo',
    image: 'https://cdn.pixabay.com/photo/2015/06/29/04/41/tokyo-tower-825196_960_720.jpg'
  },
  {
    title: 'hongKong',
    image: 'https://cdn.pixabay.com/photo/2017/05/07/06/14/hong-kong-2291752_960_720.jpg'
  },

]
const paralax = document.querySelector('#paralax');
places.map(place => {
  let div = document.createElement('div');
  div.innerText = place.title;
  div.classList.add('paralax__page')
  div.style.backgroundImage =  `linear-gradient(to right, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${place.image})`;
  paralax.appendChild(div)
}) ;