async function buscarPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
         for(let i = 0; i < 5; i++){
             console.log(data[i].title)
         }
    } catch (error) {
        console.log(error)
    }
}
buscarPosts()
