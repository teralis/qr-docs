import React, { useState } from 'react';
import type { ReactElement } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './pricing.module.css';
import { PageMetadata } from '@docusaurus/theme-common';
import ContactButton from '../components/ContactButton';

// Draft notice component
const DraftNotice = () => (
  <div
    style={{
      backgroundColor: 'var(--ifm-color-warning-contrast-background)',
      color: 'var(--ifm-color-warning-contrast-foreground)',
      padding: '1rem',
      margin: '-1rem -1rem 1rem -1rem',
      textAlign: 'center',
      fontWeight: 'bold',
    }}
  >
    ⚠️ This page is a draft and is not published in production
  </div>
);

// Draft metadata
export const frontMatter = {
  title: 'Pricing',
  description: 'Choose the perfect QR Tub plan for your needs',
  draft: true,
};

// Feature check component
const Check = () => <span className={styles.check}>✓</span>;
const Cross = () => <span className={styles.cross}>×</span>;

// Feature category type
type FeatureCategory = {
  name: string;
  features: Feature[];
};

// Plan feature type
type Feature = {
  name: string;
  free: React.ReactNode;
  pro: React.ReactNode;
  team: React.ReactNode;
};

// Features data with categories
const featureCategories: FeatureCategory[] = [
  {
    name: 'Core Features',
    features: [
      { name: 'QR Codes', free: 'Up to 50', pro: 'Unlimited', team: 'Unlimited' },
      { name: 'Tubs (Workspaces)', free: '1', pro: '3', team: 'Unlimited' },
      { name: 'Lists per Tub', free: '3', pro: 'Unlimited', team: 'Unlimited' },
      { name: 'Team Members', free: '1', pro: '1', team: 'Up to 5' },
    ]
  },
  {
    name: 'Advanced Features',
    features: [
      { name: 'Analytics & Tracking', free: 'Basic', pro: 'Advanced', team: 'Advanced' },
      { name: 'Custom Branding', free: <Cross />, pro: <Check />, team: <Check /> },
      { name: 'API Access', free: <Cross />, pro: <Check />, team: <Check /> },
      { name: 'Custom Fields', free: '3', pro: 'Unlimited', team: 'Unlimited' },
      { name: 'Export Options', free: 'CSV', pro: 'CSV, JSON, API', team: 'CSV, JSON, API' },
    ]
  },
  {
    name: 'Enterprise Features',
    features: [
      { name: 'Priority Support', free: <Cross />, pro: <Check />, team: <Check /> },
      { name: 'Bulk Operations', free: <Cross />, pro: <Check />, team: <Check /> },
      { name: 'Audit Logs', free: '30 days', pro: '1 year', team: '2 years' },
      { name: 'SSO Integration', free: <Cross />, pro: <Cross />, team: <Check /> },
      { name: 'Admin Controls', free: <Cross />, pro: <Cross />, team: <Check /> },
      { name: 'Usage Reports', free: <Cross />, pro: 'Basic', team: 'Advanced' },
    ]
  }
];

// FAQ type
type FAQ = {
  question: string;
  answer: string;
};

// FAQ data
const faqs: FAQ[] = [
  {
    question: 'Can I upgrade or downgrade at any time?',
    answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your billing cycle.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'No, all plans are month-to-month. You can cancel at any time.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards and PayPal. Enterprise customers can opt for invoice-based billing.',
  },
  {
    question: 'Do you offer a free trial of paid features?',
    answer: 'Yes, both Pro and Team plans come with a 14-day free trial. No credit card required.',
  },
  {
    question: 'What happens if I exceed my plan limits?',
    answer: "We'll notify you when you're approaching your limits. You can upgrade to a higher plan or remove items to stay within your current plan limits.",
  },
  {
    question: 'Do you offer discounts for non-profits or educational institutions?',
    answer: 'Yes, we offer special pricing for qualified organizations. Please contact our sales team for details.',
  },
];

// Plan Card Component
const PlanCard = ({ 
  name, 
  price, 
  description, 
  features,
  isPopular = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <div className={clsx(styles.planCard, isPopular && styles.popularPlan)}>
    {isPopular && <div className={styles.popularBadge}>Most Popular</div>}
    <h3>{name}</h3>
    <div className={styles.price}>{price}</div>
    <p className={styles.description}>{description}</p>
    <ul className={styles.featureList}>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <ContactButton
      title={`Get Started with ${name} Plan`}
      buttonText="Get Started"
      className={styles.button}
      primary={isPopular}
    />
  </div>
);

export default function Pricing(): ReactElement {
  // This ensures the page is only rendered during development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <Layout
      title="Pricing"
      description="Choose the perfect QR Tub plan for your needs"
    >
      <PageMetadata>
        <meta name="draft" content="true" />
        <meta name="robots" content="noindex, nofollow" />
      </PageMetadata>
      <DraftNotice />
      <div className={styles.pricingContainer}>
        <div className={styles.pricingHeader}>
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that best fits your needs. All plans include our core QR code management features.</p>
        </div>

        {/* Plan Cards */}
        <div className={styles.planCards}>
          <PlanCard
            name="Free"
            price="$0/month"
            description="Perfect for individuals and small projects"
            features={[
              "Up to 50 QR codes",
              "1 Tub (Workspace)",
              "3 Lists per Tub",
              "Basic analytics",
              "CSV exports"
            ]}
          />
          <PlanCard
            name="Pro"
            price="$12/month"
            description="Ideal for professionals and growing businesses"
            features={[
              "Unlimited QR codes",
              "3 Tubs",
              "Unlimited lists",
              "Advanced analytics",
              "API access"
            ]}
            isPopular
          />
          <PlanCard
            name="Team"
            price="$29/month"
            description="Built for teams and organizations"
            features={[
              "Everything in Pro",
              "Up to 5 team members",
              "SSO integration",
              "Admin controls",
              "Advanced reporting"
            ]}
          />
        </div>

        {/* Feature Comparison */}
        <div className={styles.featureComparison}>
          <h2>Full Feature Comparison</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.featureTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free</th>
                  <th>Pro</th>
                  <th>Team</th>
                </tr>
              </thead>
              <tbody>
                {featureCategories.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr>
                      <td colSpan={4} style={{
                        borderBottom: '2px solid var(--ifm-color-emphasis-200)',
                        fontWeight: '600',
                        color: 'var(--ifm-color-emphasis-700)',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        paddingTop: '2rem'
                      }}>
                        {category.name}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={`${categoryIndex}-${featureIndex}`}>
                        <td>{feature.name}</td>
                        <td>{feature.free}</td>
                        <td>{feature.pro}</td>
                        <td>{feature.team}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Enterprise Section */}
        <div className={styles.enterpriseSection}>
          <h2>Enterprise</h2>
          <p>Need a custom solution for your organization?</p>
          <div className={styles.enterpriseFeatures}>
            <ul>
              <li>Custom user limits</li>
              <li>Dedicated support</li>
              <li>Custom integrations</li>
              <li>On-premise deployment options</li>
              <li>Volume pricing</li>
            </ul>
          </div>
          <ContactButton
            title="Contact Sales for Enterprise"
            buttonText="Contact Sales"
            className={styles.button}
          />
        </div>

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2>Need Help Choosing?</h2>
          <p>Our team is here to help you find the perfect plan for your needs.</p>
          <ContactButton
            title="Help Choosing a Plan"
            buttonText="Contact Our Team"
            className={styles.button}
          />
        </div>
      </div>
    </Layout>
  );
} 