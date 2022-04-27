import Navigation from './../Navigation/Navigation';
import style from './AppBar.module.css';

function AppBar() {
    return (
        <header className={style.header}>
        <Navigation />
        </header>
    );
}

export default AppBar