export const getComplamentHex = ( color: string) => {

    const hexColor = parseInt( color.slice( 1 ), 16 ).toString(16);
    
    const r = hexColor[0] + hexColor[1];
    const g = hexColor[2] + hexColor[3];
    const b = hexColor[4] + hexColor[5];

    const r2 = fixSingleDigits( ( 0xFF - parseInt( r, 16) ).toString(16) );
    const g2 = fixSingleDigits( ( 0xFF - parseInt( g, 16) ).toString(16) );
    const b2 = fixSingleDigits( ( 0xFF - parseInt( b, 16) ).toString(16) );
    
    return `#${r2}${g2}${b2}`;

}

const fixSingleDigits = ( value: string ) => {
  if ( value.length == 2 ){
    return value
  }
  else if ( value.length == 1 ){
    return `0${value}`;
  }
  else{
    return "00";
  }
}