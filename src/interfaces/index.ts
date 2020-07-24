import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import CustomInput from '../components/CustomTextArea';

export interface RoutesProps {
  path: string;
  component: React.FC;
  name: string;
  exact?: boolean;
}

export interface FakeAPIResponseProps {
  imgURL: string;
  type: string;
  numberOfStars: number;
  url: string;
  cardLabel?: string;
  cardTitle: string;
  highLight?: string | number;
  crossOut?: string | number;
  descriptionText?: string;
  author?: string;
}

export interface CustomInputTypesProps extends Omit<TextareaHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  isDisable: boolean;
  isReadOnly: boolean;
  isButtonNecessary: boolean;
  maxTextLength: number;
  buttonCtx?: string;
  placeholder?: string;
}

export interface StarsProps {
  number?: number;
  tabIndex?: number;
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

export interface StyledButtonProps {
  isButtonActive: boolean;
}
