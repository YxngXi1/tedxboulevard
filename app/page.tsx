import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-black text-white min-h-screen w-full">
        <main className="min-h-screen flex justify-center items-center gap-y-2 flex-col">
          <div className="text-4xl">
            Ted X Boulevard.
          </div>
          <div className="text-2xl">
            What's Next?
          </div>
        </main>
        <div className="w-full flex justify-center items-center">
          <p className="mx-auto text-black">including like everything else lmao</p>
        </div>
      </section>
      
    </>
  );
}
