const input = document.querySelector('.input');
const imgItem = document.querySelectorAll('.imgItem');


input.addEventListener('keyup', (event) => {
    
    const textUser = event.target.value.toLowerCase();
    imgItem.forEach(item => {
        item.querySelector('p').textContent.toLocaleLowerCase().includes(textUser) ?
         (item.style.display = 'block') : (item.style.display = 'none');
    })

})

const back = document.querySelector('.back');
const next = document.querySelector('.next');
const photos = ['./img/11.jpg',  './img/44.jpg', './img/55.jpg', './img/66.jpg', './img/88.jpg']

let i = 0;

next.addEventListener('click', () => {
  i ++;
  if (i > photos.length -1) {
    i = 0;
  }
  document.querySelector('.photo').src = photos[i];
})

back.addEventListener('click', () => {
    i --; 
    if (i < 0) {
        i = photos.length -1;
    }
    document.querySelector('.photo').src = photos[i];
})


