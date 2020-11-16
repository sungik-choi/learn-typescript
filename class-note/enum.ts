enum Shoes {
  Nike,
  Adidas = '아디다스'
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 0 
console.log(Shoes.Adidas);
console.log(Shoes);

// 이넘의 값을 입력하지 않으면, 0부터 시작하는 값이 된다

// 이넘 활용 사례
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다");
  }
  if (answer === Answer.No) {
    console.log("오답입니다");
  }
}

askQuestion(Answer.Yes);
askQuestion('예스');
askQuestion('y');