let questions = []
let randomindex = []

let allquestions = [
  {
    numb: 1,
    question: "Who is the founder of Kumarans Schools?",
    answer: "Smt R. Anasuya Devi",
    options: [
      "Mrs. Deepa Sridhar",
      "Smt. Meenakshi Balakrishnan",
      "Smt. R. Anasuya Devi"
    ]
  },
    {
    numb: 2,
    question: "How many campuses of Kumarans Schools are there today?",
    answer: "6",
    options: [
      "3",
      "6",
      "5"
    ]
  },
  {
    numb: 3,
    question: "When was the Mallasandra campus of SKPS built?",
    answer: "2009",
    options: [
      "2009",
      "2011",
      "2005"
    ]
  },
  {
    numb: 4,
    question: "Which forest surrounds the Mallasandra campus of SKPS?",
    answer: "8, August, 2021",
    options: [
      "Turahalli Forest",
      "8, August, 2021",
      "9, August, 2021"
    ]
  },
  {
    numb: 5,
    question: "Dummy question 5",
    answer: "33",
    options: [
      "37",
      "35",
      "45"
    ]
  },
  {
    numb: 6,
    question: "Dummy question 6",
    answer: "USA",
    options: [
      "Australlia",
      "USA",
      "China"
    ]
  },
  {
    numb: 7,
    question: "Dummy question 7",
    answer: "Syria",
    options: [
      "Austria",
      "Syria",
      "Moldova"
    ]
  },
  {
    numb: 8,
    question: "Dummy question 8",
    answer: "1061",
    options: [
      "1041",
      "10057",
      "1061"
    ]
  },
  {
    numb: 9,
    question: "Dummy question 9",
    answer: "Bronze",
    options: [
      "Gold",
      "Sliver",
      "Bronze"
    ]
  },
  {
    numb: 10,
    question: "Dummy question 10",
    answer: "49kg",
    options: [
      "59kg",
      "49kg",
      "69kg"
    ]
  },
  {
    numb: 11,
    question: "Dummy question 11",
    answer: "Johannes Vetter",
    options: [
      "Johannes Vetter",
      "Keshorn Walcott",
      "Anderson Peters"
    ]
  },
  {
    numb: 12,
    question: "Dummy question 12",
    answer: "196",
    options: [
      "204",
      "197",
      "196"
    ]
  },
  {
    numb: 13,
    question: "Dummy question 13",
    answer: "Bhavani Devi",
    options: [
      "Shilpa Garg",
      "Pooja Mishra",
      "Bhavani Devi"
    ]
  },
  {
    numb: 14,
    question: "Dummy question 14",
    answer: "Miraitowa",
    options: [
      "PyeongChang",
      "Miraitowa",
      "Nagano"
    ]
  },
  {
    numb: 15,
    question: "Dummy question 15",
    answer: "Five continents",
    options: [
      "Five continents",
      "Trust",
      "Honor"
    ]
  },
  {
    numb: 16,
    question: "Dummy question 16",
    answer: "Miraitowa",
    options: [
      "PyeongChang",
      "Miraitowa",
      "Nagano"
    ]
  },
  {
    numb: 17,
    question: "Dummy question 17",
    answer: "Miraitowa",
    options: [
      "PyeongChang",
      "Miraitowa",
      "Nagano"
    ]
  },
  {
    numb: 18,
    question: "Dummy question 18",
    answer: "Miraitowa",
    options: [
      "PyeongChang",
      "Miraitowa",
      "Nagano"
    ]
  },
  {
    numb: 19,
    question: "Dummy question 19",
    answer: "Miraitowa",
    options: [
      "PyeongChang",
      "Miraitowa",
      "Nagano"
    ]
  },
  {
    numb: 20,
    question: "Dummy question 20",
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