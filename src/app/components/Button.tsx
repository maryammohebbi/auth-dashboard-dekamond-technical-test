import styles from '@/styles/button.module.scss'

export default function Button({ children, onClick }: any) {
  return <button className={styles.btn} onClick={onClick}>{children}</button>
}
