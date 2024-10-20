import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

export const Logo = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Cambiar el estado después de 2 segundos para iniciar la segunda animación
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);
    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="167"
      height="68"
      viewBox="0 0 167 68"
      fill="none"
      initial={{ y: 0 }}
      animate={{ y: -100 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 4 }}
    >
      <motion.g
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 3 }}
      >
        <motion.rect
          width="68"
          height="68"
          rx="17"
          fill="url(#paint0_linear_162_33)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", damping: 8 }}
        />
        <motion.path
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", damping: 50, delay: 1 }}
          d="M12.3958 29.7745L20.1378 21.7229C21.0805 20.7425 22.3819 20.1885 23.7419 20.1885H30.9108C32.1695 20.1885 33.2532 21.0769 33.5 22.3111L35.1678 21.1198C36.0158 20.5141 37.0319 20.1885 38.074 20.1885H44.2075C46.969 20.1885 49.2075 22.4271 49.2075 25.1885V28.9526C49.2075 29.5049 49.6553 29.9526 50.2075 29.9526H51C53.7614 29.9526 56 32.1912 56 34.9526V39.8111C56 42.5725 53.7614 44.8111 51 44.8111H45.8801C43.7959 44.8111 41.9303 43.5183 41.1985 41.5667L41.1415 41.4149L39.6639 43.1036C38.7144 44.1887 37.3428 44.8111 35.901 44.8111H31.0713C29.1774 44.8111 27.4461 43.7411 26.5992 42.0472L26.283 41.4149L24.756 43.1328C23.8072 44.2003 22.4471 44.8111 21.0189 44.8111H16C13.2386 44.8111 11 42.5725 11 39.8111V33.2401C11 31.9479 11.5002 30.706 12.3958 29.7745Z"
          fill="url(#paint1_radial_162_33)"
        />
        <motion.path
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.5 }}
          d="M14.3869 31.6285L22.0737 23.6539C22.6391 23.0672 23.4189 22.7358 24.2336 22.7358H28.9938C30.6507 22.7358 31.9938 24.079 31.9938 25.7358V26.0862C31.9938 27.0367 33.1951 27.4511 33.7811 26.7028L35.9871 23.8861C36.5557 23.16 37.4267 22.7358 38.3489 22.7358H43.6761C45.333 22.7358 46.6761 24.079 46.6761 25.7358V29.5C46.6761 31.1568 48.0192 32.5 49.6761 32.5H50.4525C52.1094 32.5 53.4525 33.8431 53.4525 35.5V39.2641C53.4525 40.921 52.1094 42.2641 50.4525 42.2641H46.6644C45.0075 42.2641 43.6644 40.921 43.6644 39.2641V37.68C43.6644 36.7787 42.5657 36.3374 41.9422 36.9882L37.7737 41.3395C37.2079 41.9301 36.4254 42.2641 35.6074 42.2641H31.8299C30.173 42.2641 28.8299 40.921 28.8299 39.2641V37.6757C28.8299 36.775 27.7325 36.3334 27.1086 36.9831L22.9229 41.342C22.3572 41.9311 21.5758 42.2641 20.759 42.2641H16.5469C14.89 42.2641 13.5469 40.921 13.5469 39.2641V33.7105C13.5469 32.9339 13.848 32.1876 14.3869 31.6285Z"
          fill="white"
          stroke="#212121"
          strokeWidth="2"
        />
      </motion.g>
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 3 }}
        d="M80.32 30C80.32 27.952 80.32 25.888 80.32 23.808C80.32 21.712 80.32 19.64 80.32 17.592C80.976 17.592 81.64 17.592 82.312 17.592C82.984 17.592 83.64 17.592 84.28 17.592C84.28 17.704 84.28 17.808 84.28 17.904C84.28 18 84.28 18.104 84.28 18.216C84.696 17.912 85.16 17.68 85.672 17.52C86.184 17.344 86.712 17.256 87.256 17.256C87.848 17.256 88.392 17.36 88.888 17.568C89.384 17.76 89.808 18.048 90.16 18.432C90.672 18.064 91.248 17.776 91.888 17.568C92.544 17.36 93.216 17.256 93.904 17.256C94.88 17.256 95.72 17.456 96.424 17.856C97.144 18.256 97.696 18.824 98.08 19.56C98.48 20.296 98.68 21.184 98.68 22.224C98.68 23.504 98.68 24.8 98.68 26.112C98.68 27.424 98.68 28.72 98.68 30C98.04 30 97.384 30 96.712 30C96.04 30 95.376 30 94.72 30C94.72 28.8 94.72 27.584 94.72 26.352C94.72 25.12 94.72 23.904 94.72 22.704C94.72 22.16 94.592 21.72 94.336 21.384C94.096 21.032 93.704 20.856 93.16 20.856C92.632 20.856 92.216 21.024 91.912 21.36C91.624 21.68 91.48 22.128 91.48 22.704C91.48 23.904 91.48 25.12 91.48 26.352C91.48 27.584 91.48 28.8 91.48 30C90.84 30 90.184 30 89.512 30C88.84 30 88.176 30 87.52 30C87.52 28.8 87.52 27.584 87.52 26.352C87.52 25.12 87.52 23.904 87.52 22.704C87.52 22.16 87.392 21.72 87.136 21.384C86.896 21.032 86.504 20.856 85.96 20.856C85.432 20.856 85.016 21.024 84.712 21.36C84.424 21.68 84.28 22.128 84.28 22.704C84.28 23.904 84.28 25.12 84.28 26.352C84.28 27.584 84.28 28.8 84.28 30C83.64 30 82.984 30 82.312 30C81.64 30 80.976 30 80.32 30ZM109.413 30C109.413 29.872 109.413 29.752 109.413 29.64C109.413 29.512 109.413 29.392 109.413 29.28C109.013 29.616 108.557 29.872 108.045 30.048C107.549 30.24 107.013 30.336 106.437 30.336C105.621 30.336 104.853 30.184 104.133 29.88C103.413 29.56 102.773 29.112 102.213 28.536C101.669 27.944 101.237 27.248 100.917 26.448C100.613 25.648 100.461 24.76 100.461 23.784C100.461 22.792 100.613 21.896 100.917 21.096C101.237 20.296 101.669 19.616 102.213 19.056C102.773 18.48 103.413 18.04 104.133 17.736C104.853 17.416 105.613 17.256 106.413 17.256C106.989 17.256 107.533 17.352 108.045 17.544C108.557 17.72 109.013 17.968 109.413 18.288C109.413 18.16 109.413 18.04 109.413 17.928C109.413 17.816 109.413 17.704 109.413 17.592C110.069 17.592 110.733 17.592 111.405 17.592C112.077 17.592 112.733 17.592 113.372 17.592C113.372 19.64 113.372 21.712 113.372 23.808C113.372 25.888 113.372 27.952 113.372 30C112.733 30 112.077 30 111.405 30C110.733 30 110.069 30 109.413 30ZM106.965 26.832C107.733 26.832 108.349 26.552 108.813 25.992C109.277 25.432 109.509 24.696 109.509 23.784C109.509 22.872 109.277 22.144 108.813 21.6C108.349 21.04 107.733 20.76 106.965 20.76C106.181 20.76 105.557 21.032 105.093 21.576C104.645 22.12 104.421 22.856 104.421 23.784C104.421 24.712 104.645 25.456 105.093 26.016C105.557 26.56 106.181 26.832 106.965 26.832ZM116.015 30C116.015 27.952 116.015 25.888 116.015 23.808C116.015 21.712 116.015 19.64 116.015 17.592C116.671 17.592 117.335 17.592 118.007 17.592C118.679 17.592 119.335 17.592 119.975 17.592C119.975 17.704 119.975 17.816 119.975 17.928C119.975 18.04 119.975 18.152 119.975 18.264C120.471 17.912 121.031 17.648 121.655 17.472C122.279 17.296 122.959 17.248 123.695 17.328C123.695 17.968 123.695 18.616 123.695 19.272C123.695 19.928 123.695 20.576 123.695 21.216C122.431 21.04 121.495 21.152 120.887 21.552C120.279 21.936 119.975 22.568 119.975 23.448C119.975 24.52 119.975 25.608 119.975 26.712C119.975 27.816 119.975 28.912 119.975 30C119.335 30 118.679 30 118.007 30C117.335 30 116.671 30 116.015 30ZM127.596 16.176C127.132 16.176 126.708 16.064 126.324 15.84C125.956 15.616 125.66 15.32 125.436 14.952C125.212 14.584 125.1 14.176 125.1 13.728C125.1 13.28 125.212 12.88 125.436 12.528C125.66 12.16 125.956 11.864 126.324 11.64C126.708 11.416 127.132 11.304 127.596 11.304C128.044 11.304 128.452 11.416 128.82 11.64C129.204 11.864 129.508 12.16 129.732 12.528C129.956 12.88 130.068 13.28 130.068 13.728C130.068 14.176 129.956 14.584 129.732 14.952C129.508 15.32 129.204 15.616 128.82 15.84C128.452 16.064 128.044 16.176 127.596 16.176ZM125.604 30C125.604 27.952 125.604 25.888 125.604 23.808C125.604 21.712 125.604 19.64 125.604 17.592C126.26 17.592 126.924 17.592 127.596 17.592C128.268 17.592 128.924 17.592 129.564 17.592C129.564 19.64 129.564 21.712 129.564 23.808C129.564 25.888 129.564 27.952 129.564 30C128.924 30 128.268 30 127.596 30C126.924 30 126.26 30 125.604 30ZM138.208 30.384C137.28 30.384 136.416 30.224 135.616 29.904C134.816 29.568 134.12 29.104 133.528 28.512C132.936 27.904 132.472 27.2 132.136 26.4C131.816 25.6 131.656 24.728 131.656 23.784C131.656 22.84 131.816 21.968 132.136 21.168C132.472 20.368 132.936 19.672 133.528 19.08C134.12 18.488 134.816 18.032 135.616 17.712C136.416 17.376 137.28 17.208 138.208 17.208C139.152 17.208 140.016 17.376 140.8 17.712C141.6 18.032 142.296 18.488 142.888 19.08C143.48 19.672 143.936 20.368 144.256 21.168C144.592 21.968 144.76 22.84 144.76 23.784C144.76 24.728 144.592 25.6 144.256 26.4C143.936 27.2 143.48 27.904 142.888 28.512C142.296 29.104 141.6 29.568 140.8 29.904C140.016 30.224 139.152 30.384 138.208 30.384ZM138.208 26.808C138.992 26.808 139.616 26.528 140.08 25.968C140.56 25.392 140.8 24.664 140.8 23.784C140.8 22.888 140.56 22.168 140.08 21.624C139.616 21.064 138.992 20.784 138.208 20.784C137.424 20.784 136.792 21.064 136.312 21.624C135.848 22.168 135.616 22.888 135.616 23.784C135.616 24.664 135.848 25.392 136.312 25.968C136.792 26.528 137.424 26.808 138.208 26.808ZM88.6 54C88.6 53.872 88.6 53.752 88.6 53.64C88.6 53.512 88.6 53.392 88.6 53.28C88.2 53.616 87.744 53.872 87.232 54.048C86.736 54.24 86.2 54.336 85.624 54.336C84.808 54.336 84.04 54.176 83.32 53.856C82.6 53.536 81.96 53.088 81.4 52.512C80.856 51.92 80.424 51.224 80.104 50.424C79.8 49.624 79.648 48.744 79.648 47.784C79.648 46.808 79.8 45.92 80.104 45.12C80.424 44.32 80.856 43.632 81.4 43.056C81.96 42.48 82.6 42.04 83.32 41.736C84.04 41.416 84.8 41.256 85.6 41.256C86.176 41.256 86.72 41.352 87.232 41.544C87.744 41.72 88.2 41.968 88.6 42.288C88.6 41.328 88.6 40.36 88.6 39.384C88.6 38.408 88.6 37.44 88.6 36.48C89.256 36.48 89.92 36.48 90.592 36.48C91.264 36.48 91.92 36.48 92.56 36.48C92.56 39.376 92.56 42.296 92.56 45.24C92.56 48.184 92.56 51.104 92.56 54C91.92 54 91.264 54 90.592 54C89.92 54 89.256 54 88.6 54ZM86.152 50.832C86.92 50.832 87.536 50.552 88 49.992C88.464 49.432 88.696 48.696 88.696 47.784C88.696 46.872 88.464 46.144 88 45.6C87.536 45.04 86.92 44.76 86.152 44.76C85.368 44.76 84.744 45.032 84.28 45.576C83.832 46.12 83.608 46.856 83.608 47.784C83.608 48.712 83.832 49.456 84.28 50.016C84.744 50.56 85.368 50.832 86.152 50.832ZM106 53.424C104.896 53.888 103.8 54.176 102.712 54.288C101.624 54.4 100.592 54.336 99.616 54.096C98.656 53.872 97.8 53.48 97.048 52.92C96.296 52.36 95.704 51.648 95.272 50.784C94.856 49.92 94.648 48.92 94.648 47.784C94.648 46.84 94.8 45.976 95.104 45.192C95.424 44.392 95.872 43.696 96.448 43.104C97.024 42.496 97.704 42.032 98.488 41.712C99.272 41.376 100.128 41.208 101.056 41.208C101.888 41.208 102.64 41.344 103.312 41.616C103.984 41.888 104.568 42.272 105.064 42.768C105.56 43.248 105.96 43.824 106.264 44.496C106.568 45.168 106.76 45.904 106.84 46.704C106.92 47.504 106.872 48.352 106.696 49.248C105.384 49.248 104.064 49.248 102.736 49.248C101.408 49.248 100.088 49.248 98.776 49.248C99.08 49.856 99.584 50.288 100.288 50.544C101.008 50.8 101.856 50.88 102.832 50.784C103.824 50.688 104.88 50.432 106 50.016C106 50.576 106 51.144 106 51.72C106 52.296 106 52.864 106 53.424ZM100.96 44.76C100.496 44.76 100.064 44.888 99.664 45.144C99.28 45.4 98.984 45.792 98.776 46.32C99.496 46.32 100.216 46.32 100.936 46.32C101.672 46.32 102.4 46.32 103.12 46.32C102.928 45.776 102.64 45.384 102.256 45.144C101.888 44.888 101.456 44.76 100.96 44.76ZM111.559 54C110.855 51.952 110.135 49.888 109.399 47.808C108.679 45.712 107.967 43.64 107.263 41.592C107.951 41.592 108.639 41.592 109.327 41.592C110.031 41.592 110.727 41.592 111.415 41.592C111.831 42.856 112.247 44.128 112.663 45.408C113.095 46.672 113.511 47.936 113.911 49.2C114.327 47.936 114.743 46.672 115.159 45.408C115.575 44.128 115.983 42.856 116.383 41.592C117.055 41.592 117.735 41.592 118.423 41.592C119.111 41.592 119.791 41.592 120.463 41.592C119.759 43.64 119.039 45.712 118.303 47.808C117.583 49.888 116.871 51.952 116.167 54C115.415 54 114.647 54 113.863 54C113.079 54 112.311 54 111.559 54Z"
        fill="url(#paint2_linear_162_33)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_162_33"
          x1="40"
          y1="6.61787e-08"
          x2="30.5"
          y2="69"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#232323" />
          <stop offset="1" stopColor="#020202" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_162_33"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(44.1132 24.8583) rotate(144.639) scale(25.3886 46.3999)"
        >
          <stop stopColor="#A8FF78" />
          <stop offset="1" stopColor="#C8FFAA" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_162_33"
          x1="79.7528"
          y1="16.5"
          x2="153.81"
          y2="49.7534"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#747474" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default function StartAnimation() {
  return (
    <motion.div
      className="bg-black absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center overflow-hidden"
      initial={{ opacity: 1, height: "100vh" }}
      animate={{ height: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 4.5 }}
    >
      <div className="overflow-hidden">
        <Logo />
      </div>
    </motion.div>
  );
}
