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


export default function input() {

    // Stato dell'articolo
    const [articles, setListArticles] = useState(listArticles);
    // Inserimento nuovo articolo
    const [newArticle, setNewArticle] = useState('');

    //preventDefault per non inviare il Form
    const handleSubmit = e => {
        e.preventDefault();
        // Creazione di un nuovo array
        const updatedArticle = [...articles, newArticle];
        setListArticles(updatedArticle);
        // Svuto la cella
        setNewArticle('');
    }

    // Cancello elemento
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
                        <input type="text" value={newArticle}
                            onChange={e => { setNewArticle(e.target.value) }} />
                        <button className="btn">INVIA</button>
                    </form>
                </div>


                {/* //lista dei articoli */}

                {/* Se non ci sono articoli */}

                {articles.length === 0 ?
                    <h2>Non ci sono articoli</h2>
                    :
                    <div id="list-box">

                        <ul>
                            {articles.map((article, i) => (
                                <li key={i}>
                                    {article}

                                    <button className="btn" onClick={() => removeArticle(i)}>
                                        Elimina
                                    </button>

                                </li>

                            ))}
                        </ul>

                    </div>

                }
            </div>
        </>
    )

}