import './globals.css'
import styles from './styles.module.scss'
import type { Metadata } from 'next'
import Sidebar from "@/app/sidebar";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Sidebar />
        <div className={styles.body__content}>
          {children}
        </div>
      </body>
    </html>
  )
}
