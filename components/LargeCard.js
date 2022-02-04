import Image from "next/image"
function LargeCard({img,buttonText,title,description}) {
    return (
        <section className="py-16 relative cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64">{title}</h3>
                <p>{description}</p>
                <button className="text-sm px-4 py-2 text-white bg-gray-900 rounded-lg mt-5">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
