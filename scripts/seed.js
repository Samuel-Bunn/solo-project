import { User,db } from '../database/model.js'


console.log('Syncing database...')
await db.sync({force:true})

console.log('Seeding database...')


const dummyUsers = []
for(let i = 0; i < 3 ; i++){
    dummyUsers.push(await User.create({ email: `test${i}@email.com`, passw: 'test' }))
}

const usersInDB = await Promise.all(dummyUsers)

console.log(usersInDB)

await db.close()
console.log('Finished seeding database...')