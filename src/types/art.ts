export type FrameType = 'gold' | 'wood' | 'black';

export interface ArtDetails {
  form: string;
  function: string;
  content: string;
  context: string;
}

export interface ArtPiece {
  id: string;
  title: string;
  artist: string;
  year: string;
  image: string;
  frameType: FrameType;
  details: ArtDetails;
}
