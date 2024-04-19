const swiperGallery = new Swiper('.gallery__swiper', {
  // Optional parameters
  // direction: 'vertical',
  spaceBetween: 20,
  loop: true,
  speed: 6000,
  // slidesPerView: 3.5,
  autoplay: {
    delay: calculateSlideDuration + 6000, 
    delay: 0, 
    disableOnInteraction: false,
  }, 
    breakpoints: {
      320: {
        slidesPerView: 2.5,
      },
      375: {
        slidesPerView: 3.5,
      },

      414: {
        slidesPerView: 4,
      },
  
      768: {
        slidesPerView: 4,
      },

      1280: {
        slidesPerView: 6,
      },
      
      1512: {
        slidesPerView: 7,
      },
  }
});



function calculateSlideDuration(slidesPerView) {
  const totalSlides = swiperGallery.slides.length; // スライドの総数
  const animationDuration = swiperGallery.params.speed; // アニメーションの合計時間
  const slideDuration = animationDuration / totalSlides; // 各スライドごとの待機時間
  return slideDuration;
}






const swiperSpot = new Swiper('.spot__items', {
  // Optional parameters
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 30, // デフォルトのスライド間の距離
  centeredSlides: true, // アクティブなスライドを中央にする
  freeMode: true, // スライドの位置を自由にスクロール
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // 最小のビューポートサイズから始める
    375: {
      slidesPerView: 1.5,
      spaceBetween: 16 ,
      centeredSlides: true,
    },
    414: {
      slidesPerView: 1.5,
      spaceBetween: 16 ,
      centeredSlides: true,
    },

    592: {
      slidesPerView: 2,
      spaceBetween: 16,
      centeredSlides: true,

    },

    768: {
      slidesPerView: 3,
      spaceBetween: 32 ,
      centeredSlides: true,
    },
    1280: {
      slidesPerView: 2.5,
      spaceBetween: 10, // 376px以上ではpxに戻す
      centeredSlides: false,
    },
    // 375px以上のビューポートでの設定
    1440: {
      slidesPerView: 3.0,
      spaceBetween: 10, // 376px以上ではpxに戻す
      centeredSlides: false,
    },
    1512: {
      slidesPerView: 3.2,
      spaceBetween: 10, // 376px以上ではpxに戻す
      centeredSlides: false,
    }
  },
});




jQuery(".js-accordion").on("click", function(e) {
  e.preventDefault();
  const parentItem = jQuery(this).closest('.qa__item');
  const answerLine = parentItem.find('.a__line');

  if(parentItem.hasClass("is--open")) {
      answerLine.css('display', 'flex').slideUp(function() {
          parentItem.removeClass("is--open");
          // スライドアップが完了したら、flexを非表示にする
          answerLine.css('display', 'none');
      });
  } else {
      // スライドダウン前にflexを非表示にして、スペースの問題を防ぐ
      answerLine.css('display', 'none').slideDown(function() {
          parentItem.addClass("is--open");
          // スライドダウンが完了したら、flexを表示する
          answerLine.css('display', 'flex');
      });
  }
});





jQuery("#js-drawer__icon").on("click", function(e) {
e.preventDefault();
jQuery("#js-drawer__icon").toggleClass("is--checked");
jQuery("#js-drawer__overlay").toggleClass("is--checked");
})


const overlay = document.querySelector('#js-drawer__overlay');
const drawerIcon = document.querySelector('#js-drawer__icon');



const headers = [
  document.querySelector('#header1 a'),
  document.querySelector('#header2 a'),
  document.querySelector('#header3 a'),
  document.querySelector('#header4 a'),
  document.querySelector('#header5 a'),
  document.querySelector('#header6 a')
];

const drawerButton = document.querySelector('.drawer__nav-button')

function OverlayClose() {
  overlay.classList.remove('is--checked');
  drawerIcon.classList.remove('is--checked');
};


headers.forEach(header => {
  header.addEventListener('click', () => {
    OverlayClose();
  });
});

drawerButton.addEventListener('click', () => {
  OverlayClose();
});




jQuery('a[href^="#"]').click(function() {
let header = jQuery(".header__inner").innerHeight();
  let speed = 300;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  let position = jQuery(target).offset().top - header;
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});



const modalOpenItems = document.querySelectorAll(".js-item-modal--open");
const modalCloseItems = document.querySelectorAll(".js-item-modal--close");


modalOpenItems.forEach(function(modalOpenItem) {
  modalOpenItem.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = modalOpenItem.getAttribute("data-modal-id");
    const modalItem = document.getElementById(modalId); // データ属性からモーダルを取得

    if (modalItem) {
      modalItem.showModal();
    }
  });
});

modalCloseItems.forEach(function(modalCloseItem) {
  modalCloseItem.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = modalCloseItem.getAttribute("data-modal-id");
    const modalItem = document.getElementById(modalId); // データ属性からモーダルを取得

    if (modalItem) {
      modalItem.close();
    }
  });
});

jQuery(window).on("scroll", function() {
  // トップから600px以上スクロールしたら
  if (600 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('.top-page__icon').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('.top-page__icon').removeClass( 'is-show' );
  }
});

