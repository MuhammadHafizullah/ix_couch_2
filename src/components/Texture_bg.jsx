import Cta from './Cta.jsx'

const Texture_bg = (props) => {
  return (
    <>
      <div className={`w-full ${props.content['bg_image']} md:px-10 px-4 lg:pt-20 lg:pb-16 md:pt-6 md:pb-2 pt-10 p-2 rounded-[40px]`}>
        <h4 className="font-exo font-light text-white mb-5 md:text-xl ">
          <img
            src="./assets/yellow_stars.png"
            className="inline w-8"
            alt="stars"
          />{" "}
          {props.content["title"]}
        </h4>
        <h2 className="font-exo text-5xl text-white font-bold mb-8">
          {props.content["heading"]}{" "}
          <p className="text-sky-400">{props.content["heading_span"]}</p>
        </h2>

        <p className="font-exo md:text-xl text-white mb-5 md:pe-72 lg:pe-96">
        {props.content["desc"]}
        </p>

        <Cta
          link={props.content["cta_link"]}
          text={props.content["cta_text"]}
        />
      </div>
    </>
  );
};

export default Texture_bg;
