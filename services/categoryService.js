const faker = require('faker');

class CategoryService {
    constructor(){
        this.categories = [];
        this.generate();
    }

    generate() {
        const limit = 3
        let group = ['family', 'friends', 'work']
        for (let index = 0; index < limit; index++) {
            this.categories.push({
                id: index,
                name: group[index]
            })
        }
        console.log("categories data generated")
    }

    find() {
        return this.categories;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("heyyy");
                resolve(this.categories);
            }, 5000);
        })
    }

    findOne(id) {
        return this.categories.find(item => item.id === id);
    }
}

module.exports = CategoryService;