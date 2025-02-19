import { useState } from "react";

// Array di articoli
const listArticles = ['Il miei viaggi', 'I miei pensieri', 'Le mie recensioni']

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