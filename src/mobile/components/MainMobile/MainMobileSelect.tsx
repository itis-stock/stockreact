import arrow from '../../images/arrowright.svg'
import classes from '../../modules/MainMobile.module.scss'

const MainMobileSelect = ({
  image,
  title,
  develop,
  last,
  setOpenModal,
}: {
  image: string
  title: string
  develop: boolean
  last: boolean
  setOpenModal: (bool: boolean) => void
}) => {
  return (
    <>
      <div
        className={classes['mainMobile__block']}
        onClick={() => setOpenModal(true)}>
        <img src={image} alt="icon" />
        <span
          className={
            develop
              ? classes['mainMobile__block-inactiveTitle']
              : classes['mainMobile__block-title']
          }>
          {title}
        </span>
        {develop ? (
          <div className={classes['mainMobile__block-develop']}>
            в разработке
          </div>
        ) : (
          <img src={arrow} />
        )}
        {!last ? <span className={classes['mainMobile__line']}></span> : ''}
      </div>
    </>
  )
}

export default MainMobileSelect
