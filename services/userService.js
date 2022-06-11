const faker = require('faker');

class UserService {
    constructor(){
        this.users = [];
        this.generate();
    }

    generate() {
        const limit = 100
        for (let index = 0; index < limit; index++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: faker.name.firstName(),
                contact: 123456789,
                calendar: 'xxxx',
            })
        }
        console.log("user data generated")
    }

    find() {
        return this.users;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("heyyy");
                resolve(this.users);
            }, 5000);
        })
    }

    findOne(id) {
        return this.users.find(item => item.id === id);
    }
}

module.exports = UserService;