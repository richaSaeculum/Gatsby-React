import * as React from 'react';
import PersonalBlogWrapper from './style';
import Posts from './posts';
import Banner from './banner';
import Layout from '../../components/layout'


const PersonalBlog = (props) => {
  return (
    <Layout>
      <PersonalBlogWrapper {...props}>
        <Banner />
        <Posts />
      </PersonalBlogWrapper>
    </Layout>
  );
};

export default PersonalBlog;
