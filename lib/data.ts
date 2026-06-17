export const SITE = {
  name: 'Shraddha',
  fullName: 'Shraddha – Good & Neat Handwriting Institute',
  tagline: 'Good & Neat Handwriting Institute',
  phone: '+91 8143444110, +91 9490937410',
  email: 'shraddhasri9@gmail.com',
  address: '40-180, plot no.204, Jawaharnagar colony, ECIL extension, Hyderabad 500040',
  whatsapp: '+91 8143444110, +91 9490937410',
  url: 'https://shraddha.edu.in',
}

export const STATS = [
  { num: '8000+', label: 'Students Trained' },
  { num: '30', label: 'Day Transformation' },
  { num: '15+', label: 'Years Experience' },
  { num: '98%', label: 'Visible Improvement' },
]

export type Program = {
  slug: string
  name: string
  short: string
  category: 'handwriting' | 'calligraphy'
  tagline: string
  overview: string
  curriculum: { title: string; topics: string[] }[]
  benefits: string[]
  transformations?: string[]
}

export const PROGRAMS: Program[] = [
  {
    slug: 'kids-handwriting',
    name: 'Kids Handwriting',
    short: 'A strong foundation for neat, clear, and confident writing',
    category: 'handwriting',
    tagline: 'Fun, structured improvement that builds a lifelong skill.',
    overview:
      'A strong foundation for neat, clear, and confident writing. Our Kids Handwriting Course is specially designed for children aged 4 to 6 years who are beginning to write print alphabets. Through fun and guided practice, children learn the right writing habits step by step.',
    curriculum: [
      { title: 'Writing Readiness', topics: ['Children learn how to sit properly, hold the pencil correctly, and place the book in the right position for comfortable writing.'] },
      { title: 'Basic Stroke Practice', topics: ['They practise standing lines, sleeping lines, curves, slants, and simple shapes to improve pencil control and hand movement.'] },
      { title: 'Letter Formation', topics: ['Children learn to write capital and small print letters correctly in a four-line notebook with proper size and direction.'] },
      { title: 'Spacing & Line Control', topics: ['They are trained to maintain correct letter spacing, word spacing, and line alignment for neat presentation.'] },
      { title: 'Numbers & Simple Words', topics: ['Children practise number writing and simple words to build writing confidence and classroom readiness.'] },
      { title: 'Neatness & Confidence', topics: ['Regular practice helps improve focus, patience, pencil control, and confidence, making every page clear, neat, and impressive.'] },
    ],
    benefits: ['Better pencil grip', 'Neat handwriting', 'Improved focus', 'Better presentation', 'Strong writing foundation'],
  },
  {
    slug: 'cursive-writing',
    name: 'Legible & Neat Handwriting',
    short: 'Neat, clear, and stylish handwriting for academic success.',
    category: 'handwriting',
    tagline: 'Neat, clear, and stylish handwriting for academic success.',
    overview:
      'Our Legible & Neat Handwriting Program is specially designed for school children to improve their handwriting in three important styles: Cursive, Print, and Lucida. Through structured practice and expert guidance, students learn to write neatly, smoothly, and confidently for everyday schoolwork.',
    curriculum: [
      { title: 'Handwriting Foundation', topics: ['Students learn the basics of correct pencil grip, sitting posture, book placement, hand movement, and writing comfort.'] },
      { title: 'Style Selection', topics: ['Children are introduced to three handwriting styles — Cursive, Print, and Lucida — based on their age, school requirement, and writing level.'] },
      { title: 'Letter Formation', topics: ['Students practise capital and small letters with proper size, shape, slant, curves, and line control.'] },
      { title: 'Joining & Flow', topics: ['In cursive writing, children learn entry strokes, exit strokes, letter joining, word flow, and smooth movement.'] },
      { title: 'Spacing & Presentation', topics: ['Students are trained to maintain proper letter spacing, word spacing, margins, and line alignment for clean notebook presentation.'] },
      { title: 'Speed with Neatness', topics: ['Children practise writing faster without losing clarity, helping them complete classwork, homework, and exams more confidently.'] },
      { title: 'Style & Confidence', topics: ['Regular practice helps students develop a neat, elegant, and confident handwriting style that improves their academic presentation.'] },
    ],
    benefits: [
      'Legible handwriting',
      'Better notebook presentation',
      'Improved writing speed',
      'Better focus',
      'Confident schoolwork',
      'Strong academic advantage',
    ],
  },
  {
    slug: 'adult-handwriting',
    name: 'Adult Handwriting & Signature',
    short: 'Professional handwriting and a confident personal signature.',
    category: 'handwriting',
    tagline: 'Refine your hand and design a signature that stands out.',
    overview:
      'Enhance your personal and professional image with our Adult Handwriting & Signature Development Program. Designed for students, professionals, and business owners, this course helps improve handwriting clarity, consistency, speed, and overall presentation while also guiding you in creating a unique, elegant, and confident signature. Through personalized practice and proven techniques, participants develop a writing style that reflects professionalism, boosts confidence, and leaves a lasting impression in both academic and professional settings.',
    curriculum: [
      { title: 'Handwriting Assessment & Foundation Building', topics: ['We begin by analyzing your current handwriting style, identifying habits that affect readability, spacing, alignment, and overall appearance. Personalized corrections are introduced to build a strong foundation for consistent and confident writing.'] },
      { title: 'Letter Formation & Consistency Training', topics: ['Each letter is carefully refined to improve shape, proportion, and flow. Through guided practice, you\'ll develop uniform sizing, balanced spacing, and smoother strokes that make your handwriting look neat and professional.'] },
      { title: 'Neat Adult Handwriting Development', topics: ['Learn a clean and mature handwriting style suitable for academic, personal, and professional use. The focus is on improving clarity, presentation, and comfort while maintaining your natural writing personality.'] },
      { title: 'Speed Writing Without Losing Quality', topics: ['Develop techniques to write faster while preserving legibility and structure. Practical exercises help you create an efficient writing rhythm that works well for exams, note-taking, and everyday writing tasks.'] },
      { title: 'Professional Writing Applications', topics: ['Apply your improved handwriting to real-world scenarios such as forms, journals, notes, assignments, and workplace documents. This stage focuses on making your handwriting consistently polished across different situations.'] },
      { title: 'Signature Design & Personal Branding', topics: ['Create a distinctive signature that reflects your personality while remaining elegant and practical. You\'ll explore signature structure, stylistic elements, and finishing touches to develop a confident final design.'] },
    ],
    benefits: ['Polished professional writing', 'A standout signature', 'Clearer communication', 'More confidence'],
  },
  {
    slug: 'exam-writing',
    name: 'Speed & Exam Writing',
    short: 'Write fast and legibly to win every readability mark.',
    category: 'handwriting',
    tagline: 'Neat answers, written fast, under exam pressure.',
    overview:
      'Improve your writing speed, clarity, and presentation with our Speed & Exam Writing Program. Specially designed for students preparing for school, board, competitive, and entrance examinations, this course focuses on increasing writing speed without compromising neatness and readability. Through practical exercises, time-management techniques, and structured writing practice, students learn to complete exams efficiently, present answers effectively, and perform with greater confidence under time constraints.',
    curriculum: [
      { title: 'Speed Writing Foundations', topics: ['Build the core techniques required for faster handwriting without sacrificing readability. This stage focuses on efficient pen movement, smoother letter connections, improved hand stamina, and developing a natural writing rhythm that reduces fatigue during long writing sessions.'] },
      { title: 'Writing Efficiency & Exam Performance', topics: ['Learn practical strategies to maximize writing output in academic and competitive exam settings. You\'ll practice structured answer presentation, effective use of headings and spacing, and techniques for maintaining speed while keeping your work neat, organized, and easy to evaluate.'] },
      { title: 'Advanced Speed Development', topics: ['Strengthen your ability to write quickly under pressure through targeted exercises that improve consistency, flow, and control. Special attention is given to balancing speed and legibility so that faster writing never compromises clarity.'] },
      { title: 'Timed Practice & Performance Training', topics: ['Apply your skills in realistic writing scenarios using timed drills and mock exercises. These sessions help identify bottlenecks, improve pacing, and build the confidence needed to perform effectively during exams and high-pressure writing tasks.'] },
      { title: 'Personalized Feedback & Refinement', topics: ['Receive detailed feedback on handwriting speed, presentation, spacing, and overall efficiency. Corrections and targeted improvements help eliminate weak areas while reinforcing techniques that produce the best results.'] },
      { title: 'Final Exam-Ready Polish', topics: ['Consolidate all skills into a streamlined writing system designed for maximum performance. By the end of the program, you\'ll have a faster, more consistent handwriting style that supports better time management and professional-looking exam answers.'] },
    ],
    benefits: ['Faster writing speed', 'Higher presentation marks', 'Less hand fatigue', 'Exam confidence'],
  },
  {
    slug: 'modern-calligraphy',
    name: 'Modern Calligraphy',
    short: 'Contemporary brush-pen lettering with flowing style.',
    category: 'calligraphy',
    tagline: 'Expressive, contemporary lettering with brush pens.',
    overview:
      'Discover the art of beautiful lettering with our Modern Calligraphy Program. Designed for beginners and enthusiasts alike, this course teaches elegant letterforms, brush pen techniques, creative layouts, and stylish writing compositions. Whether for personal projects, invitations, journaling, branding, or artistic expression, students learn to create stunning handwritten designs while improving creativity, precision, and confidence in their writing style.',
    curriculum: [
      { title: 'Brush Basics', topics: ['Pressure control', 'Thin & thick strokes', 'Drills'] },
      { title: 'Lowercase & Uppercase', topics: ['Letterforms', 'Connections', 'Bounce lettering'] },
      { title: 'Composition', topics: ['Quotes & layouts', 'Flourishing', 'Colour & blending'] },
    ],
    benefits: ['A relaxing creative skill', 'Beautiful lettering art', 'Gift & card making', 'A potential side income'],
  },
  {
    slug: 'classic-calligraphy',
    name: 'Classic & Nib Lettering',
    short: 'Traditional pointed-pen and broad-nib calligraphy scripts.',
    category: 'calligraphy',
    tagline: 'The timeless craft of pointed-pen and broad-nib scripts.',
    overview:
      'Experience the timeless art of elegant handwriting with our Classic & Nib Lettering Program. This course introduces students to traditional penmanship techniques using dip pens and nibs, focusing on graceful letterforms, stroke control, spacing, and decorative lettering styles. Perfect for hobbyists, artists, and handwriting enthusiasts, the program helps develop patience, precision, and creativity while mastering the beauty of classic calligraphy and handcrafted lettering.',
    curriculum: [
      { title: 'Tools & Setup', topics: ['Nibs & holders', 'Ink & paper', 'Posture'] },
      { title: 'Classic Scripts', topics: ['Copperplate basics', 'Italic hand', 'Capitals'] },
      { title: 'Mastery', topics: ['Flourishing', 'Consistency', 'Finished pieces'] },
    ],
    benefits: ['A classical fine-art skill', 'Mastery of nib control', 'Heritage scripts', 'Showpiece lettering'],
  },
  {
    slug: 'calligraphy-art',
    name: 'Invitations & Lettering Art',
    short: 'Create wedding cards, quotes and framed lettering art.',
    category: 'calligraphy',
    tagline: 'Turn your lettering into beautiful, sellable art.',
    overview:
      'Transform words into beautiful works of art with our Invitations & Lettering Art Program. This creative course teaches the techniques of decorative lettering, artistic layouts, and custom invitation design for weddings, birthdays, events, and special occasions. Students learn to combine elegant lettering styles with creative embellishments, helping them create personalized, visually stunning designs that leave a lasting impression. Perfect for artists, hobbyists, and anyone passionate about handcrafted creativity.',
    curriculum: [
      { title: 'Layout & Design', topics: ['Composition', 'Spacing & hierarchy', 'Colour palettes'] },
      { title: 'Project Work', topics: ['Wedding invitations', 'Quote art', 'Envelope addressing'] },
      { title: 'Finishing', topics: ['Framing & presentation', 'Pricing your work', 'Portfolio'] },
    ],
    benefits: ['Sellable lettering products', 'Wedding & event work', 'A creative portfolio', 'Side-business skills'],
  },
]

