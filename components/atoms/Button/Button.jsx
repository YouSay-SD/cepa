import styles from './Button.module.scss'

const Button = ({ type = 'solid', color = 'white', children, onClick, isArrow = true }) => {
  return (
    <button className={`${styles.button} ${styles[type]} ${styles[color]}`} onClick={onClick}>
      {children}

      {isArrow ?
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2901 0.285093C10.913 0.663915 10.9145 1.27664 11.2933 1.65367L14.6882 5.03226L0.967742 5.03226C0.433258 5.03226 -2.85631e-07 5.46552 -2.62268e-07 6C-2.38905e-07 6.53448 0.433258 6.96774 0.967742 6.96774L14.6883 6.96774L11.2933 10.3463C10.9144 10.7234 10.913 11.3361 11.29 11.7149C11.6671 12.0938 12.2798 12.0952 12.6587 11.7182L17.7153 6.68593C17.7156 6.68564 17.7159 6.68531 17.7162 6.68502C18.094 6.30798 18.0952 5.69327 17.7162 5.31498C17.7159 5.31469 17.7156 5.31435 17.7153 5.31406L12.6587 0.281803C12.2799 -0.0951334 11.6672 -0.0938268 11.2901 0.285093Z" fill="#2E7DC4"/>
        </svg>
      : null}
    </button>
  )
}

export default Button