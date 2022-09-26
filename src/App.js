import {Download,Features,SectionWrapper} from './components'
import assets from './assets';
import styles from './styles/Global';


function App() {
  return (
    <>
      <SectionWrapper
      title="Your own store of Nifty NFTs. Start selling and growning."
      description="Buy. store, collect NFTs, exchange and earn crypto. Join 25+ Million people using ProNFT marketplace."
      showBtn
      mockupImg={assets.homeHero}
      banner="banner"
      />
      <SectionWrapper
      title="Smart User Interface marketplace"
      description="Experience a buttery UI of ProNef NFT marketplace. Smooth constant colors of a fluent UI design."
      mockupImg={assets.homeCards}
      reverse
      />
      <Features />
      <SectionWrapper
      title="Deployment"
      description="ProNef is built using Expo which runs natively on all user devices"
      mockupImg={assets.feature}
      reverse
      />
      <SectionWrapper
      title="Creative way to showcase the store"
      description="The app contains two screens. The first screen shows lists of all NFTs while the second screen the details."
      mockupImg={assets.mockup}
      banner="banner02"
      />
      <Download />
      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText} `}>Made with Love {" "}
        <span className='bold'>QuickSol Technologies</span></p>
      </div>
    </>
  );
}

export default App;
