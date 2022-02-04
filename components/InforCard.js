import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InforCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) {
  return (
    <div
      className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 
    hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t'
    >
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image
          className='rounded-2xl'
          src={img}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p>{location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>

        <h4 className='text-xl'>{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='text-sm pt-2 text-gray-500 flex-grow'>{description}</p>
        <div className='flex  justify-between items-end pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-4 text-red-400' />
            {star}
          </p>
          <div>
            <p className='text-lg md:text-2xl font-semibold'>{price}</p>
            <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InforCard;
