class Product{
    constructor(name, cost, acceptingOrders, quantity, description ){
      this.name =name;
      this.cost = cost;
      this.acceptingOrders = acceptingOrders;
      this.quantity = quantity;
      this.description = description;
    }
    stockCost() {
       return this.cost * this.quantity;
    }

    desc(){
        return this.description;
    }

    render(){
        const productCard = document.createElement('div');
        productCard.setAttribute('class', 'product');

        const name = document.createElement('div');
        name.setAttribute('class', 'name');

        const cost = document.createElement('div');
        cost.setAttribute('class', 'cost');

        const quantity = document.createElement('div');
        quantity.setAttribute('class', 'quantity');

        const stockCost = document.createElement('div');
        stockCost.setAttribute('class', 'stock-cost');

        const stockBtn = document.createElement('button');
        stockBtn.innerText = 'Stock Cost';
        stockBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`Total cost : $${this.stockCost()}`)
        })
        stockBtn.append(stockCost);

        const veiwDesc = document.createElement('div');
        veiwDesc.setAttribute('class', 'view-description');

        const veiwBtn = document.createElement('button');
        veiwBtn.innerText = 'veiw description';
        veiwBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`Description of the product : ${this.desc()}`)
        })
        veiwBtn.append(veiwDesc);

        const buy = document.createElement('div');
        buy.setAttribute('class', 'buy-btn');

        const buyBtn = document.createElement('button');
        buyBtn.innerText = 'Buy';

        buyBtn.addEventListener('click', (e) => {
            e.preventDefault();
        })


    }

}

export default Product;