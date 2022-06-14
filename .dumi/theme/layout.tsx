import React, { useState, useEffect, useContext } from 'react';
import type { IPreviewerComponentProps } from 'dumi/theme';
import { context, getDemoUrl } from 'dumi/theme';
// import Layout from 'dumi-theme-default/es/layout';
import Layout from './layouts/index';
import type { IRouteComponentProps } from '@umijs/types';
import Device from './components/Device';
import SlugList from './components/SlugList';
import { ACTIVE_MSG_TYPE } from './builtins/Previewer';
import './style/layout.less';

const MobileLayout: React.FC<IRouteComponentProps> = ({ children, ...props }) => {
  const {
    config: { mode, exportStatic },
    demos,
    meta,
  } = useContext(context);
  const [demo, setDemo] = useState<IPreviewerComponentProps>(null);
  const hasMobilePreviewer = meta.hasPreviewer && meta.mobile !== false;
  const showSlugs = Boolean(meta.slugs?.length) && meta.toc === 'menu';
  useEffect(() => {
    const handler = (ev: any) => {
      if (ev.data.type === ACTIVE_MSG_TYPE) {
        const data = JSON.parse(ev.data.value);

        // get auto-generated demo url if there is no custom url
        if (!data.demoUrl) {
          data.demoUrl = getDemoUrl(data.identifier, exportStatic && exportStatic.htmlSuffix);
        }

        setDemo(data);
      }
    };

    window.addEventListener('message', handler);

    return () => window.removeEventListener('message', handler);
  }, []);

  // clear demoId when route changed
  useEffect(() => {
    setDemo(null);
  }, [props.location.pathname]);

  // render toc to side menu by default
  if (hasMobilePreviewer && meta.toc !== false && meta.toc === undefined) {
    meta.toc = 'menu';
  }

  return (
    <Layout {...props}>
      <div className="sp-mobile-content">
        <article>{children}</article>
        {hasMobilePreviewer && demo?.simulator !== false && (
          // render via builtin device simulator
          <Device className="sp-mobile-content-device" url={demo?.demoUrl} />
        )}
        {demo?.simulator === false && (
          // render demo directly (for custom compiletime)
          <div className="sp-device" data-mode={mode}>
            {React.createElement(demos[demo.identifier].component)}
          </div>
        )}
        {showSlugs && <SlugList slugs={meta.slugs} className="sp-layout-toc" />}
      </div>
    </Layout>
  );
};

export default MobileLayout;
