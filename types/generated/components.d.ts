import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAdvantagesList extends Struct.ComponentSchema {
  collectionName: 'components_shared_advantages_lists';
  info: {
    displayName: 'advantages_list';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedBannerDataServ extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_data_servs';
  info: {
    displayName: 'banner_data_serv';
  };
  attributes: {
    button_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443'>;
    text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'\u041C\u044B \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u043C, \u043A \u043A\u0430\u043A\u043E\u043C\u0443 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0443 \u043B\u0443\u0447\u0448\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0438 \u0443\u0442\u043E\u0447\u043D\u0438\u043C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u0438\u0451\u043C\u0430.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u041D\u0435 \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u043A\u0430\u043A\u0430\u044F \u0443\u0441\u043B\u0443\u0433\u0430 \u0432\u0430\u043C \u043F\u043E\u0434\u043E\u0439\u0434\u0451\u0442?'>;
  };
}

export interface SharedBannerV1 extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_v1s';
  info: {
    displayName: 'banner_v1';
    icon: 'book';
  };
  attributes: {
    email: Schema.Attribute.Email &
      Schema.Attribute.DefaultTo<'naturemind.msk@yandex.ru'>;
    text: Schema.Attribute.Text;
    title_sec: Schema.Attribute.String;
  };
}

