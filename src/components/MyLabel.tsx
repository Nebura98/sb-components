import './mylabel.css'

export interface PropsMyLabel {
  /**
   * El mensaje por defecto será
   */
  label: string;
  /**
   * El tamaño por defecto será
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * allCaps representa si la palabra estara en mayuscula
   */
  allCaps?: boolean;
  /**
   * Color solo cuenta con 3 colores, por defecto será 
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * fontColor es una propiedad opcional la cual mediante una paleta podemos elegir el color
   */
  fontColor?: string;

  backgroundColor?: string
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor,
  backgroundColor = 'transparent'
}: PropsMyLabel) => {
  return (
    <span
      className={`label ${size} text-${color}`} style={{ color: `${fontColor}`, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

export default MyLabel;