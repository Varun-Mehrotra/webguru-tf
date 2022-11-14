import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../../contexts/app/app.provider';
import theme from 'theme';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import Contact from '../../sections/contact_us';
import Filler from '../../sections/filler';


function contact_us() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="WebGuru Transformations" />
          <Filler />
          <Contact />
          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

export default contact_us