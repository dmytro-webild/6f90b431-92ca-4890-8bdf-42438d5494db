"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Building, Calendar, CheckCircle, FileText, Globe, Lock, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="large"
        background="noiseDiagonalGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Tshakazi Consulting"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Corporate Secretarial & Governance Services"
      description="Supporting organisations with governance, compliance, and professional board support across South Africa and multiple African jurisdictions."
      testimonials={[
        {
          name: "Governance Expert",
          handle: "Board Support",
          testimonial: "Exceptional insight into board administration and regulatory compliance.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg",
        },
        {
          name: "Company Secretary",
          handle: "Governance Advisory",
          testimonial: "Tshakazi Consulting provides the gold standard in boardpack preparation.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-businessman-with-laptop_23-2148116267.jpg",
        },
        {
          name: "Board Chair",
          handle: "Strategic Partner",
          testimonial: "Highly professional delivery of complex statutory governance frameworks.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg",
        },
        {
          name: "General Counsel",
          handle: "Compliance Lead",
          testimonial: "Deep knowledge of the Companies Act and King IV compliance.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-businesswoman_329181-11700.jpg",
        },
        {
          name: "Operations Executive",
          handle: "Admin Support",
          testimonial: "Reliable and discreet governance advisory services.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-groom-classy-black-suit-stands-dark-room_8353-7083.jpg",
        },
      ]}
      buttons={[
        {
          text: "Book a Consultation",
          href: "#contact",
        },
        {
          text: "View Services",
          href: "#services",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/warm-lighting-drawer-row-blue-fronts_169016-68933.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
          alt: "Close-up of competitive employee",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-confident-asian-man-with-arms-crossed_1262-884.jpg",
          alt: "Closeup of Confident Asian Man with Arms Crossed",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-businessman-imagines-great-career_1163-5478.jpg",
          alt: "Successful businessman imagines great career",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-business-man-posing-with-crossed-arms_23-2149206526.jpg",
          alt: "Portrait of young business man posing with crossed arms",
        },
        {
          src: "http://img.b2bpic.net/free-photo/indoor-shot-attractive-caucasian-teenage-woman-with-long-dark-hair-sitting-desk-with-lots-textbooks_273609-1136.jpg",
          alt: "Indoor shot of attractive Caucasian teenage woman with long dark hair sitting at desk with lots of textbooks",
        },
      ]}
      avatarText="Trusted by 50+ leading directors"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="About Tshakazi Consulting"
      description="A specialised corporate secretarial and governance advisory firm supporting boards and leadership teams. Founder Sisonke Dyonta brings nearly a decade of experience across diverse African jurisdictions."
      metrics={[
        {
          title: "Years Combined Experience",
          value: "10+",
        },
        {
          title: "Jurisdiction Coverage",
          value: "Multi",
        },
        {
          title: "Professional Memberships",
          value: "IoDSA",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-happy-businessman-with-crossed-arms_23-2147955274.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Corporate Secretarial",
          description: "Minute taking, board pack preparation, and drafting complex resolutions.",
          icon: FileText,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/presentation-contract_1098-15816.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-teacher-writing-agenda_23-2148635364.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/warm-lighting-drawer-row-blue-fronts_169016-68933.jpg",
          imageAlt: "corporate file organization files",
        },
        {
          title: "Company Administration",
          description: "Seamless company registrations, CIPC compliance, and statutory record management.",
          icon: Building,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/pile-books-bookstore_23-2148213800.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/policewoman-working-confidential-case_482257-75290.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg",
          imageAlt: "corporate file organization files",
        },
        {
          title: "Governance Support",
          description: "Director reviews, governance frameworks, and professional policy drafting.",
          icon: ShieldCheck,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/still-life-world-intellectual-property-day_23-2151325849.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/office-desk-with-computer-digital-tablet-mobile-phone_1252-898.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-businessman-with-laptop_23-2148116267.jpg",
          imageAlt: "corporate file organization files",
        },
        {
          title: "Meeting Management",
          description: "Board meeting coordination, end-to-end agenda preparation, and tracking matters arising.",
          icon: Calendar,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/group-serious-managers-morning-briefing_74855-4277.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/note-taking-concept-with-colorful-sticky-note-paper-white-background-top-view-space-text-horizontal-image_176474-7822.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg",
          imageAlt: "corporate file organization files",
        },
      ]}
      title="Our Governance Services"
      description="Comprehensive corporate secretarial and advisory solutions tailored for the complex South African regulatory landscape."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "w1",
          title: "King IV Adherence",
          value: "100%",
          icon: CheckCircle,
        },
        {
          id: "w2",
          title: "Regulatory Knowledge",
          value: "Expert",
          icon: Globe,
        },
        {
          id: "w3",
          title: "Confidentiality Policy",
          value: "Strict",
          icon: Lock,
        },
      ]}
      title="Why Tshakazi Consulting?"
      description="Governance is about precision, discretion, and compliance. We deliver advisory services anchored in deep technical knowledge."
    />
  </div>

  <div id="clients" data-section="clients">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Mapongwana Attorneys",
        "Bokamoso Education Trust",
        "National Health Laboratory Service",
        "Global Governance Group",
        "African Board Services",
        "Compliance Institute SA",
        "Corporate Secretarial Solutions",
      ]}
      title="Trusted By Industry Leaders"
      description="We are honored to partner with a diverse range of organisations across public and private sectors."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Thabo M.",
          handle: "Managing Partner",
          testimonial: "Tshakazi transformed our board administrative efficiency.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",
        },
        {
          id: "t2",
          name: "Sarah K.",
          handle: "Board Secretary",
          testimonial: "Expert knowledge that saved our compliance timeline.",
          imageSrc: "http://img.b2bpic.net/free-photo/blue-eyed-business-woman-white-blouse-standing-confident-pose-with-her-international-co-workers-indoor-portrait-asian-african-employees-with-blonde-lady_197531-3756.jpg",
        },
        {
          id: "t3",
          name: "Jacob V.",
          handle: "CEO",
          testimonial: "Professional, punctual, and deep governance insight.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-businesswoman-wearing-eyeglasses_1262-4761.jpg",
        },
        {
          id: "t4",
          name: "Elena R.",
          handle: "Director",
          testimonial: "The best partner for King IV advisory in the sector.",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-executive-with-short-hair-crossed-arms_1149-89.jpg",
        },
        {
          id: "t5",
          name: "Marcus L.",
          handle: "General Counsel",
          testimonial: "Consistent delivery and highly professional staff.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-handsome-middle-aged-entrepreneur_1262-4871.jpg",
        },
      ]}
      title="Client Perspectives"
      description="What our clients say about our advisory and governance partnership."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Which jurisdictions do you cover?",
          content: "We provide support across South Africa and various SADC countries.",
        },
        {
          id: "f2",
          title: "Are you registered with professional bodies?",
          content: "Yes, we are registered with the Chartered Governance Institute of Southern Africa.",
        },
        {
          id: "f3",
          title: "How do we book a consultation?",
          content: "Use the booking form below or contact our office via phone or email.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-minimalist-office_23-2151780739.jpg"
      title="Frequently Asked Questions"
      description="Answers to common queries regarding governance and our advisory process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "animated-grid",
      }}
      title="Schedule a Governance Consultation"
      description="Ready to enhance your organisation’s board support and compliance governance? Let's discuss your requirements."
      imageSrc="http://img.b2bpic.net/free-photo/modern-office-building-facade_158595-5101.jpg"
      buttonText="Submit Inquiry"
      tag="Contact Us"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/dark-textured-geometric-overlap-with-chevron-layers_84443-72891.jpg"
      logoText="Tshakazi Consulting (PTY) LTD"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
