// Factory function for creating a product
function createProduct(name, price) {
    return {
        name,
        price,
        printInfo() {
            console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}`);
        }
    };
}

// Factory function for creating a coupon
function createCoupon(productName, discountPercentage) {
    return {
        productName,
        discountPercentage
    };
}

// Factory function for creating a cart
function createCart() {
    return {
        products: [],

        addProduct(product) {
            this.products.push(product);
        },

        removeProduct(product) {
            this.products = this.products.filter(p => p !== product);
        },

        checkout(coupons) {
            let total = 0;
            this.products.forEach(product => {
                let discount = 0;
                const coupon = coupons.find(c => c.productName === product.name);
                if (coupon) {
                    discount = (coupon.discountPercentage / 100) * product.price;
                }
                total += product.price - discount;
            });
            return total.toFixed(2);
        },

        checkoutWithoutCoupons() {
            return this.products.reduce((sum, product) => sum + product.price, 0).toFixed(2);
        }
    };
}

// Example Usage
const product1 = createProduct("Laptop", 1000);
const product2 = createProduct("Phone", 500);
const coupon1 = createCoupon("Laptop", 10); // 10% discount on Laptop

const cart = createCart();
cart.addProduct(product1);
cart.addProduct(product2);

console.log("Before checkout:");
cart.products.forEach(p => p.printInfo());

const totalPriceWithCoupons = cart.checkout([coupon1]);
console.log(`Total after applying coupons: $${totalPriceWithCoupons}`);

const totalPriceWithoutCoupons = cart.checkoutWithoutCoupons();
console.log(`Total without coupons: $${totalPriceWithoutCoupons}`);
