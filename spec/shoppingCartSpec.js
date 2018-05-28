describe("my shopping cart with list of items", function () {
    let my = new shoppingCart();
    it("scan method, should add an item in the cart", function () {
        
        const oranges = {
            itemId: 14,
            price: 6.05,
        }
        const cheese = {
            itemId: 243,
            price: 5.00,
        }
        const coffee = {
            itemId: 1242,
            price: 4.75,
        }
        my.scan(oranges);
        my.scan(cheese);
        my.scan(coffee);
        expect(my.item()).toEqual([
            {
                itemId: 1,
                price: 6.05,
            },
            {
                itemId: 243,
                price: 5.00,
            },
            {
                itemId: 1242,
                price: 4.75,
            }
        ])
    })
    it("should remove an item from cart, when remove function is called", function () {
        expect(my.remove(
            cheese = {
                itemId: 243,
                price: 5.00,
            })).toEqual([
            oranges = {
                itemId: 1,
                price: 6.05,
            },
            coffee = {
                itemId: 1242,
                price: 4.75,
            }
        ])
    })
    it("should give total price of all items, when total function is called", function () {
        expect(my.total()).toEqual(15.8);
    })
    it("should give discount and give item price by reducing it", function () {
        expect(my.discount(10)).toEqual(14.22);
    })
    it("should give all items present in the shopping cart, when item method is called", function () {
        expect(my.item()).toEqual([
            oranges = {
                itemId: 14,
                price: 6.05,
            },
            cheese = {
                itemId: 243,
                price: 5.00,
            },
            coffee = {
                itemId: 1242,
                price: 4.75,
            }
        ])
    })
})