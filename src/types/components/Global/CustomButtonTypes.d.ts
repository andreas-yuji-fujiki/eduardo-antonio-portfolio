import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

export type ButtonVariant = 'default' | 'transparent' | 'justIcon' | 'highlighted';

export interface CustomButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  bgColor?: string;
  icon?: ReactElement;
  iconColor?: string;
  children?: ReactNode;
}