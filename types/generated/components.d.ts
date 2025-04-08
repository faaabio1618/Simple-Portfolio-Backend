import type { Schema, Struct } from '@strapi/strapi';

export interface LinkInstagramPost extends Struct.ComponentSchema {
  collectionName: 'components_link_instagram_posts';
  info: {
    description: '';
    displayName: 'Instagram Post';
    icon: 'feather';
  };
  attributes: {
    Url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://www.instagram.com/p/DEDKLF7vm2X/'>;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Url: Schema.Attribute.String;
  };
}

export interface LinkMenu extends Struct.ComponentSchema {
  collectionName: 'components_link_menus';
  info: {
    displayName: 'Menu';
    icon: 'bulletList';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Link: Schema.Attribute.Enumeration<['/contact', '/portfolio', '/about']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'link.instagram-post': LinkInstagramPost;
      'link.link': LinkLink;
      'link.menu': LinkMenu;
    }
  }
}
