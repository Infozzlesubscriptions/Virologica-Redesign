import {
  Bandage,
  Dna,
  HeartPulse,
  Microscope,
  Shield,
  SprayCan,
} from "lucide-react";

export const navigation = [
  {
    label: "Testing Services",
    href: "https://virologica.co.uk/testing-services/",
    children: [
      { label: "Virology", href: "https://virologica.co.uk/testing-services/virology/" },
      { label: "Biocompatibility", href: "https://virologica.co.uk/testing-services/biocompatibility/" },
      { label: "Microbiology", href: "https://virologica.co.uk/testing-services/microbiology/" },
    ],
  },
  {
    label: "Sectors We Support",
    href: "https://virologica.co.uk/sectors/",
    children: [
      { label: "Medical Devices", href: "https://virologica.co.uk/sectors/medical-device-testing-services/" },
      { label: "Biocides", href: "https://virologica.co.uk/sectors/biocides/" },
      { label: "Wound Care", href: "https://virologica.co.uk/sectors/wound-care/" },
      { label: "PPE", href: "https://virologica.co.uk/sectors/ppe/" },
    ],
  },
  {
    label: "About Us",
    href: "https://virologica.co.uk/about-us/",
    children: [
      { label: "Testimonials", href: "https://virologica.co.uk/testimonials/" },
      { label: "Careers", href: "https://virologica.co.uk/careers/" },
    ],
  },
  { label: "News", href: "https://virologica.co.uk/news/" },
  { label: "Case Studies", href: "https://virologica.co.uk/case-studies/" },
];

export const heroSlides = [
  {
    title: "Viral Testing",
    text: "Specialised in viral testing for development or submission",
    href: "https://virologica.co.uk/testing-services/virology/",
    image: "/images/hero-virology.jpg",
    alt: "Viral testing in a laboratory",
  },
  {
    title: "Microbiology Testing",
    text: "Extensive experience in standard and customised microbiology",
    href: "https://virologica.co.uk/testing-services/microbiology/",
    image: "/images/hero-microbiology.jpg",
    alt: "Microbiology testing in a laboratory",
  },
  {
    title: "Medical Devices",
    text: "Supporting the medical device industry from design to submission",
    href: "https://virologica.co.uk/testing-services/medical-devices/",
    image: "/images/hero-devices.jpg",
    alt: "Medical device components",
  },
];

export const serviceValues = [
  {
    title: "Professional Service",
    text: "Each project is assigned a PhD-qualified lead scientist from our testing labs who will remain your dedicated point of contact throughout the duration of your project.",
    image: "/images/professional-service.jpg",
    alt: "Professional Service - Virologica",
  },
  {
    title: "Collaboration",
    text: "Lab testing companies and clients consistently praise our realistic timelines, open and honest communication, and effective management of testing challenges.",
    image: "/images/collaboration.jpg",
    alt: "Collaboration - Virologica",
  },
  {
    title: "Your Project, Our Priority",
    text: "We understand how critical each viral testing service is to your success. Our UK testing lab is committed to delivering high-quality, accurate data for all testing requirements, on time, every time.",
    image: "/images/project-priority.jpg",
    alt: "Contract Research Organisation (CRO) - Virologica",
  },
  {
    title: "Leaders in Research",
    text: "Our customised testing approach ensures you receive comprehensive, accessible reports that provide clear context for all data we generate, supporting your decision-making process.",
    image: "/images/leaders-research.jpg",
    alt: "Contract testing lab - Virologica",
  },
];

