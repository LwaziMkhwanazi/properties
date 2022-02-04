import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InforCard from "../components/InforCard";
import Map from "../components/Map";

function Search({ results }) {
  const router = useRouter();
  const { location, noOfGuest, startDate, endDate } = router.query;
  console.log("start Date", startDate);
  const formatStartDate = format(new Date(startDate), "dd MMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMM yy");

  const range = `${formatStartDate} - ${formatEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest}`} />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>{`300 + Stays - ${range}- for ${noOfGuest} Guest`}</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>{`Stays in ${location}`}</h1>
          <div className='space-x-3 mb-5 text-gray-800 hidden md:inline-flex whitespace-nowrap'>
            <p className='button'> Cancellation Flexebility</p>
            <p className='button'>Types of Places</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms</p>
            <p className='button'>range</p>
            <p className='button'>More Filters</p>
          </div>
          <div className='flex flex-col'>
            {results.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                long,
                lat,
              }) => (
                <InforCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  long={long}
                  lang={lat}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden md:inline-flex  lg:min-w-[600px]">
          <Map searchResults = {results} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz");
  const results = await searchResults.json();
  return {
    props: {
      results: results,
    },
  };
}
