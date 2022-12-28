class Shop { 
    constructor(shopName, currency) {
        this.shopName = shopName;
        this.currency = currency;
        this.inventory = {}
        this.carts = {}
    }

    intro() {
        console.log(`Hi, we are ${this.shopName}.\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`)
        console.log("====================");
    }

    addItem(item, price){
        console.log(`${this.shopName} sells ${item} for ${(price/100).toFixed(2)} ${this.currency} now!`)
        this.inventory[item] = (price/100).toFixed(2)

    }
    items() {
        let counter = 0
        console.log("====================");
        for(const item in this.inventory) {
            counter ++
            this.inventory[counter] = {item: item, price: (this.inventory[item])}
            console.log(`${counter}) ${item.charAt(0).toUpperCase() + item.slice(1)} - ${this.inventory[item]}`)
        }
        
    }
    updatePrice(item, price) {
        this.inventory[item] = (price/100).toFixed(2)
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
        // console.log(this.carts[owner])
        console.log(this.inventory)
    }


}
export { Shop }