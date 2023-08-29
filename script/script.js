"use strict"

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true,
        // renderBullet: function (index, className) {
        // return '<span class ="'+ className +'">'+ (index +1) +' </span>'
        // }
      

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '  .swiper-button-next ',
      prevEl: ' .swiper-button-prev',
    },

    slidesPerView:4.3,
    spaceBetween:30,
    centerSlides:true,
    loop: true,
    autoPlay: true,
    


autoplay:{
delay:1000,
disableOnInretaction:false,
pauseOnMouseEnter: true
},





  
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  
  

const TELEGRAM_BOT_TOKEN = '6553072837:AAG7eEf8nHBfowOByJjrfx2B8X6TJeazj3U';
const TELEGRAM_CHAT_ID = '@NailsZakaziBrend';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`


async function sendEmailTelegram(event) {
  event.prevenDefault()

  const form = event.target;
  console.log(form);
  const formBtn = document.querySelector('.form__submit-button button')
  const formSendResult = document.querySelector('.form__send-result')
  formSendResult.textContent = '';

  const formData = new FormData(form)
  const formDataObject = Object.fromEntries(formData.entries())

  console.log(formDataObject);
    
 const {name, email, phone} =  Object.fromEntries(new FormData(form).entries())

 const text = `Заявка от ${name}!\nEmail: ${email}\nTelephone: ${phone}`;

 try {
  formBtn.textContent = 'Loading ...'
  const response = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,

    })
  });

  if (response.ok) {
    formSendResult.textContent = 'Спасибо, ваше сообщение отправлено, ждите обратной связи.'
    form.reset()

  
 } else{
  throw new Error(response.statusText)
 }
 
} catch (error) {
  console.error(error)
  formSendResult.textContent = 'Попробуйте позже.';
  formSendResult.style.color = 'red'
 } finally{
  formBtn.textContent = 'Отправлено'
 }
}