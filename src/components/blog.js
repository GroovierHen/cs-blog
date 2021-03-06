import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const blog = ({ mainImage, title, author, excerpt, slug }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
      <article className="article-box article-box--hg">
        <Link
          to={`/blog/${slug}?post=featured`}
          className="article-box__img-wrapper"
        >
          {mainImage && (
            <Img
              fixed={mainImage.localFile.childImageSharp.fixed}
              className="article-box__img"
              alt="Article image"
            />
          )}
        </Link>
        <div className="article-box__copy">
          <h4 className="h4--lg article-box__title">
            <Link to={`/blog/${slug}?post=featured`}>{title}</Link>
          </h4>
          <p
            className="article-box__text"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <p className="p--md">
            BY{" "}
            <a href="#" className="article-box__author">
              {author}
            </a>{" "}
            - Web Development @ codestaff
          </p>
        </div>
      </article>
    </div>
  )
}

export default blog
