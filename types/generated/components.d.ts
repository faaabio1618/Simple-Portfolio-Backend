import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'link.link': LinkLink;
    }
  }
}
