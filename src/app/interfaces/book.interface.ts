export interface BookInterface {
   title: string,
   author: string,
   genre: String,
   isbn: string,
   description: string,
   copies: number,
   available: boolean,
   updateAvailability(): void
}