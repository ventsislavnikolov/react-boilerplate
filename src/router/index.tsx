import { useTranslation } from 'react-i18next';

import { Loader } from 'components';
import { useGetAbilityQuery } from 'store/services/applicationApi';

function Root() {
  const { t } = useTranslation();

  const { isLoading } = useGetAbilityQuery({ limit: 20, offset: 0 });

  if (isLoading) {
    return <Loader />;
  }

  return <p className='pb-3 text-2xl underline'>{t('home.hello-boilerplate')}</p>;
}

export default Root;
