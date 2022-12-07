import styles from '../components/header.module.scss'
import {useGlobalState} from '../store/store'

function Header() {
    const [prodNameHeader, prodNameHeaderChange] = useGlobalState('headerName');
    return (
        <div className={styles.header}>
            <h1 className={styles['header-text']}>{prodNameHeader}</h1>
        </div>
    )
}

export default Header;