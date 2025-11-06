// Definition of the types used in the application
export interface Events {
  title: string;
  date: string;
  time: string;
  category: string;
  description?: string;
  location?: string;
  team1?: string;
  team2?: string;
}

//Definition for Project Landing
export interface EventItem {
  id: number;
  title: string;
  slug?: string;
  start_date?: string;
  end_date?: string;
  max_people?: number;
  description?: string | null;
}

// Definition for Project Landing Page type
export interface ProjectLanding {
  id: number;
  documentId: string;
  title: string;
  description?: any; // Strapi rich text array
  slug: string;
  seo?: any;
  heroImage?: { url: string; formats?: any };
  heroText?: string;
  events?: EventItem[];
}