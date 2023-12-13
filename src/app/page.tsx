import NavButtonGroup from '@/components/Home/NavButtonGroup';
import TitleGroup from '@/components/reusables/TitleGroup';

const Home = () => {
  return (
    <main className='h-[1px] min-h-screen bg-gradient-to-b md:bg-gradient-to-br from-slate-950 from-70% md:from-50% to-accent md:to-accent flex flex-col justify-center md:block'>
      <div className='container mx-0 py-6 md:py-7 lg:w-2/5 lg:h-full lg:bg-black flex flex-col justify-between'>
        <div>
          <TitleGroup
            title='SpaceTraders UI'
            description='SpaceTraders is an API-based game where you acquire and manage a fleet
          of ships to explore, trade, and fight your way across the galaxy. This
          is the unofficial UI for the game.'
          />
          <NavButtonGroup />
        </div>
        <p className='hidden lg:block text-xl'>
          by <span className='font-bold'>Afeef</span>
        </p>
      </div>
    </main>
  );
};

export default Home;
