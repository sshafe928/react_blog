import Footer from '../components/footer'
import Navbar from '../components/navbar';
import PolaroidBoxes from '../components/Polaroid';


function Main() {
  return (
  <>
  <div className="bg-gray-200">
    <Navbar/>
    <img className="absolute left-12 max-w-40 top-28" src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1736804643/Screenshot__64_-removebg-preview_mzgu51.png" alt="Star man" />
    <div className="flex justify-center text-4xl">
      <h1 class="p-20">Bare & Beautiful</h1>
    </div>
    <PolaroidBoxes/>
    <Footer/>
  </div>
  </>
  );
}

export default Main;
