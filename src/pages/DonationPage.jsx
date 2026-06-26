import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeader from "../components/shared/SectionHeader";
import { DONATION_GOALS, RECENT_DONORS } from "../constants/newData";
import {
  Heart,
  Monitor,
  Trees,
  BookOpen,
  GraduationCap,
  Phone,
  CreditCard,
  Wallet,
  Building,
  CheckCircle,
  Gift,
} from "lucide-react";

const ICON_MAP = {
  Monitor,
  Trees,
  BookOpen,
  GraduationCap,
};

const PAYMENT_METHODS = [
  { id: "bkash", label: "bKash", icon: Wallet, color: "#E2136E" },
  { id: "nagad", label: "Nagad", icon: CreditCard, color: "#F6921E" },
  { id: "bank", label: "Bank Transfer", icon: Building, color: "#3B82F6" },
];

export default function DonationPage() {
  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    phone: "",
    paymentMethod: "bkash",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ amount: "", name: "", phone: "", paymentMethod: "bkash", message: "" });
  };

  const totalRaised = DONATION_GOALS.reduce((acc, goal) => acc + goal.raised, 0);
  const totalGoal = DONATION_GOALS.reduce((acc, goal) => acc + goal.goal, 0);

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.donate.title}</title>
        <meta name="description" content={PAGE_SEO.donate.description} />
        <meta property="og:title" content={PAGE_SEO.donate.title} />
        <meta property="og:description" content={PAGE_SEO.donate.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.donate.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.donate.title} />
        <meta name="twitter:description" content={PAGE_SEO.donate.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.donate.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Donate" }]} />

      <PageHeader
        title="Support Our School"
        description="Your generosity helps us build a brighter future for our students."
        breadcrumbs={[{ label: "Donate" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Heart className="w-4 h-4" />
                Total Raised: ৳{totalRaised.toLocaleString()} of ৳{totalGoal.toLocaleString()}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 max-w-2xl mx-auto">
                <div
                  className="bg-primary-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(totalRaised / totalGoal) * 100}%` }}
                />
              </div>
            </div>
          </ScrollReveal>

          <SectionHeader
            subtitle="Our Goals"
            title="Where Your Donations Go"
            description="Every taka you donate directly impacts a child's education."
          />

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {DONATION_GOALS.map((goal, index) => {
              const IconComp = ICON_MAP[goal.icon] || Heart;
              const percentage = Math.round((goal.raised / goal.goal) * 100);
              return (
                <ScrollReveal key={goal.id} animation="fadeUp" delay={index * 0.1}>
                  <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                        <IconComp className="w-6 h-6 text-primary-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-heading font-poppins">{goal.title}</h3>
                        <p className="text-sm text-paragraph mt-1">{goal.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-paragraph">Raised: ৳{goal.raised.toLocaleString()}</span>
                        <span className="font-semibold text-primary-500">{percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5">
                        <div
                          className="bg-primary-500 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-paragraph/70">
                        <span>Goal: ৳{goal.goal.toLocaleString()}</span>
                        <span>{goal.donors} donors</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal animation="fadeLeft">
              <SectionHeader
                subtitle="Make a Difference"
                title="Donate Now"
                description="Choose your contribution amount and help us reach our goals."
                align="left"
              />

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-heading font-poppins mb-2">Thank You!</h3>
                  <p className="text-paragraph">Your donation is greatly appreciated. We will contact you shortly with payment details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">Donation Amount (৳)</label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="Enter amount"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    />
                    <div className="flex gap-2 mt-2">
                      {[500, 1000, 2000, 5000].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setFormData({ ...formData, amount: amt.toString() })}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-background border border-border hover:bg-primary-50 hover:border-primary-500 transition-colors"
                        >
                          ৳{amt.toLocaleString()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">Your Name (Optional)</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Leave blank to donate anonymously"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="01XXXXXXXXX"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">Payment Method</label>
                    <div className="grid grid-cols-3 gap-3">
                      {PAYMENT_METHODS.map((method) => {
                        const MethodIcon = method.icon;
                        return (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                            className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                              formData.paymentMethod === method.id
                                ? "border-primary-500 bg-primary-50"
                                : "border-border bg-white hover:border-primary-200"
                            }`}
                          >
                            <MethodIcon className="w-6 h-6" style={{ color: method.color }} />
                            <span className="text-xs font-medium text-heading">{method.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any message for the school..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5" />
                    Submit Donation
                  </button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal animation="fadeRight">
              <SectionHeader
                subtitle="Gratitude"
                title="Recent Donors"
                description="We are thankful to every donor who supports our mission."
                align="left"
              />

              <div className="space-y-3 mb-10">
                {RECENT_DONORS.map((donor, index) => (
                  <div key={index} className="flex items-center justify-between bg-white rounded-xl border border-border p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                        <Gift className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-heading">
                          {donor.name === "Anonymous" ? "Anonymous Donor" : donor.name}
                        </span>
                        <span className="block text-xs text-paragraph/70">{donor.date}</span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-primary-500">৳{donor.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <h3 className="text-lg font-bold text-heading font-poppins mb-3">Thank You</h3>
                <p className="text-sm text-paragraph leading-relaxed">
                  Every contribution, big or small, makes a meaningful difference in the lives of our students. Your donations help us provide better facilities, books, and opportunities for children who need it most. Together, we can build a brighter future for our community.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-primary-500 font-medium">
                  <Phone className="w-4 h-4" />
                  <span>Call us at +880-1700-000000 for donation inquiries</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
