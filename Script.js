'use strict'

const container = document.getElementById('Gallery');
const gallery_items = document.querySelectorAll('.gallery-items');

const masonryLayout = (containerElem, itemsElems, columns) => {
    containerElem.classList.add('masonry-layout', `columns-${columns}`);
    let columnasElements = [];

    for(let i = 1; i <= columns; i++ ){
        let column = document.createElement('div');
        column.classList.add('masonry-column', `column-${i}`);
        containerElem.appendChild(column);
        columnasElements.push(column);
    }

    for(let m = 0; m < Math.ceil(itemsElems.length / columns); m++){
        for(let n = 0; n < columns; n++){

            let item = itemsElems [m * columns + n];
            columnasElements[n].appendChild(item);
           
        }
    }
}

masonryLayout(container, gallery_items , 5);