class Shop { 
    constructor(shopName, currency) {
        this.shopName = shopName;
        this.currency = currency;
        this.inventory = []
        this.carts = {}
    }

    intro() {
        console.log(`Hi, we are ${this.shopName}.\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`)
        console.log("====================");
    }



    addItem(item, price){
        console.log(`${this.shopName} sells ${item} for ${(price/100).toFixed(2)} ${this.currency} now!`)
        this.inventory.push({name:item, price: (price/100).toFixed(2)})
    }
    items() {
        let counter = 0
        console.log("====================");
        for(const item of this.inventory) {
            counter ++
            console.log(`${counter}) ${item.name.charAt(0).toUpperCase() + item.name.slice(1)} - ${item.price} ${this.currency}`)
        }
        
    }
    updatePrice(item, price) {
        this.inventory.item.price = price
    }
    createCart(name) {
        this.carts[name] = {}
        this.carts[name].owner = name
        this.carts[name].items = []
        console.log(`${name} have opened a cart at "Meskiuko kioskas"!`);
    }
    addItemToCart(owner, id, count) {
        this.carts[owner].items.push({id: id, count: count})
        
    }
    order(owner) {
        const cartsItems = this.carts[owner].items;
        console.log(this.inventory);
        return cartsItems;
    }

    // orderPrice(owner) {
    //     let price = 0;
    //     let id;
    //     console.log(this.carts[owner].items)
    //     console.log(this.inventory)
    //     for(let i=0; i<this.carts[owner].items.length; i++) {
    //         id = this.carts[owner].items[i].id
    //         price += this.inventory[id].price * this.carts[owner].items[i].count

    //     }
    // }


}
export { Shop }