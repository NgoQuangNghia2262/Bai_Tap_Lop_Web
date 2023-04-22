var products = [
  {
    img: "./images/aolennu.webp",
    title: "Áo len nữ",
    price: "110.000đ",
  },
  {
    img: "./images/chanvaynu.webp",
    title: "Chân váy nữ",
    price: "70.000đ",
  },
  {
    img: "./images/aokhoacnu.webp",
    title: "Áo khoác nữ",
    price: "300.000đ",
  },
  {
    img: "./images/dothethaonu.webp",
    title: "Đồ thể thao nữ",
    price: "Liên hệ",
  },
  {
    img: "./images/somitreem.webp",
    title: "Sơ mi trẻ em",
    price: "Liên hệ",
  },
  {
    img: "./images/somitreem.webp",
    title: "Sơ mi trẻ em",
    price: "Liên hệ",
  },
  {
    img: "./images/aolennu.webp",
    title: "Áo len nữ",
    price: "110.000đ",
  },
  {
    img: "./images/aolennu.webp",
    title: "Áo len nữ",
    price: "110.000đ",
  },
  {
    img: "./images/aolennu.webp",
    title: "Áo len nữ",
    price: "110.000đ",
  },
];
var contents = [
  {
    img: "./images/prada-men-xuan-he-2022-cam-hung-tu-ngay-he.webp",
    title: "Cách phối đồ hè nam",
    user: "CafeIn Team",
    date: "27/05/2022",
    dec: "1.Sơ mi hoạ tiết + quần denim + giày sneaker Hãy tranh thủ những ngày hè để diện ngay chiếc áo sơ mi ngắn tay với...",
  },
  {
    img: "./images/4-mon-do-thoi-trang-giup-ban-chinh-phuc-phong-cach-sporty-chic.jpg",
    title: "Cách phối đồ với quần thể thao nam",
    user: "CafeIn Team",
    date: "27/05/2022",
    dec: "1.Sơ mi hoạ tiết + quần denim + giày sneaker Hãy tranh thủ những ngày hè để diện ngay chiếc áo sơ mi ngắn tay với...",
  },
  {
    img: "./images/chang-mac-gi-khi-du-tiec-367.webp",
    title: "Cách phối đồ sơ mi nam",
    user: "CafeIn Team",
    date: "27/05/2022",
    dec: "1.Sơ mi hoạ tiết + quần denim + giày sneaker Hãy tranh thủ những ngày hè để diện ngay chiếc áo sơ mi ngắn tay với...",
  },
];

function LoadProduct(products, root) {
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
              <h3>${product.price}</h3>
        </div>
   </div>
    `;
  });
  root.innerHTML = htmls.join(" ");
}
function LoadBlogContent(contents, root) {
  var htmls = contents.map((content) => {
    return `
    <div class="blog_content-item" style="width: 360px">
    <img src="${content.img}" alt="" >
    <h3>${content.title}</h3>
    <div class="time-port" style="display: flex;align-items: center; margin-top: 15px;">
      <i class="fa-solid fa-user time-port-item"  style="margin-left: 0;"></i>
      <p class="time-port-item">${content.user}</p>
      <span class="time-port-item">|</span>
      <i class="time-port-item fa-solid fa-clock"></i>
      <p class="time-port-item">Ngày ${content.date}</p>
    </div>
    <div class="justify" style="width: 100%;word-wrap: break-word; margin-top: 15px;">
      <p>${content.dec}
            </p>
    </div>
    <div style="display: flex;">
      <a href="/">
        Xem thêm
      </a>
      <i class=" fa-sharp fa-solid fa-arrow-right muiten"></i>
    </div>
    </div>
 `;
  });
  root.innerHTML = htmls.join(" ");
}
loadPhuKien = () => {
  let products_hot = products.slice(3, 6);
  var rootProductHot = document.querySelector("#list_product_hot");
  LoadProduct(products_hot, rootProductHot);
};
let products_hot = products.slice(0, 5);
var rootProductHot = document.querySelector("#list_product_hot");
LoadProduct(products_hot, rootProductHot);
var rootProductNew = document.querySelector("#list_product_new");
let products_new = products.slice(0, 3);
LoadProduct(products_new, rootProductNew);
var rootProductSale = document.querySelector("#list_product_sale");
let products_sale = products.slice(0, 5);
LoadProduct(products_sale, rootProductSale);
var rootProductGoodPrice = document.querySelector("#list_product_goodprice");
let products_goodprice = products.slice(0, 6);
LoadProduct(products_goodprice, rootProductGoodPrice);
var rootBlog = document.querySelector("#list-blog");
let blogs = contents.slice(0, 3);
LoadBlogContent(blogs, rootBlog);
