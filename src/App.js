import React , {useState , useEffect} from 'react'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Footer from './components/Footer'

function App() {
  const [images , setImages ] = useState([]);
  const [isLoading , setIsLoading ] = useState(false);
  const [term , setTerm ] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  } , [term])

  return (
    <div className="container mx-auto">
        <ImageSearch setIsLoading={setIsLoading} searchText = {( text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32 mb-10">No Images Found</h1> }

        {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>  : 
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            { images.map(image => (
              <ImageCard key={image.id} image={image} />
            ))}
        </div>
      }

      <Footer />

    </div>
  );
}

export default App;
