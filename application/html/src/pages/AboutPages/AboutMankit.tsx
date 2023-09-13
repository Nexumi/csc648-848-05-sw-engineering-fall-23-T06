import AboutMe from "../../components/AboutMe";
import Mankit from "../../assets/profiles/Mankit.jpg"

export default function AboutMankit() {
  return (
    <AboutMe
      img={Mankit}
      name="Mankit Yeung"
      description="Hi, my name is Mankit. I am a computer science major and 
      during my free time I like to read some fiction books and play some 
      video games."
    />
  );
}