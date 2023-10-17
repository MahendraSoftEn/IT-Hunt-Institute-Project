import { Images } from '../Images';

export const teachingStaff=[
  {
    name:"Prachi Agrahari",
    designation:"Teacher",
    subject:"Python - IT Tools",
    qualification:"O Level,A Level, MCA",
    teacherImage:Images.teacherImage1
  },
  {
    name:"Vipin Sahu",
    designation:"Teacher",
    subject:"Internet-ICT",
    qualification:"O Level,A Level, MCA",
    teacherImage:Images.teacherImage2
  },
  {
    name:"Rajendra Softech",
    designation:"Teacher",
    subject:"Javascript-HTML CSS",
    qualification:"O Level,A Level, MCA",
    teacherImage:Images.teacherImage3
  },
  {
    name:"Anil Maurya",
    designation:"Teacher",
    subject:"JAVA",
    qualification:"O Level,A Level, MCA",
    teacherImage:Images.teacherImage4
  },
  {
    name:"Ravi Maurya",
    designation:"Teacher",
    subject:"JAVA",
    qualification:"O Level,A Level, MCA",
    teacherImage:Images.teacherImage4
  },
  {
    name:"Raju Mishra",
    designation:"Teacher",
    subject:"JAVA",
    qualification:"O Level,A Level, MCA",
    teacherImage:Images.teacherImage4
  },
  {
    name:"Gabbar Pandey",
    designation:"Teacher",
    subject:"JAVA",
    qualification:"O Level,A Level, MCA",
    teacherImage:Images.teacherImage4
  },
];

export const Courses=[
  {
    course:"CCC",
    course_logo:Images.courseImage1,
    description:"Course On Computer Application"
  },
  {
    course:"O Level",
    course_logo:Images.courseImage2,
    description:"Ordinary Level From Nielit"
  },
  {
    course:"A Level",
    course_logo:Images.courseImage3,
    description:"Advance Level From Nielit"
  },
  {
    course:"MCA",
    course_logo:Images.courseImage4,
    description:"Master Of Computer Application"
  },
];

export const topic=[
  {
    id:1,
    name:"Python Language",
    logo:Images.topicImage1,
    description:"Python Programming Language"
  },
  {
    id:2,
    name:"Javscript Language",
    logo:Images.topicImage2,
    description:"Javascript Programming Language"
  },
  {
    id:3,
    name:"HTML CSS",
    logo:Images.topicImage3,
    description:"Hyper Text Markup Language CasCading StyleSheet"
  },
  {
    id:4,
    name:"IT Tools",
    logo:Images.topicImage4,
    description:"Information Technology Tools"
  },
];

export const ITTeamData=[
  {
    name:"Anil Maurya",
    designation:"Software Engineer(Full Stack Developer)",
    image:Images.team1
  },
  {
    name:"Ravi Pandey",
    designation:"Software Engineer(Front-End Developer)",
    image:Images.team2
  },
  {
    name:"Sohan Kumar",
    designation:"Software Engineer(Mobile Developer)",
    image:Images.team3
  },
  {
    name:"Rajendra Pandey",
    designation:"Software Engineer(IOS Developer)",
    image:Images.team4
  },
  {
    name:"Lokesh Kumar",
    designation:"Software Engineer(React Native Developer)",
    image:Images.team1
  },
]

// all only question Data

export const python_question=[
  {
    question:"Who developed Python Programming Language?",
    option:["Wick van Rossum","Rasmus Lerdorf","Guido van Rossum","Niene Stom"],
    answer:3
  }, 
  {
    question:"Which type of Programming does Python support?",
    option:["object-oriented programming","structured programming","functional programming","all of the mentioned"],
    answer:4
  },
  {
    question:"Describe Tupe with example in python.",
    option:["object-oriented programming","structured programming","functional programming","all of the mentioned"],
    answer:4
  },
  {
    question:"Is Python case sensitive when dealing with identifiers?",
    option:["no","yes","machine dependent","none of the mentioned"],
    answer:2
  },
  {
    question:"Which of the following is the correct extension of the Python file?",
    option:[".python",".pl",".py",".p"],
    answer:3
  },  
  {
    question:"What will be the value of the following Python expression? (4 + 3 % 5)",
    option:["7","2","4","1"],
    answer:1
  },  
  {
    question:"Which keyword is used for function in Python language?",
    option:["Function","def","Fun","Define"],
    answer:2
  },  
  {
    question:"Which of the following functions can help us to find the version of python that we are currently",
    option:["sys.version(1)","sys.version(0)","sys.version()","sys.version"],
    answer:4
  },  
  {
    question:"What does pip stand for python?",
    option:["Pip Installs Python","Pip Installs Packages","Preferred Installer Program","All of the mentioned"],
    answer:4
  },  
  {
    question:"Which of the following is the truncation division operator in Python?",
    option:["|","//","/"," %"],
    answer:3
  },  
 
];

