import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreInfor, cardsInfor }) {
  
  return (
    <div>
      <Head>
        <title>Eswatini Properties</title>
        <meta
          name='description'
          content='eswatini properties for rent and for sale'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />
      <main className='max-w-5xl mx-auto px-8 sm:px-16 shadow-md'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreInfor?.map((item) => (
              <SmallCard
                key={item.location}
                location={item.location}
                img={item.img}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsInfor?.map((item) => (
              <MediumCard key={item.img} title={item.title} img={item.img} />
            ))}
          </div>
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          buttonText='Get inspired'
          title='The Greatest Outdoors'
          description='whishlists created by Airbnb'
        />
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp");
  const results = await exploreData.json();
  const cardsData = await fetch("https://links.papareact.com/zp1");
  const cards = await cardsData.json();
  return {
    props: {
      exploreInfor: results,
      cardsInfor: cards,
    },
  };
}
