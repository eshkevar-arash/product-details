const products = [
  {
    id: 1,
    title:
      "لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Slim 3 15IRH8-i7 13620H 16GB 512SSD",
    price: 32000000,
    img: "./public/images/products/image01.png",
    description:
      "این لپ‌تاپ لنوو با پردازنده‌ی قدرتمند i7 نسل ۱۳ و ۱۶ گیگابایت رم، مناسب برای کارهای روزمره و سنگین. حافظه ۵۱۲ گیگابایتی SSD عملکرد سریعی را فراهم می‌کند.",
  },
  {
    id: 2,
    title:
      "لپ تاپ 14 اینچی ایسوس مدل VivoBook R465FA - Core i5 1135G7 8GB 256SSD",
    price: 27000000,
    img: "./public/images/products/image02.png",
    description:
      "لپ‌تاپ اقتصادی ایسوس با پردازنده i5 نسل ۱۱، دارای ۸ گیگابایت رم و ۲۵۶ گیگابایت حافظه SSD، مناسب برای استفاده روزمره و سبک.",
  },
  {
    id: 3,
    title: "لپ تاپ 13.3 اینچی اپل مدل MacBook Air 2020 M1 8GB 256SSD",
    price: 55000000,
    img: "./public/images/products/image03.png",
    description:
      "مک‌بوک ایر با پردازنده M1 و ۸ گیگابایت رم، ایده‌آل برای کاربران حرفه‌ای اپل که به دنبال سرعت و عملکرد بالا در یک بدنه سبک هستند.",
  },
  {
    id: 4,
    title: "لپ تاپ 16 اینچی اچ‌پی مدل Envy x360 - Ryzen 7 5700U 16GB 512SSD",
    price: 47000000,
    img: "./public/images/products/image04.png",
    description:
      "لپ‌تاپ تبدیل‌پذیر اچ‌پی با پردازنده Ryzen 7 و ۱۶ گیگابایت رم، مناسب برای کارهای گرافیکی و مالتی‌مدیا. صفحه‌نمایش ۱۶ اینچی و کیفیت ساخت عالی.",
  },
  {
    id: 5,
    title: "لپ تاپ 15.6 اینچی دل مدل G5 15 SE - Ryzen 5 4600H 8GB 512SSD",
    price: 36000000,
    img: "./public/images/products/image05.png",
    description:
      "لپ‌تاپ گیمینگ دل با پردازنده Ryzen 5 و ۸ گیگابایت رم، مناسب برای گیمرها و کاربران حرفه‌ای که به دنبال عملکرد قوی هستند.",
  },
  {
    id: 6,
    title:
      "لپ تاپ 15.6 اینچی ایسر مدل Nitro 5 AN515-45 - Ryzen 7 5800H 16GB 1TB SSD",
    price: 54000000,
    img: "./public/images/products/image06.png",
    description:
      "یک لپ‌تاپ گیمینگ قدرتمند از ایسر با پردازنده Ryzen 7 و ۱۶ گیگابایت رم. دارای ۱ ترابایت حافظه SSD برای بازی‌های حجیم و اجرای سریع.",
  },
  {
    id: 7,
    title:
      "لپ تاپ 14 اینچی لنوو مدل ThinkPad X1 Carbon Gen 9 - Core i7 1165G7 16GB 1TB SSD",
    price: 62000000,
    img: "./public/images/products/image07.png",
    description:
      "لپ‌تاپ حرفه‌ای و باکیفیت از سری ThinkPad با پردازنده i7 و ۱۶ گیگابایت رم. مناسب برای کاربران تجاری و حرفه‌ای که به دنبال کیفیت ساخت بالا و امنیت هستند.",
  },
  {
    id: 8,
    title: "لپ تاپ 13.3 اینچی دل مدل XPS 13 - Core i7 1185G7 16GB 512SSD",
    price: 71000000,
    img: "./public/images/products/image08.png",
    description:
      "لپ‌تاپ دل XPS با طراحی زیبا و پردازنده i7، ۱۶ گیگابایت رم و صفحه‌نمایش باکیفیت، انتخابی عالی برای کاربران حرفه‌ای و علاقه‌مندان به تکنولوژی.",
  },
  {
    id: 9,
    title: "لپ تاپ 14 اینچی ایسوس مدل ZenBook 14 - Ryzen 5 5500U 8GB 512SSD",
    price: 38000000,
    img: "./public/images/products/image09.png",
    description:
      "لپ‌تاپ سبک و زیبا از سری ZenBook با پردازنده Ryzen 5 و ۸ گیگابایت رم. مناسب برای کارهای روزمره و سبک با باتری قوی.",
  },
  {
    id: 10,
    title:
      "لپ تاپ 15.6 اینچی ام‌اس‌آی مدل GF63 Thin 11SC - Core i5 11400H 16GB 512SSD",
    price: 46000000,
    img: "./public/images/products/image10.png",
    description:
      "لپ‌تاپ قدرتمند MSI با پردازنده i5 نسل ۱۱، ۱۶ گیگابایت رم و کارت گرافیک مناسب. گزینه‌ای عالی برای گیمرها و کاربران حرفه‌ای.",
  },
  {
    id: 11,
    title: "لپ تاپ 15.6 اینچی اچ‌پی مدل Pavilion 15 - Core i5 1235U 8GB 512SSD",
    price: 34000000,
    img: "./public/images/products/image11.png",
    description:
      "لپ‌تاپ اقتصادی اچ‌پی با پردازنده i5 نسل ۱۲، ۸ گیگابایت رم و ۵۱۲ گیگابایت حافظه SSD، مناسب برای استفاده‌های روزمره و تجاری.",
  },
  {
    id: 12,
    title: "لپ تاپ 16 اینچی اپل مدل MacBook Pro 2021 M1 Pro 16GB 1TB SSD",
    price: 85000000,
    img: "./public/images/products/image12.png",
    description:
      "مک‌بوک پرو با پردازنده M1 Pro و ۱۶ گیگابایت رم، مناسب برای کاربران حرفه‌ای اپل که به دنبال عملکرد بی‌نظیر در کارهای سنگین و حرفه‌ای هستند.",
  },
];

function showDetail(){
  let searchParams = new URLSearchParams(location.search)
  let title = searchParams.get('title')
  let targetProduct = products.find(product => {
    return product.title === title
  })
  document.querySelector('.product-cover').setAttribute('src', targetProduct.img)
  document.querySelector('.product-page-title').textContent = targetProduct.title
  document.querySelector('.product-info').textContent = targetProduct.description
  document.querySelector('.product-price').textContent = targetProduct.price.toLocaleString()
}
showDetail()
/*const productCover = document.querySelector(".product-cover");
const productTitle = document.querySelector(".product-page-title");
const productPrice = document.querySelector(".product-price");
const productInfo = document.querySelector(".product-info");

function showProduct() {
  const searchParams = new URLSearchParams(location.search);
  const productID = searchParams.get("id");

  const mainProduct = products.find(function (product) {
    return product.id === +productID;
  });

  productCover.setAttribute("src", mainProduct.img);
  productTitle.innerHTML = mainProduct.title;
  productPrice.innerHTML = mainProduct.price.toLocaleString();
  productInfo.innerHTML = mainProduct.description;
}*/
