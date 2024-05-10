import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Hello, World!</h1>
      <Link href="/test">Go to .mdx page</Link>
    </main>
  );
}
