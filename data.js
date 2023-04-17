module.exports = () => {

    const data = {
        products: [],
        reviews: []
    }

    for (let i=0; i < 100; i++) {
        data.products.push({
            name: `fake Product ${i}`,
            price: ((Math.random() * 100) + 1)
        });

        data.reviews.push({
            name: `fake name ${i}`,
            email: `fake Product email${i}gmail.com`,
            rating: ((Math.random() * 100) + 1),
            comment: `fake Comment ${i}`,
        });

        console.log("sinsle", data)
    }

    console.log({data})
    return data;
}


// module.exports = data