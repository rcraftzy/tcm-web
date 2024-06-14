export type Site = {
	website: string;
	author: string;
	desc: string;
	title: string;
	// ogImage?: string;
	// lightAndDarkMode: boolean;
	postPerPage: number;
	scheduledPostMargin: number;
};

export type VideoYoutube = {
	id: string;
	title: string;
	description: string;
	link: string;
	published: string;
	viewTime: string;
	tags: string[];
};

export type Image = string;
export type Video = string;
export type Component = React.ReactNode;

export interface Story {
	type: Image | Video | Component;
	url: string;
	duration?: number;
	thumbnail?: string;
}

export interface PriceRange {
	maxVariantPrice: {
		amount: number;
		currencyCode: string;
		formattedAmount: string;
		formattedCurrency: string;
		rawAmount: number;
	};
}

export interface Edges {
  node: {
    originalSrc: string;
  }
}

export interface Node {
	handle: string;
	title: string;
	priceRange: PriceRange;
	images: {
		edges: Edges[];
  };
}

export interface Product {
	node: Node;
}
