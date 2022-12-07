let questions = []
let randomindex = []

let allquestions = [
  {
    numb: 1,
    question: "Who is the founder of Kumarans Schools",
    answer: "Smt R. Anasuya Devi",
    options: [
      "Mrs.Deepa Sridhar",
      "Smt. Meenakshi Balakrishnan",
      "Smt R. Anasuya Devi"
    ]
  },
    {
    numb: 2,
    question: "How far did Neeraj Chopra Javelin travel at the Tokyo Olympics 2021 Finals",
    answer: "87.58m",
    options: [
      "86.77m",
      "91.04m",
      "89.27m"
    ]
  },
  {
    numb: 3,
    question: "When was the opening ceremony of the Tokyo Olympics 2021 held?",
    answer: "23, July, 2021",
    options: [
      "23, July, 2021",
      "20, July, 2021",
      "27, July, 2021"
    ]
  },
  {
    numb: 4,
    question: "When was the closing ceremony of the Tokyo Olympics 2021 held?",
    answer: "8, August, 2021",
    options: [
      "6, August, 2021",
      "8, August, 2021",
      "9, August, 2021"
    ]
  },
  {
    numb: 5,
    question: "How many sports were held in the Tokyo Olympics 2021?",
    answer: "33",
    options: [
      "37",
      "35",
      "45"
    ]
  },
  {
    numb: 6,
    question: "Which country won the Tokyo Olympics 2021",
    answer: "USA",
    options: [
      "Australlia",
      "USA",
      "China"
    ]
  },
  {
    numb: 7,
    question: "Which country came at last in the Tokyo Olympics 2021",
    answer: "Syria",
    options: [
      "Austria",
      "Syria",
      "Moldova"
    ]
  },
  {
    numb: 8,
    question: "How many gold medals did USA win overall in the olympics?",
    answer: "1061",
    options: [
      "1041",
      "10057",
      "1061"
    ]
  },
  {
    numb: 9,
    question: "Which medal did PV Sindhu get in Tokyo olympics?",
    answer: "Bronze",
    options: [
      "Gold",
      "Sliver",
      "Bronze"
    ]
  },
  {
    numb: 10,
    question: "Which weight category did Mirabai Chanu participate in?",
    answer: "49kg",
    options: [
      "59kg",
      "49kg",
      "69kg"
    ]
  },
  {
    numb: 11,
    question: "Who did Neeraj Chopra play against in Tokyo Olympics 2021?",
    answer: "Johannes Vetter",
    options: [
      "Johannes Vetter",
      "Keshorn Walcott",
      "Anderson Peters"
    ]
  },
  {
    numb: 12,
    question: "How much weight did Mirabai Chanu lift (in total) in the Tokyo Olympics 2021?",
    answer: "196",
    options: [
      "204",
      "197",
      "196"
    ]
  },
  {
    numb: 13,
    question: "Who was the first ever Indian fencer to qualify for The Tokyo Olympics 2021?",
    answer: "Bhavani Devi",
    options: [
      "Shilpa Garg",
      "Pooja Mishra",
      "Bhavani Devi"
    ]
  },
  {
    numb: 14,
    question: "What is the Tokyo Olympics 2020 Mascot?",
    answer: "Miraitowa",
    options: [
      "PyeongChang",
      "Miraitowa",
      "Nagano"
    ]
  },
  {
    numb: 15,
    question: "What do the five rings on the Olympic symbol represent?",
    answer: "Five continents",
    options: [
      "Five continents",
      "Trust",
      "Honor"
    ]
  },
  {
    numb: 16,
    question: "What is the Tokyo Olympics 2020 Mascot?",
    answer: "Miraitowa",
    options: [
      "PyeongChang",
      "Miraitowa",
      "Nagano"
    ]
  },
  {
    numb: 17,
    question: "What is the Tokyo Olympics 2020 Mascot?",
    answer: "Miraitowa",
    options: [
      "PyeongChang",
      "Miraitowa",
      "Nagano"
    ]
  },
  {
    numb: 18,
    question: "What is the Tokyo Olympics 2020 Mascot?",
    answer: "Miraitowa",
    options: [
      "PyeongChang",
      "Miraitowa",
      "Nagano"
    ]
  },
  {
    numb: 19,
    question: "What is the Tokyo Olympics 2020 Mascot?",
    answer: "Miraitowa",
    options: [
      "PyeongChang",
      "Miraitowa",
      "Nagano"
    ]
  },
  {
    numb: 20,
    question: "What is the Tokyo Olympics 2020 Mascot?",
    answer: "Miraitowa",
    options: [
      "PyeongChang",
      "Miraitowa",
      "Nagano"  
    ]
  },
];

while (randomindex.length < 10) {
  var r = Math.floor(Math.random() * 20)
  if (randomindex.indexOf(r) === -1) randomindex.push(r);
}
for (i=0;i<10;i++) {
  questions.push(allquestions[randomindex[i]])
  questions[i].numb = i + 1;
}