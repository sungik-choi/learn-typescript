function logText<A>(text: A): A {
  console.log(text);
  return text;
}

interface Length {
  length: number;
}

function logTextLength<T extends Length>(text: T): T {
  text.length;
  return text;
}

interface ShoppingItem {
  name: string,
  price: number,
  stock: number,
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('price');
