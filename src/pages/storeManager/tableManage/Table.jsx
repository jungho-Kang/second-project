const Table = () => {
  const data = [
    {
      tableNo: 1,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      tableNo: 2,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      tableNo: 3,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      tableNo: 4,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      tableNo: 5,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      tableNo: 6,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      tableNo: 7,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      tableNo: 8,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      tableNo: 9,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      tableNo: 10,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
  ];

  return (
    <>
      <div className="w-full h-full bg-gray">
        <div className="w-100% h-[calc(100%_-_4rem)] mx-4 my-8 bg-white rounded-lg overflow-hidden overflow-y-scroll scrollbar-hide">
          <div className="flex flex-wrap ml-5 mt-5 gap-4 bg-white justify-start">
            {/* 주문카드 시작 */}
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[calc(33%_-_1rem)] min-w-40 h-48 border-2 border-darkGray bg-white"
              >
                <div className="flex justify-between px-4 pt-1 pb-4 bg-darkGray">
                  <span>{item.tableNo}</span>
                  <span>{item.price}</span>
                </div>
                <div className="px-3 py-3">
                  <div className="flex justify-between">
                    <span>{item.menuTitle}</span>
                    <span>x{item.menuQuntity}</span>
                  </div>
                  <div className="pt-1 pl-6 text-darkGray">{item.menuInfo}</div>
                </div>
              </div>
            ))}
            {/* 주문카드 끝 */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
