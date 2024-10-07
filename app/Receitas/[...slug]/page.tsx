//esse roteemto com slug , vc pode pegar todos os valores que vem dps de /Recetias
// ele vem como um array de string
//isso e bom porque vc pode pegar varios valores de paramentro da url em 1 so arquivo de rota

export default function HistoryAll({ params }: { params: { slug: string[] } }) {
    if (params.slug.length === 2) {
      return (
        <h1>
          Visualizando receita da cozinha {params.slug[0]}: {params.slug[1]}
        </h1>
      );
    } else if (params.slug.length === 1) {
      return <h1>Visualizando receitas da cozinha {params.slug[0]}</h1>;
    }
    return <h1>Página inicial de receitas</h1>;
  }