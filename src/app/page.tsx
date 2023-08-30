import Header from "./Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-10 pt-10">
      <div className="w-full max-w-screen-xl">
        <Header />
      </div>
    </main>
  );
}
