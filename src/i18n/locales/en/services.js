const services = {
  booking: {
    title: 'Book Appointment',
    selectDateTime: 'Select Date & Time',
    generalService: 'General Service',
    price: 'Price: {{price}}',
    name: 'Full Name',
    namePlaceholder: 'Your name',
    email: 'Email Address',
    emailPlaceholder: 'you@example.com',
    phone: 'Phone Number',
    vehicle: 'Vehicle Information',
    vehiclePlaceholder: 'Make, model and year (e.g., Toyota Corolla 2022)',
    date: 'Select Date',
    time: 'Select Time',
    notes: 'Additional Notes',
    notesPlaceholder: 'Any special requests or information',
    continue: 'Continue',
    back: 'Back',
    cancel: 'Cancel',
    confirm: 'Confirm Booking',
    processing: 'Processing...',
    confirmedTitle: 'Booking Confirmed!',
    confirmedText: "Your appointment has been successfully scheduled. We've sent a confirmation email with all the details.",
    errors: {
      name: 'Name is required',
      email: 'Email is required',
      emailInvalid: 'Please enter a valid email address',
      phone: 'Phone number is required',
      date: 'Please select a date',
      time: 'Please select a time',
    },
  },
  services: {
    mechanical: {
      title: 'Mechanical Repairs',
      subtitle: 'Professional diagnostics and repairs for all mechanical issues, ensuring your vehicle runs smoothly and efficiently.',
      imageAlt: 'Mechanic repairing a car engine',
      introTitle: 'Expert Mechanical Services',
      introText:
        'Our certified mechanics use advanced diagnostics equipment to identify and resolve all types of mechanical issues, from engine problems to transmission repairs.',
      features: [
        { title: 'Engine Repairs & Diagnostics', description: 'Comprehensive engine diagnostics and repairs using state-of-the-art equipment.' },
        { title: 'Transmission Services', description: 'Manual and automatic transmission repairs, fluid changes, and clutch replacements.' },
        { title: 'Brake System Repairs', description: 'Complete brake system services including pad replacements, rotor resurfacing, and fluid flushes.' },
        { title: 'Electrical System Diagnostics', description: 'Troubleshooting and repairs for all electrical issues, from batteries to complex computer systems.' },
      ],
      bookingName: 'General Mechanical Repairs',
      cta: 'Schedule Service',
      packages: {
        basic: {
          name: 'Basic Service',
          description: 'Essential maintenance for all vehicles',
          duration: '1-2 hours',
          features: ['Oil and filter change', 'Fluid level check and top-up', 'Tire pressure check', 'Brake inspection', 'Battery check'],
        },
        comprehensive: {
          name: 'Comprehensive Service',
          description: 'Complete inspection and maintenance',
          duration: '3-4 hours',
          features: ['All Basic Service items', 'Air filter replacement', 'Spark plug check/replacement', 'Multi-point inspection', 'Computer diagnostics scan'],
        },
        premium: {
          name: 'Premium Service',
          description: 'Thorough overhaul for optimal performance',
          duration: '4-6 hours',
          features: ['All Comprehensive Service items', 'Transmission fluid change', 'Cooling system flush', 'Brake fluid flush', 'Fuel system cleaning'],
        },
      },
      faqs: [
        {
          question: 'How often should I service my car?',
          answer:
            'We recommend servicing your car every 10,000 km or 12 months, whichever comes first. For older vehicles or those under heavy usage, more frequent servicing (every 5,000-7,500 km) may be beneficial. Regular maintenance helps catch small issues before they become serious problems.',
        },
        {
          question: 'What warning signs indicate my car needs repair?',
          answer:
            "Watch for warning lights on your dashboard, unusual noises (grinding, squeaking, knocking), decreased performance, vibrations, fluid leaks, burning smells, or smoke. If you notice any of these signs, it's best to have your vehicle checked promptly to prevent further damage.",
        },
        {
          question: 'Do you provide warranty on repairs?',
          answer:
            "Yes, all our mechanical repairs come with a 12-month/20,000 km warranty on parts and labor. Premium services include an extended 24-month warranty. Our warranty ensures that you're covered if any issues arise from our work or the parts we install.",
        },
        {
          question: 'How long does a typical mechanical repair take?',
          answer:
            'Service times vary depending on the repair needed. Basic services like oil changes and brake pad replacements typically take 1-2 hours, while more complex repairs like transmission work might take 1-3 days. We always provide a time estimate before beginning work and keep you updated on our progress.',
        },
        {
          question: 'Do you offer loaner vehicles while my car is being serviced?',
          answer:
            'Yes, we offer loaner vehicles for services that require your car to be in our shop for more than 24 hours. We also provide shuttle services and can arrange rental cars at discounted rates. Please inquire about these options when scheduling your service.',
        },
      ],
    },
    emergency: {
      title: 'Emergency Assistance',
      subtitle: '24/7 roadside emergency assistance for when you need help the most, available anytime, anywhere.',
      imageAlt: 'Roadside technician changing a tire',
      introTitle: 'Always There When You Need Us',
      introText:
        "Car troubles don't follow a 9-to-5 schedule, and neither do we. Our emergency assistance team is available 24/7, 365 days a year to help you get back on the road quickly and safely.",
      hotlineTitle: 'Emergency Hotline',
      hotlineText: 'Save this number in your phone for immediate assistance during emergencies.',
      features: [
        { title: 'Nationwide Coverage', description: 'Our extensive network ensures help is always nearby, no matter where you are.' },
        { title: 'Average Response Time: 30 Minutes', description: 'Quick response times to get you the help you need without long waits.' },
        { title: 'GPS-Enabled Tracking', description: "Track your technician's arrival in real-time through our mobile app." },
      ],
      cta: 'Call for Emergency',
      requestOnline: 'Request Assistance Online',
      offeringsTitle: 'Emergency Services We Offer',
      plusFuel: '{{price}} + fuel cost',
      offerings: {
        jumpStart: { title: 'Battery Jump-Start', description: 'Get a quick jump-start and a professional battery health check to avoid future problems.', duration: '20-30 minutes' },
        flatTire: { title: 'Flat Tire Service', description: "We'll replace your flat tire with your spare or provide temporary repair to get you to a service center.", duration: '30-45 minutes' },
        lockout: { title: 'Lockout Assistance', description: 'Locked your keys in your car? Our technicians can safely unlock your vehicle without causing damage.', duration: '20-40 minutes' },
        towing: { title: 'Emergency Towing', description: "If roadside repair isn't possible, we'll tow your vehicle to a nearby service center or your chosen location.", duration: '30-60 minutes' },
        fuel: { title: 'Fuel Delivery', description: "Run out of fuel? We'll deliver enough to get you to the nearest fuel station.", duration: '30-45 minutes' },
        diagnostics: { title: 'On-Site Diagnostics', description: 'Our mobile mechanics can diagnose and often fix common issues right at your location.', duration: '30-60 minutes' },
      },
      plansTitle: 'Emergency Assistance Membership Plans',
      signUp: 'Sign Up',
      plans: {
        basic: {
          name: 'Basic Plan',
          description: 'Essential coverage for occasional drivers',
          features: ['3 service calls per year', 'Towing up to 15 km', 'Battery jump-start', 'Tire change service'],
          excluded: ['Fuel delivery'],
        },
        premium: {
          name: 'Premium Plan',
          description: 'Complete coverage for daily drivers',
          features: ['5 service calls per year', 'Towing up to 40 km', 'All Basic Plan services', 'Fuel delivery service', 'Lockout assistance'],
        },
        ultimate: {
          name: 'Ultimate Plan',
          description: 'Unlimited coverage for families',
          features: ['Unlimited service calls', 'Towing up to 150 km', 'All Premium Plan services', 'Trip interruption coverage', 'Covers up to 3 vehicles'],
        },
      },
      plansNote: '* All plans include access to our 24/7 emergency helpline and mobile app.',
    },
    inspection: {
      title: 'Inspection Services',
      subtitle: 'Professional vehicle inspections to ensure safety, reliability, and peace of mind for buyers and sellers.',
      imageAlt: 'Technician inspecting a car',
      introTitle: 'Comprehensive Vehicle Inspections',
      introText:
        "Whether you're buying a used car, selling your vehicle, or just want to ensure your car is safe and reliable, our detailed inspection services provide the information you need to make informed decisions.",
      features: [
        { title: '150+ Point Inspection', description: 'Our certified technicians check over 150 points in your vehicle, from mechanical components to electronic systems.' },
        { title: 'Detailed Digital Reports', description: "Receive a comprehensive digital report with photos, videos, and technician notes about your vehicle's condition." },
        { title: 'Cost Estimates for Repairs', description: 'If issues are found, we provide estimated repair costs to help with negotiation or budgeting.' },
        { title: 'Mobile Inspections Available', description: 'We can perform inspections at your location, saving you time and hassle.' },
      ],
      cta: 'Schedule Inspection',
      typesTitle: 'Types of Inspections We Offer',
      types: {
        prePurchase: {
          name: 'Pre-Purchase Inspection',
          description: 'Before buying a used car, our thorough inspection helps you identify potential issues and make an informed decision.',
          duration: '1-2 hours',
          features: ['150+ point inspection', 'Mechanical & electrical checks', 'Test drive evaluation', 'Vehicle history verification'],
        },
        preSale: {
          name: 'Pre-Sale Inspection',
          description: "Boost buyer confidence and potentially increase your vehicle's value with a certified pre-sale inspection.",
          duration: '1-2 hours',
          features: ['120+ point inspection', 'Detailed condition report', 'Market value assessment', 'Sale preparation advice'],
        },
        safety: {
          name: 'Safety Inspection',
          description: 'Ensure your vehicle meets all safety standards with our comprehensive safety inspection.',
          duration: '45-60 minutes',
          features: ['Safety systems check', 'Brakes & steering inspection', 'Lights & signals testing', 'Suspension evaluation'],
        },
      },
      customTitle: 'Custom Inspection Packages',
      customText: 'Need something specific? We can create a custom inspection package tailored to your exact requirements.',
      customCta: 'Request Custom Quote',
      processTitle: 'Our Inspection Process',
      process: [
        { title: 'Schedule', description: 'Book your inspection online or call us to schedule at your preferred location and time.' },
        { title: 'Inspect', description: 'Our certified technician conducts a thorough multi-point inspection of the vehicle.' },
        { title: 'Document', description: 'We document all findings with photos, videos, and detailed technician notes.' },
        { title: 'Report', description: 'Receive a comprehensive digital report with all findings and recommendations.' },
      ],
      testimonialsTitle: 'What Our Clients Say',
      testimonials: [
        {
          name: 'Ahmed Hossam',
          text: 'The pre-purchase inspection saved me thousands of pounds. The inspector found serious transmission issues that the seller hadn\'t disclosed. I was able to negotiate a much better price knowing exactly what repairs were needed.',
        },
        {
          name: 'Sama Khaled',
          text: 'As a seller, getting the pre-sale inspection was one of the best decisions I made. The certified report gave buyers confidence, and I sold my car within a week at the price I wanted. Definitely worth the investment!',
        },
      ],
    },
    specialty: {
      title: 'Specialty Services',
      subtitle: 'Premium specialized services for your vehicle, provided by experienced professionals using high-quality parts and equipment.',
      imageAlt: 'Detailing studio with a car being prepared',
      introTitle: 'Expert Care for Your Vehicle',
      introText:
        "Our specialized services cover a wide range of premium treatments and solutions designed to enhance your vehicle's performance, appearance, and longevity.",
      features: [
        { title: 'Certified Specialists', description: 'Our team is certified in specialized automotive treatments and techniques.' },
        { title: 'Premium Materials', description: 'We use only high-quality, industry-leading products and materials.' },
        { title: 'Extended Warranties', description: 'Many of our specialty services come with extended warranties for peace of mind.' },
      ],
      consultation: 'Specialty Consultation',
      cta: 'Book a Consultation',
      servicesTitle: 'Our Premium Services',
      items: {
        ceramic: {
          tag: 'Signature',
          title: 'Ceramic Coating',
          description: 'Professional-grade ceramic coating that provides long-lasting protection against scratches, UV damage, and contaminants.',
          duration: '6-8 hours',
        },
        paintCorrection: {
          tag: 'Professional',
          title: 'Paint Correction',
          description: "Professional paint correction to remove swirls, scratches, and imperfections, restoring your vehicle's finish to a showroom shine.",
          duration: '4-6 hours',
        },
        ppf: {
          tag: 'Premier',
          title: 'Paint Protection Film',
          description: "Virtually invisible film that protects your vehicle's paint from rock chips, scratches, and road hazards, with self-healing technology for minor scratches.",
          duration: '1 day',
        },
        headlight: {
          tag: 'Popular',
          title: 'Headlight Restoration',
          description: 'Professional headlight restoration to remove yellowing and haziness, improving visibility and appearance.',
          duration: '1-2 hours',
        },
        tinting: {
          tag: 'Exclusive',
          title: 'Window Tinting',
          description: 'High-quality window tinting with premium films for heat rejection, UV protection, and enhanced privacy.',
          duration: '2-3 hours',
        },
        ecu: {
          tag: 'Certified',
          title: 'ECU Tuning',
          description: 'Performance optimization through custom engine control unit programming. Improve horsepower, torque, and throttle response while maintaining reliability.',
          duration: '3-8 hours',
        },
      },
      processTitle: 'Our Specialty Service Process',
      process: [
        { title: 'Consultation & Assessment', description: "We begin with a thorough consultation to understand your needs and assess your vehicle's condition." },
        { title: 'Personalized Service Plan', description: "Our specialists create a tailored plan specific to your vehicle's needs and your preferences." },
        { title: 'Premium Service & Delivery', description: 'We perform the service using top-quality materials and provide a final walkthrough upon completion.' },
      ],
      testimonials: [
        {
          name: 'Ahmed El Sayed',
          role: 'BMW 5 Series Owner',
          text: 'The ceramic coating service has completely transformed my car. Not only does it look amazing, but it\'s also so much easier to keep clean. The team was professional, thorough, and the results exceeded my expectations.',
        },
      ],
      faqs: [
        {
          question: 'How long does ceramic coating last?',
          answer:
            'Our professional ceramic coatings typically last between 2-5 years depending on the package chosen and how well the vehicle is maintained. We offer various protection levels to suit different needs and budgets.',
        },
        {
          question: 'Is window tinting legal in Egypt?',
          answer:
            'Yes, window tinting is legal in Egypt, but there are regulations regarding the darkness level (VLT%). Our team is knowledgeable about these regulations and will ensure your tint is compliant with local laws.',
        },
        {
          question: 'Do you offer warranties on your specialty services?',
          answer:
            'Yes, most of our specialty services come with warranties. Ceramic coatings come with 2-5 year warranties, window tinting with a lifetime warranty against peeling or bubbling, and performance modifications typically have a 1-year warranty on parts and labor.',
        },
        {
          question: 'How much does paint correction cost?',
          answer:
            "Paint correction pricing varies based on the size of your vehicle and the level of correction needed. We offer three levels: basic (single-stage), enhanced (two-stage), and ultimate (multi-stage). Prices start at EGP 1,899.99, and we provide a detailed quote after inspecting your vehicle's condition.",
        },
      ],
    },
    towing: {
      title: 'Towing Service',
      subtitle: 'Professional, reliable towing services available 24/7 for all vehicle types and emergency situations.',
      imageAlt: 'Car being loaded onto a flatbed tow truck',
      introTitle: '24/7 Towing & Recovery',
      introText:
        "Whether you've broken down on the highway, been in an accident, or need your vehicle transported to a service center, our professional towing teams are ready to assist you anytime, day or night.",
      hotlineTitle: 'Towing Hotline',
      hotlineText: 'Call our 24/7 hotline for immediate towing assistance',
      features: [
        { title: 'Fast Response Times', description: 'Our average response time is under 30 minutes in urban areas.' },
        { title: 'Modern Towing Fleet', description: 'Our diverse fleet can handle everything from motorcycles to heavy-duty trucks.' },
        { title: 'Trained Professionals', description: 'Our certified operators are trained to safely transport all types of vehicles.' },
        { title: 'Transparent Pricing', description: 'Clear, upfront pricing with no hidden fees or surprises.' },
      ],
      cta: 'Request Towing',
      offeringsTitle: 'Our Towing Services',
      perKm: '{{price}}/km',
      offerings: {
        local: { title: 'Local Towing', description: 'Standard towing within the city. Ideal for breakdowns, accidents, or when your car needs to be moved to a repair shop.', duration: '30-60 minutes' },
        longDistance: { title: 'Long-Distance Towing', description: 'Safe, reliable transport for your vehicle over long distances. Perfect for relocations or moving your vehicle between cities.' },
        emergency: { title: 'Emergency Towing', description: 'Rapid response towing for accidents or breakdowns in dangerous locations. 24/7 availability with priority dispatch.', duration: '20-40 minutes' },
        flatbed: { title: 'Flatbed Towing', description: 'Specialized flatbed towing for low-clearance vehicles, luxury cars, or damaged vehicles that cannot be towed using standard methods.', duration: '30-60 minutes' },
        heavyDuty: { title: 'Heavy-Duty Towing', description: 'Specialized equipment and trained operators for towing larger vehicles like buses, trucks, or commercial vehicles.', duration: '45-90 minutes' },
        scheduled: { title: 'Scheduled Towing', description: 'Planned towing for non-emergency situations. Schedule in advance for transport to service centers, events, or storage facilities.' },
      },
      plansTitle: 'Towing Membership Plans',
      signUp: 'Sign Up',
      plans: {
        basic: {
          name: 'Basic Plan',
          description: 'Essential towing coverage',
          features: ['2 free tows per year (up to 20 km)', 'Priority dispatch', '10% discount on additional tows', '24/7 phone support'],
        },
        premium: {
          name: 'Premium Plan',
          description: 'Complete towing coverage',
          features: ['4 free tows per year (up to 50 km)', 'VIP priority dispatch', '20% discount on additional tows', 'Free flatbed service when needed', '24/7 dedicated support line'],
        },
        commercial: {
          name: 'Commercial Plan',
          description: 'For business fleets',
          features: ['8 free tows per year (up to 100 km)', 'Covers up to 5 vehicles', '25% discount on additional tows', 'Heavy-duty towing included', 'Dedicated account manager'],
        },
      },
      ctaTitle: 'Need Immediate Towing Assistance?',
      ctaText: "We're available 24/7 to help with all your towing needs. Call our hotline or request towing service online.",
      call: 'Call {{number}}',
      requestOnline: 'Request Online',
    },
    carWash: {
      title: 'Car Wash & Care',
      subtitle: 'Professional cleaning and detailing services to keep your vehicle looking its best inside and out.',
      imageAlt: 'Car being washed with a pressure washer',
      introTitle: 'Professional Car Cleaning Services',
      introText:
        'From quick exterior washes to comprehensive detailing packages, our professional cleaning services will have your vehicle looking showroom-ready.',
      features: [
        { title: 'Eco-Friendly Products', description: 'We use environmentally friendly cleaning products that are effective yet gentle on your vehicle and the planet.' },
        { title: 'Trained Detailers', description: 'Our team of professional detailers is trained in the latest techniques and technologies for optimal results.' },
        { title: 'Multiple Locations', description: 'Convenient service centers throughout the city with both drive-through and appointment options.' },
        { title: 'Mobile Services Available', description: 'We can come to your home or office to clean your vehicle at your convenience.' },
      ],
      cta: 'Book a Wash',
      packages: {
        express: {
          name: 'Express Wash',
          description: 'Quick exterior clean',
          duration: '15-20 minutes',
          features: ['Exterior wash', 'Wheel cleaning', 'Tire shine'],
          excluded: ['Interior cleaning', 'Waxing'],
        },
        deluxe: {
          name: 'Deluxe Wash',
          description: 'Complete interior & exterior',
          duration: '45-60 minutes',
          features: ['All Express services', 'Hand wash & dry', 'Interior vacuum', 'Dashboard & console cleaning', 'Window cleaning'],
        },
        premium: {
          name: 'Premium Detail',
          description: 'Comprehensive detailing service',
          duration: '2-3 hours',
          features: ['All Deluxe services', 'Clay bar treatment', 'Carnauba wax application', 'Leather conditioning', 'Engine bay cleaning'],
        },
      },
      specialtyTitle: 'Looking for Specialized Car Care?',
      specialtyText:
        'We offer premium specialized services including ceramic coating, paint correction, headlight restoration, and more. Check out our specialty services page for more details.',
      specialtyCta: 'Explore Specialty Services',
      membershipTitle: 'Membership Programs',
      club: {
        title: 'Unlimited Wash Club',
        text: 'Join our Unlimited Wash Club for the best value and a consistently clean vehicle. Wash your car as often as you like with our convenient monthly subscription plans.',
        express: 'Unlimited express washes starting at {{price}}',
        deluxe: 'Unlimited deluxe washes starting at {{price}}',
        noContract: 'No long-term contracts - cancel anytime',
        discount: '10% discount on all additional services',
        join: 'Join Now',
        imageAlt: 'Car covered in snow foam inside a wash bay',
      },
    },
  },
};

export default services;
