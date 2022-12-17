const url = 'https://api.adviceslip.com/advice';
const fetchData = async () => {
  const data = await fetch(url);
  const adviceObject = await data.json();
  const slip = adviceObject.slip;

  return slip;
};

export default fetchData;
