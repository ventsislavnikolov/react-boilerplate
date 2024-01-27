import { useTranslation } from 'react-i18next';

import { Loader } from 'components';
import { useGetAbilityQuery } from 'store/services/applicationApi';

function Root() {
  const { t, i18n } = useTranslation();

  const { isLoading } = useGetAbilityQuery({ limit: 20, offset: 0 });

  function handleButtonClick(value: any) {
    i18n.changeLanguage(value);
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='flex min-h-screen flex-col bg-white dark:bg-slate-800'>
      <header className='py-4'>
        <button
          type='button'
          className='float-right mb-2 mr-4 rounded bg-white px-4 py-2 text-gray-800 dark:bg-slate-800 dark:text-white'
          onClick={() => handleButtonClick(i18n.language === 'en' ? 'de' : 'en')}
        >
          {i18n.language === 'en' ? t('home.german') : t('home.english')}
        </button>
      </header>
      <main className='flex flex-1 flex-col items-center justify-between p-24'>
        <p className='pb-3 text-2xl text-slate-800 underline dark:text-white'>{t('home.hello-boilerplate')}</p>
      </main>
      <button
        type='button'
        className='float-right mb-2 mr-4 rounded bg-white px-4 py-2 text-gray-800 dark:bg-slate-800 dark:text-white'
        onClick={() => {
          throw new Error('Error thrown from button click');
        }}
      >
        {t('home.threwError')}
      </button>
      <footer className='flex items-center justify-center py-6'>Copyright {new Date().getFullYear()}</footer>
    </div>
  );
}

export default Root;
