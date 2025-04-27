import data from "../data/data.json";

export default function CardComponent() {
  const groupData = [
    data.slice(0, 2), // 1번째 줄 → 2개
    data.slice(2, 5), // 2번째 줄 → 3개
    data.slice(5, 9), // 3번째 줄 → 2개
  ];

  return (
    <div className="space-y-6">
      {groupData.map((group, groupIdx) => (
        <div key={groupIdx}>
          <div className="flex gap-6 mt-4 mb-20">
            {group.map((item, idx) => (
              <div key={idx} className="w-[236px] border border-gray-200 rounded-lg">
                <img src={item.image} className="rounded-t-lg" />
                <div className="rounded-lg h-40 p-2 m-auto">
                  <h2 className="text-lg font-bold text-[#242424] mb-2 pt-2">{item.title}</h2>
                  <span className="text-[#242424] text-[15px]">{item.content}</span>
                </div>
                <div className="w-full pb-2">
                  <p className="font-bold text-lg ml-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          {groupIdx === 0 && (
            <div className="mt-7 block">
              <p className="black-han text-2xl  whitespace-nowrap">프론트엔드 개발자 입문</p>
              <div className="flex-1 border-t border-gray-300 "></div>
            </div>
          )}
          {groupIdx === 1 && (
            <div className="mt-7 block">
              <p className="black-han text-2xl  whitespace-nowrap">무료 유튜브 강의</p>
              <div className="flex-1 border-t border-gray-300 "></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
