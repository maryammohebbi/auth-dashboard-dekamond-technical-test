import styles from '@/styles/input.module.scss'

export default function Input({ label, value, onChange, placeholder }: any) {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}
