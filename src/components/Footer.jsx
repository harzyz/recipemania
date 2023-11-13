import FooterCss from './Footer.module.css'
import Img01 from '../../public/Images/Logo.png'
import RecentsCatData from '../data/recentcategories'


function Footer() {
  return (
    <div id='footer' className={FooterCss.wrapper}>
      <div className={FooterCss.container}>
        <div className={FooterCss.catBlogList}>
          <div className={FooterCss.logo}>
            <img src={Img01} alt="" />
            <div className={FooterCss.logoText}>
              <a href="#home">
              <span>Recipe</span>
              <p>Mania</p>
              </a>
            </div>
          </div>
          {/* <div className={FooterCss.hateLife}> */}
            <div className={FooterCss.hateThis}>
              <div>
                <span className={FooterCss.recent}>Recent Categories</span>
                <ul className={FooterCss.catrecent}>
                  {RecentsCatData.map((list) => (
                    <li className={FooterCss.catrecentList}  key={list.id}>
                      <i className='bx bxs-right-arrow'></i> {list.title}</li>
                  ))}
                </ul>
              </div>
              <div className={FooterCss.gist}>
                <span className={FooterCss.recent}>Latest Blogs</span>
                <ul className={FooterCss.latestList}>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Make your own bread
                  </li>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Make your own bread
                  </li>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Make your own bread
                  </li>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Make your own bread
                  </li>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Make your own bread
                  </li>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Make your own bread
                  </li>
                </ul>
              </div>
              <div>
                <span className={FooterCss.recent}>Latest Recipes</span>
                <ul className={FooterCss.latestList}>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Kids recipe
                  </li>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Garlic shrimps
                  </li>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Happy shrimps
                  </li>
                </ul>
              </div>
              <div>
                <span className={FooterCss.recent}>Links</span>
                <ul className={FooterCss.latestList}>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Home
                  </li>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Recipies
                  </li>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Blogs
                  </li>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Contact Us
                  </li>
                  <li className={FooterCss.latestListItem}>
                    <i className='bx bxs-right-arrow'></i> Login/ Register
                  </li>
                </ul>
              </div>
            </div>
          {/* </div> */}
            <div className={FooterCss.hateThis2}>
              <div className={FooterCss.fatherhood}>
                <span className={FooterCss.newsletter}>NEWSLETTER</span>
                <p>Sign up to receive email updates on new recipes</p>
              </div>
              <div className={FooterCss.noincome}>
                <input type="text" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
        </div>
      </div>
      <div className={FooterCss.black}>

      </div>
    </div>
  )
}

export default Footer
