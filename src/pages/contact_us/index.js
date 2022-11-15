import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../../contexts/app/app.provider';
import theme from 'theme';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import ContactForm from '../../sections/contact_us';
import Filler from '../../sections/filler';
import FillerBackground from '../../sections/filler-background';


import KeyFeature from '../../sections/key-feature';
import ServiceSection from '../../sections/service-section';
import Feature from '../../sections/feature';


export default function ContactUs() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="WebGuru Transformations" />
          <Filler />
          <ContactForm />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}