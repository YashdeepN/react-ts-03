import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.slug}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
