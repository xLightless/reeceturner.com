import { motion, useScroll } from "framer-motion";

const useScrollPosition = () => {
    const { scrollYProgress } = useScroll();

    return scrollYProgress;
}


export default useScrollPosition;