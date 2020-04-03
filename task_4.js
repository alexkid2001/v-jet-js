{

  const container = document.querySelector('.products-list');
  const url = 'http://54.39.188.42/';
  let data ='';
  let out = '';
  
  function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }


  var xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);

  xhr.send();

  console.log(xhr.status);
  
  if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    
  } else {
    // data = Base64Decode(xhr.responseText);
    data = JSON.parse(b64DecodeUnicode(xhr.responseText));
    console.log(data);
  }

  
  console.log('Type', typeof data);
  

  out = `<div class="wrapper">`;
  data.forEach((item) => {
    const price = (+item.price).toFixed(2);

    out += `<div class="card">`;

    out += `<div class="card__id"># ${item.id}</div>`;
    out += `<div class="card__title">${item.title}</div>`;
    out += `<div class="card__sku">${item.sku}</div>`;
    out += `<div class="card__image"><img src="${item.image}"></div>`;
    out += `<div class="card__option-title">Product options:</div>`;
    out += `<div class="card__option">Metal type: ${item.options[0].metal_type}</div>`;
    out += `<div class="card__option">Metal color: ${item.options[0].metal_color}</div>`;
    out += `<div class="card__option">Stone shape: ${item.options[0].stone_shape}</div>`;
    out += `<div class="card__option">Gemstone color: ${item.options[0].gemstone_color}</div>`;
    out += `<div class="card__price">${price} ${item.currency}</div>`;
    out += `</div> `;
  });

  out += `</div>`;
  out += `<style>
    .wrapper {
      display: flex;
      justify-content: center;
      font-size: 14px;
      color: grey;
      flex-wrap: wrap;
      font-family: sans-serif;
    }
    .card {
      padding: 15px;
      margin: 20px;
      width: 250px;
      border: 1px solid grey;
    }
    .card__id, .card__title, .card__sku, .card__option-title, .card__price, .card__image {
      text-align: center;
    }
    .card__image {
      width: 100%;
      height: 200px;
    }
    .card__image img {
      height: 100%;
      object-fill: contain;
    }
    .card__option-title {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 10px;
      color: black;
    }
    .card__option {
      line-height: 1.5;
    }
    .card__price {
      margin-top: 20px;
      font-size: 22px;
      font-weight: bold;
      color: black;
    }
  </style>`;

  container.innerHTML = out;
  
  
}