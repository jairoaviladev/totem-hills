// src/assets/icons/index.ts
import iconArticulacion    from './articulacion-icon.png';
import iconBloadDrop        from './bload-drop-icon.png';
import iconCalculo         from './calculos-icon.png';
import iconHeart      from './heart-icon.png';
import iconHueso     from './hueso-icon.png';
import iconPulmon     from './pulmones-icon.png';
import iconUrinary     from './urinary-icon.png';
import Check from './check-icon.png';

/**
 * Mapa clave → asset.
 * Permite acceso por string dinámico.
 */
export const iconMap = {
  articulacion:    iconArticulacion,
  bload:        iconBloadDrop,
  calculo:         iconCalculo,
  corazon:      iconHeart,
  hueso:     iconHueso,
  pulmon: iconPulmon,
  urinary: iconUrinary,
  check: Check

} as const;

export type IconKey = keyof typeof iconMap;