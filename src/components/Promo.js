import './promo.css'

export default function Promo() {
  return (
    <div className="promo__wrapper">
      <div className="promo__panels">
        <h2 className="panels__header">
          Введите ваш номер мобильного телефона
        </h2>
        <div className="panels__number">+7(___)___-__-__</div>
        <span className="panels__desc">и с Вами свяжется наш менеждер для дальнейшей консультации</span>
      </div>
    </div>
  )
}