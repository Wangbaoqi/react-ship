import type { FC } from 'react';
import React, { useContext } from 'react';
import { context, Link, NavLink } from 'dumi/theme';
import LocaleSelect from './LocaleSelect';
import SlugList from './SlugList';
import './SideMenu.less';

interface INavbarProps {
  mobileMenuCollapsed: boolean;
  location: any;
  darkPrefix?: React.ReactNode;
}

const SideMenu: FC<INavbarProps> = ({ mobileMenuCollapsed, location, darkPrefix }) => {
  const {
    config: {
      logo,
      title,
      description,
      mode,
      repository: { url: repoUrl },
    },
    menu,
    nav: navItems,
    base,
    meta,
  } = useContext(context);
  const isHiddenMenus =
    Boolean((meta.hero || meta.features || meta.gapless) && mode === 'site') ||
    meta.sidemenu === false ||
    undefined;

  return (
    <div
      className="sp-menu"
      data-mode={mode}
      data-hidden={isHiddenMenus}
      data-mobile-show={!mobileMenuCollapsed || undefined}
    >
      <div className="sp-menu-inner">
        <div className="sp-menu-header">
          <Link
            to={base}
            className="sp-menu-logo"
            style={{
              backgroundImage: logo && `url('${logo}')`,
            }}
          />
          <h1>{title}</h1>
          <p>{description}</p>
          {/* github star badge */}
          {/github\.com/.test(repoUrl) && mode === 'doc' && (
            <p>
              <object
                type="image/svg+xml"
                data={`https://img.shields.io/github/stars${
                  repoUrl.match(/((\/[^\/]+){2})$/)[1]
                }?style=social`}
              />
            </p>
          )}
        </div>
        {/* mobile nav list */}

        <div className="sp-menu-mobile-area">
          {!!navItems.length && (
            <ul className="sp-menu-nav-list">
              {navItems.map((nav) => {
                const child = Boolean(nav.children?.length) && (
                  <ul>
                    {nav.children.map((item) => (
                      <li className="sp-menu-title" key={item.path || item.title}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                );

                return (
                  <li key={nav.path || nav.title}>
                    {nav.path ? <NavLink to={nav.path}>{nav.title}</NavLink> : nav.title}
                    {child}
                  </li>
                );
              })}
            </ul>
          )}
          {/* site mode locale select */}
          <LocaleSelect location={location} />
          {darkPrefix}
        </div>
        {/* menu list */}
        <ul className="sp-menu-list">
          {!isHiddenMenus &&
            menu.map((item) => {
              // always use meta from routes to reduce menu data size
              const hasSlugs = Boolean(meta.slugs?.length);
              const hasChildren = item.children && Boolean(item.children.length);
              const show1LevelSlugs =
                meta.toc === 'menu' &&
                !hasChildren &&
                hasSlugs &&
                item.path === location.pathname.replace(/([^^])\/$/, '$1');
              const menuPaths = hasChildren
                ? item.children.map((i) => i.path)
                : [
                    item.path,
                    // handle menu group which has no index route and no valid children
                    location.pathname.startsWith(`${item.path}/`) && meta.title === item.title
                      ? location.pathname
                      : null,
                  ];

              const isChild = Boolean(item.children && item.children.length);

              return (
                <li key={item.path || item.title}>
                  {isChild ? (
                    <span className="sp-menu-title">{item.title}</span>
                  ) : (
                    <NavLink to={item.path} isActive={() => menuPaths.includes(location.pathname)}>
                      <span className="sp-menu-title">{item.title}</span>
                    </NavLink>
                  )}
                  {/* group children */}
                  {Boolean(item.children && item.children.length) && (
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <NavLink to={child.path} exact>
                            <span>{child.title}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
