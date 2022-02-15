const items = categories.querySelectorAll(".item");

console.log("Number of categories:", items.length);
for (let i = 0; i < items.length; i++){
    const h1 = items[i].childNodes[1];
    const ul = items[i].childNodes[3];

    console.log("Category:", h1.innerHTML)
    console.log("Elements:", ul.children.length)
    // for (let k = 0; k < ul.children.length; k++){
    //     const li = ul.children[k];
    //     console.log("name of element:", li.innerHTML)
    // }
}

