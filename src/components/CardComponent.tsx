import { twMerge } from "tailwind-merge";

export default function CardComponent() {
  return (
    <>
      <div className="w-[236px] border border-gray-200 rounded-lg">
        <img
          src="https://img.sucoding.kr//course/b0425072bfe4c1d2e7eb856f134f4308.png"
          className="rounded-t-lg"
        />
        <div className="rounded-lg h-40 p-2 m-auto ">
          <h2 className="text-lg font-bold text-[#242424] mb-2 pt-2">
            핵심만 골라 배우는 <br />
            TypeScript
          </h2>
          <span className={twMerge("text-[#242424] text-[15px]")}>
            핵심만 콕콕 집어서 기초부터 배워보는 Typescript 강의입니다.
          </span>
        </div>
        <div className="w-full pb-2">
          <p className="font-bold text-lg ml-2">55,000원</p>
        </div>
      </div>
    </>
  );
}
