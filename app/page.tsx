import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import MyProject from "@/components/MyProject";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="bg-primaryExtraDark relative overflow-hidden">
      <Header />
      <div className="w-full max-w-[1280px] mx-auto relative">
        <MyProject />
        <AboutMe />
        <ContactMe />
      </div>
      <Navigation />
    </main>
  );
}
