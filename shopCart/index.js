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
  if(res_code !== '200') return;

  const cartCountElement = createElement({tagName: 'span', innerHTML: `Cart Count : ${cartCnt}`});
  rootEl.insertAdjacentElement('beforeend', cartCountElement);

  if(Array.isArray(cartList)) {
    cartList.forEach(item => {
      const {cartInfo} = item;
      const {itemList} = cartInfo[0];
      const itemListWrap = itemList.reduce((acc,cur) => {
        acc += `<li>${cur.prdNm}</li>`;
        return acc
      },'')

      const cartListElement = createElement({tagName: 'ul', innerHTML: itemListWrap})
      rootEl.insertAdjacentElement('beforeend', cartListElement)
    })
  }


});
