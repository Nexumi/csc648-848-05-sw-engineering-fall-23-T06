import Jimmy from "../../assets/profiles/Jimmy.png";
import AboutMe from "../../components/AboutMe";

export default function AboutJimmy() {
  return (
    <AboutMe
      img={Jimmy}
      name="Jimmy Pan"
      description="My name is Jimmy, and I am majoring in computer science at
        San Francisco State University. I enjoy spending time with my friends
        and playing video games."
    />
  );
}