'use strict';

const images = [
    { 'id': '1', 'url':'imagens/eletricista.png' },
    { 'id': '2', 'url':'imagens/clubedoacai.png' },
    { 'id': '3', 'url':'imagens/eletrotec.png' },
    { 'id': '4', 'url':'imagens/openbar.png' },
    { 'id': '5', 'url':'imagens/refrigeracao.png' },
    { 'id': '6', 'url':'imagens/vncelular.png' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);