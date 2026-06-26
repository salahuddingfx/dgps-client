import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";

export default function ChildrenPolicyPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.childrenPolicy.title}</title>
        <meta name="description" content={PAGE_SEO.childrenPolicy.description} />
        <meta property="og:title" content={PAGE_SEO.childrenPolicy.title} />
        <meta property="og:description" content={PAGE_SEO.childrenPolicy.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.childrenPolicy.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.childrenPolicy.title} />
        <meta name="twitter:description" content={PAGE_SEO.childrenPolicy.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.childrenPolicy.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Children's Policy" }]} />

      <PageHeader
        title="Children's Policy"
        description="Our commitment to ensuring the safety, welfare, and protection of every child."
        breadcrumbs={[{ label: "Children's Policy" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>1. Our Commitment</h2>
            <p>
              Dhuapalong Government Primary School is deeply committed to safeguarding and promoting the welfare of all children attending our school. We believe every child has the right to learn, play, and grow in a safe, supportive, and nurturing environment.
            </p>

            <h2>2. Child Safety</h2>
            <p>
              We maintain a zero-tolerance approach to child abuse and neglect. Our school has implemented comprehensive child protection measures including:
            </p>
            <ul>
              <li>Trained designated safeguarding leads on staff</li>
              <li>Clear reporting procedures for any concerns</li>
              <li>Regular child safety training for all staff members</li>
              <li>Safe recruitment practices for new staff</li>
              <li>Visitors must sign in and wear identification badges</li>
            </ul>

            <h2>3. Anti-Bullying Policy</h2>
            <p>
              We are committed to providing a safe and supportive environment free from bullying. All forms of bullying — physical, verbal, social, and cyber — are taken seriously and addressed promptly through our established procedures.
            </p>

            <h2>4. Health and Wellbeing</h2>
            <p>
              We prioritize the health and wellbeing of our students by:
            </p>
            <ul>
              <li>Providing access to clean drinking water at all times</li>
              <li>Maintaining hygienic washroom facilities</li>
              <li>Conducting regular health check-ups</li>
              <li>Having first-aid facilities available on campus</li>
              <li>Promoting physical activity through sports and play</li>
              <li>Ensuring nutritious midday meals (as per government program)</li>
            </ul>

            <h2>5. Online Safety</h2>
            <p>
              In our computer lab and digital classrooms, we ensure supervised access to the internet. Students are taught about online safety, responsible internet use, and how to report any uncomfortable online experiences.
            </p>

            <h2>6. Inclusive Education</h2>
            <p>
              We welcome and support children of all backgrounds, abilities, and needs. We do not discriminate based on gender, religion, ethnicity, disability, or socioeconomic status. Special attention is given to students with learning difficulties.
            </p>

            <h2>7. Parental Involvement</h2>
            <p>
              We actively encourage parental involvement in their child's education and wellbeing. Regular parent-teacher meetings, open communication channels, and school events provide opportunities for parents to engage with the school community.
            </p>

            <h2>8. Reporting Concerns</h2>
            <p>
              If you have any concerns about the safety or welfare of a child at our school, please contact the Headmaster immediately. All concerns will be treated confidentially and investigated promptly.
            </p>
            <ul>
              <li><strong>Emergency Contact:</strong> +880-1700-111111</li>
              <li><strong>Email:</strong> info@dhps.edu.bd</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
