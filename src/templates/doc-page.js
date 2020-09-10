import React from 'react';
import {default as LayoutMain} from 'layouts/main';
import Content from 'components/pages/doc-page/content';
import useAnalytics from '../hooks/use-analytics';

export default function (props) {
  const {
    pageContext: {
      remarkNode: {html, frontmatter},
      sidebarTree,
      breadcrumbs,
    },
  } = props;

  const pageMetadata = {
    data: {
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      slug: frontmatter.slug,
    },
  };

  useAnalytics(frontmatter.slug);

  return (
    <LayoutMain pageMetadata={pageMetadata} sidebar={sidebarTree}>
      {/* <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
      <Content content={html} articleSrc={frontmatter.fileOrigin}/>
    </LayoutMain>
  );
}
