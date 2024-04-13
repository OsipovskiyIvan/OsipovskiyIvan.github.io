// let btnLeft = document.querySelector("#mainbanner .btn-left");
// let btnRight = document.querySelector("#mainbanner .btn-right");

// console.log(btnLeft);
// console.log(btnRight);

// btnLeft.addEventListener("click", function(){
//     if(btnLeft.classList.contains("anime")){
//         btnLeft.classList.remove("anime");  
//     }
//     else{
//         btnLeft.classList.add("anime")
//     }
// });
// btnRight.addEventListener("click", function(){
//     if(btnRight.classList.contains("anime")){
//         btnRight.classList.remove("anime");  
//     }
//     else{
//         btnRight.classList.add("anime")
//     }
// });

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

var tabs = document.querySelectorAll(".products-block__tab");
var wrappers = document.querySelectorAll(".products-block__wrapper");

console.log(tabs);
console.log(wrappers);


tabs.forEach(element => {
  element.addEventListener("click", function (e) {
    // console.log(this.hasAttribute('data-id'));

    if (this.hasAttribute('data-id')) {
      var id = this.getAttribute('data-id');
      console.log(id);

      tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-id') == id) {
          tab.classList.add('active');
        }
      });

      wrappers.forEach(wrapper => {
        wrapper.classList.remove('active');
        wrapper.classList.add('hidden');
        if (wrapper.getAttribute('data-id') == id) {
          wrapper.classList.add('active');
        }
      });
    }

  });
});

const toggleContentByTab = () => {

  let tabs = document.querySelectorAll('.products-block__tab');
  let contents = document.querySelectorAll('.products-block__wrapper');

  tabs.forEach((tab, index) => {

    tab.addEventListener('click', () => {

      tabs.forEach((tab_2) => {
        tab_2.classList.remove('active');
      })
      contents.forEach((content) => {
        content.classList.remove('active');
      })

      tab.classList.add('active');
      contents[index].classList.add('active');

    })

  })

}

toggleContentByTab();

const burger = document.querySelector('.burger');
const mobile_menu = document.querySelector('.mobile-menu');
var cross = document.querySelector('.mobile-menu_cross');


burger.addEventListener('click', () => {
  // Toggle the "active" class for the parent element with the "burger" class
  burger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

cross.addEventListener('click', () => {
  // Toggle the "active" class for the parent element with the "cross" class
  burger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});
// const cross = document.querySelector('.mobile-menu_cross');
// const mobile_menu = document.querySelector('.mobile-menu');
// const burger = document.querySelector('.burger');

// burger.addEventListener('click', () => {
//   // Toggle the "active" class for the parent element with the "burger" class
//   burger.classList.toggle('');
//   mobile_menu.classList.toggle('');
// });