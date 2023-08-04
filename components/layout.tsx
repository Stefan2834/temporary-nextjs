import React from 'react'
import styles from './layout.module.css';
import Link from 'next/link';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <div className='flex items-center justify-between'>
      <Link href='/'>Home</Link>
      <Link href='/test'>Test</Link>
      <Link href='/dinamic/a'>Dinamic</Link>
    </div>
    <div className={styles.container}>{children}</div>
    </>
  )
}
