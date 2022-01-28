import usePromoContext from '../contexts/PromoContext'
import Keyboard from './Keyboard'
import './panel.css'

export default function Panel() {
  const { number: n, numberIsCompleted, policyIsChecked, setPolicyIsChecked } = usePromoContext()

  const isDisabled = (numberIsCompleted && policyIsChecked)

  return (
    <div className="panel">
      <div className="panel__wrapper">
        <h2 className="panel__header">
          Введите ваш номер мобильного телефона
        </h2>
        <div className="panel__number">
          { `+7 (${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}-${n[8]}${n[9]}` }
        </div>
        <span className="panel__desc">и с Вами свяжется наш менеждер для дальнейшей консультации</span>
        <Keyboard />
        <div className="panel__agreement">
          <input type='checkbox' name='checkbox' id='checkbox' onChange={ e => setPolicyIsChecked(e.target.checked) } />
          <label htmlFor='checkbox'>Согласие на обработку персональных данных</label>
        </div>
        <button className="panel__btn" disabled={ !isDisabled }>Подтвердить номер</button>
      </div> 
    </div>
  )
}