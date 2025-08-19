import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (camera: any) => {
  useLayoutEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.work-section',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
    }).to(camera.position, { x: 5, y: 2, z: 10 });
  }, [camera]);
};
