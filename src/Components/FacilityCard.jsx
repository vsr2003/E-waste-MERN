import {motion} from 'framer-motion';

const FacilityCard = ({heading,description}) => {
  return (
    <motion.div
      data-tilt
      initial={{x:-30}}
      whileInView={{x:0}}
      transition={{duration:1, delay:.1, type:"spring"}}
     className="bg-white p-6 rounded-lg shadow-lg hover:shadow-md hover:shadow-black group transition-all select-none hover:rounded-xl hover:bg-green-400  ">

      <p className=" mb-2 text-blue-900 group-hover:text-white text-xl font-bold">{heading}</p>
      <p className="text-gray-700 group-hover:text-white font-sans">{description}</p>

    </motion.div>
  );
};

export default FacilityCard;