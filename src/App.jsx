
import DisplayCard from './DisplayCard.jsx'; // Ingest our structural layout wrapper
import MovieCard from './MovieCard.jsx';     // Ingest our customized item brick
import MovieFeed from './MovieFeed.jsx'; // Ingest our structural layout wrapper
import FeaturedMovieCard from './FeaturedMovieCard.jsx'; // Ingest our structural layout wrapper
import MovieGlossary from './MovieGlossary.jsx';// Ingest our structural layout wrapper
import MovieRatingCounter from './MovieRatingCounter.jsx'; // Ingest our structural layout wrapper
import StateBatchingLab from './StateBatchingLab.jsx'; // Ingest our structural layout wrapper
import MovieManagerBoard from './MovieManagerBoard.jsx'; // Ingest our structural layout wrapper
import RatingArena from './RatingArena.jsx'; // Ingest our structural layout wrapper
import WatchlistManager from './WatchlistManager.jsx'; // Ingest our structural layout wrapper
import MovieSearchDashboard from './MovieSearchDashboard.jsx'; // Ingest our structural layout wrapper
import UnifiedDashboard from './UnifiedDashboard.jsx'; // Ingest our structural layout wrapper
import LiveDataFeed from './LiveDataFeed.jsx'; // Ingest our structural layout wrapper
import RegistrationForm from './RegistrationForm.jsx'; // Ingest our stuctural layout wrapper
import UnifiedMultiInputForm from './UnifiedMultiInputForm.jsx'; // Ingest our stuctural layout wrapper
import PreferencesForm from './PreferencesForm.jsx'; // Ingest our stuctural layout wrapper


function App() {
    return (
        <div className="app-container" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>

            {/* Implementation 1: Wrapping standard text layouts */}
            <DisplayCard>
                <h2 style={{ margin: 0, color: '#7aa2f7' }}>📣 Global System Announcement</h2>
                <p style={{ color: '#a9b1d6' }}>Hours 21-30 are completely active. Content Composition is operational!</p>
            </DisplayCard>

            {/* Implementation 2: Wrapping our independent MovieCard sub-node */}
            <DisplayCard>
                <h2 style={{ margin: '0 0 10px 0', color: '#9ece6a' }}>⭐ Featured Spotlight</h2>
                <MovieCard title="Interstellar" genre="Sci-Fi" rating={5.0} />
                <MovieFeed />
                <FeaturedMovieCard title="Interstellar" genre="Sci-Fi" rating={5.0} isClassic={true} />
                <MovieGlossary />
            </DisplayCard>
            <MovieRatingCounter />
            <StateBatchingLab />
            <MovieManagerBoard />
            <RatingArena />
            <WatchlistManager />
            <MovieSearchDashboard />
            <UnifiedDashboard />
            <LiveDataFeed />
            <RegistrationForm />
            <UnifiedMultiInputForm />
            <PreferencesForm />
        </div>
    );
}

export default App;