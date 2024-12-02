
import styles from './index.module.css'
export default function Header() {
    return <header className={`${styles.home_header}`}>
        <div className={`${styles.text_magic}`} data-word="Zalker">
            Zalker
            <div className={`${styles.white}`}></div>
        </div>
        <div className={`${styles.home_header_search}`}>搜索</div>
        <div>登陆</div>
        <h1>探索</h1>
    </header>
}