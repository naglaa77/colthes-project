/*Start image slider for brand images*/


const productConatainer = [...document.querySelectorAll('.product-container')]; // i use spread because qsAll return array and spraed return list so i put them in [] to convert them  to array again
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];                      // in addition it is the best way to listed all elements of product container
const preBtn = [...document.querySelectorAll('.pre-btn')];

productConatainer.forEach((item,i) => {

    let containerDimensions = item.getBoundingClientRect(); // return all dimension of container and item here represent one image
    let containerWidth = containerDimensions.width;         // return width value of img

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;                 // it means that foreache click increase scroll left with width of img
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;                 // it means that foreache click decrease scroll left with width of one img
    });
});


/*Start image slider for brand images*/