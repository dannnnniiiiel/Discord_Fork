import React from 'react';
import { Helmet } from 'react-helmet';

export default ({data}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <Helmet>
        <title>{frontmatter.pagename}</title>
      </Helmet>
      <img src={frontmatter.avatar}></img>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
};

export const pageQuery = graphql`
  query docsPages($filename: String!) {
    markdownRemark(fields: { filename: { eq: $filename }}) {
      html
      frontmatter {
        pagename
      }
    }
  }
`
