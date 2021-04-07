

function navRender() {
    const content = document.getElementById('content');

    const nav = document.createElement('nav');
    nav.classList = 'hidden';

    const burger = document.createElement('div');
    burger.className = 'burger';


    const burgerTop = document.createElement('div');
    burgerTop.className = 'b-top';
    const burgerBot = document.createElement('div');
    burgerBot.className = 'b-bot';

    burger.appendChild(burgerTop);
    burger.appendChild(burgerBot)


    const list = document.createElement('ul');
    list.className = 'menu';

    const li1 = document.createElement('li');
    li1.className = 'nav_home';
    li1.textContent = 'HOME';
    list.appendChild(li1);

    const li2 = document.createElement('li');
    li2.className = 'nav_about';
    li2.textContent = 'ABOUT';
    list.appendChild(li2);

    const li3 = document.createElement('li');
    li3.className = 'nav_offers';
    li3.textContent = 'OFFERS';
    list.appendChild(li3);

    const li4 = document.createElement('li');
    li4.className = 'nav_contact';
    li4.textContent = 'CONTACT';
    list.appendChild(li4);

    content.appendChild(burger);
    content.appendChild(nav)
    nav.appendChild(list)
}

export {
    navRender
}