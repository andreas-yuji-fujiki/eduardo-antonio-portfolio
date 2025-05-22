/* Imports
*/
    // other libs
    import clsx from 'clsx';

    // types
    import { CustomButtonTypes } from '@/types/components/Global/CustomButtonTypes';

    // styles
    import styles from './CustomButton.module.scss';


// custom button component
export function CustomButton({
    variant = 'default',
    bgColor,
    icon,
    iconColor,
    children,
    className,
    style,
    ...rest
}: CustomButtonTypes) {
    const variantIsJustIcon = variant === 'justIcon';

    return ( 
        <button
            className={ clsx( styles.CustomButton, styles[variant], className ) }
            style={ { backgroundColor: bgColor, ...style } }
            { ...rest }
        >
            {/* icon (if provided) */}
            {icon && (
                <span className={ styles.iconContainer } style={ { color: iconColor } }>
                    { icon }
                </span>
            )}

            {/* inside elements */}
            { !variantIsJustIcon && (
                <span className={styles.childrenContainer}>
                    { children }
                </span>
            ) }
        </button>
    );
}