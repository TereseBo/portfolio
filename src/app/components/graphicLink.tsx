import Image from "next/image";
import Link from 'next/link';


export const GraphicLink = (props:{url:string, alt:string, src:any}) => {
  
  return (
    <Link href={props.url} target="_blank" rel="noreferrer">
      <Image priority src={props.src} height={40} width={40} alt={props.alt} />
    </Link>
  );
};