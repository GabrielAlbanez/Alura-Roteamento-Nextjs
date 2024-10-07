

export default function HistoryDetail({
    params,
}: {
    params: { characterName : string ,  histoy: string };
}) {
    return (
        <h1>
            historia de {params.characterName}
        </h1>
    );
}