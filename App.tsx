
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import GestureController from './components/GestureController';
import { TreeState, HandGesture } from './types';
import { COLORS } from './constants';

const App: React.FC = () => {
  const [treeState, setTreeState] = useState<TreeState>(TreeState.FORMED);
  const [gesture, setGesture] = useState<HandGesture | null>(null);

  return (
    <div className="relative w-full h-screen bg-[#01160e] text-[#d4af37] font-serif overflow-hidden">
      {/* UI Overlay */}
      <div className="absolute top-10 left-10 z-10 pointer-events-none select-none">
        <h1 className="text-6xl font-bold tracking-tighter uppercase mb-2" style={{ color: COLORS.GOLD }}>
          The Grand Luxury
        </h1>
        <h2 className="text-3xl font-light italic text-white/80 opacity-60">
          Christmas Experience
        </h2>
        <div className="h-1 w-48 bg-amber-500 mt-4 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
      </div>

      <div className="absolute bottom-10 left-10 z-10 flex flex-col gap-4">
        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-bold mb-1">Controller Mode</p>
            <div className="flex items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${treeState === TreeState.FORMED ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
              <p className="text-xl font-bold uppercase tracking-widest">{treeState}</p>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-white/40 max-w-xs font-sans font-light">
          Use hand gestures: <span className="text-amber-400 font-bold">Open Palm</span> to unleash chaos, 
          <span className="text-amber-400 font-bold"> Closed Fist</span> to assemble the tree.
        </p>
      </div>

      <GestureController 
        onGestureUpdate={setGesture} 
        onStateToggle={setTreeState} 
      />

      {/* 3D Scene */}
      <Suspense fallback={
        <div className="flex items-center justify-center h-full w-full flex-col gap-4">
           <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
           <p className="text-amber-500 font-bold tracking-widest animate-pulse">ELEGANCE LOADING...</p>
        </div>
      }>
        <Canvas shadows dpr={[1, 2]}>
          <Scene treeState={treeState} gesture={gesture} />
        </Canvas>
      </Suspense>

      {/* Cinematic Borders */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default App;
