class shoppingCart {
    constructor(...items) {
        this.items = items;
        this.discount = 0;
    }
    scan(product) {
        if (this.items.length < 5) {
            this.items.push(product);
        } else {
            return "Your cart is full";
        }
    }
    remove(product) {
        for (let i = 0; i <= this.items.length; i++) {
            if (this.items[i] === product) {
                this.items.splice(i, 1)
            }
        }
        return this.items;
    }
    discount(num) {
        this.discount = num

        
        var priceBefore = 0;
        var amountToPay = 0;
        for (let i = 0; i < this.items.length; i++) {
            priceBefore += this.items[i].price;
            if (num <= 50) {
                amountToPay = priceBefore - (priceBefore * (num / 100))
            } else if (num > 50) {
                amountToPay = priceBefore - (priceBefore * 0.5);
            }
        }
        return amountToPay;
    }
    total(num) {
        let discountedAmount = this.discount;
        if (!num) {
            let sum = 0;
            for (let i = 0; i < this.items.length; i++) {
                sum += this.items[i].price;
            }
            return sum;
        } else {
            return discountedAmount;
        }
    }
    item() {
        return this.items;
    }
}