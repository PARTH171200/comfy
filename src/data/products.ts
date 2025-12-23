import { Product } from '@/types/product';
import comfyGrand from '../assets/spring/comfy-grand.jpg';


export const products: Product[] = [
  /* =========================
     SPRING MATTRESSES
  ========================== */
  {
    slug: 'comfy-grand',
    category: 'Spring Mattress',
    name: 'Comfy Grand',
    description:
      'Premium spring mattress offering balanced comfort, superior airflow, and long-lasting durability.',
    warranty: '10 Years Warranty',
    image: comfyGrand,
    features: [
      'Advanced spring support system',
      'Enhanced airflow',
      'Plush comfort layers',
      'Durable construction',
    ],
  },
  {
    slug: 'majesty',
    category: 'Spring Mattress',
    name: 'Majesty',
    description:
      'Luxury spring mattress engineered for superior spinal alignment and comfort.',
    warranty: '10 Years Warranty',
    features: [
      'High tensile spring technology',
      'Pressure relief comfort layers',
      'Premium fabric finish',
      'Long-lasting performance',
    ],
  },
  {
    slug: 'spring-rush',
    category: 'Spring Mattress',
    name: 'Spring Rush',
    description:
      'Responsive spring mattress designed for bounce, support, and everyday comfort.',
    warranty: '8 Years Warranty',
    features: [
      'Responsive spring core',
      'Balanced firmness',
      'Good airflow',
      'Reliable durability',
    ],
  },

  /* =========================
     ORTHOPEDIC MATTRESSES
  ========================== */
  {
    slug: 'spine-care',
    category: 'Orthopedic Mattress',
    name: 'Spine Care',
    description:
      'Orthopedic mattress specially designed to support the spine and reduce back pain.',
    warranty: '10 Years Warranty',
    features: [
      'Orthopedic spine support',
      'Firm comfort structure',
      'Reduces pressure points',
      'Recommended for back care',
    ],
  },
  {
    slug: 'comfypedic-plus',
    category: 'Orthopedic Mattress',
    name: 'ComfyPedic Plus',
    description:
      'Advanced orthopedic mattress combining firmness and comfort for healthy sleep.',
    warranty: '10 Years Warranty',
    features: [
      'Dual-layer orthopedic support',
      'Even weight distribution',
      'Enhanced durability',
      'Pain-relief design',
    ],
  },

  /* =========================
     FOAM MATTRESSES
  ========================== */
  {
    slug: 'memory-delight',
    category: 'Foam Mattress',
    name: 'Memory Delight',
    description:
      'Memory foam mattress that adapts to body shape for personalized comfort.',
    warranty: '5 Years Warranty',
    features: [
      'High-density memory foam',
      'Body contouring support',
      'Motion isolation',
      'Breathable foam layers',
    ],
  },
  {
    slug: 'foamy-latex',
    category: 'Foam Mattress',
    name: 'Foamy Latex',
    description:
      'Latex foam mattress offering natural elasticity and superior breathability.',
    warranty: '5 Years Warranty',
    features: [
      'Latex-infused foam',
      'Natural bounce',
      'Temperature regulation',
      'Long-lasting resilience',
    ],
  },

  /* =========================
     COIR MATTRESSES
  ========================== */
  {
    slug: 'super-buddy',
    category: 'Coir Mattress',
    name: 'Super Buddy',
    description:
      'Eco-friendly coir mattress delivering firm support and excellent airflow.',
    warranty: '2 Years Warranty',
    features: [
      'Natural coir layers',
      'Firm back support',
      'High breathability',
      'Durable build',
    ],
  },
  {
    slug: 'sigal-plus',
    category: 'Coir Mattress',
    name: 'Sigal Plus',
    description:
      'Sturdy coir mattress designed for everyday comfort and durability.',
    warranty: '2 Years Warranty',
    features: [
      'Strong coir base',
      'Consistent firmness',
      'Long-lasting structure',
      'Cost-effective comfort',
    ],
  },

  /* =========================
     ROLLABLE / FOLDING
  ========================== */
  {
    slug: 'rollable-mattress',
    category: 'Rollable Mattress',
    name: 'Rollable Mattress',
    description:
      'Portable rollable mattress ideal for guests, travel, and flexible usage.',
    warranty: '1 Year Warranty',
    features: [
      'Easy to roll and store',
      'Lightweight design',
      'Comfortable foam layers',
      'Perfect for temporary use',
    ],
  },
  {
    slug: 'folding-mattress',
    category: 'Rollable Mattress',
    name: 'Folding Mattress',
    description:
      'Convenient folding mattress designed for space-saving comfort.',
    warranty: '1 Year Warranty',
    features: [
      'Foldable design',
      'Space-saving solution',
      'Comfortable sleeping surface',
      'Easy maintenance',
    ],
  },
];
