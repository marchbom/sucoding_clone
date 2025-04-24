import { twMerge } from "tailwind-merge";

export default function Footer() {
  return (
    <>
      <footer className="h-[189px] bg-[#303956] flex flex-col mt-auto">
        <div className="max-w-7xl items-center mx-auto">
          <div className="flex items-center">
            <img
              src="/public/images/logo.DNQQHpJM.png"
              width="32"
              className="mr-2"
              alt="수코딩 로고"
              aria-label="수코딩 사이트 메인으로 이동하기"
            />
            <span className={twMerge("text-[18px] font-bold")}>수코딩</span>
          </div>
          <div className="text-white text-[15px] mt-4 ">
            <p>수코딩은 누구나 쉽게 코딩을 배울 수 있는 온라인 코딩 교육을 만들어갑니다.</p>
            <p>
              대표자: 김기수 | 사업자번호: 208-26-67207 | 통신판매업신고: 2024-성남중원-0311
              개인정보관리책임자: 김기수 | 이메일: sucoding@naver.com
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
