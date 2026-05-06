import { Button } from '@alfalab/core-components/button/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { Tag } from '@alfalab/core-components/tag/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { useEffect, useState } from 'react';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

export const App = () => {
  const [view, setView] = useState<'init' | 'conditions'>('init');
  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {};
  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive
          style={{ marginTop: '1rem', textAlign: 'center' }}
          tag="h1"
          view="xsmall"
          weight="semibold"
        >
          Полис Fort Knox
        </Typography.TitleResponsive>

        <div style={{ padding: '0 20px' }}>
          <Tag view="transparent" size={40} shape="rounded" checked={view === 'init'} onClick={() => setView('init')}>
            Обзор
          </Tag>
          <Tag
            view="transparent"
            size={40}
            shape="rounded"
            checked={view === 'conditions'}
            onClick={() => setView('conditions')}
          >
            Условия
          </Tag>
        </div>

        <div className={appSt.boxWrap}>
          <div className={appSt.box}>
            <Typography.TitleResponsive tag="h2" view="small" weight="semibold">
              О полисе
            </Typography.TitleResponsive>
          </div>
        </div>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <Button block view="primary" onClick={submit}>
          Создать шаблон оплаты
        </Button>
      </div>
    </>
  );
};
