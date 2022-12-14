import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/button/button';
import PostCardModern from '../../../components/post-card-modern/post-card-modern';
import BlogPostsWrapper, { PostRow, PostGrid, SeeMore } from './style';



const Posts = (props) => {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    fetch(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts`)
      .then(response => response.json())
      .then(resultData => {
        setPosts(resultData)
      })
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <BlogPostsWrapper>
      <PostRow>
        {(posts || []).map((item) => {
          const title = item.title.rendered || item.slug;
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
            <PostGrid key={item.slug}>
              <PostCardModern
                key={item.slug}
                title={title}
                // image={featuredImage}
                url={item.id}
                description={item.excerpt.rendered}
                date={item.date}
                tags={item.tags}
                placeholderBG={setColor}
              />
            </PostGrid>
          );
        })}
      </PostRow>
      <SeeMore>
        <Link to="page/1">
          <Button title="See more" type="submit" />
        </Link>
      </SeeMore>
    </BlogPostsWrapper>
  );
};

export default Posts;



