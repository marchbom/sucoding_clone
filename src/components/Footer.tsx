import { twMerge } from "tailwind-merge";

export default function Footer() {
  return (
    <>
      <footer className="h-[189px] bg-[#303956] flex flex-col mt-auto">
        <div className="w-4/5 items-center mx-auto">
          <div className="flex items-center pt-5">
            <img
              src="/public/images/logo.DNQQHpJM.png"
              width="32"
              className="mr-2 "
              alt="수코딩 로고"
              aria-label="수코딩 사이트 메인으로 이동하기"
            />
            <span className={twMerge("text-[18px] font-bold text-white ")}>수코딩</span>
          </div>
          <div className="text-white text-[15px] mt-6 ">
            <p>수코딩은 누구나 쉽게 코딩을 배울 수 있는 온라인 코딩 교육을 만들어갑니다.</p>
            <p className="pt-2">
              대표자: 김기수 | 사업자번호: 208-26-67207 | 통신판매업신고: 2024-성남중원-0311
              개인정보관리책임자: 김기수 | 이메일: sucoding@naver.com
            </p>
          </div>
          <div className="pt-2">
            <a href="https://www.youtube.com/@sucoding">
              <img
                className="w-8 h-8"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJNSURBVHgB7ZlfbtNAEMa/mWCJN5wTxFyApheAIrgBPDdwAwTPRJQLIIVXimhPQN6JUJ6hqt8pwjkB5i1SZC8zttOmUdK/aysr7U/aeOO1nPl2Z8bZMeDxeDyeW0DrBgwQyaErLQRLA4dydacaDYvzZxdHuD6p3C9dMiep7jcpjnmu37WlYmiMywQURjO/kl4PRCE2CWNELH0VUXtUiio4FWB0tpm+b5zhK8lfUIYD7RUCypmnYzeMr+B8m2aIufzC75wyXsnpgx7KFWjxXywGpStkeZvFfXbgovFKq7XDaDlqvGJMxDDchasQtlg+IjiLaXP1VLVzu28jYHcXjWGoo2n0HmwRRTD7n2F+nQAPttAAocRADUGsQo6OYD7tA50O6kRWgNqoi14P5uQ38LYvc1VDspP4ZTSA6fdhfvysJT40C9mLgYtYjI+Hj2ALXYFmH2QqZDSyFh+NuNBKRIgN+HT30xTjMfD0CUgaJrf/6TtoilQ2VG9egw4PYZP6BajhHwegwaDsW6ZeAcMhSGbdhqusxCCRNGr+wDZzP3/+rD7jK3QF/sEWSQK837Pu52shmogAsuaYxYzX4OcXoWk0gS0aNl52ZFKVoKoa5iYSxFkWw1WYY/fLKlV3COegMZVFX1mBu7Kxn/ExXFqFIL9PU40BQTtSa3wMoOE0ciNSqeO+LGzGwt9pLZSKqm3pHmAzhWh5faw20iz7Mj+5/gVHEHQlz4Za/SpacTVF1fDSC46lFx5X5XwKTzGfOGOShfEUQRDTdJrA4/F4PLb5D8rCugkYz0WWAAAAAElFTkSuQmCC"
              />
            </a>
          </div>
          <div className="fixed right-8 bottom-8">
            <a href="https://pf.kakao.com/_xcLXxmG">
              <img
                className="w-12 h-12 rounded-full "
                src="https://www.sucoding.kr/_nuxt/kakao.DZGNkz6v.webp"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
