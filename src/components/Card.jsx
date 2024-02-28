import { Link } from "react-router-dom";

function Card() {
  const teamInfo = [
    {
      name: "Tanusree Paul",
      photo:
        "https://media.licdn.com/dms/image/D5603AQH8SRk8KMSzoQ/profile-displayphoto-shrink_800_800/0/1697206351954?e=1712793600&v=beta&t=OmBJK3uBJe9zTviaY-vozoBHmzN_g5FqQ3mhlQ34vLo",
      dept: "CSBS",
      rollNo: "14231122042",
      githubLink: "https://github.com/TanusreePaul-903",
      linkedInLink: "https://www.linkedin.com/in/tanusree-paul-26528020b/",
    },
    {
      name: "Ayantika Paul",
      photo:
        "https://media.licdn.com/dms/image/D5603AQH-q7Pv8KTcFg/profile-displayphoto-shrink_800_800/0/1689689122752?e=1712793600&v=beta&t=1SALIphnOaB6-B1GRHFvrITFR0aDiwX4OQm4vJk5iN0",
      dept: "CSBS",
      rollNo: "14231122044",
      githubLink: "https://github.com/ayantika-paul",
      linkedInLink: "https://www.linkedin.com/in/ayantika-paul-076a35214/",
    },
    {
      name: "Mintu Mondal",
      photo:
        "https://media.licdn.com/dms/image/D4E03AQFf-51DtQfSMw/profile-displayphoto-shrink_400_400/0/1707240252656?e=1714608000&v=beta&t=bV3fWj5_IS9Wl-F6r5IecayGnvpq8cL4KVCHmwYqTHQ",
      dept: "CSBS",
      rollNo: "14231121023",
      githubLink: "https://github.com/mintumondal042",
      linkedInLink: "https://www.linkedin.com/in/mintu-mondal-79ab232b1/",
    },
    {
      name: "Pritha Samanta",
      photo:
        "https://media.licdn.com/dms/image/D5603AQH9GWFMPPeiag/profile-displayphoto-shrink_400_400/0/1707273303671?e=1714608000&v=beta&t=1P1sEzMkWx5vH8XdKEE_5FSm2h95rC7jxt_ceQcTjxo",
      dept: "CSBS",
      rollNo: "14231121023",
      githubLink: "https://github.com/prithasamanta15",
      linkedInLink: "https://www.linkedin.com/in/pritha-samanta-701b8a243/",
    },
    {
      name: "Kajal Rajak",
      photo:
        "https://media.licdn.com/dms/image/D5603AQHOwFO9CnH78w/profile-displayphoto-shrink_400_400/0/1709009237030?e=1714608000&v=beta&t=n1--MX-cRqwLXIUJO6hS2SQeB3AGtL4McHHXRRgHP3c",
      dept: "CSBS",
      rollNo: "14231121015",
      githubLink: "https://github.com/Kajal-Rajak",
      linkedInLink: "https://www.linkedin.com/in/kajal-rajak-968226232/",
    },
  ];

  return teamInfo.map((student, index) => (
    <div className="card mt-4" key={index} style={{ width: "16rem" }}>
      <img src={student.photo} className="card-img-top" width="px" alt="photo" />
      <div className="card-body">
        <h5 className="card-title">Name: {student.name}</h5>
        <p className="card-text">
          <span className="d-block">Department: {student.dept}</span>

          <span className="d-block">Roll No: {student.rollNo}</span>

          <p>
            <span className="d-block">
              <span>Github: </span>
              <Link to={student.githubLink}>Github</Link>
            </span>
            <span>LinkedIn: </span>
            <Link to={student.linkedInLink}>LinkedIn</Link>
          </p>
        </p>
      </div>
    </div>
  ));
}

export default Card;