export const TESTIMONIALS = [
  { img: '/avatar-1.png', name: "Kavya's Mother", course: 'Kids Handwriting', text: "My daughter's handwriting was unreadable. After 6 weeks, her teachers actually complimented her notebooks. Unbelievable change!" },
  { img: '/avatar-2.png', name: 'Rohan Mehta', course: 'Calligraphy Art', text: 'I joined calligraphy as a hobby and now make wedding invitations as a side business. The trainers are patient and genuinely skilled.' },
  { img: '/avatar-3.png', name: 'Dr. Anjali Sharma', course: 'Adult Handwriting', text: 'As a doctor, my handwriting was a running joke. Now my prescriptions are clear and my signature looks professional. Worth every rupee.' },
]

export const TRANSFORMATIONS = [
  {
    img: '/before-after-1.webp',
    alt: 'Student handwriting before and after training - dramatic improvement in neatness',
    name: 'Class 7 Student',
    program: 'Kids Handwriting',
  },
  {
    img: '/before-after-2.webp',
    alt: 'Cursive handwriting transformation - messy to elegant flowing script',
    name: 'Class 9 Student',
    program: 'Legible & Neat Handwriting',
  },
  {
    img: '/before-after-3.webp',
    alt: 'Speed writing improvement - neat and fast exam writing after training',
    name: 'Class 10 Student',
    program: 'Speed & Exam Writing',
  },
]

export const FAQS = [
  { q: 'Who can join this program?', a: 'We have batches for all ages and levels — from young children to working adults. The free demo helps us place you in the right batch.' },
  { q: 'Are online classes available?', a: 'Yes. We offer both online and offline classes with the same curriculum and practice materials.' },
  { q: 'How long until I see improvement?', a: 'Most students see clear, visible improvement within 30 days of regular practice.' },
  { q: 'Do I get a certificate?', a: 'Yes, every student receives a certificate of completion from Shraddha Handwriting Institute.' },
]
