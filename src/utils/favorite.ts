export const insertFavorito = (id: number, setFavoritos:any) => {
    setFavoritos((prevFavoritos:any) => 
        {
        if (prevFavoritos.includes(id)) {
            return prevFavoritos.filter((favId:number) => favId !== id);
        }
        if (prevFavoritos.length >= 5) {
            alert("Você só pode favoritar até 5 personagens!");
            return prevFavoritos;
        }
            return [...prevFavoritos, id];
        } 
    );
    };