import { useScroll } from "framer-motion";

const useScrollYPosition = () => {
    const { scrollY, scrollYProgress } = useScroll();
    return { scrollY, scrollYProgress };
}

// function getScrollYPosition() {
//     const scrollY =
// }

export default useScrollYPosition;