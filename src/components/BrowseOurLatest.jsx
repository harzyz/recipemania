import BrowseCss from './BrowseOurLatest.module.css'
// import Img01 from '../../public/Images/chicken.png'

import RecipeData from '../data/recipedata'
import PopularData from '../data/populardata'
import AuthorsData from '../data/authorsdata'
import CategoriesData from '../data/categoriesdata'
import BlogsData from '../data/blogsdata'

function BrowseOurLatest() {
  return (
    <div className={BrowseCss.wrapper}>
      <div className={BrowseCss.containTop}>
        <div className={BrowseCss.pageHeader}>Browse Our Latest<br /> <span className={BrowseCss.recipe}>Recipe</span>
        </div>
        <div className={BrowseCss.customBtn}>
          <p>See all</p>
          <button className={BrowseCss.arrowBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
            <path d="M20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L14.3431 15.0711C13.9526 15.4616 13.3195 15.4616 12.9289 15.0711C12.5384 14.6805 12.5384 14.0474 12.9289 13.6569L18.5858 8L12.9289 2.34315C12.5384 1.95262 12.5384 1.31946 12.9289 0.928932C13.3195 0.538408 13.9526 0.538408 14.3431 0.928932L20.7071 7.29289ZM0 7H20V9H0V7Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>

      <div id='beans' className={BrowseCss.latestRecipes}>
        {RecipeData.map((list) => (
          <div key={list.id} className={BrowseCss.recipesList}>
            <img src={list.ss} alt="" />
            <p className={BrowseCss.chiken}>{list.title}</p>
            <div className={BrowseCss.profile}>
              <img src={list.pp} alt="" />
              <p>{list.ppName}</p>
            </div>
            <div className={BrowseCss.rating}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                <path d="M6.34961 0L7.40762 4.54377L12.0559 4.1459L8.06151 6.55623L9.87632 10.8541L6.34961 7.8L2.8229 10.8541L4.63771 6.55623L0.64327 4.1459L5.2916 4.54377L6.34961 0Z" fill="#FFBD3F"/>
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                <path d="M6.34961 0L7.40762 4.54377L12.0559 4.1459L8.06151 6.55623L9.87632 10.8541L6.34961 7.8L2.8229 10.8541L4.63771 6.55623L0.64327 4.1459L5.2916 4.54377L6.34961 0Z" fill="#FFBD3F"/>
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                <path d="M6.34961 0L7.40762 4.54377L12.0559 4.1459L8.06151 6.55623L9.87632 10.8541L6.34961 7.8L2.8229 10.8541L4.63771 6.55623L0.64327 4.1459L5.2916 4.54377L6.34961 0Z" fill="#FFBD3F"/>
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                <path d="M6.34961 0L7.40762 4.54377L12.0559 4.1459L8.06151 6.55623L9.87632 10.8541L6.34961 7.8L2.8229 10.8541L4.63771 6.55623L0.64327 4.1459L5.2916 4.54377L6.34961 0Z" fill="#C4C4C4"/>
                </svg>
              </span>
            </div>
        </div>
        ))}
        
      </div>
      

      <div id='about' className={BrowseCss.containPopular}>
        <div className={BrowseCss.mostPopular}>
          Most Popular <span className={BrowseCss.recipe}>Recipe</span>
        </div>

        <div className={BrowseCss.popularRecipe}>
          {PopularData.map((list) => (
            <div key={list.id} className={BrowseCss.popular}>
              <img src={list.ss} alt="" />
              <div>
                <p>{list.title}</p>
                <a href="">{list.link}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
      <div className={BrowseCss.containAuthors}>
        <div className={BrowseCss.mostPopular}>
          Popular <span className={BrowseCss.recipe}>Authors</span>
        </div>

        <div className={BrowseCss.authorsList}>
          {AuthorsData.map((list) => (
            <div key={list.id} className={BrowseCss.authors}>
              <img className={BrowseCss.authorImg} src={list.ss} />
              <p>{list.name}</p>
              <div className={BrowseCss.rating2}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                <path d="M6.34961 0L7.40762 4.54377L12.0559 4.1459L8.06151 6.55623L9.87632 10.8541L6.34961 7.8L2.8229 10.8541L4.63771 6.55623L0.64327 4.1459L5.2916 4.54377L6.34961 0Z" fill="#FFBD3F"/>
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                <path d="M6.34961 0L7.40762 4.54377L12.0559 4.1459L8.06151 6.55623L9.87632 10.8541L6.34961 7.8L2.8229 10.8541L4.63771 6.55623L0.64327 4.1459L5.2916 4.54377L6.34961 0Z" fill="#FFBD3F"/>
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                <path d="M6.34961 0L7.40762 4.54377L12.0559 4.1459L8.06151 6.55623L9.87632 10.8541L6.34961 7.8L2.8229 10.8541L4.63771 6.55623L0.64327 4.1459L5.2916 4.54377L6.34961 0Z" fill="#FFBD3F"/>
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                <path d="M6.34961 0L7.40762 4.54377L12.0559 4.1459L8.06151 6.55623L9.87632 10.8541L6.34961 7.8L2.8229 10.8541L4.63771 6.55623L0.64327 4.1459L5.2916 4.54377L6.34961 0Z" fill="#C4C4C4"/>
                </svg>
              </span>
            </div>
            </div>
          ))}
        </div>
      </div>

      <div className={BrowseCss.containCatBlog}>
        <div className={BrowseCss.categories}>
          <span  className={BrowseCss.mostPopular}>Categories</span>
          
          <div className={BrowseCss.categoriesList}>
            {CategoriesData.map((list) => (
              <div key={list.id} className={BrowseCss.category}>
                <img src={list.icon} alt="" />
                <div>{list.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={BrowseCss.blogs}>
          <span className={BrowseCss.mostPopular}>Blogs</span>

          <div className={BrowseCss.blogList}>
            {BlogsData.map((list) => (
              <div className={BrowseCss.blog} key={list.id}>
                <p>{list.title}</p>
                <div className={BrowseCss.line}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default BrowseOurLatest
