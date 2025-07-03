'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/dashboard.module.scss'
import { useAuth } from '@/context/AuthContext'

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/auth')
    }
  }, [user])

  return user ? (
    <div className={styles.container}>
      <h2>Welcome to the Dashboard</h2>
      <p>{user.name}</p>
      <img src={user.picture} alt="avatar" />
    </div>
  ) : null
}
