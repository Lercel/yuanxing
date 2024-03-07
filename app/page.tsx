import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>刘俊的原型</h1>
      <Link href="/axure">Axure 原型</Link>
      <br />
      <br />
      <Link href="/figma">Figma 原型</Link>
    </>
  );
}
