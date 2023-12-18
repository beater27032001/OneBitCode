module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    //Author
    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    //Books
    findBookByname(bookName){
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book) {
        const bookExists = this.findBookByname(book.name)
        if(!bookExists){
            this.#storage.books.push(book)
        }
    }

    addBooksToStock(bookName, quantity){
        const book = this.findBookByname(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByname(bookName)
        book?.removeFromStock(quantity)
    }

    //Posters
    findPosterByname(posterName){
        return this.#storage.posters.find(p => p.name === posterName)
    }

    savePoster(poster) {
        const posterExists = this.findPosterByname(poster.name)
        if(!posterExists){
            this.#storage.posters.push(poster)
        }
    }

    addPostersToStock(posterName, quantity){
        const poster = this.findPosterByname(posterName)
        poster?.addToStock(quantity)
    }

    removePostersFromStock(posterName, quantity){
        const poster = this.findPosterByname(posterName)
        poster?.removeFromStock(quantity)
    }

    //User
    saveUser(user){
        const userExists = this.#storage.users.find(u => u.email == user.email)
        if(!userExists){
            this.#storage.users.push(user)
        }
    }

    //Order
    saveOrder(order){
        this.#storage.orders.push(order)
    }

    //Storage
    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(o => o.data))
    }
}