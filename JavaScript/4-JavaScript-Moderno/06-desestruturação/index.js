const person = {
    name: "José",
    job: "Técnico",
    parents: ["Carlos", "Laura"]
}

const name = person.name

const {job, parents} = person

console.log(name, job, parents)

const [father, mother] = parents

console.log(father,mother)

// function createUser(person){
//     const id = Math.floor(Math.random() * 9999)

//     return{
//         id,
//         name: person.name,
//         job: person.job,
//         parents: person.parents
//     }
// }

function createUser({name, job, parents}){
    const id = Math.floor(Math.random() * 9999)

    return{
        id,
        name,
        job,
        parents
    }
}

const jose = createUser(person)
console.log(jose) 