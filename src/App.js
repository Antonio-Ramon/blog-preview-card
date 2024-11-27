import "./App.css";

function App() {
	const image = {
		src: "./blog-image.png",
	};

	const author = {
		src: "./profile-picture.png",
		height: "32",
		name: "Antonio Ramon",
	};

	return (
		<div className="App">
			<article className="card">
				<div className="image">
					<img src={image.src} alt="Card blog image."/>
				</div>

				<main className="content">
					<button className="badge">
						<span>Learning</span>
					</button>
					<span>Published 21 Dec 2023</span>
					<header>HTML & CSS foundations</header>
					<span>
						These languages are the backbone of every website, defining
						structure, content, and presentation.
					</span>
				</main>

				<footer className="author-info">
					<img src={author.src} height={author.height} alt="Image of blog's author." />
					<span>{author.name}</span>
				</footer>
			</article>
		</div>
	);
}

export default App;
