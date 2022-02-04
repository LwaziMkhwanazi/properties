import Image from "next/image";
function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
        priority
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg font-bold'>
          Not sure Where to go? Perfect
        </p>
        <button
          className='text-purple-500 px-10 py-4 bg-white shadow-md 
        rounded-full my-3 font-bold hover:shadow-xl active:scale-90 transition duration-150'
        >
          I'm Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
