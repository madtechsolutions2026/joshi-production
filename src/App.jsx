import { useState } from 'react';
import ProductionExperience from './components/ProductionExperience';
import BookingModal from './components/BookingModal';
import VideoModal from './components/VideoModal';
export default function App() {
  const [booking, setBooking] = useState(false);
  const [service, setService] = useState('');
  const [project, setProject] = useState(null);
  const openBooking = (selected = '') => { setService(selected); setBooking(true); };
  const openShowreel = () => setProject({ title: 'Joshi Productions — Creative direction preview', category: 'Sample footage', videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4', summary: 'Illustrative footage for the website concept. The studio showreel will replace this sample.' });
  return <><ProductionExperience onOpenBooking={openBooking} onOpenVideo={setProject} onOpenShowreel={openShowreel}/>{booking && <BookingModal key={service} isOpen onClose={() => setBooking(false)} preselectedService={service}/>}<VideoModal isOpen={Boolean(project)} onClose={() => setProject(null)} project={project}/></>;
}
