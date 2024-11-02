import type { Schema, Attribute } from '@strapi/strapi';

export interface ShareChildren extends Schema.Component {
  collectionName: 'components_share_children';
  info: {
    displayName: 'children';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    iconText: Attribute.String;
    path: Attribute.String;
    content: Attribute.Enumeration<
      [
        'CustomizedDialogs',
        'CustomizedExpansionPanels',
        'PaginationTable',
        'Analytics',
        'DoughnutChart'
      ]
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'share.children': ShareChildren;
    }
  }
}
