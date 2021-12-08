import { forwardRef, useState } from 'react'
import './styles.css'
import cc from "classcat"

export const Input =  forwardRef(({ children, color, label, name, ...props }, ref) => {
  const [type, setType] = useState(props.type)

  const classList = cc([
    'input__inner',
    { [`input__inner--${color}`]: color },
    { 'input__inner--with-icon': children },
  ])

  const getEyeIcon = () => {
    if (type === 'password') {
      return <EyeSvg onClick={() => setType('text')} />
    } else {
      return <EyeSvg fill="#3D50DF" onClick={() => setType('password')} />
    }
  }

  return (
    <div className="input">
      {label && (
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
      )}

      <div className={classList}>
        <input
          aria-label={!label ? name : null}
          name={name}
          {...props}
          type={type}
          id={name}
          ref={ref} />
        <div className="input__icon">
          {props.type && getEyeIcon()}
        </div>
      </div>
    </div>
  )
})

const EyeSvg = ({
               style = {},
               fill = '#86939E',
               width = '22px',
               height = '15px',
               className = '',
               viewBox = '0 0 22 15',
               onClick = () => {}
             }) => (
   <div onClick={onClick}>
    <svg
      width={width}
      height={height}
      style={style}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ''}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0Z"
        fill={fill}
      />
      <path
        d="M11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z"
        fill="white"
      />
    </svg>
   </div>
)
