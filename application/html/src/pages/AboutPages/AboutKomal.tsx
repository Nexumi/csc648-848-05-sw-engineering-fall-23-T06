import Komal from "../../assets/profiles/Komal.jpeg";
import AboutMe from "../../components/AboutMe";

export default function AboutKomal() {
  return (
    <AboutMe
      img={Komal}
      name="Komaldeep Kaur"
      description="Hi everyone! My name is Komaldeep Kaur but, I go by Komal.
      I am a computer science major at San Fransisco State. I'm in my last year
      and my focus is artifcial intelligence. I enjoy going to the gym to promote
      my healthy lifestyle in my free time."
    />
  );
}