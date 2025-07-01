import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.slug}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
