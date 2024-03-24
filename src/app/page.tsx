'use client';

import { useEffect, useState } from 'react';
import HomeContents from '@/components/Home';
import Modal from '@/components/Modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <HomeContents onShowModal={setShowModal} />
      {showModal && (
        <Modal>
          <div className='fixed w-screen h-screen z-50 backdrop-blur-sm grid place-items-center'>
            <div className='w-9/12 max-w-3xl bg-white/75 py-6 px-4 rounded-md'>
              <button
                onClick={() => {
                  setShowModal(false);
                  const body = document.querySelector('body');
                  body?.setAttribute('style', 'overflow:scroll-y');
                }}
                className='block w-fit mx-auto'
              >
                close
              </button>
              <div>PayPal</div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
