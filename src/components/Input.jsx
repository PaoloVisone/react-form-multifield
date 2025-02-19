import { useState } from "react";

// Array di articoli
const listArticles = [
    {
        id: 1,
        titolo: "La bellezza della natura",
        autore: "Giulia Bianchi",
        contenuto: "La natura è un dono prezioso, che ci offre paesaggi mozzafiato e momenti di serenità.",
        categoria: "Natura"
    },
    {
        id: 2,
        titolo: "L'importanza della lettura",
        autore: "Marco Rossi",
        contenuto: "La lettura è uno degli strumenti più potenti per crescere e conoscere il mondo.",
        categoria: "Cultura"
    },
    {
        id: 3,
        titolo: "Tecnologie del futuro",
        autore: "Luca Verdi",
        contenuto: "L'intelligenza artificiale e la robotica stanno cambiando il nostro modo di vivere.",
        categoria: "Tecnologia"
    },
    {
        id: 4,
        titolo: "Viaggiare in Italia",
        autore: "Sara Neri",
        contenuto: "L'Italia offre una varietà incredibile di destinazioni turistiche per tutti i gusti.",
        categoria: "Viaggi"
    },
    {
        id: 5,
        titolo: "La cucina mediterranea",
        autore: "Antonio Esposito",
        contenuto: "La cucina mediterranea è famosa per la sua freschezza e i suoi sapori unici.",
        categoria: "Cucina"
    }
];

// Variabile iniziale dell'articolo
const articleData = {
    titolo: "",
    autore: "",
    contenuto: "",
    categoria: ""
}


export default function input() {

    // Stato dell'articolo
    const [articles, setListArticles] = useState(listArticles);
    // Inserimento nuovo articolo
    const [newArticle, setNewArticle] = useState(articleData);

    //funzione per gestire il form
    function handleData(e) {
        setNewArticle((newArticle) => ({
            ...newArticle,
            [e.target.title]: e.target.value,
        }))

        // setNewArticle('');
    }

    function handleSubmit(e) {
        e.preventDefault();
        setListArticles((articles) => [...articles, { id: Date.now(), ...newArticle }]);
        // resetto il form
        setNewArticle(articleData);
    }

    // Cancello articolo
    const removeArticle = i => {
        const updatedArticle = articles.filter((article, index) => {
            return index !== i
        });
        setListArticles(updatedArticle);
    }

    return (
        <>
            <div id="content">
                <div id="input-box">
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            title="titolo"
                            value={newArticle.titolo}
                            onChange={handleData}
                            placeholder="Titolo"
                        />

                        <input
                            type="text"
                            title="autore"
                            value={newArticle.autore}
                            onChange={handleData}
                            placeholder="Autore"
                        />

                        <textarea
                            type="text"
                            title="contenuto"
                            value={newArticle.contenuto}
                            onChange={handleData}
                            placeholder="Contenuto"
                        ></textarea>

                        <input
                            type="text"
                            title="categoria"
                            value={newArticle.categoria}
                            onChange={handleData}
                            placeholder="Categoria"
                        />

                        <button className="btn">Genera</button>
                    </form>
                </div>


                {/* //lista dei articoli */}

                {/* Se non ci sono articoli */}

                {articles.length === 0 ?
                    <h2>Non ci sono articoli</h2>
                    :
                    <div id="content-art">
                        {articles.map((article) => (

                            <div className="post" key={article.id}>

                                <h3>{article.titolo}</h3>
                                <span>{article.autore}</span>
                                <p>{article.contenuto}</p>
                                <span>{article.categoria}</span>

                                <div className="content-btn">
                                    <button className="btn" onClick={() => removeArticle(i)}>
                                        Elimina
                                    </button>
                                </div>

                            </div>
                        ))
                        }
                    </div>
                }
            </div >
        </>
    )

}