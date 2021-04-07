import { pictureFotoB } from './img_import2';

function offerRender() {


    const content = document.getElementById('content');

    const main = document.querySelector('main');
    main.innerHTML = '';
    content.appendChild(main);

    const pictures = pictureFotoB;

    const mountainsFotoB = document.createElement('div');
    mountainsFotoB.className = 'mountains_fotoB';

    content.appendChild(main);
    main.appendChild(mountainsFotoB);
    mountainsFotoB.appendChild(pictures);

}

export {
    offerRender
}

