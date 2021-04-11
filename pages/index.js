import Head from "next/head";
import SkillsGraph from "../components/SkillsGraph";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mateo Devia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SkillsGraph />
    </div>
  );
}
