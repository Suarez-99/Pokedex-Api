import axios from 'axios';

const fetchData = async () => {
  const { data } = await axios.get('URL_API');
  setData(data.results); // Ajusta según la estructura de la API.
};
useEffect(() => {
  fetchData();
}, []);
