// drop down menu (only one drop)

// $('.nav > ul > li').mouseover(function(){
//     $(this).find('.submenu').stop().slideDown(200);
// });
// $('.nav > ul > li').mouseout(function(){
//     $(this).find('.submenu').stop().slideUp(200);
// });

// drop down menu (.submenu full drop)
// $('.nav > ul > li').mouseover(function(){
//     $('.submenu').stop().slideDown(200);
// });
// $('.nav > ul > li').mouseout(function(){
//     $('.submenu').stop().slideUp(200);
// });

// drop down menu (full drop down) 
    $('.nav > ul > li').mouseover(function(){
        $('.submenu, .submenu-bg').stop().slideDown(200);
    });
    $('.nav > ul > li').mouseout(function(){
        $('.submenu, .submenu-bg').stop().slideUp(200);
    });



// drop down menu (accordian) 
// drop down menu (horizontal)

// slide (up to down)
    // setInterval(function(){
    //     $('.slide-con').stop().animate({
    //         top:'-300px'
    //     },function(){
    //         $('.slide_img').eq(0).appendTo('.slide-con');
    //         $('.slide-con').css({
    //             top:0
    //         });
    //     });
    // },3000);


// slide (fadeIn, fadeOut)
var now = 0;

$('.slide_img:gt(0)').hide();
setInterval(function(){
    if(now<2){
        now++;
    } else {
        now =0;
    }
    $('.slide_img').eq(now).fadeIn().siblings().fadeOut();
},3000);


// slide (right to left) 

// setInterval(function(){
//     $('.slide-con').stop().animate({
//         left:'-1200px'
//     },function(){
//         $('.slide_img').eq(0).appendTo('.slide-con');
//         $('.slide-con').css({
//             left:0
//         });
//     });
// },3000);


// tabmenu 
// #tabmenuButton ul>li*2
//  const tabmenuButtonOne = document.querySelector('#tabmenuButton li:nth-child(1)');
//  const tabmenuButtonTwo = document.querySelector('#tabmenuButton li:nth-child(2)');

// #tabmenu-content-1 ul>li*5 -> 공지사항 내용

// #tabmenu-content-2 ul>li*3 -> 갤러리 사진 

//  const contentOne = document.querySelector
//  const contentTwo = document.querySelector

//  console. 찍기 

//  tabmenuButtonOne.addEventListener('click',function(){
//     contentOne.classList.remove('hidden');
//  });
//  tabmenuButtonTwo.addEventListener
//  add('hidden');

// pop-up (vanilla javascript ver.) 

const noticeBtOne = document.querySelector('.notice-bottom li:nth-child(1)');
const popUp = document.querySelector('#pop-up');
const closePopUp = document.querySelector('#pop-up button');
const modal = document.querySelector('#modal');


console.log(noticeBtOne);
console.log(popUp);
console.log(closePopUp);
console.log(modal);

noticeBtOne.addEventListener('click',function(){
    modal.classList.remove('hidden');
});
noticeBtOne.addEventListener('click',function(){
    popUp.classList.remove('hidden');
});

closePopUp.addEventListener('click',function(){
    modal.classList.add('hidden');
});
closePopUp.addEventListener('click',function(){
    popUp.classList.add('hidden');
});
