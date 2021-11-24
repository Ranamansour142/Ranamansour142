// Create Section 
let count = 0;
let CreateSection = () => {
    count++;

    let section = document.createElement('section');
    section.id = `section${count}`;
    section.setAttribute('data-nav', `section ${count}`);
    let divSec = document.createElement('div');
    divSec.className = "landing__container";
    let h2Sec = document.createElement('h2');
    h2Sec.appendChild(document.createTextNode(`Section ${count}`));
    let PragSec = document.createElement('p');
    PragSec.appendChild(document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci
    eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam
    in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod`));

    let PragSec2 = document.createElement('p');
    PragSec2.appendChild(document.createTextNode(`Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet
    porttitor tortor, eget elementum tortor mollis non.`))


    divSec.appendChild(h2Sec);
    divSec.appendChild(PragSec);
    divSec.appendChild(PragSec);
    section.appendChild(divSec);

    const main = document.querySelector('main');
    main.append(section);
}

//Navbar 
const navBar = document.getElementById('navbar__list');
let createNavlist = () => {
    navBar.innerHTML = "";
    document.querySelectorAll('section').forEach((section) => {

        const navlist = document.createElement('li');
        const navlink = document.createElement('a');
        navlink.href = `#${section.id}`;
        navlink.setAttribute('data-nav', `${section.id}`);
        navlink.className = 'menu__link';
        navlink.appendChild(document.createTextNode(`${section.dataset.nav}`));
        navlist.appendChild(navlink);
        navBar.appendChild(navlist);
    });
}

for (let i = 1; i < 5; i++) {
    CreateSection();
    createNavlist();
}


//Add New section with btn
const Btn = document.querySelector('.navbar__menu button');
console.log(Btn);

Btn.addEventListener('click', () => {
    CreateSection();
    createNavlist();
});


// click Scroll 
navBar.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById(e.target.dataset.nav).scrollIntoView({
        behavior: 'smooth'
    })
});

// Create click scroll top
let Topup = document.createElement('a');
Topup.appendChild(document.createTextNode('Top'));
Topup.href = "";
Topup.id = 'to-top';
document.body.prepend(Topup);

// Scroll From Element And Add class Active 

window.onscroll = () => {
    document.querySelectorAll('section').forEach(function(section) {
        let NavLink = document.querySelector(`[data-nav=${section.id}]`);

        if (section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 150) {

            section.classList.add("your-active-class");
            NavLink.classList.add(`active-link`);

        } else {
            section.classList.remove("your-active-class");
            NavLink.classList.remove(`active-link`);
        }

    });

    this.scrollY >= 800 ? Topup.classList.add('active') : Topup.classList.remove('active')
}