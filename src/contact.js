

function contactRender() {
    const content = document.getElementById('content');

    const main = document.querySelector('main');
    main.innerHTML = '';
    content.appendChild(main);

    const adress = document.createElement('div');
    adress.className = 'adress';
    main.appendChild(adress);

    adress.innerHTML = `<p>"The Best Places" - Company</p>
                        <p>Miłkowskiego st.530</p>
                        <p>30-349 Krakow</p>
                        <p>Poland</p>
                        <p>+48 123-456-789</p>`
}

export {
    contactRender
}