export interface SharedConsultationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_consultation_items';
  info: {
    displayName: 'consultation_item';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedConsultationSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_consultation_secs';
  info: {
    displayName: 'consultation_sec';
  };
  attributes: {
    confident_text: Schema.Attribute.Text;
    confident_text_title: Schema.Attribute.String;
    consultation_list: Schema.Attribute.Component<
      'shared.consultation-item',
      true
    >;
    fammily_text: Schema.Attribute.Text;
    fammily_title: Schema.Attribute.String;
    how_long_img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    how_long_text: Schema.Attribute.Text;
    how_long_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedDirectionDoesVizitItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_direction_does_vizit_items';
  info: {
    displayName: 'direction_does_vizit_item';
  };
  attributes: {
    active_card: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedDirectionHowDoesVizit extends Struct.ComponentSchema {
  collectionName: 'components_shared_direction_how_does_vizits';
  info: {
    displayName: 'direction_how_does_vizit';
  };
  attributes: {
    cards_advantages: Schema.Attribute.Component<
      'shared.direction-does-vizit-item',
      true
    >;
    cards_numbers: Schema.Attribute.Component<
      'shared.direction-does-vizit-item',
      true
    >;
    section_title: Schema.Attribute.String;
  };
}

export interface SharedDirectionSpecialistsSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_direction_specialists_secs';
  info: {
    displayName: 'direction_specialists_sec';
  };
  attributes: {
    doctors: Schema.Attribute.Relation<'oneToMany', 'api::doctor.doctor'>;
    title_section: Schema.Attribute.String;
  };
}

export interface SharedDirectionWhenNeedVisit extends Struct.ComponentSchema {
  collectionName: 'components_shared_direction_when_need_visits';
  info: {
    displayName: 'direction_when_need_visit';
  };
  attributes: {
    card_text_1: Schema.Attribute.String;
    card_text_10: Schema.Attribute.String;
    card_text_2: Schema.Attribute.String;
    card_text_3: Schema.Attribute.String;
    card_text_4: Schema.Attribute.String;
    card_text_5: Schema.Attribute.String;
    card_text_6: Schema.Attribute.String;
    card_text_7: Schema.Attribute.String;
    card_text_8: Schema.Attribute.String;
    card_text_9: Schema.Attribute.String;
    image_sec: Schema.Attribute.Media<'images'>;
    subtitle_sec: Schema.Attribute.Text;
    title_section: Schema.Attribute.String;
  };
}

export interface SharedDirectionWhySelectItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_direction_why_select_items';
  info: {
    displayName: 'Direction_why_select_item';
  };
  attributes: {
    active_card: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedDirectionWhySelectUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_direction_why_select_uses';
  info: {
    displayName: 'direction_why_select_us';
  };
  attributes: {
    advantages: Schema.Attribute.Component<
      'shared.direction-why-select-item',
      true
    >;
    title_section: Schema.Attribute.String;
  };
}

export interface SharedDirectionsHeroSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_directions_hero_secs';
  info: {
    displayName: 'directions_hero_sec';
  };
  attributes: {
    button_text_1: Schema.Attribute.String;
    button_text_2: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedDiseasesItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_diseases_items';
  info: {
    displayName: 'Diseases_item';
  };
  attributes: {
    name_diseases: Schema.Attribute.String;
  };
}

export interface SharedDocPriceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_doc_price_items';
  info: {
    displayName: 'doc_price_item';
  };
  attributes: {
    name_service: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface SharedDocServiceListFull extends Struct.ComponentSchema {
  collectionName: 'components_shared_doc_service_list_fulls';
  info: {
    displayName: 'doc_service_list_full';
  };
  attributes: {
    name_service: Schema.Attribute.String;
  };
}

export interface SharedEducationAndQualificationsList
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_education_and_qualifications_lists';
  info: {
    displayName: 'education_and_qualifications_list';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedGalleryPhoto extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_photos';
  info: {
    displayName: 'gallery_photo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    video_link: Schema.Attribute.String;
  };
}

export interface SharedInfoHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_heroes';
  info: {
    displayName: 'info_hero';
  };
  attributes: {
    button_1_text: Schema.Attribute.String;
    button_2_text: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    subtitle_text: Schema.Attribute.Text;
    title_section: Schema.Attribute.String;
  };
}

export interface SharedInformCluster extends Struct.ComponentSchema {
  collectionName: 'components_shared_inform_clusters';
  info: {
    displayName: 'inform_cluster';
  };
  attributes: {
    cluster_title: Schema.Attribute.String;
    docs: Schema.Attribute.Component<'shared.inform-doc', true>;
  };
}

export interface SharedInformDoc extends Struct.ComponentSchema {
  collectionName: 'components_shared_inform_docs';
  info: {
    displayName: 'inform_doc';
  };
  attributes: {
    file: Schema.Attribute.Media<'files'>;
    title_doc: Schema.Attribute.String;
  };
}

export interface SharedInformDocsSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_inform_docs_secs';
  info: {
    displayName: 'inform_docs_sec';
  };
  attributes: {
    inform_docs_clusters: Schema.Attribute.Component<
      'shared.inform-cluster',
      true
    >;
    title_section: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPatologyItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_patology_items';
  info: {
    displayName: 'patology_item';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedPostCluster2Col extends Struct.ComponentSchema {
  collectionName: 'components_shared_post_cluster_2_cols';
  info: {
    displayName: 'post_cluster_2_col';
  };
  attributes: {
    cluster_title_nav: Schema.Attribute.Component<
      'shared.post-cluster-data',
      false
    >;
    columns: Schema.Attribute.Component<'shared.post-col-text', true>;
  };
}

export interface SharedPostClusterData extends Struct.ComponentSchema {
  collectionName: 'components_shared_post_cluster_data';
  info: {
    displayName: 'post_cluster_data';
  };
  attributes: {
    cluster_id_nav: Schema.Attribute.String;
    cluster_title_nav: Schema.Attribute.String;
  };
}

export interface SharedPostClusterText extends Struct.ComponentSchema {
  collectionName: 'components_shared_post_cluster_texts';
  info: {
    displayName: 'post_cluster_text';
  };
  attributes: {
    content_text: Schema.Attribute.RichText;
    post_cluster_data: Schema.Attribute.Component<
      'shared.post-cluster-data',
      false
    >;
  };
}

export interface SharedPostColText extends Struct.ComponentSchema {
  collectionName: 'components_shared_post_col_texts';
  info: {
    displayName: 'post_col_text';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface SharedPriceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_price_items';
  info: {
    displayName: 'price_item';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        '\u041F\u0441\u0438\u0445\u0438\u0430\u0442\u0440\u0438\u044F',
        '\u041F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0438\u044F',
        '\u041D\u0435\u0432\u0440\u043E\u043B\u043E\u0433\u0438\u044F',
        '\u042D\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433\u0438\u044F',
      ]
    >;
    id_request: Schema.Attribute.String;
    price: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u043E\u0442 3 500 \u20BD / \u0447\u0430\u0441'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRegsinligtingPayItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_regsinligting_pay_items';
  info: {
    displayName: 'regsinligting_pay_item';
  };
  attributes: {
    svg: Schema.Attribute.Text;
    text: Schema.Attribute.String;
  };
}

export interface SharedRegsinligtingSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_regsinligting_sections';
  info: {
    displayName: 'regsinligting_section';
  };
  attributes: {
    col_1_button_text: Schema.Attribute.String;
    col_1_text: Schema.Attribute.String;
    col_1_title: Schema.Attribute.String;
    col_2_title: Schema.Attribute.String;
    col_3_text: Schema.Attribute.Text;
    col_3_title: Schema.Attribute.String;
    regsinligting_pay_item: Schema.Attribute.Component<
      'shared.regsinligting-pay-item',
      true
    >;
    title_sec: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO-\u043F\u043E\u043B\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B: \u043C\u0435\u0442\u0430-\u0442\u0435\u0433\u0438, Open Graph, Twitter Cards, canonical, robots, JSON-LD';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    focusKeyword: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaKeywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.Enumeration<
      [
        'index, follow',
        'noindex, follow',
        'index, nofollow',
        'noindex, nofollow',
      ]
    > &
      Schema.Attribute.DefaultTo<'index, follow'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogLocale: Schema.Attribute.String & Schema.Attribute.DefaultTo<'ru_RU'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.Enumeration<
      ['website', 'article', 'product', 'profile']
    > &
      Schema.Attribute.DefaultTo<'website'>;
    shareImage: Schema.Attribute.Media<'images'>;
    structuredData: Schema.Attribute.JSON;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    twitterCreator: Schema.Attribute.String;
    twitterDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    twitterImage: Schema.Attribute.Media<'images'>;
    twitterSite: Schema.Attribute.String;
    twitterTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
  };
}

export interface SharedServiceDirectionSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_direction_secs';
  info: {
    displayName: 'service_direction_sec';
  };
  attributes: {
    directions: Schema.Attribute.Relation<
      'oneToMany',
      'api::direction.direction'
    >;
    title_section: Schema.Attribute.String;
  };
}

export interface SharedServiceHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_heroes';
  info: {
    displayName: 'service_hero';
  };
  attributes: {
    button_title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedServicePriceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_price_items';
  info: {
    displayName: 'service_price_item';
  };
  attributes: {
    advantages_list: Schema.Attribute.Component<'shared.advantages-list', true>;
    category: Schema.Attribute.Enumeration<
      [
        '\u041F\u0441\u0438\u0445\u0438\u0430\u0442\u0440\u0438\u044F',
        '\u041F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0438\u044F',
        '\u041D\u0435\u0432\u0440\u043E\u043B\u043E\u0433\u0438\u044F',
        '\u042D\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433\u0438\u044F',
      ]
    >;
    description: Schema.Attribute.Text;
    price_from: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u043E\u0442 4 000 \u20BD'>;
    result_text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'\u0427\u0451\u0442\u043A\u043E\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u0447\u0438\u043D \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F, \u0434\u0438\u0430\u0433\u043D\u043E\u0437 (\u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438) \u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u043F\u043B\u0430\u043D \u043B\u0435\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0441\u0438\u0445\u043E\u044D\u043C\u043E\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F.'>;
    result_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438'>;
    time_from: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u043E\u0442 1 \u0447\u0430\u0441\u0430'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedServicePriceSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_price_secs';
  info: {
    displayName: 'service_price_sec';
  };
  attributes: {
    section_subtitle: Schema.Attribute.Text;
    section_title: Schema.Attribute.String;
    services_price_list: Schema.Attribute.Component<
      'shared.service-price-item',
      true
    >;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocials extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'socials';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.advantages-list': SharedAdvantagesList;
      'shared.banner-data-serv': SharedBannerDataServ;
      'shared.banner-v1': SharedBannerV1;
      'shared.consultation-item': SharedConsultationItem;
      'shared.consultation-sec': SharedConsultationSec;
      'shared.direction-does-vizit-item': SharedDirectionDoesVizitItem;
      'shared.direction-how-does-vizit': SharedDirectionHowDoesVizit;
      'shared.direction-specialists-sec': SharedDirectionSpecialistsSec;
      'shared.direction-when-need-visit': SharedDirectionWhenNeedVisit;
      'shared.direction-why-select-item': SharedDirectionWhySelectItem;
      'shared.direction-why-select-us': SharedDirectionWhySelectUs;
      'shared.directions-hero-sec': SharedDirectionsHeroSec;
      'shared.diseases-item': SharedDiseasesItem;
      'shared.doc-price-item': SharedDocPriceItem;
      'shared.doc-service-list-full': SharedDocServiceListFull;
      'shared.education-and-qualifications-list': SharedEducationAndQualificationsList;
      'shared.gallery-photo': SharedGalleryPhoto;
      'shared.info-hero': SharedInfoHero;
      'shared.inform-cluster': SharedInformCluster;
      'shared.inform-doc': SharedInformDoc;
      'shared.inform-docs-sec': SharedInformDocsSec;
      'shared.media': SharedMedia;
      'shared.patology-item': SharedPatologyItem;
      'shared.post-cluster-2-col': SharedPostCluster2Col;
      'shared.post-cluster-data': SharedPostClusterData;
      'shared.post-cluster-text': SharedPostClusterText;
      'shared.post-col-text': SharedPostColText;
      'shared.price-item': SharedPriceItem;
      'shared.quote': SharedQuote;
      'shared.regsinligting-pay-item': SharedRegsinligtingPayItem;
      'shared.regsinligting-section': SharedRegsinligtingSection;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.service-direction-sec': SharedServiceDirectionSec;
      'shared.service-hero': SharedServiceHero;
      'shared.service-price-item': SharedServicePriceItem;
      'shared.service-price-sec': SharedServicePriceSec;
      'shared.slider': SharedSlider;
      'shared.socials': SharedSocials;
    }
  }
}
