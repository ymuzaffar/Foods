let tabcontents = document.querySelectorAll('.tabcontent')
let tabheader__items = document.querySelectorAll('.tabheader__items .tabheader__item')
let slides = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let plus = document.querySelector('#current')
let total = document.querySelector('#total')



let slideIndex = 0
let plusIndex = 0

console.log(plus.innerText[1]);

function showSlides(n) {

    if(n < 0) {
        slideIndex = slides.length - 1
plusIndex = slides.length -1
    }

    if(n >= slides.length -- ) {
        slideIndex = 0
        plusIndex = 0
    }

    slides.forEach(slide => slide.classList.add('hide'))

    console.log(n);
    slides[slideIndex].classList.remove('hide')
    slides[slideIndex].classList.add('fade')
}
showSlides(0)
next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)

    plusIndex ++
    plus.innerText = plusIndex
}
prev.onclick = () => {
    slideIndex++
    showSlides(slideIndex)

    plusIndex ++
    plus.innerText = plusIndex
}




function showTabs(n) {
    tabcontents.forEach(el => el.classList.add('hide'))

    tabcontents[n].classList.remove('hide')
    tabcontents[n].classList.add('show', 'fade')
}

showTabs(0)


tabheader__items.forEach((item, idx) => {
    item.onclick = () => {
        tabheader__items.forEach(el => el.classList.remove('tabheader__item_active'))

        item.classList.add('tabheader__item_active')

        showTabs(idx)
    }
})

// kkal
let gens = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big [data-act]')
let resultView = document.querySelector('#result')

let userData = {
    gender: "woman",
}


gens.forEach(btn => {
    btn.onclick = () => {
        gens.forEach(el => el.classList.remove('calculating__choose-item_active'))    
        btn.classList.add('calculating__choose-item_active')

        let g = btn.getAttribute('data-g') 

        userData.gender = g

    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        let key = inp.id
        let val = inp.value

        userData[key] = val
    }
})


actBtns.forEach(btn => {
    btn.onclick = () => {
        actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))    
        btn.classList.add('calculating__choose-item_active')

        let activeCount = btn.getAttribute('data-act') 

        let {active, gender, weight, height, age} = userData

        active = activeCount

        if(gender === 'woman') {
            let res = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;

            resultView.innerHTML = Math.round(res * active)
        } else {
            let res = 66.5 + 13.75 * weight + 5.003 * height - 6.775 * age

            resultView.innerHTML = Math.round(res * active)
        }

    }
})


let modal = document.querySelector('.modal_window')
let okno_btn = document.querySelectorAll('[data-modal]')
let x = document.querySelectorAll('.modal_close')
let modal_recoll = document.querySelector('.modal_recoll')


okno_btn.forEach(btn => {

    btn.onclick = () => {

        modal.style.display = 'flex'
       
        setTimeout(() => {
    modal.style.opacity = '1'
    modal_recoll.style.opacity = '1'
    modal.style.scale = '1'
        },300);
       }
       
    })

    x.forEach(btn => {
        btn.onclick = () => {

         
         modal.style.opacity = '0'
         modal_recoll.style.opacity = '0'


         setTimeout(() => {
            modal.style.display = 'none'
            
            modal.style.display = 'none'
        },500);
       }})
       







    // let seconds = document.querySelector('#seconds')
    // let minutes = document.querySelector('#minutes')
    // let hours = document.querySelector('#hours')
    // let days = document.querySelector('#days')
    //    let endDate = getTime('27. 12:00:00' );
    //    let timer = setInterval(function() {
    //        let now = getTime();
    //        let t = endDate - now;
           
    //        if (t >= 0) {
           
    //            days = Math.floor(t / (1000 * 60 * 60 * 24));
    //            hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //            mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    //            secs = Math.floor((t % (1000 * 60)) / 1000);
           
    //            document.getElementById("timer-days").innerHTML = days +
    //            "<span class='label'>DAY(S)</span>";
           
    //            document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
    //            "<span class='label'>HR(S)</span>";
           
    //            document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
    //            "<span class='label'>MIN(S)</span>";
           
    //            document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
    //            "<span class='label'>SEC(S)</span>";
           
    //        } else {
    //            document.getElementById("timer").innerHTML = "The countdown is over!";
           
    //        }
           
    //    }, 1000);

    
  


