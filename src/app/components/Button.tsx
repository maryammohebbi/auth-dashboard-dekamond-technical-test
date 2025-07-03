import styles from '@/styles/button.module.scss'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return <button className={styles.btn} onClick={onClick}>{children}</button>
}
