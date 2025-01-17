import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div>
            <img src="/images/brand logo.png" alt="logo" />
        </div>
        <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navigation