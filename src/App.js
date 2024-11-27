import './App.css';

function App() {

  const image = {
    src: './blog-image.png',
  }

  const author = {
    src: './profile-picture.png',
    height: '32',
    name: 'Antonio Ramon'
  }

  return (
    <div className="App">
      <div className="card">
        <div className="image">
          <img  src={image.src} alt="" srcset="" />
        </div>

        <div className="content">
          <button className="badge">
            <span>Learning</span>
          </button>
          <span>Published 21 Dec 2023</span>
          <span>HTML & CSS foundations</span>
          <span>
            These languages are the backbone of every website, 
            defining structure, content, and presentation.
          </span>
        </div>

        <div className="author-info">
          <img src={author.src} height={author.height} alt="" />
          <span>{author.name}</span>
        </div>        
      </div>
    </div>
  );
}

export default App;
