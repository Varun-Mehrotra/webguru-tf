import React from 'react'
import Contact from '../components/contact';
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import Link from 'next/link'
import BannerImg from 'assets/banner-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function ContactForm() {
  return (
    <section sx={styles.contact_us} id="contact-us">
      <Container sx={styles.contact_us.container}>
        <Box sx={styles.contact_us.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Reach Out
          </Heading>
          <Text as="p" variant="heroSecondary">
            Don't like forms? Send us an <Link> email </Link>
          </Text>
          <Contact/>
        </Box>
      </Container>
    </section>
  )
}
const styles = {
    contact_us: {
        pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
        pb: [2, null, 0, null, 2, 0, null, 5],
        position: 'relative',
        zIndex: 2,
        '&::before': {
          position: 'absolute',
          content: '""',
          bottom: 6,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: -1,
          backgroundImage: `url(${ShapeLeft})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: 'bottom left',
          backgroundSize: '36%',
        },
        '&::after': {
          position: 'absolute',
          content: '""',
          bottom: '40px',
          right: 0,
          height: '100%',
          width: '100%',
          zIndex: -1,
          backgroundImage: `url(${ShapeRight})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: 'bottom right',
          backgroundSize: '32%',
        },
        container: {
          minHeight: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        contentBox: {
          width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
          mx: 'auto',
          textAlign: 'center',
          mb: ['40px', null, null, null, null, 7],
        },
        imageBox: {
          justifyContent: 'center',
          textAlign: 'center',
          display: 'inline-flex',
          mb: [0, null, -6, null, null, '-40px', null, -3],
          img: {
            position: 'relative',
            height: [245, 'auto'],
          },
        },
      },
  };