export const sectors = [
  {
    title: "Medical Devices",
    text: "We offer a wide range of testing to support the medical device industry, including testing disinfection of reusable medical devices and resistance of materials to viral penetration. We also offer testing specialised to wound care products.",
    href: "https://virologica.co.uk/sectors/medical-devices/",
    image: "/images/hero-devices.jpg",
    icon: HeartPulse,
  },
  {
    title: "Biocides",
    text: "Our microbiology, cell biology and virology labs can support with biocides testing for regulatory submission or research and development. We are experienced with a range of standard methods including suspension and carrier tests.",
    href: "https://virologica.co.uk/sectors/biocides/",
    image: "/images/hero-microbiology.jpg",
    icon: SprayCan,
  },
  {
    title: "Wound Care",
    text: "Our microbiology team are equipped to assist with testing for wound care products with antimicrobial claims. We have exprience with biofilm models and can customise models for dressings, solutions and debridement products.",
    href: "https://virologica.co.uk/sectors/wound-care/",
    image: "/images/virology-methods.jpg",
    icon: Bandage,
  },
  {
    title: "PPE",
    text: "We have experience with standard and customised tests for PPE products, including masks and antimicrobial gloves. We have adapted methods to demostrate efficacy of novel products where there is no suitable standard method available.",
    href: "https://virologica.co.uk/sectors/ppe/",
    image: "/images/hero-virology.jpg",
    icon: Shield,
  },
];

export const testingServices = [
  {
    id: "virology",
    label: "Virology",
    text: "We specialise in comprehensive virology testing services designed to meet the highest industry standards. Our in-house virologists are experts in advanced virology services, offering both standard and customised viral assays to support research, product development, and quality assurance.",
    href: "https://virologica.co.uk/testing-services/virology/",
    icon: Dna,
  },
  {
    id: "microbiology",
    label: "Microbiology",
    text: "Our microbiology testing lab provides accurate and reliable microbiology testing services across multiple sectors. With a team of experienced microbiologists, we deliver both standard methods and tailored assays to meet specific project requirements.",
    href: "https://virologica.co.uk/testing-services/microbiology/",
    icon: Microscope,
  },
  {
    id: "biocompatibility",
    label: "Biocompatibility",
    text: "We offer expert biocompatibility testing services to ensure product safety and regulatory compliance. Our specialists can adapt and customise standard assays to align with your unique testing needs and industry standards.",
    href: "https://virologica.co.uk/testing-services/biocompatibility/",
    icon: HeartPulse,
  },
];

export const faqs = [
  {
    question: "What does viral testing involve, and why is it important?",
    answer: "Viral testing involves detecting and analysing viruses to assess product safety, performance, or contamination levels. It’s essential for medical devices, pharmaceuticals, and research projects to ensure compliance with regulatory standards and maintain product integrity. At Virologica, our viral testing services are conducted by experienced virologists using ISO/IEC 17025-accredited methods.",
  },
  {
    question: "What makes Virologica a trusted viral testing lab in the UK?",
    answer: "Virologica stands out as a trusted viral testing lab because each project is led by a PhD-qualified scientist, ensuring expert oversight from start to finish. Our ISO 17025 accreditation and transparent reporting processes reinforce our commitment to precision, quality, and scientific integrity.",
  },
  {
    question: "Do you offer customised virology testing services for specific project needs?",
    answer: "Yes, we provide fully customised virology testing services tailored to meet your exact requirements. Whether you need standard viral assays or bespoke testing methods, our experienced virologists ensure reliable, data-driven results aligned with the latest international standards.",
  },
  {
    question: "How do your microbiology testing services support different industries?",
    answer: "Our microbiology testing lab supports multiple industries including medical devices, biocides, wound care, and PPE. We offer both standard and customised microbiology testing services to help clients ensure product safety, efficacy, and compliance with regulatory frameworks.",
  },
  {
    question: "What are biocompatibility testing services, and when are they needed?",
    answer: "Biocompatibility testing services assess whether materials used in medical devices are safe and compatible with biological systems. These tests are vital before regulatory submission to confirm that the product will not cause any adverse biological reactions in patients.",
  },
  {
    question: "Is Virologica accredited for its testing methods?",
    answer: "Yes, Virologica holds ISO/IEC 17025 accreditation from UKAS for ISO 18184 antiviral activity of textiles and ASTM D7907 bactericidal activity of medical gloves. This means our methods and results are independently verified to meet the highest international standards of quality and reliability.",
  },
  {
    question: "How can I get started with Virologica’s viral or microbiology testing services?",
    answer: "Getting started is simple—just contact our team. Once your project begins, a dedicated lead scientist from our virus testing lab will guide you through each step, ensuring your testing is delivered accurately and on time.",
  },
];
