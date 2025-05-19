import React from 'react';
import Layout from '@theme/Layout';
import ContactForm from '@site/src/components/ContactForm';
import styles from './contact.module.css';
import Heading from '@theme/Heading';

export default function Contact() {
  return (
    <Layout
      title="Contact Us"
      description="Contact the qrtub team to join our beta program or learn more about our solutions">
      <main className={styles.contactPage}>
        <div className="container">
          <div className={styles.contactContent}>
            <div className={styles.contactHeader}>
              <Heading as="h1">Contact Us</Heading>
              <p className={styles.subtitle}>
                We'd love to hear from you
              </p>
            </div>

            <div className={styles.betaInfo}>
              <Heading as="h2">Join Our Beta Program</Heading>
              <p>
                qrtub is currently open to select test customers and will be launching publicly in late 2025.
                We're looking for innovative organizations to help shape the future of physical item management.
              </p>
              <ul>
                <li>Get early access to our platform</li>
                <li>Influence product development</li>
                <li>Receive dedicated support</li>
                <li>Special beta pricing</li>
              </ul>
            </div>

            <div className={styles.formSection}>
              <Heading as="h2">Send Us a Message</Heading>
              <p>
                Fill out the form below and we'll get back to you as soon as possible.
                Whether you're interested in joining our beta program or just want to learn more,
                we're here to help.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 