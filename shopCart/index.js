const api = 'http://localhost:8787';
const rootEl = document.body.querySelector('#root');

const createElement = object => {
  const {tagName, innerHTML} = object;
  const element = document.createElement(tagName);
  element.innerHTML = innerHTML;
  return element;
};

fetch(api).then(res => res.json()).then(res => {
  const {res_code, cartCnt, cartList} = res;
  const cartCountElement = createElement({tagName: 'span', innerHTML: cartCnt});

  rootEl.insertAdjacentElement('beforeend', cartCountElement);
});
