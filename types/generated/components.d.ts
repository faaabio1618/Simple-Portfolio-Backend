import type { Schema, Struct } from '@strapi/strapi';

export interface LinkFooter extends Struct.ComponentSchema {
  collectionName: 'components_link_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'arrowDown';
  };
  attributes: {
    LeftSide: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u00A9 {year}'>;
    ShowEmail: Schema.Attribute.Boolean;
    ShowInstagram: Schema.Attribute.Boolean;
    ShowPhoneNumber: Schema.Attribute.Boolean;
  };
}

export interface LinkLinks extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    description: '';
    displayName: 'Links';
    icon: 'link';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Page: Schema.Attribute.Enumeration<['/portfolio', '/contact', '/about']>;
  };
}

export interface LinkMenu extends Struct.ComponentSchema {
  collectionName: 'components_link_menus';
  info: {
    description: '';
    displayName: 'Menu';
    icon: 'bulletList';
  };
  attributes: {
    Cover: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    Label: Schema.Attribute.String;
    Link: Schema.Attribute.Enumeration<['/contact', '/portfolio', '/about']>;
    portfolio: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    description: '';
    displayName: 'Menu';
    icon: 'bulletList';
  };
  attributes: {
    BackgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Links: Schema.Attribute.Component<'link.links', true>;
    MainPortfolio: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
    TextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface PageHome extends Struct.ComponentSchema {
  collectionName: 'components_page_homes';
  info: {
    displayName: 'Home';
    icon: 'house';
  };
  attributes: {};
}

export interface PageHomepage extends Struct.ComponentSchema {
  collectionName: 'components_page_homepages';
  info: {
    description: '';
    displayName: 'Homepage';
    icon: 'house';
  };
  attributes: {
    Cover: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    ShowAboutMe: Schema.Attribute.Boolean;
    ShowInstagram: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'link.footer': LinkFooter;
      'link.links': LinkLinks;
      'link.menu': LinkMenu;
      'menu.menu': MenuMenu;
      'page.home': PageHome;
      'page.homepage': PageHomepage;
    }
  }
}
