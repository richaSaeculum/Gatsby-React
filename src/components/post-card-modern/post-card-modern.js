import * as React from 'react';
import _ from 'lodash';
import {
  PostCardModernWrapper,
  PostPreview,
  PostDetails,
  PostDate,
  PostTitle,
  Excerpt,
  PostTags,
} from './post-card-modern.style';
import { Link } from 'react-router-dom';


const PostCardModern = ({
  image,
  title,
  description,
  url,
  date,
  tags,
  className,
  placeholderBG,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['post_card_modern'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostCardModernWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            {/* <GatsbyImage src={image} alt="post preview" backgroundColor={placeholderBG} /> */}
          </Link>
          {date && (
            <PostDate
              dangerouslySetInnerHTML={{
                __html: date,
              }}
              className="post_date"
            />
          )}
        </PostPreview>
      )}

      <PostDetails className="post_details">
        {/* {tags == null ? null : (
          <PostTags className="post_tags">
            {tags.map((tag: string, index: number) => (
              <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </PostTags>
        )} */}
        <PostTitle className="post_title">
          <Link to={`${url}`}>{title}</Link>
        </PostTitle>
        {description && (
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            className="excerpt"
          />
        )}
      </PostDetails>
    </PostCardModernWrapper>
  );
};

export default PostCardModern;
