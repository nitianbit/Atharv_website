import { useEffect } from 'react';

const paragraphs: string[] = [
  'We, Atharv Eye Hospoital PRIVATE LIMITED, incorporated under the Companies ' +
    'Act, 2013 and having its office at ANR 033, Astra Tower, Newtown, ' +
    'Kolkata, 700161 India, set out this policy and disclaimer for the use of ' +
    'the platform website, the domain www.athravhealthcare.com and the mobile ' +
    'application "Atharv App" (collectively, the "Platform").',
  "Prices shown on the Platform for delivery of services are tentative. We are " +
    "not responsible for delays, and any change in subscription fees may occur " +
    "due to factors including market conditions and service demand.",
  "The Company is not responsible for damage suffered by users from use of the " +
    "services on this Platform, including loss of revenue or data from delays, " +
    "non-deliveries, missed deliveries, interruptions, failures, errors, " +
    "omissions, defects, viruses, communication failures, theft, destruction, " +
    "or unauthorized access.",
  "The Company is not liable for damage, hurt, or inconvenience caused during " +
    "the provision of services or resulting from user actions. Users access " +
    "materials, third-party posts, and downloaded content at their own " +
    "discretion and risk.",
  "Services are offered subject to availability without promise or guarantee. " +
    "Although the Company aims to keep Platform information accurate and " +
    "updated, no warranty is made regarding completeness, accuracy, " +
    "reliability, suitability, or availability, and any reliance is at the " +
    "user's own risk.",
  "Use of services is the sole responsibility of the user or their legally " +
    "authorized representative. The Company may add, delete, or modify content " +
    "on the Platform at any time without prior notice.",
  "Medical opinions shared with users are based on doctors' suggestions and " +
    "the Platform only acts as a coordinator. The Platform facilitates doctor " +
    "appointments but does not guarantee appointment timing, treatment plans, " +
    "or medical outcomes. Treating doctors and hospitals remain solely " +
    "responsible for treatment, negligence, injury, ailment, death, and other " +
    "medico-legal issues.",
  "For customized treatment packages, anything not specifically included may " +
    "be charged extra at the facility. Service complaints at the facility and " +
    "all research regarding doctors and facilities remain the user's " +
    "responsibility, as the Company operates only as a platform to aggregate " +
    "and sell packages.",
  "The information on the Platform is for general guidance only. Because laws, " +
    "rules, regulations, and operating conditions may change, the Platform may " +
    "contain delays, omissions, or inaccuracies. Refunds, where applicable, " +
    "will be governed strictly by the Refund and Cancellation Policy published " +
    "on the Platform.",
  "Links to third-party sites are provided for convenience only. The Company " +
    "does not control or endorse those sites and is not responsible for their " +
    "content, availability, or any temporary unavailability of the Platform " +
    "caused by technical issues beyond our control.",
  "For any account deletion request, please contact us at " +
    "it@ops-atharvhealthcare.com.",
];

const highlightedParagraphs: string[] = [
  "To the maximum extent permitted by applicable law, we disclaim liability " +
    "relating to user content, including misuse, loss, modification, " +
    "unavailability, and claims arising under intellectual property, libel, " +
    "privacy, publicity, obscenity, or similar laws.",
  "Any material or data downloaded or otherwise obtained through the Platform " +
    "is accessed entirely at the user's own discretion and risk. We are not " +
    "responsible for typographical errors, invalid coupons, or information " +
    "provided by us or third parties for informational or advertising purposes.",
];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white pt-28 md:pt-32 xl:pt-40 pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-[#D9E8F6] bg-gradient-to-br from-[#F4FAFF] via-white to-[#EEF7FF] shadow-[0_20px_60px_rgba(21,102,183,0.08)]">
          <div className="border-b border-[#D9E8F6] px-6 py-10 sm:px-8 md:px-10 md:py-12">
            <p className="mb-3 font-['DM_Sans'] text-sm font-semibold uppercase tracking-[0.24em] text-[#1566B7]">
              Atharv Healthcare
            </p>
            <h1 className="font-['Source_Serif_4'] text-4xl font-semibold text-[#142349] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-3xl font-['DM_Sans'] text-base leading-8 text-[#39506E] sm:text-lg">
              Please review the following policy content for the Atharv Healthcare platform and services.
            </p>
          </div>

          <div className="px-6 py-8 sm:px-8 md:px-10 md:py-10">
            <div className="space-y-6">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-['DM_Sans'] text-[15px] leading-8 text-[#28415F] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              {highlightedParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="rounded-2xl border border-[#C7DCF3] bg-[#F7FBFF] px-5 py-4 font-['DM_Sans'] text-[15px] font-bold uppercase leading-7 tracking-[0.02em] text-[#163C6A] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-10 font-['DM_Sans'] text-lg font-semibold text-[#142349]">
              AtharvHealthcare
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
