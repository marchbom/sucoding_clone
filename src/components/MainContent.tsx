import CardComponent from "./CardComponent";

export default function MainContent() {
  return (
    <>
      <div className="w-4/5 justify-center items-center mx-auto">
        <div className="mt-7">
          <p className="black-han text-2xl  whitespace-nowrap">프론트엔드 개발자 중급</p>
          <div className="flex-1 border-t border-gray-300 "></div>
        </div>
        <section className="">
          <CardComponent />
        </section>
      </div>
    </>
  );
}
