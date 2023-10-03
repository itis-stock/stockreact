import { attachmentsType } from '../../../@types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import classes from '../../modules/MainMobile.module.scss'
import { useState } from 'react'
import Modal from '../Modal'
export default function MainPostPhoto({
  attachments,
}: {
  attachments: attachmentsType[]
}) {
  const [openModal, setOpenModal] = useState<string | null>(null)
  return (
    <>
      {attachments.map((el) => {
        if (el.type === 'doc') {
          return (
            <a href={el.doc?.url}>
              {el.doc?.url
                ? new URL(el.doc?.url).hostname + '.' + el.doc.ext
                : ''}
            </a>
          )
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
          modules={[Pagination]}
          className="mySwiper">
          {attachments
            .filter((el) => el.type === 'photo')
            .map((e) => {
              return (
                <SwiperSlide>
                  <img
                    className={classes['mainMobile__post-photo']}
                    src={e.photo?.sort((a, b) => b.width - a.width)[0].url}
                    onClick={() =>
                      setOpenModal(
                        e.photo?.sort((a, b) => b.width - a.width)[0].url || ''
                      )
                    }
                  />
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
      {openModal ? (
        <Modal
          element={
            <div
              style={{
                backgroundColor: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                zIndex: '20',
                position: 'relative',
              }}>
              <img src={openModal} style={{ width: '100%' }} />
            </div>
          }
          func={(c) => setOpenModal(c)}
          title="Фотография"
        />
      ) : (
        ''
      )}
    </>
  )
}
