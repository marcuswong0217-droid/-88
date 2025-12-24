
import * as THREE from 'three';

export enum TreeState {
  CHAOS = 'CHAOS',
  FORMED = 'FORMED'
}

export interface OrnamentData {
  id: number;
  chaosPos: THREE.Vector3;
  targetPos: THREE.Vector3;
  type: 'ball' | 'gift' | 'light';
  color: string;
  weight: number;
}

export interface PhotoData {
  id: number;
  chaosPos: THREE.Vector3;
  targetPos: THREE.Vector3;
  url: string;
  rotation: THREE.Euler;
}

export interface HandGesture {
  state: 'OPEN' | 'CLOSED';
  x: number; // 0 to 1
  y: number; // 0 to 1
}
