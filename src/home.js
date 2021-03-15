import { pictureFoto } from './img_import';

function homeRender1() {
    const content = document.getElementById('content');

    const main = document.createElement('main');

    main.innerHTML = '';

    const home = document.createElement('div');
    home.className = 'home';
    main.appendChild(home);

    const header = document.createElement('h1');
    header.className = 'home_header';
    header.innerHTML = 'Lets visit our <br></br> <p>"The Best Places" - Company</p>';

    const pictures = pictureFoto;

    const mountainsFoto = document.createElement('div')
    mountainsFoto.className = 'mountains_foto';

    content.appendChild(main)
    home.appendChild(header)
    home.appendChild(mountainsFoto)
    mountainsFoto.appendChild(pictures)
}

function homeRender() {
    const content = document.getElementById('content');

    const main = document.querySelector('main');
    main.innerHTML = '';
    content.appendChild(main);

    const home = document.createElement('div');
    home.className = 'home';
    main.appendChild(home);

    const header = document.createElement('h1');
    header.className = 'home_header';
    header.innerHTML = 'Lets visit our <br><br> <p>"The Best Places" - Company</p>';


    const pictures = pictureFoto;

    const mountainsFoto = document.createElement('div')
    mountainsFoto.className = 'mountains_foto';

    content.appendChild(main)
    home.appendChild(header)
    home.appendChild(mountainsFoto)
    mountainsFoto.appendChild(pictures)
}

export {
    homeRender1,
    homeRender
}