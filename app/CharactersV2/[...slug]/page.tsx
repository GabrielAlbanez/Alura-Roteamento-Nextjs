//esse roteemto com slug , vc pode pegar todos os valores que vem dps de /CharactersV2
// ele vem como um array de string
//isso e bom porque vc pode pegar varios valores de paramentro da url em 1 so arquivo de rota


import { redirect } from 'next/navigation'
import React from 'react'


interface typeParams {
    params: {
        slug: string[]
    }
}

export default function CharactersV2({ params }: typeParams) {

    console.log(params)

    if(params.slug.length > 2){
        redirect("/not-found")
    }

    return (
        <div>

            {
                params.slug.length == 1 && <><h1 className='text-2xl'>nome : {params.slug[0]}</h1></>
            }

            {
                params.slug.length == 2 && <><h1 className='text-2xl'>{`${params.slug[1]} de ${params.slug[0]}`}</h1></>
            }



        </div>
    )
}
