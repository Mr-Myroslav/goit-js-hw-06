const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let hot = document.createElement("div");
for (let i = 0; i < ingredients.length; i++){
  const ingr = ingredients[i];
  const li = document.createElement("li");
  li.classList.add('item');
  li.innerHTML = ingr;
  hot.append(li)
}
document.getElementById("ingredients").innerHTML = hot.innerHTML
// console.log(hot.innerHTML)