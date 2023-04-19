var products = [
  {
    img: "./images/aolennu.webp",
    title: "Áo len nữ",
    price: 110000,
  },
  {
    img: "./images/chanvaynu.webp",
    title: "Chân váy nữ",
    price: 70000,
  },
  {
    img: "./images/aokhoacnu.webp",
    title: "Áo khoác nữ",
    price: 330000,
  },
  {
    img: "./images/dothethaonu.webp",
    title: "Đồ thể thao nữ",
    price: "110000",
  },
  {
    img: "./images/somitreem.webp",
    title: "Sơ mi trẻ em",
    price: 110000,
  },
];

function LoadProduct() {
  var root = document.querySelector("#list_product_hot");
  var htmls = products.map((product) => {
    return `
   <div class="list_product_hot-item">
    <div class="img">
    <a href="/ao-len-nu">
     <img
       src="${product.img}"
       alt=""
       style="height: 206px; border-radius: 10px"
     />
    </a>
    </div>
        <div class="title">
            <a href="/ao-len-nu">${product.title}</a>
        </div>
        <div class="price">
              <h3>${product.price}đ</h3>
        </div>
   </div>
    `;
  });
  root.innerHTML = htmls.join(" ");
}
LoadProduct();
