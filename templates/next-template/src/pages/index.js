import Head from 'next/head';
import Section from '../components/Section';
import Main from '../components/Main';

const Home = () => {
  return (
    <Main>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>
        <img
          src='android-chrome-192x192.png'
          alt=''
          style={{ display: 'block', margin: '1em auto' }}
        />
        @bjeco/next-template
      </h1>

      <p>
        Get started by editing <code>src/pages/index.js</code>
      </p>

      <Section.Group>
        <Section
          href='https://nextjs.org/docs'
          title='Documentation'
          description='Find in-depth information about Next.js features and API.'
        />
        <Section
          href='https://nextjs.org/learn'
          title='Learn'
          description='Learn about Next.js in an interactive course with quizzes!'
        />
        <Section
          href='https://github.com/vercel/next.js/tree/master/examples'
          title='Examples'
          description='Discover and deploy boilerplate example Next.js projects.'
        />
        <Section
          href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          title='Deploy'
          description='Instantly deploy your Next.js site to a public URL with Vercel.'
        />
      </Section.Group>
    </Main>
  );
};

export default Home;
