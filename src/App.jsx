import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
import data from './sample-data.json';

import Grid from './StoriesGrid/Grid/Grid';
import StoryCard from './StoriesGrid/StoryCard/StoryCard';

function App() {
  const renderCards = () => {
    return data.data.map((item) => {
      console.log(item);
      return <StoryCard data={item} />;
    });
  };

  return (
    <div className='container'>
      <h1>Stories Page</h1>
      <Grid>{renderCards()}</Grid>
    </div>
  );
}

export default App;
