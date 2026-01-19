import { useNavigate } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

function Home() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/projects");
  };
  const profileData = [
    {
      img: "./src/assets/images/profile.jpeg", // local path
      title: "Jiban Neupane",
      subtitle: "Frontend Developer || React & TypeScript",
    },
  ];
  return (
    <>
      <div>
        <ImageList sx={{ width: 350, height: 400 }} cols={1} rowHeight={350}>
          {profileData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: "8px" }}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.subtitle}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <p>
          I build clean, responsive, and user-friendly web applications using
          modern frontend technologies, with a strong focus on usability and
          performance.
        </p>
      </div>
      <hr />
      <div>
        <h4>About Me</h4>
        <p>
          I am a Bachelor in Computer Application (BCA) student passionate about
          frontend development and modern web technologies. I enjoy transforming
          ideas into real-world applications using React, JavaScript, and modern
          UI practices, and I am continuously learning to improve my skills.
        </p>
      </div>
      <hr />

      <div>
        <h3>Short Snapshot (Prev)</h3>
        <ul>
          <li>
            <h5>Frontend:</h5>
          </li>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
          </ul>
          <li>
            <h5>Backend:</h5>
          </li>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
          <li>
            <h5>Database:</h5>
          </li>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
          <li>
            <h5>Other Skills:</h5>
          </li>
          <ul>
            <li>Git & GitHub</li>
            <li>Responsive Design</li>
          </ul>
        </ul>
      </div>
      <hr />

      <div>
        <h4>Feature Projects</h4>
        <ul>
          <h5>Advanced Assignment Management</h5>
          <li>
            A task management platform where teachers can assign tasks and
            students can submit assignments digitally.
          </li>
          <h5>Pet Link</h5>
          <li>
            A social networking platform for pet lovers to connect, share
            photos, and find pet-friendly places.
          </li>
        </ul>
        <h4>Note: More projects available on the Projects page.</h4>
        <button onClick={handleRedirect}>View Projects</button>
      </div>
    </>
  );
}

export default Home;
