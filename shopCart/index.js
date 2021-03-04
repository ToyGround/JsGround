const api = 'http://localhost:8787';
const rootEl = document.body.querySelector('#root');

const createElement = object => {
  const {tagName, innerHTML, className} = object;
  const element = document.createElement(tagName);
  element.innerHTML = innerHTML;
  className && (element.className = className);
  if(tagName === 'button') {
    element.addEventListener('click', onClickHandler)
  }
  return element;
};

const onClickHandler = e => {
  console.log(e)
}

fetch(api).then(res => res.json()).then(res => {
  const {res_code, cartCnt, cartList} = res;
  if(res_code !== '200') return;

  const cartCountElement = createElement({tagName: 'span', innerHTML: `Cart Count : ${cartCnt}`, className: 'cartCnt'});
  rootEl.insertAdjacentElement('beforeend', cartCountElement);

  if(Array.isArray(cartList)) {
    cartList.forEach(item => {
      const {cartInfo} = item;
      const {itemList} = cartInfo[0];

      itemList.forEach(item => {
        const buttonEl = createElement({tagName:'button', innerHTML: '버튼'});
        const itemEl = createElement({tagName: 'div', innerHTML: item.prdNm});
        itemEl.appendChild(buttonEl)

        rootEl.insertAdjacentElement('beforeend', itemEl);
      })
    })
  }
});

