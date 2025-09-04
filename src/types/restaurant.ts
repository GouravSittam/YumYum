/**
 * Delivery SLA info for a restaurant/menu item.
 */
export interface SlaInfo {
  deliveryTime: number;
  minDeliveryTime?: number;
  maxDeliveryTime?: number;
  serviceability?: string;
  [key: string]: any;
}

/**
 * Restaurant info structure.
 */
export interface RestaurantInfo {
  id: string;
  name: string;
  cuisines: string[];
  avgRating: number;
  costForTwo: string;
  costForTwoMessage?: string;
  areaName?: string;
  cloudinaryImageId: string;
  sla: SlaInfo;
  [key: string]: any;
}

/**
 * Restaurant wrapper for lists.
 */
export interface Restaurant {
  info: RestaurantInfo;
}

/**
 * Menu item info for a restaurant.
 */
export interface MenuItemInfo {
  id: string;
  name: string;
  description?: string;
  price?: number;
  defaultPrice?: number;
  imageId?: string;
  ratings?: {
    aggregatedRating?: {
      rating?: string;
      ratingCount?: string;
    };
  };
  itemAttribute?: {
    vegClassifier?: string;
    portionSize?: string;
  };
  [key: string]: any;
}

/**
 * Menu item wrapper for lists.
 */
export interface MenuItem {
  card: {
    info: MenuItemInfo;
  };
}

/**
 * Menu category for a restaurant menu.
 */
export interface MenuCategory {
  card: {
    card: {
      title: string;
      itemCards: MenuItem[];
      [key: string]: any;
    };
  };
}

/**
 * Cart item for Redux cart state.
 */
export interface CartItem extends MenuItem {
  quantity: number;
}

/**
 * Restaurant menu API response structure.
 */
export interface RestaurantMenuData {
  data: {
    cards: any[];
    [key: string]: any;
  };
  [key: string]: any;
}

/**
 * User info for GitHub API.
 */
export interface UserInfo {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  bio?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
  [key: string]: any;
}

/**
 * Contact form data structure.
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Payment form data structure.
 */
export interface PaymentFormData {
  paymentMethod: "card" | "cod";
  cardNumber?: string;
  cardName?: string;
  expiry?: string;
  cvv?: string;
  cashDetails?: {
    name: string;
    phone: string;
  };
}
