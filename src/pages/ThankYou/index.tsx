import TagManager from 'react-gtm-module';
import { Helmet } from 'react-helmet';

TagManager.initialize({
  gtmId: 'AW-623354787/L6qwCPzLpIAYEKPHnqkC'
});

export function ThankYou () {
  return (
    <>
      <Helmet>
        <title>Muito Obrigado - Suzano Black Week</title>
      </Helmet>
      <main className='flex justify-center items-center bg-black h-screen w-full'>
        <div className='text-slate-100'>
          <h2 className='text-[3rem] font-semibold'>Muito obrigado!</h2>
          <p className='text-[1rem]'>Em breve você receberá um contato</p>
        </div>
      </main>
    </>
  );
}