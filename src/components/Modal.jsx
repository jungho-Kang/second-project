// const Modal = ({ setIsOpen }) => {
//   return (
//     <div className="absolute top-40 left-1/3 w-[400px] h-[450px] z-50 bg-white border-2 border-darkGray rounded-lg border-opacity-30">
//       <div className="w-full h-16 pt-4 text-2xl">
//         <div className="text-center">테이블 추가하기</div>
//       </div>
//       <div className="w-full h-4/6 px-5 pt-3 border-t-2 border-t-gray">
//         <div className="flex gap-2 items-center">
//           <div className="pr-3">테이블 번호</div>
//           <input
//             type="number"
//             className="w-10 pr-1 text-right rounded-md border-2 border-darkGray active:border-primaryFocus"
//           />
//           번
//         </div>
//         <div className="flex gap-2 items-center pt-4">
//           <div>인원 수</div>
//           <input
//             type="number"
//             className="w-10 pr-1 text-right rounded-md border-2 border-darkGray active:border-primaryFocus"
//           />
//           명
//         </div>
//       </div>
//       <div className="flex w-full justify-center gap-10 pt-8 items-center">
//         <div
//           onClick={() => setIsOpen(false)}
//           className="px-5 py-2 bg-primary items-center text-white font-semibold rounded-md cursor-pointer hover:bg-primaryFocus"
//         >
//           등록
//         </div>
//         <div
//           onClick={() => setIsOpen(false)}
//           className="px-5 py-2 bg-darkGray items-center text-white font-semibold rounded-md cursor-pointer hover:bg-darkGray"
//         >
//           취소
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Modal;

const Modal = ({ onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className="w-full h-dvh overflow-hidden fixed top-0 left-0 bg-darkGray bg-opacity-70 flex justify-center items-center text-center z-10"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="absolute top-40 left-1/3 w-[400px] h-[450px] z-50 bg-white border-2 border-darkGray rounded-lg border-opacity-30"
      >
        {children}
      </div>
    </div>
  );
};
export default Modal;
