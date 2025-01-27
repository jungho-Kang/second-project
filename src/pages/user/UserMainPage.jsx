import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { LuArrowDownUp } from "react-icons/lu";
import MenuBar from "../../components/MenuBar";
import Notification from "../../components/Notification";

const UserMainPage = () => {
  return (
    <div className="w-full h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <Notification />
      <div className="flex justify-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* Swiper 1 */}
          <SwiperSlide className="relative">
            <img src="/startingPage.png" alt="" />
            <div className="absolute left-2 bottom-8 font-bold">
              <p className="w-14 px-1 py-1 rounded-lg bg-primary text-white mb-2 text-center text-xs text-nowrap">
                추천식당
              </p>
              <div className="flex flex-col">
                <span className="pl-2 text-white text-2xl">
                  여기 진짜 맛있어요!
                </span>
                <span className="pl-2 text-white text-2xl">
                  호불호 없을 누구나 좋아하는 맛
                </span>
              </div>
            </div>
          </SwiperSlide>
          {/* Swiper 2 */}
          <SwiperSlide className="relative">
            <img src="/startingPage.png" alt="" />
            <div className="absolute left-2 bottom-8 font-bold">
              <p className="w-14 px-1 py-1 rounded-lg bg-primary text-white mb-2 text-center text-xs text-nowrap">
                추천식당
              </p>
              <div className="flex flex-col">
                <span className="pl-2 text-white text-2xl">
                  여기 진짜 맛있어요!
                </span>
                <span className="pl-2 text-white text-2xl">
                  호불호 없을 누구나 좋아하는 맛
                </span>
              </div>
            </div>
          </SwiperSlide>
          {/* Swiper 3 */}
          <SwiperSlide className="relative">
            <img src="/startingPage.png" alt="" />

            <div className="absolute left-2 bottom-8 font-bold">
              <p className="w-14 px-1 py-1 rounded-lg bg-primary text-white mb-2 text-center text-xs text-nowrap">
                추천식당
              </p>
              <div className="flex flex-col">
                <span className="pl-2 text-white text-2xl">
                  여기 진짜 맛있어요!
                </span>
                <span className="pl-2 text-white text-2xl">
                  호불호 없을 누구나 좋아하는 맛
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pt-2 pb-24">
        <div className="w-100% flex pl-5 pt-2 justify-between">
          <div className="flex items-center gap-1">
            <LuArrowDownUp />
            <p className="text-sm">평점순</p>
          </div>
          <div className="flex gap-2 pr-5 text-sm">
            <p className="bg-primary text-white px-2 py-0.5 rounded-lg">한식</p>
            <p className="bg-darkGray text-white px-2 py-0.5 rounded-lg">
              일식
            </p>
            <p className="bg-darkGray text-white px-2 py-0.5 rounded-lg">
              중식
            </p>
          </div>
        </div>
        <div className="w-full px-4 py-4 flex flex-wrap justify-between">
          {/* 식당 카드 */}
          <div className="w-[calc(50%_-_0.5rem)] pb-3">
            <div className="flex w-full">
              <img src="/menu.png" alt="메뉴사진" />
            </div>
            <div className="w-100% flex justify-between pt-1">
              <div>
                <p className="font-semibold">동양백반</p>
                <p className="text-xs text-darkGray">반월당역 216m</p>
              </div>
              <p className="font-bold text-primary">4.8</p>
            </div>
          </div>
          {/* 식당 카드 */}
          <div className="w-[calc(50%_-_0.5rem)] pb-3">
            <img src="/menu.png" alt="메뉴사진" className="w-100%" />
            <div className="flex justify-between pt-1">
              <div>
                <p className="font-semibold">동양백반</p>
                <p className="text-xs text-darkGray">반월당역 216m</p>
              </div>
              <p className="font-bold text-primary">4.8</p>
            </div>
          </div>
          {/* 식당 카드 */}
          <div className="w-[calc(50%_-_0.5rem)] pb-3">
            <img src="/menu.png" alt="메뉴사진" className="w-100%" />
            <div className="flex justify-between pt-1">
              <div>
                <p className="font-semibold">동양백반</p>
                <p className="text-xs text-darkGray">반월당역 216m</p>
              </div>
              <p className="font-bold text-primary">4.8</p>
            </div>
          </div>
          {/* 식당 카드 */}
          <div className="w-[calc(50%_-_0.5rem)] pb-3">
            <img src="/menu.png" alt="메뉴사진" className="w-100%" />
            <div className="flex justify-between pt-1">
              <div>
                <p className="font-semibold">동양백반</p>
                <p className="text-xs text-darkGray">반월당역 216m</p>
              </div>
              <p className="font-bold text-primary">4.8</p>
            </div>
          </div>
          {/* 식당 카드 */}
          <div className="w-[calc(50%_-_0.5rem)] pb-3">
            <img src="/menu.png" alt="메뉴사진" className="w-100%" />
            <div className="flex justify-between pt-1">
              <div>
                <p className="font-semibold">동양백반</p>
                <p className="text-xs text-darkGray">반월당역 216m</p>
              </div>
              <p className="font-bold text-primary">4.8</p>
            </div>
          </div>
          {/* 식당 카드 */}
          <div className="w-[calc(50%_-_0.5rem)] pb-3">
            <img src="/menu.png" alt="메뉴사진" className="w-100%" />
            <div className="flex justify-between pt-1">
              <div>
                <p className="font-semibold">동양백반</p>
                <p className="text-xs text-darkGray">반월당역 216m</p>
              </div>
              <p className="font-bold text-primary">4.8</p>
            </div>
          </div>
          {/* 식당 카드 */}
          <div className="w-[calc(50%_-_0.5rem)] pb-3">
            <img src="/menu.png" alt="메뉴사진" className="w-100%" />
            <div className="flex justify-between pt-1">
              <div>
                <p className="font-semibold">동양백반</p>
                <p className="text-xs text-darkGray">반월당역 216m</p>
              </div>
              <p className="font-bold text-primary">4.8</p>
            </div>
          </div>
          {/* 식당 카드 */}
          <div className="w-[calc(50%_-_0.5rem)] pb-3">
            <img src="/menu.png" alt="메뉴사진" className="w-100%" />
            <div className="flex justify-between pt-1">
              <div>
                <p className="font-semibold">동양백반</p>
                <p className="text-xs text-darkGray">반월당역 216m</p>
              </div>
              <p className="font-bold text-primary">4.8</p>
            </div>
          </div>
        </div>
      </div>
      <MenuBar />
    </div>
  );
};
export default UserMainPage;
