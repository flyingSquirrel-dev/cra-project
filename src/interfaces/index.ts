export interface RoutesProps {
  path: string;
  component: React.FC;
  name: string;
  exact?: boolean;
}

export interface fakeAPIResponseProps {
  imgURL: string;
  type: string;
  numberOfStars: number;
  cardLabel?: string;
  cardTitle: string;
  highLight?: string | number;
  crossOut?: string | number;
  descriptionText?: string;
  author?: string;
}

export interface StarsProps {
  number: number | undefined;
}

export interface StyledThumbnailProps {
  thumbnail: string;
}

export interface StyledThumbnailProps {
  thumbnail: string;
}

export interface StyledStarsProps {
  color: string;
}
