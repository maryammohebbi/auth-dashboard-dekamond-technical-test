'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/auth.module.scss'
import { useAuth } from '@/context/AuthContext'
import Input from '@/components/Input'
import Button from '@/components/Button'

export default function AuthPage() {
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { login } = useAuth()

  const validatePhone = (value: string) => /^09\d{9}$/.test(value)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!validatePhone(phone)) {
      setError('شماره موبایل معتبر وارد کنید')
      return
    }
  
    const res = await fetch('https://randomuser.me/api/?results=1&nat=us')
    const data = await res.json()
    const user = {
      name: `${data.results[0].name.first} ${data.results[0].name.last}`,
      email: data.results[0].email,
      picture: data.results[0].picture.thumbnail,
    }
  
    login(user)
    router.push('/dashboard')
  }
  

  return (
    <form onSubmit={handleLogin} className={styles.container}>
      <h2>ورود</h2>
      <Input
        label="شماره موبایل"
        value={phone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
        placeholder="09xxxxxxxxx"
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button>ورود</Button>
    </form>
  )
}
