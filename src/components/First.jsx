import FirstCss from './First.module.css'
import Logo from './Logo'
import Img01 from '../../public/Images/foodpic.png'
import bgCurvy from '../../public/Images/bgCurvy.png'
import LogoMobile from './LogoMobile'

function First() {
  return (
    <div id='home' className={FirstCss.wrapper}>
      <nav className={FirstCss.navbar}>
        <span className={FirstCss.logo}>
          <Logo />
          <span className={FirstCss.logoText}>
            <h3>Recipe</h3>
            <p>Mania</p>
          </span>
        </span>
        <ul className={FirstCss.navbarList}>
          <li className={FirstCss.navbarListItem}><a href="#">Home</a></li>
          <li className={FirstCss.navbarListItem}><a href="#">Categories</a></li>
          <li className={FirstCss.navbarListItem}><a href="#">Recipes</a></li>
          <li className={FirstCss.navbarListItem}><a href="#">Blogs</a></li>
          <li className={FirstCss.navbarListItem}><a href="#">Contact Us</a></li>
          {/* <li><a className={FirstCss.navbarListItem} href="#">Login/Register</a></li> */}
        </ul>
      </nav>
      <span className={FirstCss.bgSvg}>
        <svg xmlns="http://www.w3.org/2000/svg" width="717" height="1138" viewBox="0 0 717 1138" fill="none">
        <path d="M717.012 -0.383423L712.816 1137.19L508.5 1137.19C508.5 1137.19 628.5 1086 226.5 765C-175.5 444 82.5 -0.383423 82.5 -0.383423L717.012 -0.383423Z" fill="#FDA47A"/>
        </svg>
      </span>
      <img className={FirstCss.imgContain} src={Img01} alt="" />
      <div className={FirstCss.pageText}>
        <span>Discover the best <br /> recipes with us</span>
      </div>

      <div className={FirstCss.wrapperMobile}>

        <div className={FirstCss.logoMobile}>
          <LogoMobile />
          <span className={FirstCss.logoText}>
            <h3>Recipe</h3>
            <p>Mania</p>
          </span>
        </div>
        <nav className={FirstCss.navbarMobile}>
          <span>MENU</span>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 13.3333H25V16H0V13.3333ZM0 6.66667H25V9.33333H0V6.66667ZM0 0H25V2.66667H0V0Z" fill="#231E1E"/>
          </svg>
          </span>
        </nav>
        <div className={FirstCss.page}>
          <div className={FirstCss.pageTextMob}>
           <span>Discover the best <br /> recipes with us</span>
          </div>
          <div className={FirstCss.bgSvgMob}>
            <img className={FirstCss.kelukelu} src={bgCurvy} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default First
