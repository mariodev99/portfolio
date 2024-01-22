import { motion } from "framer-motion";

export const GithubIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 36 36"
        fill="none"
        stroke="#000"
      >
        <path
          d="M13.5 28.4999C7.05 30.5999 7.05 24.7499 4.5 23.9999M22.5 31.4999V26.2499C22.5 24.7499 22.65 24.1499 21.75 23.2499C25.95 22.7999 30 21.1499 30 14.2499C29.9982 12.4574 29.2988 10.7359 28.05 9.44993C28.6357 7.89288 28.5818 6.16737 27.9 4.64993C27.9 4.64993 26.25 4.19993 22.65 6.59993C19.6009 5.80581 16.3991 5.80581 13.35 6.59993C9.75 4.19993 8.1 4.64993 8.1 4.64993C7.41822 6.16737 7.3643 7.89288 7.95 9.44993C6.70118 10.7359 6.00183 12.4574 6 14.2499C6 21.1499 10.05 22.7999 14.25 23.2499C13.35 24.1499 13.35 25.0499 13.5 26.2499V31.4999"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export const SiteIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
      >
        <path
          d="M11 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V13M10 14L20 4M20 4H15M20 4V9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  export const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  export const LinkedinIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M12 16.5V24M12 12V12.015M18 24V16.5M24 24V19.5C24 18.7044 23.6839 17.9413 23.1213 17.3787C22.5587 16.8161 21.7956 16.5 21 16.5C20.2044 16.5 19.4413 16.8161 18.8787 17.3787C18.3161 17.9413 18 18.7044 18 19.5M9 6H27C28.6569 6 30 7.34315 30 9V27C30 28.6569 28.6569 30 27 30H9C7.34315 30 6 28.6569 6 27V9C6 7.34315 7.34315 6 9 6Z"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  export const EmailIcon = () => {
    return (
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#000" fill="none">
      <path d="M21 7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7M21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7M21 7L12 13L3 7"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  export const LogoIcon = (props:any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="69" height="39" viewBox="0 0 99 59" fill="none" {...props}>
      <path d="M72.3663 59V48.0111L28 3H54.2834L90.8459 40.0192V59H72.3663Z" fill="#fff"/>
      <path d="M0 59V3H18.4608L55.0233 40.0192V59H36.5436V48.0111L18.4608 29.9727V59H0Z" fill="#fff"/>
      <path d="M73.2386 10H70.5504V2.72727H73.2351C73.9761 2.72727 74.6141 2.87287 75.1491 3.16406C75.6866 3.45289 76.1009 3.86955 76.392 4.41406C76.6832 4.9562 76.8288 5.60488 76.8288 6.36009C76.8288 7.11766 76.6832 7.7687 76.392 8.31321C76.1032 8.85772 75.6901 9.27557 75.1527 9.56676C74.6153 9.85559 73.9773 10 73.2386 10ZM72.3082 8.50142H73.1712C73.5784 8.50142 73.9228 8.43277 74.2045 8.29545C74.4886 8.15578 74.7029 7.92969 74.8473 7.61719C74.9941 7.30232 75.0675 6.88329 75.0675 6.36009C75.0675 5.83688 74.9941 5.42022 74.8473 5.11009C74.7005 4.79759 74.4839 4.57268 74.1974 4.43537C73.9134 4.29569 73.563 4.22585 73.1463 4.22585H72.3082V8.50142ZM77.8551 10V2.72727H82.9261V4.15483H79.6129V5.64631H82.6669V7.07741H79.6129V8.57244H82.9261V10H77.8551ZM85.6783 2.72727L87.3047 8.05398H87.3651L88.9915 2.72727H90.9588L88.505 10H86.1648L83.7109 2.72727H85.6783Z" fill="#fff"/>
    </svg>
  )

  export const LogoIconNav = ({primaryColor}: {primaryColor: string}) => (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width="69" height="39" viewBox="0 0 99 59"  animate={{ fill: primaryColor}} >
      <path d="M72.3663 59V48.0111L28 3H54.2834L90.8459 40.0192V59H72.3663Z" />
      <path d="M0 59V3H18.4608L55.0233 40.0192V59H36.5436V48.0111L18.4608 29.9727V59H0Z" />
      <path d="M73.2386 10H70.5504V2.72727H73.2351C73.9761 2.72727 74.6141 2.87287 75.1491 3.16406C75.6866 3.45289 76.1009 3.86955 76.392 4.41406C76.6832 4.9562 76.8288 5.60488 76.8288 6.36009C76.8288 7.11766 76.6832 7.7687 76.392 8.31321C76.1032 8.85772 75.6901 9.27557 75.1527 9.56676C74.6153 9.85559 73.9773 10 73.2386 10ZM72.3082 8.50142H73.1712C73.5784 8.50142 73.9228 8.43277 74.2045 8.29545C74.4886 8.15578 74.7029 7.92969 74.8473 7.61719C74.9941 7.30232 75.0675 6.88329 75.0675 6.36009C75.0675 5.83688 74.9941 5.42022 74.8473 5.11009C74.7005 4.79759 74.4839 4.57268 74.1974 4.43537C73.9134 4.29569 73.563 4.22585 73.1463 4.22585H72.3082V8.50142ZM77.8551 10V2.72727H82.9261V4.15483H79.6129V5.64631H82.6669V7.07741H79.6129V8.57244H82.9261V10H77.8551ZM85.6783 2.72727L87.3047 8.05398H87.3651L88.9915 2.72727H90.9588L88.505 10H86.1648L83.7109 2.72727H85.6783Z"/>
    </motion.svg>
  )

  export const ArrowIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19M19 12L15 16M19 12L15 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  };

  export const ArrowUpRightCircle = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" {...props}>
    <path d="M15 9L9 15M15 9V15M15 9H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )


  export const ArrowRight = (props:any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-white" {...props}>
      <path d="M5 12H19M19 12L13 18M19 12L13 6"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )


  export const FileDownload = (props:any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19M14 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V8M14 3L19 8M12 11V17M12 17L9 14M12 17L15 14"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )


