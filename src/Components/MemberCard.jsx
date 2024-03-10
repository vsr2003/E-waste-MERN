import {motion} from 'framer-motion';

const MemberCard = ({ name, role, bio, photoUrl }) => {
  return (
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:1, delay:.1, ease:"easeIn"}}

    data-tilt
     className="bg-white hover:bg-sky-400 p-4 rounded-lg shadow-md">

      <motion.img
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1, delay:.1, ease:"easeIn"}}
       src={photoUrl} alt={`${name} Photo`} className="w-full h-72 object-cover mb-4 rounded-2xl" />

      <motion.h3 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1, delay:.1, ease:"easeIn"}}
      className="text-xl font-bold mb-2">{name}</motion.h3>

      <motion.p
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1, delay:.1, ease:"easeIn"}}
       className="text-gray-600 mb-2">{role}</motion.p>

      <motion.p
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1, delay:.1, ease:"easeIn"}}
       className="text-gray-700">{bio}</motion.p>

    </motion.div>
  );
};

export default MemberCard;
