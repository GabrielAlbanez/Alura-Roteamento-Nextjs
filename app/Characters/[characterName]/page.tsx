// Supondo que você esteja usando Next.js

import Link from "next/link";

interface Params {
  characterName: string;
}

interface CharacterDetailProps {
  params: Params;
}

export default function CharacterDetail({ params }: CharacterDetailProps) {



  return (<div className="flex flex-col gap-5">
    <h1>

      Detalhes sobre o personagem: {params.characterName}
    </h1>

    <Link href={`${params.characterName}/Histoy`}><button className='px-2 py-2 rounded-md border-white border-[1px]'>Deseja ver a historio de {params.characterName}</button></Link>


  </div>)


}