export const javascript_question=[
  {
    question:" Which type of JavaScript language is ___",
    option:["Object-Oriented","Object-Based","Assembly-language","High-level"],
    answer:2
  },  
  {
    question:" Arrays in JavaScript are defined by which of the following statements?",
    option:["It is an ordered list of values","It is an ordered list of objects","It is an ordered list of string","It is an ordered list of functions"],
    answer:1
  },  
  
  {
    question:"var js = (function(x) {return x*x;}(10));",
    option:["Exception will be thrown","Memory leak","Error","Yes, perfectly"],
    answer:4
  },   
  {
    question:"Which of the following is not javascript data types?",
    option:["Null type","Undefined type","Number type","All of the mentioned"],
    answer:4
  },  
  {
    question:"Which of the following can be used to call a JavaScript Code Snippet?",
    option:["Function/Method","Preprocessor","Triggering Event","RMI%"],
    answer:1
  },  
  
];

export const IT_Tools_question=[
  {
    question:"What is internet?",
    option:["A network of interconnected local area networks","A collection of unrelated computers","Interconnection of wide area networks","A single network"],
    answer:3
  },   
  {
    question:"Which of the following is an example of Bluetooth?",
    option:["wide area network","virtual private network","local area network","personal area network"],
    answer:4
  },  
  {
    question:"What is the full form of OSI?",
    option:["optical service implementation","open service Internet","open system interconnection","operating system interface"],
    answer:3
  },
  {
    question:"How many layers are there in the ISO OSI reference model?",
    option:["7","5","4","3"],
    answer:1
  },
  {
    question:"Which one of the following is not a function of network layer?",
    option:["congestion control","error control","routing","inter-networking"],
    answer:2
  }, 
   
];

export const HTML_question=[
  {
    question:"What is HTML?",
    option:["HTML describes the structure of a webpage","HTML is the standard markup language mainly used to create web pages","HTML consists of a set of elements that helps the browser how to view the content","All of the mentioned"],
    answer:4
  },   
  {
    question:"Who is the father of HTML?",
    option:["Rasmus Lerdorf","Tim Berners-Lee","Brendan Eich","Sergey Brin"],
    answer:2
  },
  {
    question:" HTML stands for __________",
    option:["HyperText Markup Language","HyperText Machine Language","HyperText Marking Language","HighText Marking Language"],
    answer:1
  }, 
  {
    question:"Which of the following tag is used for inserting the largest heading in HTML?",
    option:["head","<h6>","<h1>","heading"],
    answer:2
  }, 
  {
    question:"What is the correct syntax of doctype in HTML5?",
    option:["</doctype html>","<doctype html>","<doctype html!>","<!doctype html></doctype>"],
    answer:1
  }, 
   
];

// mcq python question

export const mcq_python=[
  {
    question:"Who developed Python Programming Language?",
    option:["Wick van Rossum","Rasmus Lerdorf","Guido van Rossum","Niene Stom"],
    answer:"Object Oriented"
  },
  {
    question:"Which type of Programming does Python support?",
    option:["object-oriented programming"," structured programming","functional programming","all of the mentioned"],
    answer:"Object Oriented"
  },
  {
    question:"Is Python case sensitive when dealing with identifiers?",
    option:["no","yes","machine dependent","none of the mentioned"],
    answer:"Object Oriented"
  },
  {
    question:"Which of the following is the correct extension of the Python file?",
    option:[" .python",".pl",".py","p"],
    answer:"Object Oriented"
  },
  {
    question:"All keywords in Python are in _________.",
    option:["Capitalized"," lower case","UPPER CASE","None of the mentioned"],
    answer:"Object Oriented"
  },
  {
    question:"Which of the following is used to define a block of code in Python language?",
    option:[" Indentation","Key","Brackets","All of the mentioned"],
    answer:"Object Oriented"
  },
];


// communication module

export const moduelData=[
  {
     Icon:require('../../assets/DashBoard/newsIcon.png'),
     name:"News"
  },
  {
     Icon:require('../../assets/DashBoard/Fees.png'),
     name:"Fee"
  },
  {
     Icon:require('../../assets/DashBoard/ImageGallery.png'),
     name:"Image Gallery"
  },
 
];

// News Data

export const NewsData=[
  {
    name:"15th August Celebration",
    description:"Dear Student,All student come at this date for celebrate 15th august",
    date:"23 Jul, 2023"
  },
  {
    name:"Diwali Celebration",
    description:"Dear Student,All student come at this date for celebrate Diwali",
    date:"30 Jun, 2023"
  },
  {
    name:"Holi Celebration",
    description:"Dear Student,All student come at this date for celebrate Holi",
    date:"10 Feb, 2023"
  },
  {
    name:"Holi Celebration",
    description:"Dear Student,All student come at this date for celebrate Holi",
    date:"10 Feb, 2023"
  },
  {
    name:"Holi Celebration",
    description:"Dear Student,All student come at this date for celebrate Holi",
    date:"10 Feb, 2023"
  },
  {
    name:"Open House Celebration",
    description:"Dear Student,All student come at this date for celebrate Open House",
    date:"30 Mar, 2023"
  },
  {
    name:"Yearly Function Celebration",
    description:"Dear Student,All student come at this date for celebrate Yearly Function",
    date:"12 Aug, 2023"
  },
]










