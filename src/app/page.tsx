import Link from "next/link";
import Skills from "../components/skills";
import Projects from "../components/projects";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-20 py-20">
      <section className="w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-center text-5xl sm:text-6xl">
          Hey! I'm <b className="font-bold text-primary-foreground">Salar</b>.
          <br />A{" "}
          <b className="font-bold text-primary-foreground">
            Software Developer
          </b>
          .
        </h1>
        <p className="text-center">
          Let's simplify complex stuff.
        </p>
        <Link
          href={"mailto:salarnto.collab@gmail.com"}
          className="w-fit text-background bg-primary-foreground hover:bg-zinc-300 font-bold p-2 rounded-md transition-colors"
        >
          Reach Me Here!
        </Link>
      </section>
      <Skills />
      <Projects />
    </main>
  );
}
