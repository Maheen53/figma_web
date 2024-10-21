import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className='bg-white min-h-screen '>
            <div className='bg-green-300   flex items-center'>
                {/* Image Section */}
                <div className='w-1/2'>
                    <Image
                        src="/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing 1.png"
                        alt="Exclusive Offer"
                        width={400}
                        height={500}
                        className="ml-10"
                    />
                </div>

                {/* Content Section */}
                <div className='w-1/2 flex flex-col items-start justify-center space-y-6 p-8'>
                    {/* Animated h1 */}
                    <h1 className='text-6xl font-bold text-emerald-900 animate-bounce'>
                        Exclusive Offer
                    </h1>

                    {/* Description */}
                    <h3 className='text-xl text-gray-700 max-w-md'>
                        Unlock the ultimate style upgrade with our exclusive offer. Enjoy savings of up to 40% off on our latest New Arrivals.
                    </h3>

                    {/* Countdown Boxes */}
                    <div className='flex space-x-4'>
                        <div className='bg-green-200 p-4 rounded-lg text-center'>
                            <h4 className='text-3xl font-bold'>6</h4>
                            <p>Days</p>
                        </div>
                        <div className='bg-green-200 p-4 rounded-lg text-center'>
                            <h4 className='text-3xl font-bold'>18</h4>
                            <p>Hours</p>
                        </div>
                        <div className='bg-green-200 p-4 rounded-lg text-center'>
                            <h4 className='text-3xl font-bold'>48</h4>
                            <p>Minutes</p>
                        </div>
                    </div>

                    {/* Explore Now Button */}
                    <button className='bg-emerald-600 text-white py-3 px-6 rounded-lg mt-4 hover:bg-emerald-700 transition-all'>
                        Explore Now
                    </button>
                </div>
            </div>


            <h1 className='text-6xl font-extrabold text-emerald-900 animate-bounce flex justify-center mt-10'>Designer Cloths</h1>

            <h3 className='text-black  flex justify-center '>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</h3>





            <div className='flex  flex-wrap justify-center gap-4  max-w-6xl mx-auto'>

                <div className="bg-white p-6 w-[350px] flex flex-col items-center rounded-lg shadow-lg  hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105">
                    {/* Image Container */}
                    <div className="bg-green-200 p-4 w-[300px] h-[300px] flex items-center justify-center rounded-md">
                        <Image
                            src="/elegant-woman-straw-hat-isolated 2.png"
                            alt="Fashion Image"
                            width={200}
                            height={250}
                            className=""
                        />
                    </div>
                    <h1 className='text-center font-bold text-2xl font-serif text-emerald-950'>Accessories</h1>

                    {/* Product Name */}
                    <h2 className="mt-4  font-semibold text-black text-center">
                        Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.
                    </h2>

                </div>




                <div className="bg-white p-6 w-[350px] flex flex-col items-center rounded-lg shadow-lg  hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105">
                    {/* Image Container */}
                    <div className="bg-green-200 p-4 w-[300px] h-[300px] flex items-center justify-center rounded-md">
                        <Image
                            src="/pexels-dima-valkov-6211617 1.png"
                            alt="Fashion Image"
                            width={200}
                            height={250}
                            className=""
                        />
                    </div>
                    <h1 className='text-center font-bold text-2xl font-serif text-emerald-950'>Dresses</h1>


                    {/* Product Name */}
                    <h2 className="mt-4  font-semibold text-black text-center">
                        Explore a stunning range of designer dresses, including evening gowns and chic day dresses.
                    </h2>

                </div>





                <div className="bg-white p-6 w-[350px] flex flex-col items-center rounded-lg shadow-lg  hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105">
                    {/* Image Container */}
                    <div className="bg-green-200 p-4 w-[300px] h-[300px] flex items-center justify-center rounded-md">
                        <Image
                            src="/vknivfu sdkvbjieurg kjvn 1.png"
                            alt="Fashion Image"
                            width={200}
                            height={250}
                            className=""
                        />
                    </div>
                    <h1 className='text-center font-bold text-2xl font-serif text-emerald-950'>Outerwear</h1>


                    {/* Product Name */}
                    <h2 className="mt-4  font-semibold text-black text-center">
                        Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.
                    </h2>

                </div>





            </div>


            <div className=''>
    {/* Heading */}
    <h1 className='text-5xl font-extrabold text-emerald-900 flex justify-center mt-16'>
        Feedback Corner
    </h1>

    {/* Feedback Cards */}
    <div className="flex justify-center mt-12 space-x-8">
        {/* First Feedback Box */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg w-[300px]">
            <h2 className="text-1xl font-semibold text-emerald-900 mb-2">Emily Wilson</h2>
            <h3 className="text-gray-700 leading-relaxed">
                The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!
            </h3>
        </div>

        {/* Second Feedback Box */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg w-[300px]">
            <h2 className="text-1xl font-semibold text-emerald-900 mb-2">Sarah Thompson</h2>
            <h3 className="text-gray-700 leading-relaxed">
                I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!
            </h3>
        </div>

        {/* Third Feedback Box */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg w-[300px]">
            <h2 className="text-1xl font-semibold text-emerald-900 mb-2">Olivia Martinez</h2>
            <h3 className="text-gray-700 leading-relaxed">
                I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!
            </h3>
        </div>
    </div>
</div>






















        </div>
    )
}

export default Banner
