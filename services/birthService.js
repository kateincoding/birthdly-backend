const faker = require('faker');

class BirthService {
    constructor(){
        this.birth = [];
        this.generate();
    }

    generate() {
        const limit = 100
        for (let index = 0; index < limit; index++) {
            this.birth.push({
                id: faker.datatype.uuid(),
                name: faker.name.firstName(),
                category: 'friends',
                birthday: 'xx/xx/xxxx',
                contact: 123456789,
                eventcalendar: 'xxxx',
            })
        }
        console.log("birth data generated")
    }

    find() {
        return this.birth;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("heyyy");
                resolve(this.birth);
            }, 5000);
        })
    }

    findOne(id) {
        return this.birth.find(item => item.id === id);
    }
}

module.exports = BirthService;