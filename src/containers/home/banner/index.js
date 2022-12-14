import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import FeaturePost from '../../../components/feature-post/feature-post';
import { BannerWrapper, BannerInner, FeaturePosts, Title } from './style';


const Banner = () => {

  // const Posts = Data.allMarkdownRemark.edges;

  return (
    <BannerWrapper>
      <BannerInner>
        <FeaturePosts>
          <Title>Featured Posts</Title>
          {/* {Posts.map(({ node }: any) => {
            const title = node.frontmatter.title || node.fields.slug;
            // Random Placeholder Color
            const placeholderColors = [
              '#55efc4',
              '#81ecec',
              '#74b9ff',
              '#a29bfe',
              '#ffeaa7',
              '#fab1a0',
              '#e17055',
              '#0984e3',
              '#badc58',
              '#c7ecee',
            ];
            const setColor =
              placeholderColors[
                Math.floor(Math.random() * placeholderColors.length)
              ];

            return (
              <FeaturePost
                key={node.fields.slug}
                title={title}
                image={
                  node.frontmatter.cover == null
                    ? null
                    : node.frontmatter.cover.childImageSharp.gatsbyImageData
                }
                url={node.fields.slug}
                tags={node.frontmatter.tags}
                placeholderBG={setColor}
              />
            );
          })} */}
          <h1>No Featured Post</h1>
        </FeaturePosts>
      </BannerInner>
    </BannerWrapper>
  );
};

export default Banner;
