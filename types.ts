export interface SearchEntry {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}

export interface OMDBSearchResponse {
  Response: string;
  Search: SearchEntry[];
  totalResults: string;
}
