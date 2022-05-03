const categoriesListItems = document.querySelectorAll('#categories .item');
const categoriesListItemsNumber = categoriesListItems.length;
console.log('Number of categories: ', categoriesListItemsNumber);

categoriesListItems.forEach(getItemHeader);

function getItemHeader (item) {
    const itemHeader = item.querySelector('h2').textContent;
    console.log('Category: ', itemHeader);
    const itemInnerNumber = item.querySelectorAll('li').length;
    console.log('Elements: ', itemInnerNumber);
}

