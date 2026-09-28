import type { SVGProps } from 'react';

type IconKind = 'residence' | 'blueprint' | 'structure' | 'heritage' | 'assurance' | 'excellence';
interface ArchitecturalIconProps extends SVGProps<SVGSVGElement> { kind: IconKind; }

/** A small, consistent architectural icon set, drawn on a 32px grid. */
export default function ArchitecturalIcon({ kind, ...props }: ArchitecturalIconProps) {
  const drawings = {
    residence: <><path className="icon-wash" d="M6 14 16 6l10 8v14H6Z"/><path d="m3 15 13-11 13 11M6 13v15h20V13M13 28V18h6v10M9 15h3m8 0h3M4 28h24"/><path className="icon-accent" d="M22 8V4h4v7M14 11h4"/></>,
    blueprint: <><path className="icon-wash" d="M6 5h21v23H6Z"/><path d="M5 4h22v24H5zM5 10h22M12 10v18M12 19h15M19 10v9M8 7h1m3 0h1M16 23h6"/><path className="icon-accent" d="m21 4 6 6M2 14h6M16 2v5"/></>,
    structure: <><path className="icon-wash" d="M5 12h10v16H5ZM15 5h12v23H15Z"/><path d="M3 28h26M5 28V12h10M15 28V4h12v24M19 9h4m-4 5h4m-4 5h4M9 17h2m-2 5h2M20 28v-4h3v4"/><path className="icon-accent" d="m5 8 5-3 5 3"/></>,
    heritage: <><path className="icon-wash" d="M5 12h22v15H5Z"/><path d="m3 11 13-7 13 7H3ZM5 27h22M3 30h26M7 14v10m6-10v10m6-10v10m6-10v10"/><path className="icon-accent" d="M16 1v3M8 7 6 5m18 2 2-2"/></>,
    assurance: <><path className="icon-wash" d="M16 3 27 7v9c0 6-5 10-11 13C10 26 5 22 5 16V7Z"/><path d="M16 3 27 7v9c0 6-5 10-11 13C10 26 5 22 5 16V7Z"/><path className="icon-accent" d="m10 15 4 4 8-8"/></>,
    excellence: <><path className="icon-wash" d="m16 3 4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1Z"/><path d="m16 3 4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1Z"/><path className="icon-accent" d="m13 15 2 2 4-4M5 3l2 2m18-2-2 2"/></>,
  };
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{drawings[kind]}</svg>;
}
