// import { throttle } from "lodash";
// import { useEffect, useMemo, useState } from "react";

// export const ScrollThrottle = () => {
//   const [] = useState("");
//   const throttledScroll = useMemo(
//     () =>
//       throttle(() => {
//         console.log("스크롤 이벤트 발생");
//         if (!tabSelectorRef.current) return;
//         const nextTabnavOn =
//           window.scrollY > tabSelectorRef.current.offsetTop + 100;
//         if (nextTabnavOn !== isTabnavOn) setIsTabnavOn(nextTabnavOn);
//       }, 300),
//     [isTabnavOn],
//   );

//   useEffect(() => {
//     window.addEventListener("scroll", throttledScroll);
//     return () => {
//       window.removeEventListener("scroll", throttledScroll);
//     };
//   }, [throttledScroll]);
// };
