export const API_BASE_URL = 'https://theirishcowboy.com/wp-json/custom/';
export const API_BASE_URL2 = 'https://theirishcowboy.com/wp-json/wp/';
export const V1 = `${API_BASE_URL}v1/`;
export const V2 = `${API_BASE_URL2}v2/`;
export const CUSTOMV2 = `${API_BASE_URL}v2/`;
export const PROMOTIONALSLIDER = `${V1}option-values/?field=home_slider_image`;
export const MENU = `${V1}option-values/?field=our_menu_mobile`;
// export const MENU = `${V2}ourmenu_cat/`;
export const MENUCAT = `${V2}post_ourmenu?ourmenu_cat=`;
export const MENUDETAIL = `${V2}post_ourmenu/`;
// export const EVENTLIST = `${V2}pages/19`;
export const EVENTLIST = `${CUSTOMV2}event/?field=live_events`;
export const EVENTLISTTITLE = `${CUSTOMV2}event/?field=live_music_details`;
export const WELCOME = `${V1}option-values/?field=welcome_screen`;
export const NOTIFICATION = `${V1}option-values/?field=notification&id=${Date.now()}`;
export const FLORENCE_ARIZATIONA = `${V1}option-values/?field=florence_arizona`;
export const OUTLINE_IRELAND = `${V1}option-values/?field=outlining_ireland`;
// export const FOODPICKUPDELIVERY = `${V2}pages/15`;
export const FOODPICKUPDELIVERY = `${CUSTOMV2}pickup-delivery/?field=pickup_delivery`;
export const CONTACTGET = `${V1}option-values/?field=contact_details`;
export const TABLEBOOKING = `${V1}option-values/?field=table_booking`;
export const SEARCH =
  'https://theirishcowboy.com/wp-json/custom-search/v1/search/?search_term=';
export const CONTACTUS =
  'https://theirishcowboy.com/wp-content/themes/the_irish_cowboy/app-contact-form.php';
export const BOOKINGTABLE =
  'https://theirishcowboy.com/wp-content/themes/the_irish_cowboy/app-booking-form.php';
export const SPORTEVENTSLIST = `${CUSTOMV2}event/?field=sports_events`;
export const SPORTEVENTS = `${CUSTOMV2}event/?field=sports_events_list`;
export const WEEKLYEVENTSLIST = `${CUSTOMV2}event/?field=weekly_events`;
export const WEEKLYEVENTS = `${CUSTOMV2}event/?field=weekly_events_list`;
export const CATERINGEVENTSLIST = `${CUSTOMV2}event/?field=catering_services`;
export const CATERINGEVENTS = `${CUSTOMV2}event/?field=catering_services_list`;

export const TOKEN =
  'https://theirishcowboy.com/wp-content/themes/the_irish_cowboy/get_user_token_number.php';

export const SIGNUPS = `${V1}option-values/?field=sign_up_form_title`;
export const SIGNUPSPOST = `${V1}register`;
export const GALLERY = `${V1}option-values/?field=top_mobile_gallery`;
export const NEWS = `${V1}option-values/?field=latest_news`;
