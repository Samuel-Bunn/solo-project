import { User } from '../database/model.js'

console.log('Syncing database...')
await db.sync({force:true})

console.log('Seeding database...')


const dummyUsers = []
for(let i = 0; i < 3 ; i++){
    dummyUsers.push(await User.create({ email: `test${i}@email.com`, passw: 'test' }))
}

await db.close()
console.log('Finished seeding database...')