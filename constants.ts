
import * as THREE from 'three';

export const COLORS = {
  EMERALD: '#043927',
  DARK_EMERALD: '#01160e',
  GOLD: '#d4af37',
  BRIGHT_GOLD: '#ffeb3b',
  CRIMSON: '#990000',
  CHAMPAGNE: '#f7e7ce'
};

export const TREE_HEIGHT = 12;
export const TREE_RADIUS = 5;
export const CHAOS_RADIUS = 18;

export const PARTICLES_COUNT = 15000;
export const ORNAMENTS_COUNT = 120;
export const PHOTOS_COUNT = 12;

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const generateTreePositions = (count: number) => {
  const chaosPositions = new Float32Array(count * 3);
  const targetPositions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    // Chaos: Spherical
    const r_c = Math.pow(Math.random(), 0.5) * CHAOS_RADIUS;
    const theta_c = Math.random() * Math.PI * 2;
    const phi_c = Math.acos(2 * Math.random() - 1);
    
    chaosPositions[i * 3] = r_c * Math.sin(phi_c) * Math.cos(theta_c);
    chaosPositions[i * 3 + 1] = r_c * Math.sin(phi_c) * Math.sin(theta_c);
    chaosPositions[i * 3 + 2] = r_c * Math.cos(phi_c);

    // Formed: Conical
    const h = Math.random() * TREE_HEIGHT;
    const maxR = (1 - h / TREE_HEIGHT) * TREE_RADIUS;
    const r_t = Math.pow(Math.random(), 0.5) * maxR;
    const theta_t = Math.random() * Math.PI * 2;

    targetPositions[i * 3] = r_t * Math.cos(theta_t);
    targetPositions[i * 3 + 1] = h - (TREE_HEIGHT / 2); // Center vertically
    targetPositions[i * 3 + 2] = r_t * Math.sin(theta_t);
  }

  return { chaosPositions, targetPositions };
};
