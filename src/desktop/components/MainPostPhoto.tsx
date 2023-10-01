import { attachmentsType } from '../../@types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
export default function MainPostPhoto({ attachments }: { attachments: attachmentsType[] }) {
  return (
    <>
      {attachments.map((el) => {
        if (el.type === 'doc') {
          return (
            <a href={el.doc?.url}>
              {el.doc?.url ? new URL(el.doc?.url).hostname + '.' + el.doc.ext : ''}
            </a>
          );
        }
      })}
      <div>
        <Swiper
          autoHeight={true}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {attachments
            .filter((el) => el.type === 'photo')
            .map((e) => {
              return (
                <SwiperSlide>
                  <img
                    className="main__posts-photo"
                    src={e.photo?.sort((a, b) => b.width - a.width)[0].url}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

// else {
//   return (
//     <div>
//       <Swiper
//         pagination={{
//           dynamicBullets: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>{el.photo?.sort((a, b) => a.width - b.width)?.[0].url}</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//       </Swiper>
//     </div>
//   );
