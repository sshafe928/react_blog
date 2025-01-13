import Footer from '../components/footer'
import Navbar from '../components/navbar';
import PolaroidBoxes from '../components/Polaroid';


function Main() {
  return (
  <>
  <div className="bg-gray-200">
    <Navbar/>

    <h1 class="p-16">Bare & Beautiful</h1>
    <PolaroidBoxes/>
    <Footer/>
  </div>
  </>
  );
}

export default Main;
