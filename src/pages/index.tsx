import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import ContactButton from '@site/src/components/ContactButton';

import styles from './index.module.css';

function BetaAnnouncement() {
  return (
    <section className={styles.betaSection}>
      <div className="container">
        <div className={styles.betaContent}>
          <Heading as="h2">Join Our Beta Program</Heading>
          <p>
            qrtub is currently open to select test customers and will be launching publicly in late 2025.
            We're looking for innovative organizations to help shape the future of physical item management.
          </p>
          <div className={styles.betaAction}>
            <ContactButton
              title="Join the Beta Program"
              buttonText="Contact Us to Join the Beta"
              primary={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to qrtub
        </Heading>
        <p className="hero__subtitle">
          Organize your physical world with digital precision
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started in 5 Minutes 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="qrtub Documentation"
      description="Learn how to use qrtub to manage your items with QR codes and organized workspaces">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <BetaAnnouncement />
      </main>
    </Layout>
  );
}
