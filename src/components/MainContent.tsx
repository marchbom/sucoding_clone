import CardComponent from "./CardComponent";

export default function MainContent() {
  return (
    <>
      <div className="w-4/5 justify-center items-center mx-auto">
        <div className="mt-7">
          <p className="black-han text-2xl relative text-[20px] black-han after:content-[''] after:block after:h-[1px] after:bg-gray-300 after:absolute after:top-1/2 after:left-full after:ml-2 after:w-full">
            프론트 엔드 개발자 중급
          </p>
        </div>
        <section className="flex gap-8 mt-6 pl-4">
          <CardComponent />
          <CardComponent />
        </section>
        <section className="flex gap-8 mt-6 pl-4">
          <CardComponent />
          <CardComponent />
        </section>
        <section className="flex gap-8 mt-6 pl-4 pb-4">
          <CardComponent />
        </section>
      </div>
    </>
  );
}
