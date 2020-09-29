const product = {
    id: 1234,
    name: "Great Product",
    tags: ["tag a", "tag b", "tag c"],
    info: {
        category: "My category"
    }
};

// const { id, name: productName } = product;

// const { category } = product.info;

// console.log(category);


// using a function to log the items from the object instead of writing everything separately
function logStuff({ id, name, tags }) {
    console.log(id);
    console.log(name);
    console.log(tags);
}

logStuff(product);
