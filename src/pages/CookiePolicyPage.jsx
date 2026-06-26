import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";

export default function CookiePolicyPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.cookiePolicy.title}</title>
        <meta name="description" content={PAGE_SEO.cookiePolicy.description} />
        <meta property="og:title" content={PAGE_SEO.cookiePolicy.title} />
        <meta property="og:description" content={PAGE_SEO.cookiePolicy.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.cookiePolicy.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.cookiePolicy.title} />
        <meta name="twitter:description" content={PAGE_SEO.cookiePolicy.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.cookiePolicy.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Cookie Policy" }]} />

      <PageHeader
        title="Cookie Policy"
        description="Information about how we use cookies on our website."
        breadcrumbs={[{ label: "Cookie Policy" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              Our website uses cookies for the following purposes:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Preference Cookies:</strong> These allow the website to remember choices you make, such as your language preference or region.</li>
              <li><strong>Security Cookies:</strong> These are used to prevent fraudulent use of login credentials and protect user data.</li>
            </ul>

            <h2>3. Third-Party Cookies</h2>
            <p>
              We may use third-party services such as Google Analytics that place cookies on your device. These third parties have their own privacy policies governing the use of this information.
            </p>

            <h2>4. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul>
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from particular sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>

            <h2>5. Impact of Disabling Cookies</h2>
            <p>
              If you disable or refuse cookies, some parts of our website may become inaccessible or not function properly. For example, you may not be able to log in or use any services that require authentication.
            </p>

            <h2>6. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at info@dhps.edu.bd.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
