import { Product } from '@/types/product';
import comfyGrand from '../assets/spring/comfy-grand.png';
import majesty from '../assets/spring/majesty.png';
import springRush from '../assets/spring/spring-rush.png';
import spineCare from '../assets/spring/spine-care.png';
import comfypedicPlus from '../assets/spring/comfypedic-plus.png';
import memoryDelight from '../assets/spring/memory-delight.png';
import foamyLatex from '../assets/spring/foamy-latex.png';
import superBuddy from '../assets/spring/super-buddy.png';
import sisalPlus from '../assets/spring/sisal-plus.png';
import elitePLus from '../assets/spring/elite-plus.png';
import springZing from '../assets/spring/spring-zing.png';
import citrus from '../assets/spring/citrus.png';
import bliss from '../assets/spring/bliss.png';
import fizzDeluxe from '../assets/spring/fizz-deluxe.png';
import supreme from '../assets/spring/supreme.png';
import comfyGrandConstruction from '../assets/layers/comfy-grand-construction.png';
import majestyConstruction from '../assets/layers/majesty-construction.png';
import springRushConstruction from '../assets/layers/spring-rush-construction.png';
import spineCareConstruction from '../assets/layers/spine-care-construction.png';
import comfypedicPlusConstruction from '../assets/layers/comfypedic-plus-construction.png';
import memoryDelightConstruction from '../assets/layers/memory-delight-construction.png';
import foamyLatexConstruction from '../assets/layers/foamy-latex-construction.png';
import superBuddyConstruction from '../assets/layers/super-buddy-construction.png';
import sisalPlusConstruction from '../assets/layers/sisal-plus-construction.png';
import elitePlusConstruction from '../assets/layers/elite-plus-construction.png';
import springZingConstruction from '../assets/layers/spring-zing-construction.png';
import citrusConstruction from '../assets/layers/citrus-construction.png';
import blissConstruction from '../assets/layers/bliss-construction.png';
import fizzDeluxeConstruction from '../assets/layers/fizz-deluxe-construction.png';
import supremeConstruction from '../assets/layers/supreme-construction.png';

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
    constructionImage: comfyGrandConstruction,
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
    image: majesty,
    constructionImage: majestyConstruction,
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
    image: springRush,
    constructionImage: springRushConstruction,
    features: [
      'Responsive spring core',
      'Balanced firmness',
      'Good airflow',
      'Reliable durability',
    ],
  },

  {
    slug: 'elite-plus',
    category: 'Spring Mattress',
    name: 'Elite Plus',
    description:
      'Premium spring mattress with advanced support and luxurious comfort.',
    warranty: '10 Years Warranty',
    image: elitePLus,
    constructionImage: elitePlusConstruction,
    features: [
      'Advanced spring system',
      'Luxurious comfort layers',
      'Enhanced durability',
      'Premium fabric finish',
    ],
  },
  {
    slug: 'spring-zing',
    category: 'Spring Mattress',
    name: 'Spring Zing',
    description:
      'Affordable spring mattress offering reliable support and comfort for everyday use.',
    warranty: '7 Years Warranty',
    image: springZing,
    constructionImage: springZingConstruction,
    features: [
      'Durable spring core',
      'Comfortable firmness',
      'Good airflow',
      'Value for money',
    ],
  },

  /* =========================
     ORTHOPEDIC MATTRESSES
  ========================== */
  {slug: 'citrus',
    category: 'Orthopedic Mattress',
    name: 'Citrus',
    description:
      'Orthopedic mattress designed to provide optimal support and alleviate pressure points.',
    warranty: '10 Years Warranty',
    image: citrus,
    constructionImage: citrusConstruction,
    features: [
      'Ergonomic orthopedic support',
      'Pressure relief design',
      'Firm comfort structure',
      'Recommended by specialists',
    ],
  },
  {slug: 'bliss',
    category: 'Orthopedic Mattress',
    name: 'Bliss',
    description:
      'Comfort-oriented orthopedic mattress that combines support with plush comfort layers.',
    warranty: '10 Years Warranty',
    image: bliss,
    constructionImage: blissConstruction,
    features: [
      'Orthopedic support system',
      'Plush comfort layers',
      'Reduces pressure points',
      'Ideal for restful sleep',
    ],
  },
  {
    slug: 'spine-care',
    category: 'Orthopedic Mattress',
    name: 'Spine Care',
    description:
      'Orthopedic mattress specially designed to support the spine and reduce back pain.',
    warranty: '10 Years Warranty',
    image: spineCare,
    constructionImage: spineCareConstruction,
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
    image: comfypedicPlus,
    constructionImage: comfypedicPlusConstruction,
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
  {slug: 'fizz-deluxe',
    category: 'Foam Mattress',
    name: 'Fizz Deluxe',
    description:
      'Deluxe foam mattress offering a blend of softness and support for a restful sleep experience.',
    warranty: '5 Years Warranty',
    image: fizzDeluxe,
    constructionImage: fizzDeluxeConstruction,
    features: [
      'Multi-layer foam construction',
      'Soft yet supportive feel',
      'Temperature regulation',
      'Durable foam materials',
    ],
  },

  {slug: 'supreme',
    category: 'Foam Mattress',
    name: 'Supreme',
    description:
      'High-end foam mattress designed for ultimate comfort and pressure relief.',
    warranty: '5 Years Warranty',
    image: supreme,
    constructionImage: supremeConstruction,
    features: [
      'Premium memory foam layers',
      'Pressure relief technology',
      'Cooling gel infusion',
      'Long-lasting comfort',
    ],
  },

  {
    slug: 'memory-delight',
    category: 'Foam Mattress',
    name: 'Memory Delight',
    description:
      'Memory foam mattress that adapts to body shape for personalized comfort.',
    warranty: '5 Years Warranty',
    image: memoryDelight,
    constructionImage: memoryDelightConstruction,
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
    image: foamyLatex,
    constructionImage: foamyLatexConstruction,
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
    image: superBuddy,
    constructionImage: superBuddyConstruction,
    features: [
      'Natural coir layers',
      'Firm back support',
      'High breathability',
      'Durable build',
    ],
  },
  {
    slug: 'sisal-plus',
    category: 'Coir Mattress',
    name: 'Sisal Plus',
    description:
      'Sturdy coir mattress designed for everyday comfort and durability.',
    warranty: '2 Years Warranty',
    image: sisalPlus,
    constructionImage: sisalPlusConstruction,
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
  
  
];
