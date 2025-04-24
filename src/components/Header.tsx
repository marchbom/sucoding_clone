export default function Header() {
  return (
    <>
      <header className="h-[73px]">
        <div className="flex justify-between items-center mx-auto p-4 max-w-[1200px]">
          <div>
            <a href="sucoding">
              <img
                src="/public/images/logo.DNQQHpJM.png"
                width="34"
                alt="수코딩 로고"
                aria-label="수코딩 사이트 메인으로 이동하기"
              />
            </a>
          </div>

          <div>
            <a href="#" className="text-sm">
              로그인
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
