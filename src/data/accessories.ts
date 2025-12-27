import comfortPillow from '@/assets/accessories/comfort-pillow.jpg';
import memoryPillow from '@/assets/accessories/memory-pillow.jpg';
import mattressProtector from '@/assets/accessories/mattress-protector.jpg';
import mattressTopper from '@/assets/accessories/mattress-topper.jpg';
import bedCover from '@/assets/accessories/bed-cover.jpg';

import { Accessory } from '@/types/accessories';

export const accessories: Accessory[] = [
  {
    slug: 'comfort-pillow',
    category: 'Pillow',
    name: 'Comfort Pillow',
    description: 'Soft and supportive pillow for everyday comfort.',
    image: comfortPillow,
  },
  {
    slug: 'memory-pillow',
    category: 'Pillow',
    name: 'Memory Foam Pillow',
    description: 'Memory foam pillow that adapts to your head and neck.',
    image: memoryPillow,
  },
  {
    slug: 'mattress-protector',
    category: 'Protector',
    name: 'Mattress Protector',
    description: 'Protects your mattress from spills, dust, and allergens.',
    image: mattressProtector,
  },
  {
    slug: 'mattress-topper',
    category: 'Topper',
    name: 'Mattress Topper',
    description: 'Adds an extra comfort layer to your mattress.',
    image: mattressTopper,
  },
  {
    slug: 'bed-cover',
    category: 'Cover',
    name: 'Bed Cover',
    description: 'Premium bed cover for enhanced aesthetics and protection.',
    image: bedCover,
  },
];
