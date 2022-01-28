import './promo.css'
import Keyboard from './Keyboard'
import useAppContext from '../contexts/AppContext'

export default function Promo() {
  const { setPromoIsOpened } = useAppContext()

  const closePromo = () => setPromoIsOpened(false)

  return (
    <div className="promo__wrapper">
      <div className="promo__panels">
        <div className="panels__wrapper">
          <h2 className="panels__header">
            Введите ваш номер мобильного телефона
          </h2>
          <div className="panels__number">+7(___)___-__-__</div>
          <span className="panels__desc">и с Вами свяжется наш менеждер для дальнейшей консультации</span>
          <Keyboard />
          <div className="panels__agreement">
            <input type='checkbox' name='checkbox' id='checkbox' />
            <label htmlFor='checkbox'>Согласие на обработку персональных данных</label>
          </div>
          <button className="panels__btn" disabled>Подтвердить номер</button>
        </div> 
      </div>
      <button className="promo__close-btn" onClick={ closePromo }>&times;</button>
      <div className="promo__qr-code">
        <p>Сканируйте qr-код для получения дополнительной информации</p>
        <img src="/qr-code.jpg" />
      </div>
    </div>
  )
}