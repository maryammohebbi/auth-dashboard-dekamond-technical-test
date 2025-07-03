import styles from '@/styles/input.module.scss'

type InputProps = {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export default function Input({ label, value, onChange, placeholder }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}
