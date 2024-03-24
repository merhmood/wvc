import React from 'react';
import Image from 'next/image';

const Home = ({ onShowModal }: { onShowModal: (value: boolean) => void }) => (
  <main>
    <header className='fixed w-full pt-8 lg:pt-5 h-44 lg:h-20 bg-white'>
      <div className='w-10/12 mx-auto flex flex-col sm:flex-row justify-between items-center'>
        <h3>
          <span className='font-bold'>HWR</span> foundation
        </h3>
        <ul className='flex flex-col items-center sm:flex-row text-xs sm:text-base flex-wrap mt-3 md:mt-0'>
          <li className='px-3'>
            <a href='#'>Home</a>
          </li>
          <li className='px-3'>
            <a href='#about'>About</a>
          </li>
          <li className='px-3'>
            <a href='#contact'>Contact</a>
          </li>
          <li className='px-3 mt-3 md:px-5 md:mt-0'>
            <button
              className='border-rose-600 border rounded-full px-8 py-2 text-rose-600'
              onClick={() => onShowModal(true)}
            >
              Donate
            </button>
          </li>
        </ul>
      </div>
    </header>
    <section className='mt-0 pt-44 lg:pt-20' id='home'>
      <div className='h-px bg-gray-200 lg:pt-0'></div>
      <div className='max-w-5xl w-11/12 mx-auto lg:flex lg:flex-row-reverse lg:items-center lg:justify-between h-60 mt-10 lg:mt-16 lg:h-[450px]'>
        <Image
          src='/images/hero.png'
          alt='image slide'
          height={500}
          width={500}
          className='object-contain -mt-6 lg:ml-10'
        />
        <div className='w-4/5 mx-auto lg:w-full'>
          <p className='text-center lg:text-left text-2xl lg:text-5xl lg:mx-auto lg:mt font-semibold'>
            Building Hope: Helping War Refugees Foundation
          </p>
          <p className='text-center lg:text-left text-xs lg:text-2xl mt-2 mb-4'>
            where every donation transforms lives. As conflicts and crises
            displace millions worldwide, our foundation stands as a beacon of
            hope for those seeking safety, shelter, and a chance to rebuild
            their lives
          </p>
          <button
            className='block border-rose-600 border rounded-full px-14 py-2 text-rose-600 w-fit mx-auto lg:mx-0'
            onClick={() => onShowModal(true)}
          >
            Donate
          </button>
        </div>
      </div>
    </section>
    <section className='mt-72 lg:mt-20'>
      <h3
        className='text-2xl lg:text-4xl font-semibold text-center mb-4 lg:mb-16'
        id='about'
      >
        WHY US
      </h3>
      <div className='bg-gray-100 py-14'>
        <div className='max-w-5xl w-4/5 mx-auto lg:flex lg:justify-between lg:items-center lg:mt-14'>
          <Image
            src='/Images/ismail-salad-osman-hajji-dirir-v7FT5ngIEfA-unsplash.jpg'
            width={300}
            height={300}
            alt=''
            className='rounded-md my-4 lg:my-0'
          />
          <div className='lg:w-[650px]'>
            <h3 className='text-lg lg:text-3xl font-semibold mb-1 lg:mb-4'>
              Education and Skill Development
            </h3>
            <p className='text-sm lg:text-lg mb-16 lg:mb-8'>
              Education is key to breaking the cycle of poverty and building
              brighter futures. With your support, we provide access to quality
              education, vocational training, and skill-building programs that
              equip refugees with the tools they need to rebuild their lives and
              contribute to their communities.
            </p>
          </div>
        </div>
        <div className='max-w-5xl w-4/5 mx-auto lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:mt-14'>
          <Image
            src='/Images/maayan-nemanov-qLViefEYGLc-unsplash.jpg'
            width={300}
            height={300}
            objectFit='cover'
            alt=''
            className='rounded-md my-4 lg:my-0'
          />
          <div className='lg:w-[650px]'>
            <h3 className='text-lg lg:text-3xl font-semibold mb-1 lg:mb-4'>
              Empowerment and Resilience
            </h3>
            <p className='text-sm lg:text-lg lg:mb-8'>
              We believe in the resilience and strength of refugees. Through
              empowerment initiatives, psychosocial support, and
              community-building activities, we help refugees regain their
              confidence, agency, and sense of belonging in their new
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id='contact'>
      <div className='mt-16 w-4/5 mx-auto'>
        <p className=' text-md lg:text-2xl mb-4 text-center'>
          {
            "If you have any questions, feedback, or would like to learn more about how you can support Building Hope: Empowering Refugees Foundation, please don't hesitate to reach out to us."
          }
        </p>
        <a
          href='#'
          className='block border-rose-600 border rounded-full px-14 py-2 text-rose-600 w-fit mx-auto'
        >
          Contact
        </a>
      </div>
    </section>
    <footer className='mt-10 bg-gray-100 text-center py-3 text-lg'>
      &copy; of <span className='font-bold'>HWR</span> foundation
    </footer>
  </main>
);
export default Home;
