import React from "react"
import { Link } from "gatsby"

import '../styles/skeleton.css';
import '../styles/main.css';
import '../styles/about.css';
import '../styles/case.css';

import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo";

const Image = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} className="columns four" imgStyle={{margin: "0 auto"}} />
  }

const WorkPage = () => (
  <Layout>
    <SEO title="About" />
    <h2 className="work-header">About</h2>
    <article className="case row">
        <Image />
            <div className="columns eight" id="about-page-bio">
                <p>
                    <strong>Hi, I'm Siraj.</strong><br /> I am a software engineer and designer with foundations
                    in application development, and human-centered design. I am enrolled at the University
                    of Illinois at Urbana-Champaign where I am pursuing a bachelors degree in Cognitive Science
                    and minoring in Computer Science. My coursework is centered around behavioral modeling, machine learning, neuroscience, and software development. I am currently designing and developing solutions for the UIUC
                    startup community at <a href="http://founders.illinois.edu" target="_blank" rel='noreferrer noopener' className="box-link">
                    Founders<i style={{fontSize: "1rem", marginLeft: "5px"}} className="fas fa-external-link-alt" /></a> and for non-profit organizations at <a href="https://uiuc.hack4impact.org" target="_blank" rel='noreferrer noopener' className="box-link">
                    Hack4Impact<i style={{fontSize: "1rem", marginLeft: "5px"}} className="fas fa-external-link-alt" /></a> as well as interning at <a href="https://abbvie.com" target="_blank" rel='noreferrer noopener' className="box-link">
                    AbbVie<i style={{fontSize: "1rem", marginLeft: "5px"}} className="fas fa-external-link-alt" /></a>.
                    <br /><br />
                    <strong>Interested in working together?</strong><br />
                    Feel free to check out <Link to="/resume" className="box-link">my resume</Link> or reach
                    out to me at <a href="mailto:sirajsc2@illinois.edu" className="box-link">sirajsc2@illinois.edu</a>.
                    <br /><br />
                    <strong>Find me elsewhere</strong>
                </p>
                <div className="row" id="about-socials">
                    <section className="column one-half">
                        <ul>
                            <li><a href="mailto:sirajsc2@illinois.edu" target="_blank" rel='noreferrer noopener' ><i className="fas fa-paper-plane" />&nbsp; sirajsc2@illinois.edu</a></li>
                            <li><a href="https://linkedin.com/in/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-linkedin" />&nbsp; LinkedIn </a></li>
                            <li><a href="https://dribbble.com/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-dribbble" />&nbsp; Dribbble</a></li>
                        </ul>
                    </section>
                    <section className="column one-half">
                        <ul>
                            <li><a href="tel:1-978-760-8276" target="_blank" rel='noreferrer noopener' ><i className="fas fa-phone-square-alt" />&nbsp; +1 (978) 760-8276 </a></li>
                            <li><a href="https://github.com/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-github" />&nbsp; GitHub</a></li>
                            <li><a href="https://twitter.com/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-twitter" />&nbsp; Twitter </a></li>
                        </ul>
                    </section>
                </div>
            </div>
    </article>
  </Layout>
)

export default WorkPage