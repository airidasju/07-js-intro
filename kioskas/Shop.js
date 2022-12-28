class Shop { 
    constructor(shopName, currency) {
        this.shopName = shopName;
        this.currency = currency;
        this.bag = {}
    }

    intro() {
        console.log(`Hi, we are ${this.shopName}.\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`)
        console.log("====================");
    }

    addItem(item, price){
        console.log(`${this.shopName} sells ${item} for ${(price/100).toFixed(2)} ${this.currency} now!`)
        this.bag[item] = (price/100).toFixed(2)

    }
    items() {
        let counter = 0
        console.log("====================");
        for(const item in this.bag) {
            counter ++
            console.log(`${counter}) ${item.charAt(0).toUpperCase() + item.slice(1)} - ${this.bag[item]}`)
        }
        console.log("====================");
    }
    updatePrice(item, price)
}
export { Shop }