import { motion } from "framer-motion";

export const LogoIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="69"
    height="39"
    viewBox="0 0 99 59"
    fill="#fff"
    {...props}
  >
    <path d="M72.3663 59V48.0111L28 3H54.2834L90.8459 40.0192V59H72.3663Z" />
    <path d="M0 59V3H18.4608L55.0233 40.0192V59H36.5436V48.0111L18.4608 29.9727V59H0Z" />
    <path d="M73.2386 10H70.5504V2.72727H73.2351C73.9761 2.72727 74.6141 2.87287 75.1491 3.16406C75.6866 3.45289 76.1009 3.86955 76.392 4.41406C76.6832 4.9562 76.8288 5.60488 76.8288 6.36009C76.8288 7.11766 76.6832 7.7687 76.392 8.31321C76.1032 8.85772 75.6901 9.27557 75.1527 9.56676C74.6153 9.85559 73.9773 10 73.2386 10ZM72.3082 8.50142H73.1712C73.5784 8.50142 73.9228 8.43277 74.2045 8.29545C74.4886 8.15578 74.7029 7.92969 74.8473 7.61719C74.9941 7.30232 75.0675 6.88329 75.0675 6.36009C75.0675 5.83688 74.9941 5.42022 74.8473 5.11009C74.7005 4.79759 74.4839 4.57268 74.1974 4.43537C73.9134 4.29569 73.563 4.22585 73.1463 4.22585H72.3082V8.50142ZM77.8551 10V2.72727H82.9261V4.15483H79.6129V5.64631H82.6669V7.07741H79.6129V8.57244H82.9261V10H77.8551ZM85.6783 2.72727L87.3047 8.05398H87.3651L88.9915 2.72727H90.9588L88.505 10H86.1648L83.7109 2.72727H85.6783Z" />
  </svg>
);

export const LogoIconNav = ({
  primary_color,
  secondary_color,
}: {
  primary_color: string;
  secondary_color: string;
}) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
  >
    <rect width="64" height="64" rx="17" fill="url(#paint0_linear_15_2)" />
    <path
      d="M11.7487 27.9378L18.8664 20.5355C19.8091 19.5551 21.1104 19.001 22.4705 19.001H29.0925C30.2771 19.001 31.2971 19.8372 31.5294 20.9988L33.0224 19.9324C33.8704 19.3267 34.8865 19.001 35.9286 19.001H41.3129C44.0744 19.001 46.313 21.2396 46.313 24.001V27.1908C46.313 27.7431 46.7607 28.1908 47.313 28.1908H47.7058C50.4673 28.1908 52.7058 30.4294 52.7058 33.1908V37.1753C52.7058 39.9367 50.4673 42.1753 47.7058 42.1753H43.3339C41.2804 42.1753 39.4424 40.9015 38.7214 38.9788L37.4185 40.4678C36.4691 41.5529 35.0975 42.1753 33.6557 42.1753H29.4253C27.5315 42.1753 25.8001 41.1053 24.9532 39.4114L24.7369 38.9788L23.3875 40.497C22.4387 41.5645 21.0786 42.1753 19.6504 42.1753H15.3529C12.5915 42.1753 10.3529 39.9367 10.3529 37.1753V31.4034C10.3529 30.1112 10.8531 28.8692 11.7487 27.9378Z"
      fill="url(#paint1_radial_15_2)"
    />
    <path
      d="M13.5901 29.7169L20.7232 22.3166C21.2886 21.73 22.0684 21.3986 22.8831 21.3986H27.1206C28.7726 21.3986 30.1118 22.7378 30.1118 24.3899C30.1118 25.3375 31.3096 25.7507 31.8939 25.0046L33.8172 22.5489C34.3858 21.8228 35.2568 21.3986 36.1791 21.3986H40.9304C42.5873 21.3986 43.9304 22.7418 43.9304 24.3986V27.5884C43.9304 29.2453 45.2736 30.5884 46.9304 30.5884H47.3083C48.9651 30.5884 50.3083 31.9316 50.3083 33.5884V36.7782C50.3083 38.4351 48.9651 39.7782 47.3083 39.7782H44.0959C42.439 39.7782 41.0959 38.4351 41.0959 36.7782V35.6101C41.0959 34.7088 39.9972 34.2675 39.3738 34.9184L35.6039 38.8535C35.038 39.4442 34.2555 39.7782 33.4375 39.7782H30.134C28.4772 39.7782 27.134 38.4351 27.134 36.7782V35.6059C27.134 34.7052 26.0366 34.2636 25.4127 34.9133L21.6266 38.8561C21.0609 39.4452 20.2794 39.7782 19.4627 39.7782H15.75C14.0931 39.7782 12.75 38.4351 12.75 36.7782V31.7989C12.75 31.0223 13.0511 30.276 13.5901 29.7169Z"
      fill="white"
      stroke="#212121"
      strokeWidth="2"
    />
    <motion.defs>
      <linearGradient
        id="paint0_linear_15_2"
        x1="37.6471"
        y1="6.22858e-08"
        x2="28.7059"
        y2="64.9412"
        gradientUnits="userSpaceOnUse"
      >
        {/* PRIMER COLOR */}
        <motion.stop stopColor={primary_color} />
        {/* SEGUNDO COLOR */}
        <motion.stop offset="1" stopColor={secondary_color} />
      </linearGradient>
      <radialGradient
        id="paint1_radial_15_2"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(41.5183 23.3962) rotate(144.639) scale(23.8952 43.6705)"
      >
        <stop stopColor="#A8FF78" />
        <stop offset="1" stopColor="#78FFD6" />
      </radialGradient>
    </motion.defs>
  </motion.svg>
);

export const GithubIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 36 36"
      fill="none"
      stroke="#000"
      {...props}
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

export const ArrowLeft = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    {...props}
  >
    <path
      d="M5 12H19M5 12L11 18M5 12L11 6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="#000"
      fill="none"
    >
      <path
        d="M21 7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7M21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7M21 7L12 13L3 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12H19M19 12L15 16M19 12L15 8"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowUpRightCircle = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    {...props}
  >
    <path
      d="M15 9L9 15M15 9V15M15 9H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUp = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="black"
    {...props}
  >
    <path
      d="M12 5V19M12 5L18 11M12 5L6 11"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRight = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="stroke-white"
    {...props}
  >
    <path
      d="M5 12H19M19 12L13 18M19 12L13 6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FileDownload = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19M14 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V8M14 3L19 8M12 11V17M12 17L9 14M12 17L15 14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
