const products = [
  {
    img: "https://img.freepik.com/free-photo/camera-equipment-capturing-single-macro-object-generative-ai_188544-12096.jpg?ga=GA1.1.1818702568.1725715802&semt=ais_hybrid",
    name: "DSLR Camera",
    price: "1035.00",
  },
  {
    img: "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96833.jpg?t=st=1727210075~exp=1727213675~hmac=5f95b0c8e75d9b209136a24d69357d653e26ed31f1c91b0b7f2b1af7efeaa3db&w=740",
    name: "Smart Watch",
    price: "129.99",
  },
  {
    img: "https://img.freepik.com/free-photo/wireless-white-smart-speaker-digital-device_53876-96821.jpg?t=st=1727209569~exp=1727213169~hmac=f33c5b96c7227a0c95de071efb25321811573d9ab7d47dcc9110d2ad96112045&w=740",
    name: "Bluetooth Speaker",
    price: "130.00",
  },
  {
    img: "https://img.freepik.com/free-photo/workplace-with-laptop-stand_23-2148040519.jpg?t=st=1727209463~exp=1727213063~hmac=771dcbbcd3bda3d389109b066d6d5185d59ecf29b03aeb2422b789b829b5d961&w=740",
    name: "Laptop Stand",
    price: "43.23",
  },
  {
    img: "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072195.jpg?t=st=1727209833~exp=1727213433~hmac=5c0c4ca2192b4ed33bfcd84cae3ae3083bf0e1545efac41cc316465b69b1e044&w=360",
    name: "Wireless Bluetooth Earbuds",
    price: "49.99",
  },
  {
    img: "https://img.freepik.com/free-photo/technology-meets-nature-wide-landscape-view-generative-ai_188544-12133.jpg?ga=GA1.1.1818702568.1725715802&semt=ais_hybrid",
    name: "Smart LED TV",
    price: "599.00",
  },
  {
    img: "https://images.pexels.com/photos/3675622/pexels-photo-3675622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Table Fan",
    price: "120.00",
  },
  {
    img: "https://img.freepik.com/free-photo/black-power-bank-digital-device_53876-96820.jpg?t=st=1727210161~exp=1727213761~hmac=53222543754e6f5d5adea864faadf839bc35db44730c230eb067ca3f071dc640&w=360",
    name: "Portable Power Bank",
    price: "29.00",
  },
  {
    img: "https://img.freepik.com/free-photo/separate-camera-objective-table_140725-8076.jpg?t=st=1727210262~exp=1727213862~hmac=e9e61e39ff18a7f60793f4a19a35ee6cf857ca60cb07e4a8969e2fb2927d12f4&w=360",
    name: "DSLR Camera Lens",
    price: "198.50",
  },
  {
    img: "https://img.freepik.com/free-photo/still-life-device-table_23-2150994368.jpg?t=st=1727210351~exp=1727213951~hmac=107c9d43ebfec4b2eb509b6e55abcfda5965464b46616ae53a9fedd5cc3deed3&w=360",
    name: "Gaming Laptop",
    price: "1,299.99",
  },
  {
    img: "https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4725.jpg?t=st=1727210588~exp=1727214188~hmac=0acd39e5bc77153249579bd49fe4bb5634672786dd3ea7d6e6b6dc7e6b6f386f&w=996",
    name: "SmartPhone",
    price: "890.00",
  },
  {
    img: "https://img.freepik.com/free-photo/still-life-robotic-vacuum_23-2151108331.jpg?t=st=1727210680~exp=1727214280~hmac=0988aaba8d62de87d9583418337c6c4c14effa96c2318d626dca4df2e1c6e179&w=996",
    name: "Robot Vacuum Cleaner",
    price: "299.90",
  },
  {
    img: "https://img.freepik.com/free-photo/house-automation-with-camera-shelf_23-2148994155.jpg?t=st=1727210835~exp=1727214435~hmac=f71ebc5dfba4bcf7f91737c38fa42c1cd2488ed3fa77101e522c055b6179e89b&w=996",
    name: "Smart Home Security Camera",
    price: "69.64",
  },
  {
    img: "https://img.freepik.com/free-photo/toothbrush_74190-2599.jpg?ga=GA1.1.1818702568.1725715802&semt=ais_hybrid",
    name: "Electric Toothbrush",
    price: "39.00",
  },
  {
    img: "https://img.freepik.com/free-photo/electric-kettle-dark-background_23-2148728729.jpg?ga=GA1.1.1818702568.1725715802&semt=ais_hybrid",
    name: "Instant Pot Pressure Cooker",
    price: "78.99",
  },
  {
    img: "https://img.freepik.com/free-photo/retro-camera_144627-12244.jpg?t=st=1727209329~exp=1727212929~hmac=f5e7ea8d73800eee9f571580bcb5315baeaaa80aeb65a98833d4cea870eebb6f&w=740",
    name: "Retro Camera",
    price: "970.00",
  },
  {
    img: "https://img.freepik.com/free-photo/individuality-concept-light-bulb_23-2149125671.jpg?ga=GA1.1.1818702568.1725715802&semt=ais_hybrid",
    name: "Smart Light Bulbs (4-Pack)",
    price: "53.89",
  },
  {
    img: "https://img.freepik.com/free-photo/top-view-cyber-monday-essentials-with-clock-mouse_23-2148657691.jpg?ga=GA1.1.1818702568.1725715802&semt=ais_hybrid",
    name: "Wired Mouse ",
    price: "69.00",
  },
];

function cards() {
  for (const item of products) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-4">
            <img src="${item.img}" alt="Product 2" class="w-full h-52 rounded-md object-cover">
        </div>
        <div class="p-4">
          <h3 class="font-bold text-xl">${item.name}</h3>
          <p class="text-gray-600 font-semibold mt-1">$${item.price}</p>
          <button onclick='addToCart("${item.price}")' class="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 transition">Add to Cart</button>
        </div>
      </div>`;
    const container = document.getElementById("card-container");
    container.appendChild(div);
  }
}
cards();
let counter = 0;
let total = 0;
function addToCart(para) {
  counter++;
  const count = document.getElementById("count");
  const items = document.getElementById("items");
  items.innerText = counter;
  count.innerText = counter;
  const subTotal = document.getElementById("subtotal");
  const productPrice = parseFloat(para);
  const totalPrice = (total += productPrice);
  subTotal.innerText = totalPrice.toFixed(2);
}

const signInBtn = document
  .getElementById("sign-in")
  .addEventListener("click", function () {
    const signForm = document.getElementById("sign-in-form");
    signForm.classList.toggle("hidden");
    const container = document
      .getElementById("card-container")
      .classList.toggle("hidden");
  });
const signInBtn2 = document
  .getElementById("sign-in2")
  .addEventListener("click", function () {
    const signForm = document.getElementById("sign-in-form");
    signForm.classList.toggle("hidden");
    const container = document
      .getElementById("card-container")
      .classList.toggle("hidden");
  });

const cartBox = document
  .getElementById("open-cart-total")
  .addEventListener("click", function () {
    const cartTotal = document
      .getElementById("cartTotal")
      .classList.toggle("hidden");
  });

document.getElementById("buy-now").addEventListener("click", function () {
  alert("Your order has been complete");
  const items = document.getElementById("items");
  items.innerText = "0";
  const subTotal = document.getElementById("subtotal");
  subTotal.innerText = "00.00";
  const count = document.getElementById("count");
  count.innerText = "0";
});
