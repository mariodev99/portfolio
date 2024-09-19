import React, { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

export const Logo = () => {


  const [isVisible, setIsVisible] = useState(false);

  // Cambiar el estado después de 2 segundos para iniciar la segunda animación
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);
    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, []);

  const marioPaths = [
    {            
      d:"M96.5919 23.72C95.9732 23.72 95.3972 23.6133 94.8639 23.4C94.3305 23.176 93.8665 22.8666 93.4719 22.472C93.0772 22.0666 92.7679 21.5973 92.5439 21.064C92.3305 20.5306 92.2239 19.9493 92.2239 19.32C92.2239 18.6906 92.3305 18.1093 92.5439 17.576C92.7679 17.0426 93.0772 16.5786 93.4719 16.184C93.8665 15.7893 94.3305 15.4853 94.8639 15.272C95.3972 15.048 95.9732 14.936 96.5919 14.936C97.2212 14.936 97.7972 15.048 98.3199 15.272C98.8532 15.4853 99.3172 15.7893 99.7119 16.184C100.107 16.5786 100.411 17.0426 100.624 17.576C100.848 18.1093 100.96 18.6906 100.96 19.32C100.96 19.9493 100.848 20.5306 100.624 21.064C100.411 21.5973 100.107 22.0666 99.7119 22.472C99.3172 22.8666 98.8532 23.176 98.3199 23.4C97.7972 23.6133 97.2212 23.72 96.5919 23.72ZM96.5919 21.336C97.1145 21.336 97.5305 21.1493 97.8399 20.776C98.1599 20.392 98.3199 19.9066 98.3199 19.32C98.3199 18.7226 98.1599 18.2426 97.8399 17.88C97.5305 17.5066 97.1145 17.32 96.5919 17.32C96.0692 17.32 95.6479 17.5066 95.3279 17.88C95.0185 18.2426 94.8639 18.7226 94.8639 19.32C94.8639 19.9066 95.0185 20.392 95.3279 20.776C95.6479 21.1493 96.0692 21.336 96.5919 21.336Z"
    },
    {            
      d:"M89.5174 14.248C89.2081 14.248 88.9254 14.1733 88.6694 14.024C88.4241 13.8747 88.2267 13.6773 88.0774 13.432C87.9281 13.1867 87.8534 12.9147 87.8534 12.616C87.8534 12.3173 87.9281 12.0507 88.0774 11.816C88.2267 11.5707 88.4241 11.3733 88.6694 11.224C88.9254 11.0747 89.2081 11 89.5174 11C89.8161 11 90.0881 11.0747 90.3334 11.224C90.5894 11.3733 90.7921 11.5707 90.9414 11.816C91.0907 12.0507 91.1654 12.3173 91.1654 12.616C91.1654 12.9147 91.0907 13.1867 90.9414 13.432C90.7921 13.6773 90.5894 13.8747 90.3334 14.024C90.0881 14.1733 89.8161 14.248 89.5174 14.248ZM88.1894 23.464C88.1894 22.0987 88.1894 20.7227 88.1894 19.336C88.1894 17.9387 88.1894 16.5573 88.1894 15.192C88.6267 15.192 89.0694 15.192 89.5174 15.192C89.9654 15.192 90.4027 15.192 90.8294 15.192C90.8294 16.5573 90.8294 17.9387 90.8294 19.336C90.8294 20.7227 90.8294 22.0987 90.8294 23.464C90.4027 23.464 89.9654 23.464 89.5174 23.464C89.0694 23.464 88.6267 23.464 88.1894 23.464Z"
    },
    {            
      d:"M81.7969 23.464C81.7969 22.0987 81.7969 20.7227 81.7969 19.336C81.7969 17.9387 81.7969 16.5574 81.7969 15.192C82.2342 15.192 82.6769 15.192 83.1249 15.192C83.5729 15.192 84.0102 15.192 84.4369 15.192C84.4369 15.2667 84.4369 15.3414 84.4369 15.416C84.4369 15.4907 84.4369 15.5654 84.4369 15.64C84.7675 15.4054 85.1409 15.2294 85.5569 15.112C85.9729 14.9947 86.4262 14.9627 86.9169 15.016C86.9169 15.4427 86.9169 15.8747 86.9169 16.312C86.9169 16.7494 86.9169 17.1814 86.9169 17.608C86.0742 17.4907 85.4502 17.5654 85.0449 17.832C84.6395 18.088 84.4369 18.5094 84.4369 19.096C84.4369 19.8107 84.4369 20.536 84.4369 21.272C84.4369 22.008 84.4369 22.7387 84.4369 23.464C84.0102 23.464 83.5729 23.464 83.1249 23.464C82.6769 23.464 82.2342 23.464 81.7969 23.464Z"
    },
    {            
      d:"M77.395 23.464C77.395 23.3787 77.395 23.2987 77.395 23.224C77.395 23.1387 77.395 23.0587 77.395 22.984C77.1283 23.208 76.8243 23.3787 76.483 23.496C76.1523 23.624 75.795 23.688 75.411 23.688C74.867 23.688 74.355 23.5867 73.875 23.384C73.395 23.1707 72.9683 22.872 72.595 22.488C72.2323 22.0934 71.9443 21.6294 71.731 21.096C71.5283 20.5627 71.427 19.9707 71.427 19.32C71.427 18.6587 71.5283 18.0614 71.731 17.528C71.9443 16.9947 72.2323 16.5414 72.595 16.168C72.9683 15.784 73.395 15.4907 73.875 15.288C74.355 15.0747 74.8617 14.968 75.395 14.968C75.779 14.968 76.1417 15.032 76.483 15.16C76.8243 15.2774 77.1283 15.4427 77.395 15.656C77.395 15.5707 77.395 15.4907 77.395 15.416C77.395 15.3414 77.395 15.2667 77.395 15.192C77.8323 15.192 78.275 15.192 78.723 15.192C79.171 15.192 79.6083 15.192 80.035 15.192C80.035 16.5574 80.035 17.9387 80.035 19.336C80.035 20.7227 80.035 22.0987 80.035 23.464C79.6083 23.464 79.171 23.464 78.723 23.464C78.275 23.464 77.8323 23.464 77.395 23.464ZM75.763 21.352C76.275 21.352 76.6857 21.1654 76.995 20.792C77.3043 20.4187 77.459 19.928 77.459 19.32C77.459 18.712 77.3043 18.2267 76.995 17.864C76.6857 17.4907 76.275 17.304 75.763 17.304C75.2403 17.304 74.8243 17.4854 74.515 17.848C74.2163 18.2107 74.067 18.7014 74.067 19.32C74.067 19.9387 74.2163 20.4347 74.515 20.808C74.8243 21.1707 75.2403 21.352 75.763 21.352Z"
    },
    {            
      d:"M58 23.464C58 22.0987 58 20.7227 58 19.336C58 17.9387 58 16.5574 58 15.192C58.4373 15.192 58.88 15.192 59.328 15.192C59.776 15.192 60.2133 15.192 60.64 15.192C60.64 15.2667 60.64 15.336 60.64 15.4C60.64 15.464 60.64 15.5334 60.64 15.608C60.9173 15.4054 61.2267 15.2507 61.568 15.144C61.9093 15.0267 62.2613 14.968 62.624 14.968C63.0187 14.968 63.3813 15.0374 63.712 15.176C64.0427 15.304 64.3253 15.496 64.56 15.752C64.9013 15.5067 65.2853 15.3147 65.712 15.176C66.1493 15.0374 66.5973 14.968 67.056 14.968C67.7067 14.968 68.2667 15.1014 68.736 15.368C69.216 15.6347 69.584 16.0134 69.84 16.504C70.1067 16.9947 70.24 17.5867 70.24 18.28C70.24 19.1334 70.24 19.9974 70.24 20.872C70.24 21.7467 70.24 22.6107 70.24 23.464C69.8133 23.464 69.376 23.464 68.928 23.464C68.48 23.464 68.0373 23.464 67.6 23.464C67.6 22.664 67.6 21.8534 67.6 21.032C67.6 20.2107 67.6 19.4 67.6 18.6C67.6 18.2374 67.5147 17.944 67.344 17.72C67.184 17.4854 66.9227 17.368 66.56 17.368C66.208 17.368 65.9307 17.48 65.728 17.704C65.536 17.9174 65.44 18.216 65.44 18.6C65.44 19.4 65.44 20.2107 65.44 21.032C65.44 21.8534 65.44 22.664 65.44 23.464C65.0133 23.464 64.576 23.464 64.128 23.464C63.68 23.464 63.2373 23.464 62.8 23.464C62.8 22.664 62.8 21.8534 62.8 21.032C62.8 20.2107 62.8 19.4 62.8 18.6C62.8 18.2374 62.7147 17.944 62.544 17.72C62.384 17.4854 62.1227 17.368 61.76 17.368C61.408 17.368 61.1307 17.48 60.928 17.704C60.736 17.9174 60.64 18.216 60.64 18.6C60.64 19.4 60.64 20.2107 60.64 21.032C60.64 21.8534 60.64 22.664 60.64 23.464C60.2133 23.464 59.776 23.464 59.328 23.464C58.88 23.464 58.4373 23.464 58 23.464Z"
    },
  ]

  const devPaths = [
    {            
      d:"M79.1098 37.7706C78.6441 36.3947 78.1678 35.008 77.6809 33.6106C77.2046 32.2024 76.7336 30.8104 76.2679 29.4344C76.723 29.4344 77.1781 29.4344 77.6333 29.4344C78.099 29.4344 78.5594 29.4344 79.0145 29.4344C79.2897 30.2837 79.5649 31.1382 79.8401 31.9982C80.1259 32.8474 80.4011 33.6966 80.6657 34.5458C80.9409 33.6966 81.2161 32.8474 81.4913 31.9982C81.7665 31.1382 82.0364 30.2837 82.301 29.4344C82.7455 29.4344 83.1954 29.4344 83.6505 29.4344C84.1056 29.4344 84.5555 29.4344 85 29.4344C84.5343 30.8104 84.058 32.2024 83.5711 33.6106C83.0948 35.008 82.6238 36.3947 82.1581 37.7706C81.6606 37.7706 81.1526 37.7706 80.6339 37.7706C80.1153 37.7706 79.6073 37.7706 79.1098 37.7706Z"
    },
    {            
      d:"M75.4325 37.3836C74.7022 37.6954 73.9772 37.8888 73.2574 37.9641C72.5377 38.0393 71.855 37.9963 71.2093 37.8351C70.5743 37.6846 70.008 37.4212 69.5105 37.045C69.0131 36.6688 68.6215 36.1904 68.3357 35.61C68.0605 35.0295 67.9229 34.3577 67.9229 33.5945C67.9229 32.9602 68.0234 32.3798 68.2245 31.8531C68.4362 31.3156 68.7326 30.848 69.1136 30.4503C69.4947 30.0418 69.9445 29.73 70.4631 29.5151C70.9818 29.2893 71.548 29.1765 72.1619 29.1765C72.7123 29.1765 73.2098 29.2678 73.6543 29.4506C74.0989 29.6333 74.4852 29.8913 74.8133 30.2245C75.1414 30.547 75.406 30.934 75.6072 31.3855C75.8083 31.8369 75.9353 32.3314 75.9882 32.8689C76.0411 33.4063 76.0094 33.9761 75.8929 34.578C75.025 34.578 74.1518 34.578 73.2733 34.578C72.3948 34.578 71.5216 34.578 70.6537 34.578C70.8548 34.9865 71.1882 35.2767 71.6539 35.4487C72.1302 35.6207 72.6912 35.6745 73.3368 35.61C73.993 35.5455 74.6916 35.3735 75.4325 35.094C75.4325 35.4702 75.4325 35.8518 75.4325 36.2388C75.4325 36.6258 75.4325 37.0074 75.4325 37.3836ZM72.0984 31.5628C71.7915 31.5628 71.5057 31.6488 71.2411 31.8208C70.9871 31.9928 70.7913 32.2562 70.6537 32.6109C71.13 32.6109 71.6063 32.6109 72.0825 32.6109C72.5694 32.6109 73.051 32.6109 73.5273 32.6109C73.4003 32.2454 73.2098 31.982 72.9558 31.8208C72.7123 31.6488 72.4265 31.5628 72.0984 31.5628Z"
    },
    {            
      d:"M63.922 37.7706C63.922 37.6846 63.922 37.604 63.922 37.5287C63.922 37.4427 63.922 37.3621 63.922 37.2869C63.6574 37.5126 63.3557 37.6846 63.017 37.8028C62.6889 37.9318 62.3343 37.9963 61.9533 37.9963C61.4135 37.9963 60.9054 37.8888 60.4291 37.6739C59.9528 37.4589 59.5294 37.1579 59.159 36.7709C58.7991 36.3732 58.5133 35.9056 58.3017 35.3681C58.1006 34.8306 58 34.2394 58 33.5945C58 32.9387 58.1006 32.3421 58.3017 31.8047C58.5133 31.2672 58.7991 30.805 59.159 30.418C59.5294 30.031 59.9528 29.7354 60.4291 29.5312C60.9054 29.3162 61.4082 29.2087 61.9374 29.2087C62.3184 29.2087 62.6783 29.2732 63.017 29.4022C63.3557 29.5204 63.6574 29.687 63.922 29.902C63.922 29.2571 63.922 28.6067 63.922 27.951C63.922 27.2953 63.922 26.645 63.922 26C64.3559 26 64.7952 26 65.2397 26C65.6843 26 66.1182 26 66.5416 26C66.5416 27.9456 66.5416 29.9074 66.5416 31.8853C66.5416 33.8632 66.5416 35.825 66.5416 37.7706C66.1182 37.7706 65.6843 37.7706 65.2397 37.7706C64.7952 37.7706 64.3559 37.7706 63.922 37.7706ZM62.3026 35.6422C62.8106 35.6422 63.2181 35.4541 63.5251 35.0779C63.832 34.7016 63.9855 34.2072 63.9855 33.5945C63.9855 32.9817 63.832 32.4926 63.5251 32.1272C63.2181 31.7509 62.8106 31.5628 62.3026 31.5628C61.7839 31.5628 61.3711 31.7456 61.0642 32.111C60.7678 32.4765 60.6196 32.971 60.6196 33.5945C60.6196 34.2179 60.7678 34.7178 61.0642 35.094C61.3711 35.4595 61.7839 35.6422 62.3026 35.6422Z"
    },

  ]


    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="70"
        viewBox="0 0 101 54"
        fill="#f0f1fa"
        initial={{ y: 0}}
        animate={{ y: -100}}
        transition={{ ease: "easeInOut", duration: 1, delay: 4}}
      >
        {/* mario */}
        <motion.g >
          {marioPaths.map( (path, index) => (
            <motion.path
              key={index}
              d={path.d}
              initial={{  rotateY: 90}} animate={{ rotateY: 0}} transition={{ delay: 3 + index * 0.1, duration: 0.2, ease: "easeInOut"}}
            />
          ))}
        </motion.g>
        <motion.g >
          {devPaths.map( (path, index) => (
            <motion.path
              key={index}
              d={path.d}
              initial={{  rotateY: 90}} animate={{ rotateY: 0}} transition={{ delay: 3.5 + index * 0.1, duration: 0.2, ease: "easeInOut"}}
            />
          ))}
        </motion.g>
        {/* Logo */}
        <motion.path
          initial={{ x: 25, scale: 0 }}
          animate={{ x: isVisible ? 0 : 25, scale: isVisible ? 1 : 1.6 }}
          transition={{
            x: {  duration: 0.5, ease: "easeInOut" }, 
            scale: {  duration: 1.2, type: "spring", stiffness: 50, damping: 30 },
          }}
          d="M3.84006 25.6285L13.2 15.918C13.7655 15.3314 14.5452 15 15.36 15H21.7264C23.3833 15 24.7264 16.3431 24.7264 18V19.4613C24.7264 20.4118 25.9277 20.8262 26.5137 20.0779L29.5897 16.1502C30.1584 15.4242 31.0294 15 31.9516 15H39.0189C40.6757 15 42.0189 16.3431 42.0189 18V23.5C42.0189 25.1569 43.362 26.5 45.0189 26.5H47C48.6569 26.5 50 27.8431 50 29.5V35C50 36.6569 48.6569 38 47 38H41.4717C39.8148 38 38.4717 36.6569 38.4717 35V32.1984C38.4717 31.2986 37.3762 30.8566 36.7517 31.5044L31.3755 37.082C30.81 37.6686 30.0303 38 29.2155 38H23.2925C21.6356 38 20.2925 36.6569 20.2925 35V32.7209C20.2925 31.7598 19.0689 31.3521 18.4923 32.1211L14.9849 36.7995C14.4184 37.5552 13.529 38 12.5845 38H6C4.34315 38 3 36.6569 3 35V27.7105C3 26.9339 3.30113 26.1876 3.84006 25.6285Z"
        />
      </motion.svg>
    );
}

export default function StartAnimation() {

  return (
    <motion.div 
      className='bg-black absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center overflow-hidden'
      initial={{ opacity: 1, height: "100vh"}}
      animate={{ height: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 4.5}}
    >
      <div className='overflow-hidden'>
        <Logo/>
      </div>
    </motion.div>
  )
}
