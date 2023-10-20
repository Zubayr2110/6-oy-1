import "/Header.css"


export default function Header() {
    return (

        <header className="header">
            <nav>
                <div className="nav_list">
                    <img src="/logo.svg" alt="img" className="nav_list-logo" />
                    <div className="nav_list-item">
                        <button className="nav_list-item-button"><img src="/menu.svg" alt="img" style="margin-left: -18px;" />Каталог</button>
                        <form className="formc">
                            <input type="search" id="srchinp" placeholder="Найти товар" />
                            <button className="srchbtn"><img src="/search.svg" alt="img" style="margin-top: -10px; margin-left: -10px;" /></button>
                        </form>
                    </div>
                </div>
                <div className="nav_list1">
                    <div className="nav_list1-menu">
                        <img src="/Frame 211.svg" alt="" />
                        <p className="nav_list1-menu-text">Избранное</p>
                    </div>
                    <div className="nav_list1-menu1">
                        <img src="/Frame 211 (1).svg" alt="" />
                        <p className="nav_list1-menu-text">Заказы</p>
                    </div>
                    <div className="nav_list1-menu2">
                        <img src="/shopping-cart.svg" alt="" />
                        <p className="shopcart"></p>
                        <p className="nav_list1-menu-text">Корзина</p>
                    </div>
                    <div className="nav_list1-usermenu">
                        <img src="/avatar.svg" alt="img" class="avatarimg" />
                        <p className="nav_list1-usermenu-text">Zubayr</p>
                        <img src="/chevron-down.svg" alt="img" className="chevron" />
                    </div>
                </div>
            </nav>
        </header>
    )
}
