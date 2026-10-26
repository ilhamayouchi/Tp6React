import useFetch from './useFetch';

function ListeArticles() {
  const { data, chargement, erreur } = useFetch('/articles.json');

  if (chargement) return <p>Chargement en cours...</p>;
  if (erreur) return <p>Erreur : {erreur.message}</p>;

  return (
    <ul>
      {data.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}

export default ListeArticles;