let questions = []
let randomindex = []

let allquestions = [
  {
    numb: 1,
    question: "What is the most widely used OS?",
    answer: "Windows 10",
    options: [
      "Windows 11",
      "Windows 10",
      "MacOS"
    ]
  },
    {
    numb: 2,
    question: "When was the first computer created?",
    answer: "1822",
    options: [
      "1822",
      "1942",
      "1874"
    ]
  },
  {
    numb: 3,
    question: "Can we see the cpu when a computer is running?",
    answer: "No",
    options: [
      "Yes",
      "No",
      "On some computers "
    ]
  },
  {
    numb: 4,
    question: "What programming language is used to make the base of windows?",
    answer: "c",
    options: [
      "a",
      "c++",
      "c"
    ]
  },
  {
    numb: 5,
    question: "What does ROM stand for?",
    answer: "read only memory",
    options: [
      "read only memory",
      "read only module",
      "right only memory"
    ]
  },
  {
    numb: 6,
    question: "What is the extension for apps on windows?",
    answer: ".exe",
    options: [
      ".bin",
      ".app",
      ".exe"
    ]
  },
  {
    numb: 7,
    question: "What is the latest (2023) generation of intel cpus?",
    answer: "12th",
    options: [
      "10th",
      "7th",
      "12th"
    ]
  },
  {
    numb: 8,
    question: "How many letters are there on a keyboard?",
    answer: "26",
    options: [
      "34",
      "26",
      "58"
    ]
  },
  {
    numb: 9,
    question: "What software is most games made with?",
    answer: "Unreal Engine",
    options: [
      "Unity",
      "Unreal Engine",
      "Scratch"
    ]
  },
  {
    numb: 10,
    question: "What are common languages for web development?",
    answer: "both",
    options: [
      "html, css, js",
      "dart, java",
      "both"
    ]
  },
  {
    numb: 11,
    question: "Can websites be made without html?",
    answer: "Additional steps are required",
    options: [
      "Yes",
      "No",
      "Additional steps are required"
    ]
  },
  {
    numb: 12,
    question: "Do you need to install an editor to write code?",
    answer: "Not required but recommended",
    options: [
      "Not required but recommended",
      "Yes",
      "Notepad is good enough"
    ]
  },
  {
    numb: 13,
    question: "What are the parts of a computer which are essential for it to function? ",
    answer: "cpu, ram, hard disk/ssd, display",
    options: [
      "cpu, ram, hard disk/ssd, display, keyboard, mouse/trackpad",
      "cpu, ram",
      "cpu, ram, hard disk/ssd, display"
    ]
  },
  {
    numb: 14,
    question: "The new microsoft edge is based on: ",
    answer: "Chromium",
    options: [
      "Internet explorer",
      "Chromium",
      "Firefox"
    ]
  },
  {
    numb: 15,
    question: "Windows added explorer tabs in which update?",
    answer: "windows 11 october update",
    options: [
      "windows 10 april update",
      "windows 11 initial release",
      "windows 11 october update"
    ]
  },
  {
    numb: 16,
    question: "Visual studio code is a: ",
    answer: "code editor",
    options: [
      "code editor",
      "text editor",
      "integrated development environment"
    ]
  },
  {
    numb: 17,
    question: "Which of the following is not an application?",
    answer: ".java file",
    options: [
      "start menu",
      "windows explorer",
      ".java file"
    ]
  },
  {
    numb: 18,
    question: "How many bits is 1 kilobyte?",
    answer: "8192",
    options: [
      "8000",
      "1024",
      "8192"
    ]
  },
  {
    numb: 19,
    question: "What is AI made of?",
    answer: "Algorithms",
    options: [
      "A lot of code",
      "Algorithms",
      "if else statements"
    ]
  },
  {
    numb: 20,
    question: "What are supercomputers used for?",
    answer: "both",
    options: [
      "data science",
      "artificial intelligence",
      "both"  
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