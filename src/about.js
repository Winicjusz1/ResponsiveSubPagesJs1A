

function aboutRender() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    content.appendChild(main);

    const about = document.createElement('div');
    about.className = 'about';
    about.innerHTML = 'Lets visit our <p>"The Best Places" - Company</p>We are very happy that you have decided to visit our best places. Our company is an innovative network of travel agencies selling tourist services of tour operators such as Itaka, Exim Tours and many others. In addition to holiday holidays, we offer sightseeing tours to the most interesting places in the world and also skiing trips in the winter season. Our offer also includes camps, summer camps, flight and coach tickets as well as offers for organized groups. We are one of the largest multiagencies in Poland, operating in the tourism industry since 2007.'

    main.appendChild(about)
}

export {
    aboutRender
}