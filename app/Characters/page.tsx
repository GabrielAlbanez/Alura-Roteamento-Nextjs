"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CharacterList() {
    const [name, setName] = useState<string>(""); 

    const router = useRouter()


    const getName = (namee: string) => {
        setName(namee);
        router.push(`Characters/${name}`)
    };

    return (
        <div className="flex flex-col gap-5">
            <h1>Lista de Personagens</h1>
            <h2><button onClick={() => getName("gandalf")}>gandalf</button></h2>
            <Link href={"/CharactersV2/gandaf/historia"}>gandalf2</Link>
            <h2><button onClick={() => getName("Frodo")}>Frodo</button></h2>
            <h2><button onClick={() => getName("Aragorn")}>Aragorn</button></h2>
        </div>
    );
}
