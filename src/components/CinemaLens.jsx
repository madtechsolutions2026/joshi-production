import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CinemaLens({ mood }) {
  const mount = useRef(null);
  const moodRef = useRef(mood);
  useEffect(() => { moodRef.current = mood; }, [mood]);
  useEffect(() => {
    const host = mount.current;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch { return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setClearColor(0, 0);renderer.toneMapping=THREE.ACESFilmicToneMapping;
    host.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38,1,.1,100); camera.position.set(0,0,12);
    const lens = new THREE.Group();scene.add(lens);
    scene.add(new THREE.AmbientLight(0xffffff,1.8));
    const key=new THREE.PointLight(0xff8647,70,30);key.position.set(-4,4,6);scene.add(key);
    const rim=new THREE.PointLight(0x769fff,80,30);rim.position.set(4,-2,4);scene.add(rim);
    const rings=[];
    for(let i=0;i<9;i++){const mesh=new THREE.Mesh(new THREE.TorusGeometry(2.35-i*.09,.045+(i%3)*.025,12,120),new THREE.MeshStandardMaterial({color:i%3===0?0xfa854a:0x6c6c69,metalness:.9,roughness:.25}));mesh.position.z=-i*.22;lens.add(mesh);rings.push(mesh);}
    const shell=new THREE.Mesh(new THREE.CylinderGeometry(2.45,2.2,1.8,80,1,true),new THREE.MeshStandardMaterial({color:0x242528,metalness:.8,roughness:.35,side:THREE.DoubleSide}));shell.rotation.x=Math.PI/2;shell.position.z=-.8;lens.add(shell);
    const glass=new THREE.Mesh(new THREE.CircleGeometry(2.15,80),new THREE.MeshPhysicalMaterial({color:0x132a3b,metalness:.8,roughness:.12,transparent:true,opacity:.88}));glass.position.z=-1.65;lens.add(glass);
    const blades=[];
    for(let i=0;i<8;i++){const shape=new THREE.Shape();shape.moveTo(.4,0);shape.lineTo(2,0);shape.lineTo(1.6,1.3);shape.lineTo(.5,.5);shape.closePath();const blade=new THREE.Mesh(new THREE.ShapeGeometry(shape),new THREE.MeshStandardMaterial({color:i%2?0x344756:0x516278,metalness:.8,roughness:.3,side:THREE.DoubleSide}));blade.rotation.z=i*Math.PI/4;blade.position.z=-1.4; lens.add(blade);blades.push(blade);}
    for(let i=0;i<64;i++){const a=i/64*Math.PI*2;const mark=new THREE.Mesh(new THREE.BoxGeometry(.025,i%8===0?.16:.07,.03),new THREE.MeshBasicMaterial({color:i%8===0?0xffbd84:0x8d8c83}));mark.position.set(Math.cos(a)*2.24,Math.sin(a)*2.24,.05);mark.rotation.z=a-Math.PI/2;lens.add(mark);}
    const dustGeometry=new THREE.BufferGeometry();const coords=new Float32Array(240*3);for(let i=0;i<coords.length;i++)coords[i]=(Math.random()-.5)*18;dustGeometry.setAttribute('position',new THREE.BufferAttribute(coords,3));const dust=new THREE.Points(dustGeometry,new THREE.PointsMaterial({color:0xe7ab7d,size:.025,transparent:true,opacity:.45}));scene.add(dust);
    let mouseX=0,mouseY=0,visible=true;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const move=e=>{const rect=host.getBoundingClientRect();mouseX=(e.clientX-rect.left)/rect.width-.5;mouseY=(e.clientY-rect.top)/rect.height-.5;};host.addEventListener('pointermove',move);
    const resize=new ResizeObserver(()=>{const rect=host.getBoundingClientRect();renderer.setSize(rect.width,rect.height);camera.aspect=rect.width/rect.height;camera.updateProjectionMatrix();});resize.observe(host);
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;});observer.observe(host);
    let t=0;renderer.setAnimationLoop(()=>{if(!visible)return;t+=.012;const warm=moodRef.current==='cinema';const mono=moodRef.current==='editorial';key.color.set(mono?0xffffff:warm?0xff8647:0xe56cff);rim.color.set(mono?0x9daeb7:warm?0x769fff:0x53e8e0);if(!reduced){lens.rotation.y+=(mouseX*.5+.22-lens.rotation.y)*.04;lens.rotation.x+=(-mouseY*.35-.12-lens.rotation.x)*.04;lens.position.y=Math.sin(t)*.12;blades.forEach((b,i)=>b.rotation.z=i*Math.PI/4+Math.sin(t*.4)*.15);dust.rotation.z=t*.018;rings[0].rotation.z=t*.1;}renderer.render(scene,camera);});
    return()=>{renderer.setAnimationLoop(null);resize.disconnect();observer.disconnect();host.removeEventListener('pointermove',move);scene.traverse(o=>{o.geometry?.dispose();if(o.material)o.material.dispose();});renderer.dispose();renderer.domElement.remove();};
  }, []);
  return <div className="jp-lens" ref={mount} role="img" aria-label="Animated cinema lens that follows your pointer and changes lighting with the selected mood"/>;
}
