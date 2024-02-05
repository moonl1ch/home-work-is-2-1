let product1 = {
    name: "Смартфон",
    price: 45000,
    inStock: true,
    brand: "Samsung",
    specifications: {
      display: "6.4 дюйма",
      battery: "4000 mAh",
      memory: "64GB"
    },
    discount: {
      percentage: 10,
      expirationDate: "2023-01-01"
    }
  };
  
  let product2 = {
    name: "Ноутбук",
    price: 80000,
    inStock: true,
    brand: "HP",
    specifications: {
      screenSize: "15.6 дюйма",
      processor: "Intel Core i5",
      memory: "8GB RAM"
    }
  };

  let customer1 = {
    name: "Иван",
    budget: 60000
  };
  
  let customer2 = {
    name: "Екатерина",
    budget: 90000
  };
  
  if (customer1.budget < product1.price) {
    console.log(customer1.name + ", у вас недостаточно средств для покупки " + product1.name);
  } else {
    console.log(customer1.name + ", вы можете купить " + product1.name);
    console.log("Бренд:", product1.brand);
    console.log("Технические характеристики товара:", product1.specifications); 
    if (product1.discount) {
      console.log("Скидка", product1.discount.percentage + "% до", product1.discount.expirationDate);
      let discountedPrice = product1.price - (product1.price * (product1.discount.percentage / 100)); 
      if (inStock === true) {
        console.log("Товар в наличии");
      } else {
        console.log("Товара нет в наличии")
      }    
      console.log("Цена со скидкой:", discountedPrice);
    } else {
      console.log("Цена товара:", product1.price);
    }
  }
  
  if (customer2.budget < product2.price) {
    console.log(customer2.name + ", у вас недостаточно средств для покупки " + product2.name);
  } else {
    console.log(customer2.name + ", вы можете купить " + product2.name);
    console.log("Технические характеристики товара:", product2.specifications);
    
    if (product2.discount) {
      console.log("Скидка", product2.discount.percentage + "% до", product2.discount.expirationDate);
      let discountedPrice = product2.price - (product2.price * (product2.discount.percentage / 100));
      console.log("Цена со скидкой:", discountedPrice);
    } else {
      console.log("Цена товара:", product2.price);
    }
  }