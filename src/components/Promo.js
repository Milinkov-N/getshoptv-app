import './promo.css'
import Keyboard from './Keyboard'

export default function Promo() {
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
    </div>
  )
}