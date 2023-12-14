import "./profile.css";

function About({ bio }) {
    return (
        <div>
            <p className="mb-0 about-header">ABOUT ME</p>
            <p className="mt-0">{bio}</p>
        </div>
    );
}

export default About;