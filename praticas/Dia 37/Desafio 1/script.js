// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response =>{
//    return response.json()
// })
// .then(data =>{
//     console.log(data[9].email)
// })
// .catch(error =>{
//     console.log(error)
// })

async function buscarUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/5')
        const data = await response.json()
        console.log(data.name)
    } catch (error) {
        console.log(error)
    }
}
buscarUsuarios() 