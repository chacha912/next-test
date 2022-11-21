import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';
import ExportedImage from 'next-image-export-optimizer';
import { Layout } from '@/components';
import StarsSVG from '@/public/assets/icons/icon_stars.svg';
import CopySVG from '@/public/assets/icons/icon_copy.svg';
import { prefix } from '@/utils/prefix';

const Home: NextPage = () => {
  return (
    <Layout className='main_page'>
      <Head>
        <title>Yorkie</title>
        <meta
          name='description'
          content='Yorkie House is an admin dashboard that allows managing Yorkie projects and documents.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://house.yorkie.dev/og.png' />
        <meta property='og:url' content='https://house.yorkie.dev/' />
        <meta property='og:title' content='Yorkie House' />
        <meta
          property='og:description'
          content='Yorkie House is an admin dashboard that allows managing Yorkie projects and documents.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@team_yorkie' />
        <meta property='twitter:image' content='https://house.yorkie.dev/og.png' />
        <meta property='twitter:title' content='Yorkie House' />
        <meta
          property='twitter:description'
          content='Yorkie House is an admin dashboard that allows managing Yorkie projects and documents.'
        />
      </Head>
      <div className='main'>
        <section className='key_visual'>
          <div className='inner'>
            <h2 className='title'>
              <span className='text'>Breathe</span>
              <span className='point'>
                collaboration
                <span className='bg'>
                  <ExportedImage
                    src={`${prefix}/assets/images/dashboard.png`}
                    alt='dashboard'
                    width={640}
                    height={300}
                  />
                </span>
              </span>
              <span className='text'>your products</span>
            </h2>
            <div className='btn_box'>
              <div className='npm_box'>
                <label htmlFor='npm' className='blind'>
                  Npm Install
                </label>
                <input className='input' id='npm' type='text' value='$ npm install yorkie-js-sdk' readOnly />
                <button type='button' className='btn gray800'>
                  <span className='icon'>
                    <CopySVG />
                  </span>
                  <span className='blind'>copy</span>
                </button>
              </div>
              <Link href='#' className='btn orange_0 btn_start'>
                <span className='bg'></span>
                <span className='icon'>
                  <StarsSVG />
                </span>
                <span className='text'>Start for free</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
