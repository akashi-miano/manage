import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import person1 from "../assets/avatar-anisha.png";
import person2 from "../assets/avatar-ali.png";
import person3 from "../assets/avatar-richard.png";
import person4 from "../assets/avatar-shanai.png";

const Slider = () => {
  const isDesktop = window.innerWidth >= 768;
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={3}
      spaceBetween={25}
      pagination={isDesktop ? false : { clickable: true }}
      className="grid items-center py-16"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      style={{ "--swiper-pagination-color": "hsl(12, 88%, 59%)" }}
    >
      <SwiperSlide>
        <div
          className="testimonial__content flex flex-col items-center bg-[#eceaea4f] px-8 py-2 text-center"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <img
            src={person1}
            alt="Anisha's image"
            className="h-[100px] w-[100px] rounded-full transform -translate-y-1/2"
          />
          <h3 className="text-2xl font-semibold text-secondary">Anisha Li</h3>
          <p className="text-[#9095a7] text-md">
            {" "}
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”{" "}
          </p>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="testimonial__content flex flex-col items-center bg-[#eceaea4f] px-8 py-2 text-center rounded-md min-h-[276px]"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <img
            src={person2}
            alt="Ali's image"
            className="h-[100px] w-[100px] rounded-full translate-y-[-50%]"
          />
          <h3 className="text-2xl font-semibold text-secondary">Ali</h3>
          <p className="text-[#9095a7] text-md">
            {" "}
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!”{" "}
          </p>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="testimonial__content flex flex-col items-center bg-[#eceaea4f] px-8 py-2 text-center rounded-md min-h-[276px]"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <img
            src={person3}
            alt="Richard's image"
            className="h-[100px] w-[100px] rounded-full translate-y-[-50%]"
          />
          <h3 className="text-2xl font-semibold text-secondary">
            Richard Watts
          </h3>
          <p className="text-[#9095a7] text-md">
            {" "}
            “Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive.”{" "}
          </p>
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="testimonial__content flex flex-col items-center bg-[#eceaea4f] px-8 py-2 text-center rounded-md">
          <img
            src={person4}
            alt="Shanai's image"
            className="h-[100px] w-[100px] rounded-full translate-y-[-50%]"
          />
          <h3 className="text-2xl font-semibold text-secondary">
            Shanai Gough
          </h3>
          <p className="text-[#9095a7] text-md">
            {" "}
            “Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive.”
          </p>
        </div>{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
