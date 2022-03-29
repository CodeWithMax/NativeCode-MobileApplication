const Courses = [
  {
    id: "1",
    title: "Web development",
    image: require("../../assets/webdev.jpg"),
    description:
      "This is the description of the course web development(HTML,Css,JavaScript)",
    course1: "Html",
    course2: "Css",
    course3: "Javascript",

    price: 1000,
  },

  {
    id: "2",
    title: "React-Native",
    image: require("../../assets/react-native.png"),
    description:
      "This is the description of the course React-Native/Android/ios development",
    course1: "react",
    course2: "expo-cli",
    course3: "react-native-cli",
    price: 2000,
  },

  {
    id: "3",
    title: "Programming with python",
    image: require("../../assets/python.png"),
    description:
      "This is the description of the course  Programming with python ",
    course1: "Basic syntax",
    course2: "Oops",
    course3: "Advance python",
    price: 1500,
  },

  {
    id: "4",
    title: "Docker",
    image: require("../../assets/docker.png"),
    description: "This is the description of the course DevOps tool (Docker)",
    course1: "Containers and Images",
    course2: "Docker compose",
    course3: "Docker swarm",
    price: 2500,
  },

  {
    id: "5",
    title: "AWS",
    image: require("../../assets/aws.png"),
    description:
      "This is the description of the course AWS (amazon web services) cloud computing",
    course1: "What is Cloud Computing",
    course2: "AWS Core Services",
    course3: "AWS EC2",
    price: "Free",
  },
];

export default Courses;
