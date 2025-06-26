import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.proverb}>
        {/* Proverbio toscano divertente */}
        “Al contadino non far sapere&nbsp;| quant'è bono il cacio con le pere!”
      </p>
    </footer>
  )
}
