module.exports = () => {
    
    var {faker} = require('@faker-js/faker');
    
    const data = {
        products: [],
        reviews: []
    }

    for (let i=0; i < 100; i++) {        
        
        data.products.push({
            name: faker.animal.bird(),
            price: ((Math.random() * 100) + 1)
        });

        data.reviews.push({
            name: `fake name ${i}`,
            email: `fake Product email${i}gmail.com`,
            rating: ((Math.random() * 100) + 1),
            comment: `fake Comment ${i}`,
        });
        
    }

    return data;
}