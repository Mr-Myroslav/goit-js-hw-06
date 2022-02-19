const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let galarey = document.querySelector("ul");
const elements = [];
for (let i = 0; i < images.length; i++){
  const li = document.createElement("li")
  const image = document.createElement("img");
  image.src = images[i].url;
  image.alt = images[i].alt;
  image.width = "360";
  li.classList.add("list")

  // li.append(image);
  li.insertAdjacentHTML("afterbegin", image.outerHTML)
  
  elements.push(li)
}
galarey.append(...elements)
