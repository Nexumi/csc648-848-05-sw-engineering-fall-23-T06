import AboutMe from "../../components/AboutMe";
import David from "../../assets/profiles/David.jpeg"

export default function AboutDavid() {
  return (
    <AboutMe
      img={David}
      name="David Lien"
      description="Hello my name is David. I am a senior at SFSU who is about to graduate. I recently got into pickleball and I find myself at the courts at least twice a week."
    />
  );
}